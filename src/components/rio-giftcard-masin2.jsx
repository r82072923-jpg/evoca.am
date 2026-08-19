import React from 'react';

const tabs = ['Քարտի մասին', 'Տրամադրման պայմանները', 'Սպասարկման պայմանները'];

function RioGiftCardiMasin2({ activeTab, setActiveTab }) {
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
            <p><span className="font-bold text-[#6c00ff]">Evocabank</span>-ը Rio Mall-ի հետ համատեղ թողարկել է  <span className="font-bold text-[#6c00ff]">Rio Gift Card</span>-ը:</p>
            <p>Մեզ հետ դու կարող ես խնայել ամենաթանկը՝ ժամանակը, բայց նույն պահին ունենալ նվերի լավագույն տարբերակը։<br /></p>
            <p>Նվեր քարտը հնարավորություն է տալիս գնումներ կատարել Rio Mall-ի խանութ սրահներից և ժամանցի բոլոր կետերից: Այն նախատեսված է բացառապես անկանխիկ տարբերակով գնումներ կատարելու համար քարտի ձեռքբերման օրվանից սկսած՝ 6 ամսվա ընթացքում։</p>
            <p>Վստահ ենք, արդեն որոշել ես՝ ում նվիրել Rio Gift Card-ը:</p>
            <p>Մնում է միայն որոշել քարտի գումարի չափը՝<span className="font-bold text-[#6c00ff]">10,000-1,000,000 ՀՀ դրամի</span> սահմաններում։</p>
            <p>Նվեր քարտը կարելի է ձեռք բերել Rio Mall-ի ինֆոկետից անձնագրով կամ ID քարտով: Քարտը տրամադրվում է հենց տեղում՝ հատուկ նորաոճ փաթեթավորմամբ։</p>
            
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

export default RioGiftCardiMasin2;