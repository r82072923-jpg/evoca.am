import React from 'react';
  const tabs = [
    'Վարկի մասին',
    'Պայմաններ',
  ];
const BusinessLoan3iMasin2 = ({activeTab,setActiveTab}) => {
  const loanData = {
    introText: "Ունե՞ք գործող բիզնես վարկ, օվերդրաֆտ կամ վարկային գիծ այլ ֆինանսական կառույցում, կարող եք այն տեղափոխել Evocabank և միաժամանակ ստանալ հավելյալ միջոցներ՝ Ձեր բիզնեսի ընթացիկ ծախսերի կամ զարգացման նպատակների համար։",
    advantagesTitle: "Առավելություններ՝",
    advantages: [
      "վերաֆինանսավորվող վարկի գումարի մինչև 2%-ի չափով cashback (cashback-ի առավելագույն չափը՝ մինչև 2,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ),",
      "մինչև 120 ամիս մարման ժամկետ,",
      "մայր գումարի մարման արտոնյալ ժամանակահատված՝ մինչև 6 ամիս,",
      "լրացուցիչ ֆինանսավորման հնարավորություն,",
      "ֆինանսավորում ՀՀ դրամով, ԱՄՆ դոլարով կամ Եվրոյով։"
    ],
    additionalFundingTitle: "Լրացուցիչ ֆինանսավորումը կարող եք օգտագործել՝",
    additionalFundingUses: [
      "հիմնական միջոցների ձեռքբերման,",
      "շրջանառու միջոցների համալրման,",
      "կրեդիտորական պարտքերի մարման,",
      "ընթացիկ ծախսերի կամ այլ ներդրումների համար։"
    ],
    outroText: "Evocabank-ի հետ կարող եք ոչ միայն ավելի հարմար պայմաններով վերաֆինանսավորել Ձեր գործող վարկերը, այլ նաև ստանալ նոր հնարավորություններ՝ Ձեր բիզնեսն ընդլայնելու համար:",
    term: {
      title: "Վերաֆինանսավորում",
      value: "36-120 ամիս",
      label: "ժամկետ"
    },
    amount: {
      title: "Գումար",
      value: "15մլն-500մլն",
      label: "ՀՀ դրամ կամ համարժեք արտարժույթ"
    },
    rates: [
      {
        currencyLabel: "ՀՀ դրամ՝ 12%",
        description: "Տարեկան անվանական տոկոսադրույք"
      },
      {
        currencyLabel: "ԱՄՆ դոլար՝ 9%",
        description: "Տարեկան անվանական տոկոսադրույք"
      },
      {
        currencyLabel: "Եվրո՝ 8%",
        description: "Տարեկան անվանական տոկոսադրույք"
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 font-sans bg-white">
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {loanData.introText.split('Evocabank').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <strong className="text-gray-900 font-bold">Evocabank</strong>}
              </React.Fragment>
            ))}
          </p>
          <div className="space-y-4">
            <h2 className="text-[#6b11cb] font-bold text-xl">{loanData.advantagesTitle}</h2>
            <ul className="space-y-3 text-gray-700">
              {loanData.advantages.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                  <span>
                    {index === 0 ? (
                      <>վերաֆինանսավորվող վարկի գումարի <strong>մինչև 2%-ի</strong> չափով <strong>cashback</strong> (cashback-ի առավելագույն չափը՝ մինչև 2,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ),</>
                    ) : index === 1 ? (
                      <><strong>մինչև 120 ամիս</strong> մարման ժամկետ,</>
                    ) : index === 2 ? (
                      <>մայր գումարի մարման արտոնյալ ժամանակահատված՝ <strong>մինչև 6 ամիս</strong>,</>
                    ) : index === 3 ? (
                      <><strong>լրացուցիչ ֆինանսավորման</strong> հնարավորություն,</>
                    ) : (
                      <>ֆինանսավորում <strong>ՀՀ դրամով, ԱՄՆ դոլարով կամ Եվրոյով</strong>։</>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-[#6b11cb] font-bold text-lg">{loanData.additionalFundingTitle}</h3>
            <ul className="space-y-2 text-gray-700">
              {loanData.additionalFundingUses.map((use, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
            <strong className="text-[#6b11cb]">Evocabank</strong>-ի հետ կարող եք ոչ միայն ավելի հարմար պայմաններով վերաֆինանսավորել Ձեր գործող վարկերը, այլ նաև ստանալ նոր հնարավորություններ՝ Ձեր բիզնեսն ընդլայնելու համար:
          </p>
        </div>
        <div className="lg:col-span-5 bg-white border border-purple-100 rounded-2xl shadow-sm p-6 space-y-6">
          <div className="divide-y divide-purple-100">
            <div className="py-4 flex justify-between items-center">
              <div>
                <p className="text-[#6b11cb] text-sm font-medium">{loanData.term.title}</p>
                <p className="text-gray-900 font-extrabold text-xl">{loanData.term.value}</p>
              </div>
              <span className="text-gray-400 text-sm">{loanData.term.label}</span>
            </div>
            <div className="py-4 flex justify-between items-center">
              <div>
                <p className="text-[#6b11cb] text-sm font-medium">{loanData.amount.title}</p>
                <p className="text-gray-900 font-extrabold text-xl">{loanData.amount.value}</p>
              </div>
              <span className="text-gray-400 text-sm text-right">{loanData.amount.label}</span>
            </div>
            {loanData.rates.map((rate, index) => (
              <div key={index} className="py-4 flex justify-between items-center">
                <div>
                  <p className="text-[#6b11cb] text-sm font-medium">Սկսած</p>
                  <p className="text-gray-900 font-extrabold text-xl">{rate.currencyLabel}</p>
                </div>
                <span className="text-gray-400 text-sm text-right">
                  {rate.description.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word} {i === 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoan3iMasin2;