import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';

const Loan18iMasin3 = ({ activeTab, setActiveTab }) => {
  const [loanTerms, setLoanTerms] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [footnotes, setFootnotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const docRef = doc(db, 'loans18iMasin2', 'mainData');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setLoanTerms(data.loanTerms || []);
          setTabs(data.tabs || []);
          setFootnotes(data.footnotes || []);

          if (data.tabs && data.tabs.length > 0 && !activeTab && setActiveTab) {
            setActiveTab(data.tabs[0]);
          }
        } else {
          console.log('Փաստաթուղթը չգտնվեց: Նախ ուղարկեք տվյալները կոճակի միջոցով:');
        }
      } catch (error) {
        console.error('Տվյալները ստանալիս խնդիր առաջացավ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoanData();
  }, [activeTab, setActiveTab]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12 text-[#6b11cb] font-bold">
        Բեռնվում է...
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto my-6 overflow-x-auto font-sans text-[#333333]">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab && setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-17px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <table className="w-full border-collapse border border-purple-200 text-sm sm:text-base">
        <tbody>
          {loanTerms.map((item) => (
            <tr
              key={item.id}
              className={`border-b border-purple-100 transition-colors ${
                !item.isRatesTable ? 'hover:bg-purple-50/30' : ''
              }`}
            >
              <td
                className={`p-4 border-r border-purple-200 font-bold w-1/12 text-center text-[#6b11cb] ${
                  item.isRatesTable || item.paragraphs
                    ? 'align-top'
                    : ''
                }`}
              >
                {item.id}.
              </td>
              <td
                className={`p-4 border-r border-purple-200 font-semibold w-1/3 text-gray-800 ${
                  item.isRatesTable || item.paragraphs
                    ? 'align-top'
                    : ''
                }`}
              >
                {item.title}{' '}
                {item.hasSubscript && <sup>[{item.hasSubscript}]</sup>}
              </td>

              <td className={item.isRatesTable ? 'p-0' : 'p-4 text-gray-700'}>
                {item.description && <p>{item.description}</p>}
                {item.paragraphs && (
                  <div className="space-y-3">
                    {item.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                )}
                {item.isRatesTable && item.rates && (
                  <div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-center text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-purple-50/50 text-[#6b11cb] font-bold border-b border-purple-200">
                            <th className="p-2 border-r border-purple-200">Արժույթ</th>
                            <th className="p-2 border-r border-purple-200">Հաստատուն</th>
                            <th className="p-2 border-r border-purple-200">Փաստացի</th>
                            <th className="p-2 border-r border-purple-200">Լողացող</th>
                            <th className="p-2">Փաստացի</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-purple-100 text-gray-700">
                          {item.rates.map((rate, index) => (
                            <tr key={index}>
                              <td className="p-3 border-r border-purple-200 font-medium">
                                {rate.currency}
                              </td>
                              <td className="p-3 border-r border-purple-200">{rate.fixed}</td>
                              <td className="p-3 border-r border-purple-200">{rate.fixedEffective}</td>
                              <td className="p-3 border-r border-purple-200 text-left text-xs">
                                {rate.floating}
                              </td>
                              <td className="p-3">{rate.floatingEffective}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="border-t border-purple-200 text-xs text-gray-700">
                      <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-purple-100">
                        <div className="sm:col-span-3 p-3 border-r border-purple-200 font-semibold">
                          Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ
                        </div>
                        <div className="p-3 text-center font-bold text-[#6b11cb]">
                          {item.floatingThreshold}
                        </div>
                      </div>

                      <div className="p-3 border-b border-purple-100 leading-relaxed">
                        {item.floatingNote}
                      </div>

                      <div className="p-3 border-b border-purple-100">
                        <a href="#" className="text-[#6b11cb] font-bold underline hover:opacity-80">
                          Լողացող տոկոսադրույքի հաշվարկման կարգ
                        </a>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4">
                        <div className="sm:col-span-3 p-3 border-r border-purple-200">
                          {item.insuranceNote}
                        </div>
                        <div className="p-3 flex items-center justify-center font-bold text-gray-800">
                          {item.insuranceFee}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {item.penalties && (
                  <div className="space-y-1">
                    {item.penalties.map((penalty, idx) => (
                      <p key={idx}>
                        {penalty.text}
                        <strong>{penalty.highlight}</strong>
                      </p>
                    ))}
                  </div>
                )}

                {item.collaterals && (
                  <div className="space-y-2">
                    {item.collaterals.map((col, idx) => (
                      <p key={idx}>
                        <strong>{col.text}</strong>
                      </p>
                    ))}
                    {item.note && (
                      <p className="text-xs sm:text-sm text-gray-600">
                        {item.note}
                      </p>
                    )}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 space-y-2 text-xs sm:text-sm text-gray-800">
        {footnotes.map((fn) => (
          <p key={fn.id} className="flex items-start gap-1">
            <span className="font-bold text-[#6b11cb]">[{fn.id}]</span>
            <span>{fn.text}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Loan18iMasin3;