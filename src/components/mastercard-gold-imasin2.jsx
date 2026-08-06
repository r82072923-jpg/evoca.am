import React from 'react';
import { Link } from 'react-router-dom';

function MasterCardGoldiMasin2({ activeTab, setActiveTab }) {
  // Սակագների և պայմանների տվյալները լոկալ զանգվածով
  const tariffs = [
    {
      id: "1",
      value: "0%",
      description: "Կանխիկացում բանկի կանխիկացման կետերում մինչև 2 մլն ֏"
    },
    {
      id: "2",
      value: "0.8%",
      description: "Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում"
    },
    {
      id: "3",
      value: "1%",
      description: "Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում"
    },
    {
      id: "4",
      value: "15 000 ֏",
      description: "Տարեկան սպասարկում"
    },
    {
      id: "5",
      value: "45,000 ֏",
      description: "Տարեկան սպասարկում օտարերկրյա քաղաքացիների համար"
    },
  ];

  const tabs = [
    'Քարտի մասին',
    'Սակագներ և դրույթներ'
  ];

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
          
          {/* Ձախ կողմի տեքստային բլոկ */}
          <div className="lg:col-span-7 space-y-7 text-[#1a1a1a] text-lg sm:text-xl leading-relaxed">
            <p>
              <strong className="text-[#6b11cb]">Mastercard Gold քարտը</strong> Mastercard միջազգային վճարահաշվարկային համակարգի պրեմիում դասի չիպային քարտ է, որն ունի դրամական միջոցների անվտանգության ապահովման բարձր մակարդակ և օժտված է ժամանակակից տեխնոլոգիաներով:
            </p>
            <p>
              Mastercard Gold քարտը կընդգծի քո կարգավիճակը և անմոռանալի կդարձնի քո բոլոր ճանապարհորդությունները: Հաշված րոպեների ընթացքում դու կկարողանաս նախապես գնել քո ավիատոմսը, ամրագրել հյուրանոցային համար կամ վարձել ավտոմեքենա՝ վճարելով Mastercard Gold քարտով:
            </p>
            <p>
              Mastercard Gold քարտը կընդգծի քո կարգավիճակը և անմոռանալի կդարձնի քո բոլոր ճանապարհորդությունները: Հաշված րոպեների ընթացքում դու կկարողանաս նախապես գնել քո ավիատոմսը, ամրագրել հյուրանոցային համար կամ վարձել ավտոմեքենա՝ վճարելով Mastercard Gold քարտով:
            </p>
            <p>
              Քարտը կարող ես պատվիրել և ստանալ առանց Բանկ այցելելու: EvocaTOUCH հավելվածի միջոցով պարզ քայլերի հաջորդականությամբ կկարողանաս պատվիրել` նշելով այն հասցեն, որտեղից կցանկանաս ստանալ քարտը: Կարևորելով մեր հաճախորդների ժամանակը` առաքման անվճար ծառայության միջոցով կտրամադրենք քո քարտը Հայաստանի ցանկացած կետում
            </p>
          </div>

          {/* Աջ կողմի սակագների բլոկ */}
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

          </div>

        </div>
      </div>
    </section>
  );
}

export default MasterCardGoldiMasin2;