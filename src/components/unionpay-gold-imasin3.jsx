import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

function UnionPayGoldiMasin3({activeTab, setActiveTab}) {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const tabs = [
    'Քարտի մասին',
    'Սակագներ և դրույթներ'
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, 'unionPayGoldiMasin2');
        const querySnapshot = await getDocs(collectionRef);
        
        const fetchedData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setTableData(fetchedData);
      } catch (error) {
        console.error('Սխալ Firebase-ից տվյալներ կարդալիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-10 font-bold text-gray-500">Բեռնվում են տվյալները...</div>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto my-10 font-sans bg-white">
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
      
      <div className="border-y border-purple-100 bg-[#fefdff]">
        <h2 className="py-4 px-4 sm:px-6 text-sm sm:text-base font-bold text-[#202020]">
          Union Pay International վճարային համակարգի թողարկման և սպասարկման սակագներ
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[800px]">
          <thead>
            <tr className="border-b border-purple-100">
              <th className="py-4 px-4 sm:px-6 font-bold text-sm text-[#202020] w-1/2">
                Մատուցվող ծառայություններ
              </th>
              <th className="py-4 px-4 font-bold text-sm text-[#202020] w-1/4">
                UPI GOLD
              </th>
              <th className="py-4 px-4 sm:pr-6 font-bold text-sm text-[#202020] w-1/4">
                UPI BUSINESS PLATINUM
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr 
                key={row.id}
                className="border-b border-purple-100 hover:bg-purple-50/30 transition-colors"
              >
                <td className="py-5 px-4 sm:px-6 text-sm text-[#333333] align-top leading-relaxed whitespace-pre-line border-r border-purple-100">
                  {row.service}
                </td>
                {row.colSpanGold ? (
                  <td colSpan={2} className="py-5 px-4 text-sm text-[#333333] align-top whitespace-pre-line">
                    {row.gold}
                  </td>
                ) : (
                  <>
                    <td className="py-5 px-4 text-sm text-[#333333] align-top whitespace-pre-line border-r border-purple-100">
                      {row.gold}
                    </td>
                    <td className="py-5 px-4 sm:pr-6 text-sm text-[#333333] align-top whitespace-pre-line">
                      {row.platinum}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UnionPayGoldiMasin3;