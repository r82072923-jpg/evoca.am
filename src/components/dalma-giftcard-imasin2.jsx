import React from 'react';

const tabs = ['Քարտի մասին', 'Տրամադրման պայմանները', 'Սպասարկման պայմանները'];

function DalmaGiftCardiMasin2({ activeTab, setActiveTab }) {
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
                {activeTab === tab && <span className="absolute bottom-[-18px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-7 text-[#1a1a1a] text-lg sm:text-xl leading-relaxed">
            <p><span className="font-bold text-[#6c00ff]">Evocabank</span>-ը Dalma Garden Mall-ի հետ համատեղ ներկայացնում է <span className="font-bold text-[#6c00ff]">Dalma Gift Card</span>-ը:</p>
            <p>21-րդ դարում տոներին Gift քարտ նվիրելը նորաձև է դարձել։ Դու որոշում՝ որքան գումար տալ, նրանք որոշում՝ որտեղ ծախսել:<br />
            <span className="font-bold text-[#6c00ff]">Dalma Gift Card</span>-ը նվերի իդեալական տարբերակ է, որը համապատասխանում է նվեր ընտրելու քո բոլոր պահանջներին։ Ընտրիր միայն քարտի գումարի չափը՝ 10,000-2,000,000 ՀՀ դրամի սահմաններում։</p>
            <p>Քարտը հնարավորություն է տալիս գնումներ կատարել Dalma Garden Mall-ի խանութ-սրահների, սննդի, սպասարկման և ժամանցի բոլոր կետերում: Այն նախատեսված է բացառապես անկանխիկ տարբերակով գնումներ կատարելու համար քարտի ձեռքբերման օրվանից սկսած՝ 6 ամսվա ընթացքում։</p>
            
            <p className="font-bold text-[#6c00ff] mt-6">Ինչպե՞ս ձեռք բերել Dalma Gift Card-ը:</p>
            <p><span className="font-bold text-[#6c00ff]">Dalma Gift Card</span> կարելի է ձեռք բերել <span className="font-bold text-[#6c00ff]">Dalma Garden Mall</span>-ի ինֆոկետից կամ <span className="font-bold text-[#6c00ff]">Evocabank</span>-ի մասնաճյուղերից (բացառությամբ՝ Էրեբունի, Հանրապետության և Yerevan Mall մասնաճյուղերի)՝ ներկայացնելով անձնագիր կամ ID քարտ: Քարտը տրամադրվում է հենց տեղում՝ նորաոճ փաթեթավորմամբ:</p>
            <p>Նվեր քարտը կարող ես պատվիրել նաև օնլայն՝ <span className="font-bold text-[#6c00ff]">Evocabank</span>-ի կամ <span className="font-bold text-[#6c00ff]">Dalma Garden Mall</span>-ի պաշտոնական կայքերի միջոցով՝ մուտքագրելով համապատասխան գումարը քարտին:</p>
            <p>Մենք այն անվճար կմոտեցնենք <span className="font-bold text-[#6c00ff]">Evocabank</span>-ի քո նախընտրած մասնաճյուղ կամ կառաքենք քո կողմից նշված հասցեով: Քարտը օնլայն պատվիրելու դեպքում, այն կտրամադրվի հաջորդ աշխատանքային օրը: Առաքման արժեքը՝ <span className="font-bold text-[#6c00ff]">1,000 ՀՀ դրամ</span>:</p>
            <p>Կարող ես քարտը պատվիրել նաև սկանավորելով QR կոդը:</p>
            
            <img 
              src="https://www.evoca.am/file_manager/Gift%20Card/evoca_dalma_gift_card-1024.jpeg" 
              alt="Dalma Gift Card QR" 
              className="w-48 sm:w-56 h-auto rounded-lg object-contain mt-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DalmaGiftCardiMasin2;