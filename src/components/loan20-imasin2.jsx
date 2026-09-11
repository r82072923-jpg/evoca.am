import React from 'react';
const tabs=['Վարկի մասին','Պայմաններ']
const Loan20iMasin2 = ({activeTab,setActiveTab}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab && setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab ? 'text-[#6b11cb]' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-17px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-4 text-[#2d2738] text-base sm:text-lg font-semibold leading-relaxed">
          <p>
            Ունե՞ս ավանդ կամ պարտատոմս{' '}
            <span className="text-[#8d10b5] font-bold">Evocabank</span>-ում: Գիտե՞ս, որ
            արդեն կարող ես օգտագործել քո ներդրված միջոցները որպես
            գրավ և ստանալ անհատական վարկ:
          </p>
          <p>
            Վարկը հնարավորություն է տալիս շարունակել օգտվել քո
            ավանդից կամ պարտատոմսից ստացվող եկամուտներից և
            միաժամանակ ստանալ անհրաժեշտ ֆինանսավորում:
          </p>
          <p>
            Գործընթացը հասանելի է Բանկի մասնաճյուղերում, այնպես որ
            քեզ մնում է միայն ընտրել քեզ հարմար հասցեն:
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(141,16,181,0.08)] border border-gray-100">
          <div className="mb-6">
            <div className="w-10 h-10 rounded-full bg-[#8d10b5] text-white flex items-center justify-center font-bold text-xl shadow-sm">
              ֏
            </div>
          </div>
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <div>
              <span className="block text-xs sm:text-sm text-gray-500 font-semibold mb-1">
                ավանդի գումարի մինչև
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#8d10b5]">
                95%
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold text-[#2d2738]">
              Սահմանաչափ
            </div>
          </div>
          <div className="flex items-center justify-between pt-6">
            <div>
              <span className="block text-xs sm:text-sm text-gray-500 font-semibold mb-1">
                պարտատոմսի գումարի մինչև
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#8d10b5]">
                80%
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold text-[#2d2738]">
              Սահմանաչափ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan20iMasin2;