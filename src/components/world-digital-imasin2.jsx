import React from 'react';

const tabs = ['Քարտի մասին', 'Mastercard World քարտի մասին'];

function WorldDigitaliMasin2({ activeTab, setActiveTab }) {
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
            <p>
              <span className="font-bold text-[#6c00ff]">Mastercard World Digital</span> քարտը քեզ հետ կլինի ցանկացած վայրում, ցանկացած ժամի, իսկ օնլայն տիրույթում քո բոլոր վճարումները և գնումները կլինեն անհամեմատ արագ, հարմար և ապահով։քարտը քեզ հետ կլինի ցանկացած վայրում, ցանկացած ժամի, իսկ օնլայն տիրույթում քո բոլոր վճարումները և գնումները կլինեն անհամեմատ արագ, հարմար և ապահով։
            </p>
            <p>
              Թվային քարտի միջոցով կարող ես իրականացնել քարտային բոլոր տեսակի գործարքներ՝ միայն այն տարբերությամբ, որ քարտը քեզ մոտ կլինի ոչ թե ֆիզիկապես, այլ քո<span className="font-bold text-[#6c00ff]">EvocaTOUCH </span>հավելվածում։
            </p>
            <p>Թվային քարտը կարող ես կցել նաև Apple Pay-ին և Google Pay-ին:</p>
          </div>

          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 sm:p-8 border border-gray-50">
              
              <div className="flex gap-3 mb-6">
                {['֏', '$', '€'].map((currency, idx) => (
                  <button 
                    key={idx} 
                    className="w-10 h-10 rounded-full bg-[#6b11cb] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity"
                  >
                    {currency}
                  </button>
                ))}
              </div>

              <div className="flex flex-col">
                
                <div className="flex items-center gap-6 py-6 border-b border-gray-200">
                  <div className="text-3xl font-bold text-[#6b11cb] min-w-[80px]">2%</div>
                  <div className="text-gray-700 text-sm sm:text-base leading-snug">
                    Կանխիկացում բանկի կանխիկացման կետերում
                  </div>
                </div>

                <div className="flex items-center gap-6 py-6 border-b border-gray-200">
                  <div className="text-3xl font-bold text-[#6b11cb] min-w-[80px]">2.5%</div>
                  <div className="text-gray-700 text-sm sm:text-base leading-snug">
                    Կանխիկացում ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով
                  </div>
                </div>

                <div className="flex items-center gap-6 py-6">
                  <div className="text-3xl font-bold text-[#6b11cb] min-w-[80px]">1000 ֏</div>
                  <div className="text-gray-700 text-sm sm:text-base leading-snug">
                    Միանվագ
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorldDigitaliMasin2;