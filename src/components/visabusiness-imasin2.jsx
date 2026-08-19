import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

const currencies = ['Դ', '$', '€', '₽'];
const tabs = [
  'Քարտի մասին',
  'Սակագներ և դրույթներ',
  'Օգտակար խորհուրդներ',
  'Զգուշացում'
];

function VisaBusinessiMasin2({ activeTab, setActiveTab }) {
  const [ratesData, setRatesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'visaBusinessiMasin'));
        const docsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRatesData(docsData);
      } catch (error) {
        console.error('Սխալ Firebase-ից տվյալները ստանալիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto font-sans text-[#333333] p-4 my-10">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
        <div className="flex flex-col gap-6 text-sm sm:text-base leading-relaxed">
          <p>
            Իրավաբանական անձ և անհատ ձեռնարկատեր հաճախորդներին Evocabank-ն առաջարկում է <span className="font-bold text-[#6b11cb]">Visa Business վճարային քարտեր</span>, որոնք հնարավորություն են տալիս առանց Բանկ այցելելու տնօրինել կազմակերպության դրամական միջոցները:
          </p>
          
          <p>
            <span className="font-bold text-[#6b11cb]">Visa Business քարտը</span> Visa International միջազգային վճարահաշվարկային համակարգի չիպային քարտ է: Այն հարմարավետ գործիք է Ձեր կազմակերպության ծախսերը արդյունավետ կառավարելու համար: Դուք կարող եք առանց Բանկ այցելելու, բանկոմատի միջոցով <span className="font-bold text-[#6b11cb]">Visa Business</span> քարտից կանխիկացնել ընկերության դրամական միջոցները, կատարել օնլայն փոխանցումներ և վճարումներ Հայաստանի մաքսակետերում և պետական այլ մարմիններում:
          </p>

          <p>
            <span className="font-bold text-[#6b11cb]">Evoca Visa Business քարտերն</span> օժտված են դրամական միջոցների անվտանգության ապահովման բարձր մակարդակով: Սրանք միջազգային payWave տեխնոլոգիայով աշխատող չիպային քարտեր են, որի շնորհիվ սպասարկման կետերում անկանխիկ վճարումներ կատարելիս՝ քարտը հատուկ վճարային տերմինալների մեջ տեղադրելու անհրաժեշտություն չի առաջանում:
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(107,17,203,0.08)] p-6 sm:p-8">
          
          <div className="flex gap-3 mb-6">
            {currencies.map((currency, index) => (
              <button 
                key={index}
                className="w-8 h-8 rounded-full bg-[#6b11cb] text-white flex items-center justify-center font-bold text-sm"
              >
                {currency}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-10 font-medium text-gray-500">
              Բեռնվում է...
            </div>
          ) : (
            <div className="flex flex-col">
              {ratesData.map((item, index) => (
                <div 
                  key={item.id || index} 
                  className={`flex items-center py-5 ${
                    index !== ratesData.length - 1 ? 'border-b border-gray-200/60' : ''
                  }`}
                >
                  <div className="w-1/3 flex flex-col justify-center">
                    {item.min && (
                      <span className="text-[10px] text-gray-500 mb-0.5">{item.min}</span>
                    )}
                    <span className="text-xl sm:text-2xl font-bold text-[#6b11cb]">
                      {item.value}
                    </span>
                  </div>
                  <div className="w-2/3 text-sm text-[#333333]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </div>

      <div className="flex flex-col gap-4 text-[#6b11cb] text-sm sm:text-base">
        <p>
          <span className="font-bold">Evoca Visa Business քարտերն ունեն վարկային գիծ ստանալու հնարավորություն</span> (մենք վարկային գծի տրամադրման հրապարակային առաջարկ չենք ներկայացնում, սակայն Ձեր դիմումի ներկայացման դեպքում մեր Լիազոր մարմնի որոշմամբ կարող ենք վարկային գիծ տրամադրել՝ ներքին ակտերով սահմանված պայմաններով և Ձեզ հետ փոխադարձ կնքված պայմանագրի հիմքերով):
        </p>
        <p className="font-bold">
          Քարտի պատվիրման համար անհրաժեշտ է այցելել Բանկի Գլխամասային գրասենյակ կամ ցանկացած մասնաճյուղ:
        </p>
      </div>

    </div>
  );
}

export default VisaBusinessiMasin2;