import React from 'react';
const tabs = ['Քարտի մասին', 'Սակագներ և դրույթներ'];
function DigitalGiftCardiMasin2({activeTab,setActiveTab}) {
  return (
    <section className="w-full bg-[#f8f9fb] py-16 px-4 sm:px-6 lg:px-8 font-sans">
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
                {activeTab === tab && <span className="absolute bottom-[-18px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />}
              </button>
            ))}
          </nav>
        </div>
      <div className="max-w-4xl mx-auto space-y-8 text-[#333333]">
        <p className="text-base sm:text-lg leading-relaxed">
          Առանց չափազանցնելու՝ նվիրելը դեռ երբեք այսքան հարմար ու հաճելի չի եղել։ <span className="text-[#6b11cb] font-semibold">Evoca</span>-ի նոր <span className="text-[#6b11cb] font-semibold">Digital Gift Card</span>-ի հետ դու նաև նվիրում ես անսահման էմոցիաներ և ընտրության ազատություն: Այլևս պետք չէ ժամանակ անցկացնել խանութներում, կամ պատվիրել ու անհանգստանալ պատվիրած նվերի առաքման ժամկետների համար, կամ լարվել ու մտածել, թե այդրանից հետո արդյո՞ք նվերը դուր կգա նրան, թե՞ ոչ...
        </p>

        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6b11cb]">
            Արագ ու հարմար
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Digital Gift Card-ը հանգիստ կարող է դառնալ ամենակրեատիվ ու օգտակար նվերը ցանկացած վայրից, ցանկացած ժամի և ցանկացած առիթի համար: Այն կարելի է ուղարկել ընդամենը մի քանի քայլով Evocabank-ի վեբ հարթակի միջոցով, իսկ թվային նվեր քարտը կարելի է օգտագործել ամբողջ աշխարհում:
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6b11cb]">
            Հավես ու յուրահատուկ
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Եվ հարկավոր, պետք չէ անհանգստանալ չտարβεվելու համար. դու ինքդ կարող ես ընտրել թվային նվեր քարտի գումարի չափը, արժույթը, ուղարկման ժամկետը և անգամ դիզայնը՝ ընտրելով իրավիճակին հարմար ամենաբੁੱն արտահայտությունը: U սրանցից մեկը՝
          </p>

          <ul className="space-y-2 pl-4 font-medium text-base sm:text-lg">
            <li>«Ափսոս ծախսես»</li>
            <li>«Մեր սեղանից ձեր սեղան»</li>
            <li>«Փողը ծախսել է սիրում»</li>
            <li>«Չեմ հասցրել նվեր առնեմ»</li>
            <li>«Շնորհավորնոռ»</li>
          </ul>

          <p className="text-base sm:text-lg leading-relaxed pt-2">
            Մի խոսքով, սա նվեր է, որը կուրախացնի և՛ ստացողին, և՛ նվիրողին, և՛ Evoca-ին:
          </p>
        </div>

        <div className="flex justify-center py-8">
          <img
            src="https://www.evoca.am/file_manager/Gift%20Card/digitec-web2.png"
            alt="Digital Gift Card"
            className="w-full max-w-md h-auto object-contain drop-shadow-md"
          />
        </div>

        <div className="flex justify-center pt-4">
          <button className="bg-[#6b11cb] hover:bg-[#5a0eb0] text-white px-10 py-3.5 rounded-full font-bold text-base transition-colors shadow-lg">
            ՊԱՏՎԻՐԵԼ ՕՆԼԱՅՆ
          </button>
        </div>

      </div>
    </section>
  );
}

export default DigitalGiftCardiMasin2;