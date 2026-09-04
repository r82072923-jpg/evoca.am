import React from 'react';

const tabs = [
  'Վարկի մասին',
];

const BusinessLoan4iMasin2 = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-purple-100">
      <div className="border-b border-gray-200 mb-12 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed">
        <p>
          Ստացեք վարկ՝ Բանկի կողմից թողարկված պարտատոմսերի գրավով, շարունակեք ստանալ եկամուտ Ձեր ներդրումից և օգտագործեք անհրաժեշտ գումարը բիզնեսի զարգացման կամ ընթացիկ ծախսերի համար։
        </p>
        <p>
          Դիմել կարող են Բանկի պարտատոմսերում ներդրում կատարած իրավաբանական անձինք և անհատ ձեռնարկատերերը։ Վարկը տրամադրվում է օլայն՝ ՀՀ դրամով, մինչև պարտատոմսերի անվանական արժեքի 80%-ը (ՀՀ դրամով) կամ մինչև 70%-ը (արտարժույթով)։
        </p>
        <div className="mt-8 p-6 bg-purple-50 rounded-xl border-l-4 border-[#6b11cb]">
          <p className="font-bold text-[#6b11cb] text-lg sm:text-xl">
            Ձեր ներդրումները թող շարունակեն աշխատել։ Բիզնեսը՝ նույնպես։
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoan4iMasin2;