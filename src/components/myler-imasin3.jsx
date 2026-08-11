import React from 'react';

const tableData = [
  {
    service: 'Քարտի տեսակ',
    value: 'ArCa Gift card'
  },
  {
    service: 'Քարտի արժույթ',
    value: 'ՀՀ դրամ'
  },
  {
    service: 'Նվեր քարտի համալրման գումար',
    value: 'Նվազագույնը՝ 30 000 ՀՀ դրամ\nԱռավելագույնը՝ 2 000 000 ՀՀ դրամ'
  },
  {
    service: 'Քարտի գործողության ժամկետ',
    value: 'Քարտի թողարկման պահից 1 տարի'
  },
  {
    service: 'MyLer gift քարտով կատարվող գործարքներ',
    value: 'Myler-ի տարածքում գործող առևտրային կետեր'
  },
  {
    service: 'Կանխիկացում',
    value: 'Չի թույլատրվում'
  },
  {
    service: 'Քարտային հաշվի չնվազող մնացորդ',
    value: 'Չի սահմանվում'
  },
  {
    service: 'Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք',
    value: '0%'
  },
  {
    service: 'Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար',
    value: 'Անվճար'
  },
  {
    service: 'Քարտի գործողության կասեցում',
    value: 'Անվճար'
  },
  {
    service: 'Քարտի վերաթողարկում',
    value: 'Չի վերաթողարկվում'
  },
  {
    service: 'Մնացորդի տեղափոխության միջնորդավճար[1]',
    value: '4 900 ՀՀ դրամ'
  },
  {
    service: 'PIN ծածկագրի գեներացման հայտ',
    value: '1 000 ՀՀ դրամ'
  },
  {
    service: 'Քարտի վերաթողարկման վճար',
    value: '1 000 ՀՀ դրամ'
  },
  {
    service: 'Քարտային հաշվի ամսական քաղվածքի տրամադրում',
    value: 'Անվճար'
  },
  {
    service: 'Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար',
    value: 'Անվճար'
  },
  {
    service: 'Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում',
    value: 'Անվճար'
  },
  {
    service: 'Գերաճախի գծով տույժեր',
    value: '20% տարեկան'
  },
  {
    service: 'Ակտիվացված քարտի գործողության ժամկետի ավարտից հետո ամսական սպասարկման վճար',
    value: '10% ժամկետի ավարտի օրվա դրությամբ քարտային հաշվի մնացորդի նկատմամբ'
  },
  {
    service: 'Կից քարտի պատվիրում առաքման եղանակով դեպի հաճախորդի նշած հասցե',
    value: '1 000 ՀՀ դրամ'
  },
  {
    service: 'Կից քարտի պատվիրում դեպի Բանկի մասնաճյուղ',
    value: 'Անվճար'
  }
];
  const tabs = [
    'Քարտի մասին',
    'Տրամադրման պայմանները',
    'Սպասարկման պայմանները'
  ];
function MyLeriMasin3({activeTab,setActiveTab}) {
  return (
    <div className="w-full max-w-6xl mx-auto font-sans text-[#333333] p-4">
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
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse text-base">
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors border-b border-[#ebdef5]">
                <td className="py-4 px-4 align-top font-medium w-3/5 text-[#333333]">
                  {row.service}
                </td>
                <td className="py-4 px-4 align-top w-2/5 text-[#333333]">
                  {typeof row.value === 'string' && row.value.includes('\n') ? (
                    row.value.split('\n').map((paragraph, idx) => (
                      <p key={idx} className={paragraph ? 'mb-2' : ''}>
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    row.value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-xs text-gray-500 leading-relaxed">
        <p>
          <sup>[1]</sup> Մնացորդի տեղափոխության համար հաճախորդից գանձվում է GIFT քարտերի պատվիրումով սահմանված համապատասխան միջնորդավճար: Քարտի վավերականության ժամկետը լրանալուց հետո քարտի կորստի կամ վնասման դեպքում վերջինիս մնացորդային գումարը կարող է տրամադրվել բացառապես մնացորդի տեղափոխման միջոցով այլ GIFT քարտի: Սույն ենթակետով սահմանված դրույթը վերաբերում է ինչպես ակտիվացված, այնպես էլ չակտիվացված GIFT քարտերին:
        </p>
      </div>
    </div>
  );
}

export default MyLeriMasin3;