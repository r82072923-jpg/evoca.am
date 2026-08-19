import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

const tabs = [
    'Վարկի մասին',
    'Պայմաններ',
    'Պահանջվող փաստաթղթերի ցանկ'
];

const Loan8iMasin2 = ({ activeTab, setActiveTab }) => {
  const [contentData, setContentData] = useState(null);
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "loans8iMasin"));
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          if (docData.contentData) {
            setContentData(docData.contentData);
          }
          if (docData.cardData) {
            setCardData(docData.cardData);
          }
        }
      } catch (error) {
        console.error("Սխալ տվյալների բեռնման ժամանակ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-[#5c13a6] font-medium">Բեռնվում է տվյալները Firebase-ից...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 p-6 md:p-10 font-sans">
      
      <div className="w-full">
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

        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="w-full lg:w-[55%] text-[#333333] space-y-6 text-[15px] leading-relaxed">
            {contentData?.paragraph?.map((item) => (
              <p key={item.id}>
                {item.id === 1 ? (
                  <>
                    <span className="text-[#5c13a6] font-medium">Evocabank</span>-ն առաջարկում է բնակարանի, առանձնատան, բնակելի տան ձեռքբերման, կառուցապատման ու վերանորոգման նպատակով Բանկի սեփական միջոցներով տրամադրվող <a href="#" className="text-[#5c13a6] underline hover:no-underline">հիփոթեքային վարկեր</a>:
                  </>
                ) : item.id === 4 ? (
                  <>
                    Ընտրելով <span className="text-[#5c13a6] font-medium">Evocabank</span>-ը՝ կխնայեք Ձեր գումարն ու ժամանակը: Ձեր կողմից անշարժ գույքի ընտրությունից և վարկի ձևակերպման համար անհրաժեշտ փաստաթղթերը ներկայացնելուց հետո Evocabank-ը վարկի տրամադրման որոշումը կկայացնի ամենասեղմ ժամկետներում:
                  </>
                ) : item.id === 5 ? (
                  <>
                    Գործընկերներ կառուցապատողների ցանկին կարող եք ծանոթանալ հետևյալ <a href="#" className="text-[#5c13a6] underline hover:no-underline">հղումով</a>:
                  </>
                ) : (
                  item.text
                )}
              </p>
            ))}
          </div>

          <div className="w-full lg:w-[45%]">
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              
              <div className="w-10 h-10 bg-[#5c13a6] rounded-full flex items-center justify-center text-white mb-8 shadow-sm">
                <span className="text-xl font-bold">֏</span>
              </div>

              <div className="flex flex-col">
                {cardData.map((item, index) => (
                  <div 
                    key={item.id || index} 
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                      index !== cardData.length - 1 ? 'border-b border-gray-200 py-5' : 'pt-5 pb-2'
                    }`}
                  >
                    <div className="w-full sm:w-1/2">
                      <div className="text-[11px] text-gray-500 mb-1">{item.label}</div>
                      <div className="text-3xl font-bold text-[#5c13a6]">{item.value}</div>
                    </div>
                    <div className="w-full sm:w-1/2 text-[15px] text-gray-800">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Loan8iMasin2;