import React from 'react';

const tabs = ['Քարտի մասին', 'Սակագներ և դրույթներ'];

function UnionPayBusinessPlatinumiMasin2({ activeTab, setActiveTab }) {
  return (
    <section className="w-full bg-[#f8f9fb] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, i) => (
            <button
              key={i}
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

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        <div className="space-y-6 text-[#333333] text-[17px] leading-relaxed">
          <p>
            Բիզնեսմենների համար կարևոր է ունենալ ժամանակակից լուծումներով ֆինանսական գործիք, որի միջոցով Ձեր բոլոր վճարումները կլինեն ակնթարթորեն՝ միաժամանակ ապահովելով դրամական միջոցների անվտանգության ապահովման բարձր մակարդակ:
          </p>

          <p>
            Այս ամենն իրականացնելու համար Ձեզ միայն պակասում է Evocabank-ի նոր <span className="text-[#6b11cb] font-bold">UnionPay Business Platinum</span> քարտը:
          </p>

          <p>
            Իրավաբանական անձ և անհատ ձեռնարկատեր հաճախորդներն իրենց <span className="text-[#6b11cb] font-bold">EvocaTOUCH</span> հավելվածով կարող են 24/7 հասանելիությամբ կառավարել կազմակերպության դրամական միջոցները՝ առանց Բանկ այցելելու անհրաժեշտության: Քարտերով հնարավոր է կատարել անհպում վճարումներ աշխարհի ցանկացած կետում:
          </p>

          <p className="italic pt-2">
            Բացահայտիր քո քարտի բենեֆիթները՝ բացառիկ զեղչեր և առաջարկներ աշխարհի տարբեր կետերում: Մանրամասներին ծանոթացիր <a href="https://www.evoca.am/file_manager/other/UPI%20final%20file.pdf" className="text-[#6b11cb] font-bold underline hover:text-[#5a0eb0] transition-colors">այստեղ</a>:
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 sm:p-8">
          
          <div className="flex gap-3 mb-8">
            {['֏', '$', '€'].map((currency, idx) => (
              <div 
                key={idx} 
                className="w-10 h-10 rounded-full bg-[#6b11cb] text-white flex items-center justify-center text-lg font-bold shadow-md"
              >
                {currency}
              </div>
            ))}
          </div>

          <div className="flex flex-col text-lg">
            <div className="flex items-center py-5 border-b border-gray-100">
              <div className="w-[45%] sm:w-1/3 text-[22px] sm:text-2xl font-extrabold text-[#6b11cb]">
                0.5%
              </div>
              <div className="w-[55%] sm:w-2/3 text-gray-800 font-medium">
                Կանխիկացում
              </div>
            </div>
            
            <div className="flex items-center py-5 border-b border-gray-100">
              <div className="w-[45%] sm:w-1/3 text-[22px] sm:text-2xl font-extrabold text-[#6b11cb]">
                5 տարի
              </div>
              <div className="w-[55%] sm:w-2/3 text-gray-800 font-medium">
                Քարտի ժամկետ
              </div>
            </div>
            
            <div className="flex items-center py-5 border-b border-gray-100">
              <div className="w-[45%] sm:w-1/3 text-[22px] sm:text-2xl font-extrabold text-[#6b11cb]">
                15000 ֏
              </div>
              <div className="w-[55%] sm:w-2/3 text-gray-800 font-medium">
                Տարեկան սպասարկման վճար
              </div>
            </div>
            
            <div className="flex items-center py-5">
              <div className="w-[45%] sm:w-1/3 text-[22px] sm:text-2xl font-extrabold text-[#6b11cb]">
                Ամենուր
              </div>
              <div className="w-[55%] sm:w-2/3 text-gray-800 font-medium">
                Կիրառություն
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default UnionPayBusinessPlatinumiMasin2;