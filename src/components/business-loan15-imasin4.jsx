import React from 'react';

const tabs = [
  'Վարկի մասին',
  'Պայմաններ և սակագներ',
  'Պահանջվող փաստաթղթեր'
];
function BusinessLoan15iMasin4() {
  const linksData = [
    {
      title: "Վարկավորման նպատակով հաճախորդներից պահանջվող փաստաթղթերի և տվյալների ցանկ",
      href: "https://www.evoca.am/files/global_files/1/16148640021543.pdf" // Այստեղ կարող եք գրել ձեր նախընտրած էջի հղումը
    },
    {
      title: "Գնահատող ընկերությունների ցանկ",
      href: "https://www.evoca.am/files/global_files/1/16148640316517.pdf"
    },
    {
      title: "Կարևոր տեղեկատվություն",
      href: "https://www.evoca.am/files/global_files/1/important-information-pdf.pdf"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4 font-sans">
      <div className="border-b border-gray-200 mb-8 overflow-x-auto">
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
      {linksData.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="flex items-center justify-between bg-purple-50 hover:bg-purple-100 transition-colors rounded-xl p-4 shadow-sm border border-purple-100 text-gray-800 font-semibold text-sm md:text-base group"
        >
          <span>{item.title}</span>
          <span className="text-purple-600 group-hover:translate-x-1 transition-transform">
            ➔
          </span>
        </a>
      ))}
    </div>
  );
}

export default BusinessLoan15iMasin4;