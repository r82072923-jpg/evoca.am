import React from 'react';
import { Link } from 'react-router-dom';
const tabs = [
  'Վարկի մասին',
  'Պայմաններ և սակագներ',
];
const loanAboutData = {
  currencies: ["֏", "$", "€"],
  paragraphs: [
    "Հաշվի վարկավորումը նախատեսված է առնվազն 1 տարի Բանկի հաճախորդ հանդիսացող իրավաբանական անձանց և անհատ ձեռնարկատերերի համար:",
    "Բիզնես վարկը տրամադրվում է ընթացիկ ծախսերի ֆինանսավորման, կրեդիտորական պարտքի մարման և այլ ծախսերի համար:",
    "Սահմանաչափը տրամադրվում է Վարկառուի հաշվարկային հաշվով կատարված տարեկան զուտ կրեդիտային շրջանառության առավելագույնը մինչև 30%-ի չափով:",
    "Վարկերը/վարկային գծերը կարող են ձևակերպել մեր Գլխամասային գրասենյակում և ցանկացած մասնաճյուղում (բացառությամբ՝ «Երևան Մոլ», «Հանրապետություն», «Էրեբունի» մասնաճյուղերի):"
  ],
  cards: [
    {
      topLabel: "առավելագույնը",
      value: "500 մլն ֏",
      description: "Կամ համարժեք արտարժույթ"
    },
    {
      topLabel: "առավելագույնը",
      value: "12 ամիս",
      description: "Մարման ժամկետ"
    },
    {
      topLabel: "սկսած",
      value: "7%-ից",
      description: "Տոկոսադրույք"
    }
  ]
};

const BusinessLoan12iMasin2 = ({activeTab,setActiveTab}) => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 font-sans">
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
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="lg:w-1/2 space-y-6 text-gray-800 text-base md:text-lg leading-relaxed">
          <p>{loanAboutData.paragraphs[0]}</p>
          <p>
            <Link to="/business" className="text-[#6b11cb] font-semibold underline hover:text-purple-800">
              Բիզնես վարկը
            </Link>{' '}
            տրամադրվում է ընթացիկ ծախսերի ֆինանսավորման, կրեդիտորական պարտքի մարման և այլ ծախսերի համար:
          </p>
          <p>{loanAboutData.paragraphs[2]}</p>
          <p>{loanAboutData.paragraphs[3]}</p>
        </div>
        <div className="lg:w-1/2 w-full bg-white border border-gray-100 rounded-2xl shadow-xl p-6 md:p-8 space-y-8">
          <div className="flex items-center gap-3">
            {loanAboutData.currencies.map((curr, index) => (
              <div 
                key={index} 
                className="w-12 h-12 rounded-full bg-[#6b11cb] text-white flex items-center justify-center font-bold text-lg shadow-md"
              >
                {curr}
              </div>
            ))}
          </div>
          <div className="divide-y divide-gray-100 space-y-6">
            {loanAboutData.cards.map((card, index) => (
              <div key={index} className={`flex items-center justify-between ${index !== 0 ? 'pt-6' : 'pt-4'}`}>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">
                    {card.topLabel}
                  </span>
                  <span className="text-2xl md:text-3xl font-extrabold text-[#6b11cb]">
                    {card.value}
                  </span>
                </div>
                <div className="text-right text-gray-600 font-medium text-sm md:text-base">
                  {card.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoan12iMasin2;