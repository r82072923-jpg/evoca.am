import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

function ArcaClassiciMasin3({activeTab,setActiveTab}) {
  const tabs = [
    'Քարտի մասին',
    'Սակագներ և դրույթներ'
  ];
  const [feesData, setFeesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "arcaClassiciMasin2");
        const querySnapshot = await getDocs(colRef);
        
        const fetchedData = [];
        
        querySnapshot.forEach((doc) => {
          fetchedData.push({ id: doc.id, ...doc.data() });
        });

        setFeesData(fetchedData);
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto my-8 font-sans bg-white p-4">
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
      <h2 className="text-lg sm:text-xl font-bold text-[#333333] mb-4">
        ArCa Classic վճարային քարտեր (Տվյալները՝ Firebase-ից)
      </h2>
      
      <div className="overflow-x-auto">
        {loading ? (
          <div className="text-center p-8 text-lg text-purple-600 font-semibold">
            Բեռնվում է...
          </div>
        ) : (
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="p-4 font-bold text-[#333333] border border-[#f0e6ff]">
                  Մատուցվող ծառայություն
                </th>
                <th className="p-4 font-bold text-[#333333] border border-[#f0e6ff]">
                  ArCa AMD
                </th>
                <th className="p-4 font-bold text-[#333333] border border-[#f0e6ff]">
                  ArCa USD
                </th>
                <th className="p-4 font-bold text-[#333333] border border-[#f0e6ff]">
                  ArCa EUR
                </th>
                <th className="p-4 font-bold text-[#333333] border border-[#f0e6ff]">
                  ArCa RUB
                </th>
              </tr>
            </thead>
            
            <tbody className="text-[#333333] text-sm sm:text-base leading-relaxed">
              {feesData.length > 0 ? (
                feesData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 border border-[#f0e6ff]">
                      {row.service}
                      {row.subService && (
                        <div className="text-gray-500 text-xs mt-1">
                          {row.subService}
                        </div>
                      )}
                    </td>
                    <td className="p-4 border border-[#f0e6ff] whitespace-pre-line">{row.amd}</td>
                    <td className="p-4 border border-[#f0e6ff] whitespace-pre-line">{row.usd}</td>
                    <td className="p-4 border border-[#f0e6ff] whitespace-pre-line">{row.eur}</td>
                    <td className="p-4 border border-[#f0e6ff] whitespace-pre-line">{row.rub}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    Տվյալներ չեն գտնվել:
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      <div className="mt-4 text-xs sm:text-sm text-[#333333] space-y-2">
        <div><sup>[1]</sup> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ</div>
        <div><sup>[2]</sup> Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար` անկախ գործարքի գումարի չափից:</div>
      </div>
    </div>
  );
}

export default ArcaClassiciMasin3;