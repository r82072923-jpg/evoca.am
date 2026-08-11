import React from 'react';
  const tabs = [
    'Քարտի մասին',
    'Տրամադրման պայմանները',
    'Սպասարկման պայմանները'
  ];
function MyLeriMasin2({activeTab,setActiveTab}) {
  return (
    <div className="w-full max-w-4xl mx-auto font-sans text-[#333333] p-4 leading-relaxed space-y-6">
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
      <p className="text-base sm:text-lg">
        <strong className="text-purple-700">Evocabank</strong>-ը և{' '}
        <strong className="text-purple-700">MYLER MOUNTAIN RESORT</strong>-ը ներկայացնում են նվեր քարտ՝ հատուկ էքստրիմի ու ակտիվ հանգստի սիրահարների համար:
      </p>

      <p className="text-base sm:text-lg">
        Այնպես որ, դու գիտես՝ ում նվիրել <strong className="text-purple-700">MyLer Gift Card</strong>-ը:
      </p>

      <p className="text-base sm:text-lg">
        Քարտը հնարավորություն է տալիս օգտվել Myler համալիրի տարածքում գործող սպասարկման բոլոր կետերից և ինքնուրույն ընտրել լավագույն փորձառությունը:
      </p>

      <p className="text-base sm:text-lg">
        Նվեր քարտը գործում է բացառապես անկանխիկ տարբերակով և կարող է օգտագործվել քարտի ձեռքբերման օրվանից սկսած 1 տարվա ընթացքում:
      </p>

      <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
        Ինչպե՞ս ձեռք բերել MyLer Gift Card-ը:
      </h3>

      <p className="text-base sm:text-lg">
        <strong className="text-purple-700">MyLer Gift Card</strong> կարելի է ձեռք բերել{' '}
        <strong className="text-purple-700">Evocabank</strong>-ի մասնաճյուղերից (բացառությամբ՝ Էրեբունի և Yerevan Mall մասնաճյուղերի)՝ ներկայացնելով անձնագիր կամ ID քարտ: Քարտը տրամադրվում է հենց տեղում՝ նորաոճ փաթեթավորմամբ:
      </p>

      <p className="text-base sm:text-lg">
        Նվեր քարտը կարողես պատվիրել նաև օնլայն՝{' '}
        <strong className="text-purple-700">Evocabank</strong>-ի կամ{' '}
        <strong className="text-purple-700">MYLER MOUNTAIN RESORT</strong>-ի պաշտոնական կայքերի միջոցով՝ մուտքագրելով համապատասխան գումարը քարտին:
      </p>

      <p className="text-base sm:text-lg">
        Մենք այն անվճար կմոտեցնենք <strong className="text-purple-700">Evocabank</strong>-ի քո նախընտրած մասնաճյուղ կամ կառաքենք քո կողմից նշված հասցեով: Քարտը օնլայն պատվիրելու դեպքում, այն կտրամադրվի հաջորդ աշխատանքային օրը: Առաքման արժեքը՝{' '}
        <strong className="text-purple-700">1,000 ՀՀ դրամ</strong>:
      </p>
    </div>
  );
}

export default MyLeriMasin2;