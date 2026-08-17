import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

const tabs = ['Քարտի մասին', 'Սակագներ և դրույթներ'];

function UnionPayBusinessPlatinumiMasin3({ activeTab, setActiveTab }) {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'unionPayBusinessPlatinumiMasin'));
        const data = querySnapshot.docs.map(doc => doc.data());
        setTableData(data);
      } catch (error) {
        console.error('Սխալ տվյալների բեռնման ժամանակ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-10 font-medium">Բեռնվում է...</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto font-sans text-[#333333] p-4">
      <div className="max-w-6xl mx-auto border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, i) => (
            <button
              key={i}
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

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-bold">
          Union Pay International վճարային համակարգի թողարկման և սպասարկման սակագներ
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse text-base">
          <thead>
            <tr>
              <th colSpan={2} className="border border-[#ebdef5] bg-white text-left py-4 px-4 font-bold w-1/2">
                Մատուցվող ծառայություններ
              </th>
              <th className="border border-[#ebdef5] bg-white text-left py-4 px-4 font-bold w-1/4">
                UPI GOLD
              </th>
              <th className="border border-[#ebdef5] bg-white text-left py-4 px-4 font-bold w-1/4">
                UPI BUSINESS PLATINUM
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => {
              if (row.isSection) {
                return (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td colSpan={4} className="border border-[#ebdef5] bg-[#fdfafb] py-4 px-4 font-bold text-[#333333]">
                      {row.service}
                    </td>
                  </tr>
                );
              }

              return (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  {!row.skipService && (
                    row.subService ? (
                      <>
                        <td rowSpan={row.rowSpan || 1} className="border border-[#ebdef5] py-4 px-4 align-top leading-relaxed w-1/3">
                          {row.service}
                        </td>
                        <td className="border border-[#ebdef5] py-4 px-4 align-top font-medium w-1/6">
                          {row.subService}
                        </td>
                      </>
                    ) : (
                      <td colSpan={2} rowSpan={row.rowSpan || 1} className="border border-[#ebdef5] py-4 px-4 align-top leading-relaxed">
                        {row.service}
                      </td>
                    )
                  )}

                  {row.skipService && row.subService && (
                    <td className="border border-[#ebdef5] py-4 px-4 align-top font-medium w-1/6">
                      {row.subService}
                    </td>
                  )}

                  {row.sharedValue ? (
                    <td colSpan={2} className="border border-[#ebdef5] py-4 px-4 align-top">
                      {typeof row.sharedValue === 'string' && row.sharedValue.includes('\n') ? (
                        row.sharedValue.split('\n').map((paragraph, idx) => (
                          <p key={idx} className={paragraph ? 'mb-2' : ''}>
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        row.sharedValue
                      )}
                    </td>
                  ) : (
                    <>
                      <td className="border border-[#ebdef5] py-4 px-4 align-top">
                        {typeof row.gold === 'string' && row.gold.includes('\n') ? (
                          row.gold.split('\n').map((paragraph, idx) => (
                            <p key={idx} className={paragraph ? 'mb-2' : ''}>
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          row.gold
                        )}
                      </td>
                      <td className="border border-[#ebdef5] py-4 px-4 align-top">
                        {typeof row.platinum === 'string' && row.platinum.includes('\n') ? (
                          row.platinum.split('\n').map((paragraph, idx) => (
                            <p key={idx} className={paragraph ? 'mb-2' : ''}>
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          row.platinum
                        )}
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UnionPayBusinessPlatinumiMasin3;