import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function VisaInfiniteCardiMasin2({ activeTab, setActiveTab }) {
  const [tariffs, setTariffs] = useState([]);
  const [loading, setLoading] = useState(true);

  const tabs = [
    'Քարտի մասին',
    'Սահմանաչափի տրամադրման պայմանները',
    'Զգուշացում',
  ];

  useEffect(() => {
    const fetchTariffsFromFirebase = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'visaInfiniteCard'));

        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          if (docData.tariffs && Array.isArray(docData.tariffs)) {
            setTariffs(docData.tariffs);
          }
        }
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTariffsFromFirebase();
  }, []);

  return (
    <section className="w-full bg-white py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-7 text-[#1a1a1a] text-lg sm:text-xl leading-relaxed">
            <p>
              <strong className="text-[#6b11cb]">Visa Infinite</strong> քարտը տալիս է բազմաթիվ արտոնություններ ոչ միայն Հայաստանում, այլև ամբողջ աշխարհում, ներառյալ՝ քարտատիրոջ և նրա ընտանիքի անդամների ճամփորդական ապահովագրություն, գնումների ապահովագրություն, կոնսիերժ ծառայություն (<span className="text-[#6b11cb]">Telegram, Viber</span>), անվճար մուտք ավելի քան 1,200 օդանավակայանի բիզնես սպասասրահներ աշխարհի 450-ից ավելի քաղաքներում, Speed Pass ծառայություն, ավելի քան 900 լյուքս դասի շքեղ հյուրանոցներում VIP հյուրի կարգավիճակ և բազմաթիվ այլ արտոնություններ:
            </p>
            <p>
              Մեր <strong className="text-[#6b11cb]">Visa Infinite</strong> գործընկերները կարող են ստանալ հատուկ արտոնյալ պայմաններով վարկային սահմանաչափ։ Սահմանաչափի համար կարելի է դիմել <strong className="text-[#6b11cb]">EvocaTOUCH</strong> հավելվածի միջոցով, շաբաթվա բոլոր օրերին և ցանկացած ժամի՝ առանց հավելյալ թղթաբանության ու ժամանակ կորցնելու կամ այցել Բանկի գլխավոր գրասենյակ կամ ցանկացած մասնաճյուղ։
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-[32px] p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.05)] space-y-6">
              
            <div className="flex gap-3 pb-2">
              <div className="w-11 h-11 bg-[#6b11cb] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                ֏
              </div>
              <div className="w-11 h-11 bg-[#6b11cb] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                $
              </div>
              <div className="w-11 h-11 bg-[#6b11cb] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                €
              </div>
              <div className="w-11 h-11 bg-[#6b11cb] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                ₽
              </div>
            </div>

            {loading ? (
              <div className="py-12 text-center text-gray-400 font-medium">
                Բեռնվում է...
              </div>
            ) : tariffs.length === 0 ? (
              <div className="py-12 text-center text-gray-400 font-medium">
                Տվյալներ չեն գտնվել Firebase-ում:
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {tariffs.map((item, index) => (
                  <div 
                    key={item.id || index} 
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 gap-3"
                  >
                    <div className="flex items-baseline gap-2 sm:w-1/3 shrink-0">
                      {item.subtitle && (
                        <span className="text-[11px] text-gray-400 font-medium leading-none">
                          {item.subtitle}
                        </span>
                      )}
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#6b11cb] tracking-tight">
                        {item.value}
                      </span>
                    </div>

                    <div className="sm:w-2/3 text-gray-800 text-sm sm:text-base font-medium leading-snug">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default VisaInfiniteCardiMasin2;