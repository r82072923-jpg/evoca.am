import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog'; 

const tabs = [
  'Վարկի մասին',
  'Պայմաններ',
];

const BusinessLoan3iMasin3 = ({ activeTab, setActiveTab }) => {
  const [loanTermsData, setLoanTermsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "businessLoan3iMasin2"));
        
        const dataList = [];
        querySnapshot.forEach((doc) => {
          dataList.push({ ...doc.data() });
        });
        
        dataList.sort((a, b) => {
          const numA = parseInt(a.id.replace('.', ''), 10);
          const numB = parseInt(b.id.replace('.', ''), 10);
          return numA - numB;
        });

        setLoanTermsData(dataList);
      } catch (err) {
        console.error("Սխալ տվյալները ստանալիս:", err);
        setError("Չհաջողվեց բեռնել տվյալները բազայից:");
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirebase();
  }, []);

  if (loading) {
    return <div className="p-6 text-center text-gray-600">Բեռնվում է...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="w-full overflow-x-auto bg-white p-4">
      <div className="border-b border-gray-200 mb-12 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="min-w-[800px] border-t-[3px] border-t-[#6b11cb]">
        <table className="w-full text-sm sm:text-base text-left border-collapse">
          <tbody>
            {loanTermsData.map((row, index) => (
              <tr key={index}>
                <td className="w-12 align-top p-4 border border-purple-100 text-gray-900 font-medium">
                  {row.id}
                </td>
                <td className="w-[20%] sm:w-[25%] align-top p-4 border border-purple-100 text-gray-900 font-bold">
                  {row.title}
                </td>
                <td 
                  colSpan={row.isFullWidth ? 2 : 1} 
                  className={`align-top p-4 border border-purple-100 ${
                    row.isBoldValues ? 'text-gray-900 font-bold' : 'text-gray-800'
                  } ${!row.isFullWidth ? 'w-[35%]' : ''}`}
                >
                  {row.col1 && <span>{row.col1}</span>}
                  
                  {row.col1List && (
                    <ul className="space-y-3">
                      {row.col1List.map((item, i) => (
                        <li key={i} className={item.isHeader ? 'font-bold text-gray-900 mt-3 first:mt-0' : ''}>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </td>
                {!row.isFullWidth && (
                  <td className={`align-top p-4 border border-purple-100 text-gray-800 ${
                    row.isBoldValues ? 'text-gray-900 font-bold' : ''
                  } w-[35%] tr`}>
                    
                    {row.col2 && <span>{row.col2}</span>}
                    
                    {row.col2List && Array.isArray(row.col2List) && typeof row.col2List[0] === 'string' && (
                      <ul className="space-y-4">
                        {row.col2List.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-gray-500 font-bold">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {row.col2List && Array.isArray(row.col2List) && typeof row.col2List[0] === 'object' && (
                      <ul className="space-y-2">
                        {row.col2List.map((item, i) => (
                          <li key={i}>
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessLoan3iMasin3;