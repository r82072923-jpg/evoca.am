import React, { useState } from 'react';

function FourUamGiftCardiMasin2({ activeTab, setActiveTab }) {
  const tabs = [
    'Քարտի մասին',
    'Տրամադրման պայմանները',
    'Սպասարկման պայմանները'
  ];
return (
    <section className="w-full bg-white py-10 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed">
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
        <p>
          Evocabank-ը և 4u.am-ը համատեղ ներկայացնում են նվեր քարտ, որով կարող ես վճարում կատարել ցանկացած POS և V-POS տերմինալով՝
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>խանութներում,</li>
          <li>սրճարաններում,</li>
          <li>զվարճանքի կենտրոններում,</li>
          <li>սուպերմարկետներում,</li>
          <li>օնլայն հարթակներում,</li>
          <li>և բոլոր այն վայրերում, որտեղ ընդունվում են բանկային քարտերով վճարումներ։</li>
        </ul>

        <p className="font-medium pt-2">
          Այս նվեր քարտով դու ես որոշում՝ որքան գումար նվիրել, իսկ նրանք՝ որտեղ և ինչպես ծախսել։
        </p>

      </div>
    </section>
  );
}

export default FourUamGiftCardiMasin2;