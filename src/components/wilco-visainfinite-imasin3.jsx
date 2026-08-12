import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

const tabs = [
  'Քարտի մասին',
  'Սակագներ և դրույթներ',
];

function WilcoVisaInfiniteiMasin3({ activeTab, setActiveTab }) {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'wilcoVisaInfiniteiMasin'));
        const docsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTableData(docsData);
      } catch (error) {
        console.error('Սխալ Firebase-ից տվյալները ստանալիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto font-sans text-[#333333] p-4">
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

      {loading ? (
        <div className="text-center py-10 font-medium text-gray-500">
          Բեռնվում է...
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-base">
            <tbody>
              {tableData.map((row, index) => (
                <tr key={row.id || index} className="hover:bg-gray-50 transition-colors border-b border-[#ebdef5]">
                  <td className="py-4 px-4 align-top font-medium w-2/5 md:w-1/2 text-[#333333]">
                    {row.service}
                  </td>
                  <td className="align-top w-3/5 md:w-1/2 p-0 text-[#333333]">
                    {row.subRows ? (
                      <div className="flex flex-col w-full h-full">
                        {row.subRows.map((sub, i) => (
                          <div 
                            key={i} 
                            className={`flex w-full ${
                              i !== row.subRows.length - 1 ? 'border-b border-[#ebdef5]' : ''
                            }`}
                          >
                            <div className="w-1/2 p-4 border-r border-[#ebdef5]">
                              {sub.label}
                            </div>
                            <div className="w-1/2 p-4 font-medium">
                              {sub.val}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 font-medium h-full flex items-start">
                        {row.value}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default WilcoVisaInfiniteiMasin3;