import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from './firebaseConfog'; 

const tabs = ['Քարտի մասին', 'Տրամադրման պայմանները', 'Սպասարկման պայմանները'];

function RioGiftCardiMasin3({ activeTab, setActiveTab }) {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTermsData = async () => {
      if (activeTab === 'Տրամադրման պայմանները') {
        setLoading(true);
        try {
          const q = query(collection(db, "rioGiftCardiMasin"), orderBy("id", "asc"));
          const querySnapshot = await getDocs(q);
          
          const fetchedData = querySnapshot.docs.map((doc) => ({
            docRefId: doc.id, 
            ...doc.data(),
          }));

          setTableData(fetchedData);
        } catch (error) {
          console.error("Սխալ տվյալները Firebase-ից բեռնելիս: ", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchTermsData();
  }, [activeTab]);

  return (
    <section className="w-full bg-white py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
          <nav className="flex space-x-10 min-w-max">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                  activeTab === tab ? 'text-[#6b11cb]' : 'text-gray-500 hover:text-gray-700'
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

        {activeTab === 'Տրամադրման պայմանները' && (
          <div className="transition-opacity duration-300">
            {loading ? (
              <p className="text-center text-gray-500 py-10 font-medium">Բեռնվում են պայմանները...</p>
            ) : (
              <div className="w-full max-w-6xl mx-auto border border-[#f2e6ff] rounded-2xl overflow-hidden bg-white text-sm sm:text-base text-[#1a1a1a] shadow-sm">
                {tableData.length > 0 ? (
                  tableData.map((item, index) => (
                    <div 
                      key={item.docRefId || item.id || index} 
                      className={`grid grid-cols-1 md:grid-cols-12 ${index !== tableData.length - 1 ? 'border-b border-[#f2e6ff]' : ''}`}
                    >
                      <div className="md:col-span-5 font-bold text-[#1a1a1a] p-4 flex items-center">
                        {item.title}
                      </div>
                      
                      {Array.isArray(item.value) ? (
                        <div className="md:col-span-7 border-t md:border-t-0 border-[#f2e6ff]">
                          {item.value.map((val, vIndex) => (
                            <div 
                              key={vIndex} 
                              className={`p-4 ${vIndex !== item.value.length - 1 ? 'border-b border-[#f2e6ff]' : ''}`}
                            >
                              {val}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="md:col-span-7 p-4 mt-1 md:mt-0 font-medium leading-relaxed">
                          {item.value}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="p-6 text-center text-gray-500">Աղյուսակի տվյալները գտնված չեն:</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default RioGiftCardiMasin3;