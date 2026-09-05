import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfog';

export const uploadBusinessLoanData = async () => {
  const loanData = {
    tableData: [
      { id: '1.', title: 'Արժույթ', content: 'ՀՀ դրամ, ԱՄՆ դոլար կամ եվրո' },
      { id: '2.', title: 'Վարկառու', content: 'ՀՀ ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձ, անհատ ձեռնարկատեր*' },
      { id: '3.', title: 'Նպատակ', content: [
        'Հիմնական միջոցների ձեռքբերում/կապիտալ ներդրումների իրականացում',
        'Նախագծերի ֆինանսավորում',
        'Շրջանառու միջոցների համալրում',
        'Ընթացիկ ծախսերի ֆինանսավորում, կրեդիտորական պարտքի մարում',
        'Այլ ֆինանսական կազմակերպություններում և/կամ Էվոկաբանկ ՓԲԸ-ում գործող վարկերի վերաֆինանսավորում',
        'Այլ նպատակներ'
      ]},
      { id: '4.', title: 'Սահմանաչափ', content: '10,000,000-4,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ,' },
      { id: '5.', title: 'Տրամադրման եղանակ', content: [
        'Անկանխիկ',
        'Վարկերը կարող են տրամադրվել միանվագ կամ փուլերով'
      ]},
      { id: '6.', title: 'Մարման ժամկետ', content: [
        'Մինչև 120 ամիս՝ հաստատուն տոկոսադրույքի դեպքում,',
        'Մինչև 180 ամիս՝ լողացող տոկոսադրույքի դեպքում*:'
      ]},
      { id: '7.', title: 'Մարման եղանակը', content: {
        types: [
          '«Անուիտետային»',
          '«Զսպանակաձև»',
          'Անհատական՝ կախված հաճախորդի գործունեության տեսակի առանձնահատկությունից,'
        ],
        description: 'Անհատական մարման եղանակի դեպքում մայր գումարի մարումները պետք է լինեն տարեկան հավասարաչափ և նվազագույնը տարվա ընթացքում մայր գումարի 3 մարում (չի վերաբերվում արտոնյալ ժամանակահատվածին և նախագծերի ֆինանսավորումներին):'
      }},
      { id: '8.', title: 'Արտոնյալ ժամանակահատված', content: 'Սահմանվում է բիզնեսի առանձնահատկություններից ելնելով' },
      { id: '9.', title: 'Տարեկան անվանական տոկոսադրույք*', content: [
        { currency: 'ՀՀ դրամ', fixed: 'Սկսած՝ 12.25%-ից', floating: 'Սկսած՝ 11.5%-ից (սկսած՝ 4.78%-ից + փոփոխուն բաղադրիչի հանրագումար)' },
        { currency: 'ԱՄՆ դոլար', fixed: 'Սկսած՝ 8.5%-ից', floating: 'Սկսած՝ 8.4%-ից (սկսած 4.69%-ից + փոփոխուն բաղադրիչի հանրագումար)' },
        { currency: 'Եվրո', fixed: 'Սկսած՝ 8.2%-ից', floating: 'Սկսած՝ 8.2%-ից (սկսած 5.65%-ից + փոփոխուն բաղադրիչի հանրագումար)' }
      ]},
      { id: '10.', title: 'Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր', content: [
        'ժամկետանց վարկի դեպքում՝ օրական 0.015%-ի չափով',
        'ժամկետանց տոկոսագումարների դեպքում՝ օրական 0.1%-ի չափով'
      ]},
      { id: '11.', title: 'Ժամկետից շուտ մարելու տուգանք', content: 'Մինչև պայմանագրի գործողության ժամկետի կեսը մարումների ժամանակացույցով սահմանված ամսական վարկի մայր գումարի չափից ավելին մարելու դեպքում վճարում է տուգանք՝ մարումների ժամանակացույցով սահմանված ամսական վարկի գումարի չափը գերազանցող գումարի 5%-ի չափով:' },
      { id: '12.', title: 'Ապահովում', content: 'Գրավ և/կամ երաշխավորություն' },
      { id: '13.', title: 'Երաշխավոր', content: 'ՀՀ ռեզիդենտ իրավաբանական անձ, ֆիզիկական անձ (ըստ անհրաժեշտության)' },
      { id: '14.', title: 'Վարկի տրամադրման միանվագ վճար (գանձվում է վարկի տրամադրման պահին)', content: '0.5%, սակայն առավելագույնը 100,000 ՀՀ դրամ' },
      { id: '15.', title: 'Վարկի օգտագործում', content: 'Համաձայն Բանկային հաշվի սպասարկման պայմանների և սակագների' },
      { id: '16.', title: 'Այլ ծախսեր', content: [
        'ՀՀ պետական իրավասու մարմիններում գրավի պետական գրանցման վճար,',
        'Նոտարական ծառայությունների վճար,',
        'Գրավադրվող արժեքների գնահատման վճար՝ անկախ գնահատող կազմակերպությունների սահմանած սակագների համաձայն:'
      ]}
    ],
    limitsData: [
      "Անշարժ գույք և հիմնական միջոցներ գրավադրելիս՝ տրամադրվում է շուկայական արժեքի առավելագույնը 70%-ը:",
      "Կարճաժամկետ պետական պարտատոմսերի պարագայում՝ անվանական արժեքի մինչև 95%-ը:",
      "Այլ տիպի արժեթղթերի համար՝ գնահատված արժեքի առավելագույնը 70%-ը:",
      "Ստանդարտ ոսկյա ձուլակտորներ կամ թանկարժեք մետաղի ջարդոն գրավադրելիս՝ գնահատված արժեքի մինչև 95%-ը:",
      "Կիսաթանկարժեք ու թանկարժեք քարերով ապահովման դեպքում՝ մինչև գնահատված արժեքի 50%-ը:",
      "Դրամական միջոցներով (օրինակ՝ ավանդ կամ ընթացիկ հաշիվ) ապահովվածության դեպքում՝ մինչև 90%:",
      "Շրջանառու միջոցների գրավի պարագայում՝ գնահատված արժեքի մինչև 50%-ը:",
      "Դրամական հոսքերով ապահովված վարկերը հասանելի են մեր առնվազն 1 տարվա հաճախորդներին՝ իրենց ընթացիկ հաշվի տարեկան շրջանառության մինչև 30%-ի չափով (մարման ժամկետը՝ մինչև 180 օր):"
    ],
    decisionTermsData: [
      "Վարկի վերաբերյալ որոշումն ընդունվում է պահանջվող փաստաթղթերի ամբողջական փաթեթը ստանալուց հետո՝ մինչև 10 բանկային օրվա ընթացքում:",
      "Կայացված որոշման մասին տեղեկատվությունը տրամադրվում է 1 բանկային օրվա ընթացքում՝ բանավոր տարբերակով, իսկ պահանջի դեպքում՝ նաև գրավոր:",
      "Գումարը հատկացվում է գրավի ձևակերպման գործընթացի ավարտից հետո՝ մինչև 5 բանկային օրվա մեջ (եթե առկա է փաստաթղթերի ամբողջական փաթեթը):"
    ],
    positiveCriteria: [
      "Ձեր վարկունակության բավարար մակարդակը՝ ըստ մեր իրավական ակտերով սահմանված գնահատման չափանիշների,",
      "Մեզ ներկայացված տվյալների և փաստաթղթերի արժանահավատությունը,",
      "Ձեր պատասխանատվության և պարտաճանաչության դրական գնահատումը՝ ըստ ձեր վարկային պատմության ուսումնասիրության և վերլուծության,",
      "Գրավի իրացվելիության բավարար մակարդակը՝ ըստ մեր իրավական ակտերով սահմանված չափանիշների և «գրավ/վարկ» հարաբերակցության ընունելի սահմանաչափերի,",
      "Վարկի օգտագործման նպատակների կամ գործարար ծրագրերի հիմնավոր լինելը:"
    ],
    rejectionCriteria: [
      "Ձեր վարկունակության ոչ բավարար մակարդակի գնահատումը՝ ըստ մեր իրավական ակտերով սահմանված հաճախորդ-վարկառուների վարկունակության գնահատման չափանիշների,",
      "Մեզ ներկայացված տվյալների և փաստաթղթերի անարժանահավատությունը,",
      "Ձեր պատասխանատվության և պարտաճանաչության բացասական գնահատումը՝ ըստ ձեր վարկային պատմության ուսումնասիրության և վերլուծության,",
      "Վարկի օգտագործման նպատակների կամ գործարար ծրագրերի շահութաբերության թերիհիմնավորումը,",
      "Այլ հիմնավոր պատճառներ, որոնք կարող են ազդել տրամադրվող վարկի վերադարձելիության վրա:"
    ],
    repaymentRules: [
      {
        text: "Վարկերը մարում եք գրաֆիկի համաձայն, հետևյալ երկու եղանակներից մեկով, ըստ ձեր ցանկության՝",
        subItems: [
          "«Անուիտետային» (հավասարաչափ ամսական մարում), որը փոփոխական մասերով ներառում է մայր գումարը և կուտակված տոկոսները,",
          "«Զսպանակաձև» (փոփոխական ամսական մարում), որը ներառում է մայր գումարի մարում՝ հավասար, իսկ կուտակված տոկոսները՝ փոփոխական չափով:"
        ]
      },
      { text: "Վարկերի տոկոսադրույքները հաշվում ենք գումարի փաստացի մնացորդի նկատմամբ՝ վարկի տրամադրման օրվանից մինչև ձեր կողմից մեր հանդեպ ստանձնած պարտավորությունների կատարման նախորդ օրն ընկած ժամանակահատվածի համար (վարկի մարման օրվա նկատմամբ տոկոսադրույք չենք գանձում):" },
      { text: "Տոկոսագումարների գծով հաշվարկները կատարվում են 365 օրացուցային օրերի համար: Եթե վճարման օրը ոչ աշխատանքային է, ապա վճարում եք դրան հաջորդող աշխատանքային օրվա ընթացքում:" },
      { text: "Վճարումները կարող եք իրականացնել մեր Գլխամասային գրասենյակում և ցանկացած մասնաճյուղում (բացառությամբ «Էրեբունի»-ի):" }
    ],
    creditLinesData: {
      intro: "Վարկային գծեր տրամադրում ենք Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական և անհատ ձեռնարկատեր անձանց՝ բիզնես վարկերի համար սահմանված տոկոսադրույքներով, մինչև 5 տարի մարման ժամկետով, դրամով կամ արտարժույթով։ Կարող եք օգտվել հետևյալ վարկային գծերից՝",
      items: [
        {
          title: "Վարկային գիծ վերականգնվող",
          description: "որի դեպքում կարող եք հաստատված վարկային գծի սահմանաչափում և գործելու ժամանակահատվածում պարբերաբար մարումներ կատարել և մնացորդի սահմաններում միջոցներ ստանալ վարկային գծից: Ընդ որում՝ վարկային գծի չօգտագործված մասի վրա սահմանվում է 0-4% տարեկան տոկոսադրույք:"
        },
        {
          title: "Ուղղակի վարկային գիծ",
          description: "որի դեպքում վարկային գիծը տրամադրում ենք մաս-մաս, և կատարված մարումներից հետո վարկային գծի սահմանաչափը չի վերականգնվում, ընդ որում՝ չօգտագործված մասի վրա տոկոսների հաշվարկ չենք կատարում:"
        }
      ]
    },
    earlyRepaymentText: "Մինչև պայմանագրի գործողության ժամկետի կեսը մարումների ժամանակացույցով սահմանված ամսական վարկի մայր գումարի չափից ավելին մարելու դեպքում վճարում է տուգանք՝ մարումների ժամանակացույցով սահմանված ամսական վարկի գումարի չափը գերազանցող գումարի 5%-ի չափով:",
    warningsData: [
      "Տոկոսագումարների և վարկի գումարի մարումները ժամանակին չկատարելու դեպքում գրավադրված գույքը կարող է օրենքով սահմանված կարգով բռնագանձվել, իսկ ձեր մասին տեղեկատվությունը կգրանցվի Վարկային ռեգիստրում (ինչը հետագայում կարող է խոչընդոտել նոր վարկերի ստացումը):",
      "Վարկային պարտավորությունների չկատարման հետևանքով գրավի հաշվին պարտավորությունները մարելու դեպքում, եթե վարկառուի վարկային պարտավորությունները ծածկելու համար գրավի արժեքը չի բավարարում, ապա մենք (գործող օրենսդրության համաձայն) հնարավորություն ունենք կատարել վարկային պարտավորությունների մարումներ ձեր այլ գույքի հաշվին (առկայության դեպքում):"
    ]
  };

  try {
    const docRef = await addDoc(collection(db, "businessLoan15iMasin2"), loanData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
const tabs = [
  'Վարկի մասին',
  'Պայմաններ և սակագներ',
  'Պահանջվող փաստաթղթեր'
];

function BusinessLoan15iMasin3({activeTab, setActiveTab}) {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white font-sans">
        <div className="flex justify-end mb-4">
            <button
            onClick={uploadBusinessLoanData}
            className="bg-[#6F11B7] text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-purple-800 transition-colors"
            >
            Ուղարկել տվյալները Firebase
            </button>
      </div>
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
      <div className="border-t-4 border-[#6F11B7] w-full shadow-sm">
        <table className="w-full border-collapse border border-purple-100 text-sm text-gray-800">
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-b border-purple-100">
                <td className="border-r border-purple-100 p-4 w-12 align-top font-medium text-center">
                  {row.id}
                </td>
                <td className="border-r border-purple-100 p-4 w-1/4 align-top font-medium">
                  {row.title}
                </td>
                <td className="p-4 align-top">
                  {row.content}
                </td>
              </tr>
            ))}
            <tr className="border-b border-purple-100">
              <td colSpan="3" className="p-4 align-top text-xs md:text-sm text-gray-700 space-y-3">
                <p>
                  *Անհատ ձեռնարկատեր հանդիսացող ֆիզիկական անձի տարիքը վարկի սպասարկման ողջ ընթացքում չպետք է գերազանցի 70 տարեկանը:
                </p>
                <p>
                  **120 ամիսը գերազանցող ժամկետով ֆինանսավորում կարող է տրամադրվել միայն հիմնական միջոցների ձեռքբերման (եթե գրավը հանդիսանում է անշարժ գույք և/կամ ձեռք է բերվում անշարժ գույք), կառուցապատման, նախագծերի ֆինանսավորման նպատակով:
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Անհրաժեշտ տեղեկատվություն
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-gray-800">
          <li className="flex gap-3 items-start">
            <span className="text-[#6F11B7] text-lg mt-0.5">•</span>
            <p>
              Ձեզ հետ փոխհարաբերությունները կարգավորվում են վարկային պայմանագրով՝ ՀՀ օրենսդրական ակտերին համապատասխան:
            </p>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-[#6F11B7] text-lg mt-0.5">•</span>
            <p>
              Վարկավորման տոկոսադրույքները, ժամկետները, սահմանաչափերը, պայմանները և սկզբունքները սահմանվում են մեր «Վարկային քաղաքականությամբ» և վարկավորման գործընթացը կարգավորող ներքին այլ իրավական ակտերով:
            </p>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-[#6F11B7] text-lg mt-0.5">•</span>
            <p>
              Մենք՝ Ծրագրային վարկավորման գործընթացներում ընդգրկվելու դեպքում, վարկային միջոցները տրամադրում ենք տվյալ Ծրագրի վարկավորման պայմաններով՝ տոկոսադրույքներ, սահմանաչափեր, մարման ժամկետ, գրավ/վարկ հարաբերակցություն և այլն (Ծրագրային վարկավորման պայմանները չեն կարգավորվում մեր «Վարկային քաղաքականությամբ»):
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Վարկ/գրավ ընդունելի սահմանաչափերը՝ ըստ գրավի տեսակների
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-gray-800">
          {limitsData.map((item, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="text-[#6F11B7] text-xl leading-none mt-0.5">•</span>
              <p className="leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Որոշումների կայացման և վարկերի տրամադրման ժամկետները
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-gray-800">
          {decisionTermsData.map((item, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="text-[#6F11B7] text-xl leading-none mt-0.5">•</span>
              <p className="leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Վարկի վերաբերյալ որոշման կայացման չափանիշները
        </h3>
        <div className="mb-6">
          <h4 className="text-gray-900 font-bold text-base md:text-lg mb-4">
            Դրական որոշման կայացման չափանիշները՝
          </h4>
          <ul className="space-y-4 text-sm md:text-base text-gray-800">
            {positiveCriteria.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="text-[#6F11B7] text-xl leading-none mt-0.5">•</span>
                <p className="leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 font-bold text-base md:text-lg mb-4">
            Մերժման չափանիշները՝
          </h4>
          <ul className="space-y-4 text-sm md:text-base text-gray-800">
            {rejectionCriteria.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="text-[#6F11B7] text-xl leading-none mt-0.5">•</span>
                <p className="leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Վարկերի մարման, տոկոսների հաշվեգրման և վճարման կարգը
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-gray-800">
          {repaymentRules.map((rule, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="text-[#6F11B7] text-xl leading-none mt-0.5">•</span>
              <div className="space-y-2">
                <p className="leading-relaxed">{rule.text}</p>
                {rule.subItems && (
                  <ul className="space-y-2 pl-4">
                    {rule.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="flex gap-2 items-start">
                        <span className="text-gray-400 mt-1">-</span>
                        <span className="leading-relaxed">{subItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Վարկային գծերի տրամադրումը
        </h3>
        <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-4">
          {creditLinesData.intro}
        </p>
        <ul className="space-y-4 text-sm md:text-base text-gray-800">
          {creditLinesData.items.map((item, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="text-[#6F11B7] text-xl leading-none mt-0.5">•</span>
              <p className="leading-relaxed">
                <strong className="text-gray-900">{item.title}՝</strong> {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Վաղաժամկետ մարման պայմանները
        </h3>
        <p className="text-sm md:text-base text-gray-800 leading-relaxed">
          {earlyRepaymentText}
        </p>
      </div>
      <div className="mt-10 mb-8">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Զգուշացում
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-gray-800">
          {warningsData.map((warning, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="text-[#6F11B7] text-xl leading-none mt-0.5">•</span>
              <p className="leading-relaxed">{warning}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BusinessLoan15iMasin3;