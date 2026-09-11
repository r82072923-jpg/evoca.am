import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const Loan19iMasin2 = ({ activeTab, setActiveTab }) => {
  const [tabs, setTabs] = useState([]);
  const [loanData, setLoanData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'loans19iMasin', 'mainData');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setTabs(data.tabs || tabsData);
          setLoanData(data.loanData || initialLoanData);
        } else {
          console.warn('Տվյալներ չգտնվեցին Firebase-ում:');
          setTabs(tabsData);
          setLoanData(initialLoanData);
        }
      } catch (error) {
        console.error('Սխալ տվյալները Firebase-ից ստանալիս:', error);
        setTabs(tabsData);
        setLoanData(initialLoanData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto my-8 p-4 text-center text-[#6b11cb] font-bold text-lg">
        Տվյալները բեռնվում են Firebase-ից...
      </div>
    );
  }

  if (!loanData) {
    return (
      <div className="max-w-6xl mx-auto my-8 p-4 text-center text-gray-500">
        Տվյալներ չեն գտնվել:
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto my-8 px-4 font-sans text-[#333333]">

      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab && setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab ? 'text-[#6b11cb]' : 'text-gray-500 hover:text-gray-700'
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

      <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
        <div className="lg:w-1/2 space-y-6">
          {loanData.paragraphs?.map((p, idx) => (
            <p
              key={idx}
              className="text-[#333333] font-medium leading-relaxed text-[15px] [&_strong]:text-[#6b11cb] [&_strong]:font-bold [&_a]:text-[#6b11cb] [&_a]:font-bold [&_a]:underline hover:[&_a]:opacity-80"
              dangerouslySetInnerHTML={{ __html: p.html || p.text }}
            />
          ))}
        </div>

        {loanData.card && (
          <div className="lg:w-[480px] w-full">
            <div className="bg-[#fcfaff] border border-[#f0ebff] rounded-3xl shadow-sm p-8 relative">
              <div className="flex space-x-3 mb-8">
                {loanData.card.currencies?.map((symbol, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 rounded-full bg-[#6b11cb] flex items-center justify-center text-white font-bold text-lg"
                  >
                    {symbol}
                  </div>
                ))}
              </div>

              <div className="divide-y divide-gray-100">
                {loanData.card.metrics?.map((metric, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                    <div>
                      {metric.prefix && (
                        <span className="text-xs text-gray-500 block mb-1 font-medium">
                          {metric.prefix}
                        </span>
                      )}
                      <span className="text-2xl sm:text-3xl font-bold text-[#6b11cb]">
                        {metric.value}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 text-right max-w-[200px]">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loan19iMasin2;