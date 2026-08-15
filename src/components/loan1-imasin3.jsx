import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore'; 

const Loan1iMasin3 = ({ activeTab, setActiveTab }) => {
  const [tabs, setTabs] = useState([]);
  const [loanData, setLoanData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, 'loans1iMasin2'));
        
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          if (docData.tabs) setTabs(docData.tabs);
          if (docData.loanData) setLoanData(docData.loanData);
        } else {
          setError('Տվյալներ չեն գտնվել բազայում:');
        }
      } catch (err) {
        console.error('Սխալ տվյալների բեռնման ժամանակ:', err);
        setError('Չհաջողվեց բեռնել տվյալները Firebase-ից:');
      } {
        setLoading(false);
      }
    };

    fetchLoanData();
  }, []);

  if (loading) {
    return <div className="text-center my-12 text-base font-medium text-gray-600">Բեռնվում է տվյալները Firebase-ից...</div>;
  }

  if (error) {
    return <div className="text-center my-12 text-base font-medium text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto my-8 overflow-x-auto font-sans text-xs sm:text-sm text-gray-800">
      <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-18px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <table className="w-full border-collapse border border-[#e2d5f8] text-left bg-white">
        <tbody>
          {loanData.map((item) => {
            if (item.isRowSpan) {
              return item.rows.map((row, rIndex) => (
                <tr key={`${item.id}-${rIndex}`} className="border-b border-[#e2d5f8]">
                  {rIndex === 0 && (
                    <>
                      <td className="p-4 border-r border-[#e2d5f8] w-12 font-bold align-top" rowSpan={item.rows.length}>
                        {item.id}.
                      </td>
                      <td className="p-4 border-r border-[#e2d5f8] w-1/3 font-bold align-top" rowSpan={item.rows.length}>
                        {item.title}
                      </td>
                    </>
                  )}
                  {item.id === 4 ? (
                    <>
                      <td className="p-4 border-r border-[#e2d5f8] font-bold align-top">{row.subTitle}</td>
                      <td className="p-4 font-bold align-top" colSpan={row.colSpan}>{row.value}</td>
                    </>
                  ) : (
                    <>
                      <td className="p-4 border-r border-[#e2d5f8] font-bold align-top whitespace-pre-line">{row.left}</td>
                      <td className="p-4 font-bold align-top" colSpan={2}>{row.right}</td>
                    </>
                  )}
                </tr>
              ));
            }

            if (item.isCustomRates) {
              return item.rows.map((row, rIndex) => (
                <tr key={`${item.id}-${rIndex}`} className="border-b border-[#e2d5f8]">
                  {rIndex === 0 && (
                    <>
                      <td className="p-4 border-r border-[#e2d5f8] w-12 font-bold align-top" rowSpan={item.rows.length}>
                        {item.id}.
                      </td>
                      <td className="p-4 border-r border-[#e2d5f8] w-1/3 font-bold align-top" rowSpan={item.rows.length}>
                        {item.title}
                      </td>
                    </>
                  )}
                  <td className="p-4 border-r border-[#e2d5f8] font-bold align-top">{row.subTitle}</td>
                  <td className={`p-4 border-r border-[#e2d5f8] font-bold align-top ${row.header ? 'text-center w-1/6' : 'text-center'}`}>
                    {row.nominal}
                  </td>
                  <td className={`p-4 font-bold align-top ${row.header ? 'text-center w-1/6' : 'text-center'}`}>
                    {row.actual}
                  </td>
                </tr>
              ));
            }

            if (item.isMultiRows) {
              return item.isMultiRows.map((text, mIndex) => (
                <tr key={`${item.id}-${mIndex}`} className="border-b border-[#e2d5f8]">
                  {mIndex === 0 && (
                    <>
                      <td className="p-4 border-r border-[#e2d5f8] w-12 font-bold align-top" rowSpan={item.isMultiRows.length}>
                        {item.id}.
                      </td>
                      <td className="p-4 border-r border-[#e2d5f8] w-1/3 font-bold align-top" rowSpan={item.isMultiRows.length}>
                        {item.title}
                      </td>
                    </>
                  )}
                  <td className={`p-4 font-bold align-top ${mIndex === 0 ? 'border-b border-[#e2d5f8]' : ''}`} colSpan={3}>
                    {text}
                  </td>
                </tr>
              ));
            }

            return (
              <tr key={item.id} className="border-b border-[#e2d5f8]">
                <td className="p-4 border-r border-[#e2d5f8] w-12 font-bold align-top">{item.id}.</td>
                <td className="p-4 border-r border-[#e2d5f8] w-1/3 font-bold align-top">
                  {item.title}
                </td>
                <td className="p-4 font-bold align-top" colSpan={3}>
                  {item.items ? (
                    <ul className={`space-y-4 ${item.listType === 'disc' ? 'list-disc pl-5 marker:text-[#6b11cb]' : 'list-none pl-0'}`}>
                      {item.items.map((liText, lIdx) => (
                        <li key={lIdx} className={item.listType === 'none' ? 'flex items-start' : ''}>
                          {item.listType === 'none' && <span className="mr-2">•</span>}
                          <span dangerouslySetInnerHTML={{ __html: liText }} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    item.content
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="mt-6 text-[13px] text-gray-700">
        <span className="font-bold text-[#6b11cb]">[1]</span> <strong>OTI</strong> (Obligations to income) - Վարկունակության ստուգման գործակից, որով Հաճախորդի վարկային պարտավորությունների ամսական մարումները հարաբերակցվում են միջին ամսական զուտ եկամտին:
      </div>
    </div>
  );
};

export default Loan1iMasin3;