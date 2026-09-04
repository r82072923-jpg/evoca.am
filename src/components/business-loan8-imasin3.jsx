import React, { useEffect } from 'react';
import { db } from '../firebaseConfog';
import { doc, setDoc } from 'firebase/firestore';

const tabs = [
  'Վարկի մասին',
  'Պայմաններ և սակագներ',
];

const termsData = {
  currency: "ՀՀ դրամ",
  borrowers: [
    "Հայաստանի ռեզիդենտ իրավաբանական և անհատ ձեռնարկատեր անձինք:",
    "Վարկառուի ֆինանսական հաշվետվությունների վերլուծության արդյունքները պետք է բավարարեն Բանկի պահանջներին:"
  ],
  purpose: {
    intro: "Էներգաարդյունավետ սարքավորումների և մեքենաների ձեռքբերում, ենթակառուցվածքների կառուցում և այլ նախագծեր, որոնք օգտագործում են վերականգնվող էներգիայի աղբյուրներ`",
    list: [
      "Ջեռուցում, օդորակում և օդափոխություն,",
      "Լուսավորություն,",
      "Արտադրական նպատակներով ջեռուցում/ սառեցում,",
      "Շենքի պատերի և տանիքի ջերմամեկուսացում,",
      "Արդյունաբերական արտադրության մեքենաներ,",
      "Արեգակնային էներգիա,",
      "Կենսազանգվածներից ստացվող էներգիա,",
      "Այլ էներգաարդյունավետ ներդրումներ, որոնք համապատասխանում են «ԳԱՖ - Էներգաարդյունավետություն ՓՄՁ-ների համար» ծրագրի պահանջներին:"
    ]
  },
  limits: [
    {
      label: "Առանց գրավի",
      value: "1,000,000-5,000,000 ՀՀ դրամ (նվազագույնը մեկ ֆիզիկական կամ իրավաբանական անձի երաշխավորությամբ)"
    },
    {
      label: "Գրավի դիմաց",
      value: "5,000,001 - 500,000,000 ՀՀ դրամ"
    }
  ],
  disbursementMethod: "Անկանխիկ",
  loanTerm: "մինչև 5 տարի",
  interestRates: [
    { range: "1,000,000-5,000,000 ՀՀ դրամ վարկերի դեպքում", rate: "10 %" },
    { range: "5,000,001-20,000,000 ՀՀ դրամ վարկերի դեպքում", rate: "9.5 %" },
    { range: "20,000,001-500,000,000 ՀՀ դրամ վարկերի դեպքում", rate: "9 %" }
  ],
  collateral: [
    "Անշարժ և շարժական գույքը,",
    "Ավանդային կամ ընթացիկ հաշիվների դրամական միջոցները,",
    "Ոսկու ստանդարտացված ձուլակտորները կամ զարդերից,",
    "Պետական կարճաժամկետ պարտատոմսերը կամ այլ արժեթղթերը,",
    "Անհրաժեշտության դեպքում՝ այլ գրավների առկայության պարագայում կարող են գրավ ընդունվել նաև շրջանառու միջոցները և պատրաստի արտադրանքը (հաշվի առնելով այլ գրավների իրացվելիության աստիճանը կամ վարկ/գրավ հարաբերակցության չափը, վարկավորման ժամկետը, հաճախորդի բնութագիրը և այլն):",
    "Լրացուցիչ պայման - Բիզնեսի հիմնադիրների/իրական շահառուների անձնական երաշխավորությունների առկայությունը պարտադիր է, ինչպես նաև որպես լրացուցիչ ապահովում Բանկը կարող է պահանջել նաև այլ ֆիզիկական կամ իրավաբանական անձանց երաշխավորություն:"
  ],
  ltvLimits: [
    { range: "Անշարժ գույքի և այլ հիմնական միջոցների դեպքում", limit: "գնահատված արժեքի մինչև 70%-ի չափով" },
    { range: "Պետական կարճաժամկետ պարտատոմսերի դեպքում", limit: "անվանական արժեքի մինչև 95%-ի չափով" },
    { range: "Այլ արժեթղթերի դեպքում", limit: "գնահատված արժեքի մինչև 70%-ի չափով" },
    { range: "Ոսկու ստանդարտացված ձուլակտորների և թանկարժեք մետաղների զարդերի դիմաց", limit: "գնահատված արժեքի մինչև 95%-ի չափով" },
    { range: "Դրամական միջոցների (ավանդային և ընթացիկ հաշվի) դեպքում", limit: "մինչև 90%-ի չափով" },
    { range: "Շրջանառու միջոցների դեպքում", limit: "գնահատված արժեքի մինչև 50%-ի չափով" }
  ],
  insurance: "Ըստ անհրաժեշտության",
  guarantorRequirements: [
    "ՀՀ ռեզիդենտ իրավաբանական անձ, անհատ ձեռնարկատեր կամ ֆիզիկական անձ:",
    "Ժամկետանց պարտավորությունների բացակայություն (ներառյալ տրամադրված երաշխավորությունների գծով):",
    "Նախորդ 12 ամիսների ընթացքում վարկային պարտավորությունների գծով դասակարգումների բացակայություն, իսկ մարումների գծով ուշացման օրերի հանրագումարը չպետք է գերազանցի 30 օրը:"
  ],
  fees: [
    { name: "Վարկային հայտի ուսումնասիրման վճար", value: "0 դրամ է:" },
    { name: "Վարկի սպասարկման վճար", value: "միանվագ, տրամադրվող գումարի 0,5% չափով։" },
    { name: "Կանխիկացման վճար", value: "գանձում ենք բանկային հաշվից կանխիկացման վճար ըստ Բանկի գործող սակագների:" }
  ],
  stateTaxesAndExpenses: [
    "ՀՀ պետական իրավասու մարմիններում վճարվող պետտուրքը՝ գրավի պայմանագրի վավերացման և գրանցման համար:",
    "Գրավադրվող արժեքների գնահատման ծառայության արժեքը՝ Բանկի հետ համագործակցող անկախ գնահատող կազմակերպությունների սահմանված սակագների համաձայն:"
  ],
  additionalConditions: {
    standard: [
      "150.0 մլն. ՀՀ դրամը չգերազանցող վարկերի դեպքում Բանկի պահանջով կարող է անցկացվել էներգաաուդիտ,",
      "150.0 մլն. ՀՀ դրամը գերազանցող վարկերի դեպքում էներգաաուդիտի անցկացումը պարտադիր է:"
    ],
    nonStandard: "Ոչ ստանդարտ և խառը էներգաարդյունավետ ներդրումների պարագայում՝ էներգաաուդիտի անցկացումը պարտադիր է:",
    note: "Նշում - Էներգաաուդիտի ծառայության վճարներ վարկառու-հաճախորդներից չեն գանձվում, դրանք կատարվում են Բանկի կողմից:"
  },
  warnings: [
    "Տոկոսագումարների և վարկի գումարի մարումները ժամանակին չկատարելու դեպքում գրավադրված գույքը կարող է օրենքով սահմանված կարգով բռնագանձվել, իսկ ձեր մասին տեղեկատվությունը կգրանցվի վարկային նեգիստրում (ինչը հետագայում կարող է խոչընդոտել նոր վարկերի ստացումը):",
    "Վարկային պարտավորությունների չկատարման հետևանքով գրավի հաշվին պարտավորությունները մարելու դեպքում, եթե վարկառուի վարկային պարտավորությունները ծածկելու համար գրավի արժեքը չի բավարարում, ապա մենք (գործող օրենսդրության համաձայն) հնարավորություն ունենք կատարել վարկային պարտավորությունների մարումներ ձեր այլ գույքի հաշվին (առկայության դեպքում):"
  ]
};

const BusinessLoan8iMasin3 = ({ activeTab, setActiveTab }) => {

  useEffect(() => {
    const uploadDataToFirebase = async () => {
      try {
        await setDoc(doc(db, "businessLoan8iMasin2", "loanTermsDoc"), termsData);
        console.log("Տվյալները հաջողությամբ ուղարկվեցին Firebase (`businessLoan8iMasin2`)։");
      } catch (error) {
        console.error("Սխալ տվյալների ուղարկման ժամանակ:", error);
      }
    };

    uploadDataToFirebase();
  }, []);

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
      <div className="border border-purple-200 rounded-lg overflow-hidden shadow-sm bg-white mb-10">
        <table className="w-full border-collapse text-left">
          <tbody>
            <tr className="border-b border-purple-100">
              <td className="w-1/4 p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Արժույթը
              </td>
              <td className="w-3/4 p-4 text-gray-700">
                {termsData.currency}
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Վարկառուները
              </td>
              <td className="p-4 text-gray-700">
                <ul className="space-y-2">
                  {termsData.borrowers.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Նպատակը
              </td>
              <td className="p-4 text-gray-700 space-y-3">
                <p>{termsData.purpose.intro}</p>
                <ul className="space-y-2 pl-2">
                  {termsData.purpose.list.map((purposeItem, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                      <span>{purposeItem}</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Սահմանաչափերը
              </td>
              <td className="p-4 text-gray-700 p-0">
                <table className="w-full">
                  <tbody>
                    {termsData.limits.map((limit, index) => (
                      <tr key={index} className={index !== termsData.limits.length - 1 ? "border-b border-purple-100" : ""}>
                        <td className="w-1/3 p-4 text-gray-600 border-r border-purple-100 align-top">
                          {limit.label}
                        </td>
                        <td className="w-2/3 p-4 text-gray-800 font-medium">
                          {limit.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Տրամադրման եղանակը
              </td>
              <td className="p-4 text-gray-700">
                {termsData.disbursementMethod}
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Մարման ժամկետը
              </td>
              <td className="p-4 text-gray-700">
                {termsData.loanTerm}
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Տարեկան անվանական տոկոսադրույքը
              </td>
              <td className="p-4 text-gray-700 p-0">
                <table className="w-full">
                  <tbody>
                    {termsData.interestRates.map((rateObj, index) => (
                      <tr key={index} className={index !== termsData.interestRates.length - 1 ? "border-b border-purple-100" : ""}>
                        <td className="w-3/4 p-4 text-gray-600 border-r border-purple-100 align-top">
                          {rateObj.range}
                        </td>
                        <td className="w-1/4 p-4 text-[#6b11cb] font-extrabold text-right">
                          {rateObj.rate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Գրավի առարկա
              </td>
              <td className="p-4 text-gray-700">
                <ul className="space-y-2">
                  {termsData.collateral.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Վարկ/գրավ ընունելի սահմանաչափերը
              </td>
              <td className="p-4 text-gray-700 p-0">
                <table className="w-full">
                  <tbody>
                    {termsData.ltvLimits.map((item, index) => (
                      <tr key={index} className={index !== termsData.ltvLimits.length - 1 ? "border-b border-purple-100" : ""}>
                        <td className="w-2/3 p-4 text-gray-600 border-r border-purple-100 align-top">
                          {item.range}
                        </td>
                        <td className="w-1/3 p-4 text-gray-800 font-medium">
                          {item.limit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Ապահովագրություն
              </td>
              <td className="p-4 text-gray-700">
                {termsData.insurance}
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Պահանջներ երաշխավոր անձանց նկատմամբ
              </td>
              <td className="p-4 text-gray-700">
                <ul className="space-y-2">
                  {termsData.guarantorRequirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Գանձվող վճարներ
              </td>
              <td className="p-4 text-gray-700 p-0">
                <table className="w-full">
                  <tbody>
                    {termsData.fees.map((fee, index) => (
                      <tr key={index} className={index !== termsData.fees.length - 1 ? "border-b border-purple-100" : ""}>
                        <td className="w-1/2 p-4 text-gray-600 border-r border-purple-100 align-top">
                          {fee.name}
                        </td>
                        <td className="w-1/2 p-4 text-gray-800 font-medium">
                          {fee.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Պետական տուրքեր և այլ ծախսեր
              </td>
              <td className="p-4 text-gray-700">
                <ul className="space-y-2">
                  {termsData.stateTaxesAndExpenses.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Լրացուցիչ պայմաններ
              </td>
              <td className="p-4 text-gray-700 space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">• Ստանդարտ էներգաարդյունավետ ներդրումների պարագայում՝</p>
                  <ul className="space-y-2 pl-4">
                    {termsData.additionalConditions.standard.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#6b11cb] font-bold mt-[2px]">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="flex items-start gap-2">
                  <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                  <span>{termsData.additionalConditions.nonStandard}</span>
                </p>
                <p className="flex items-start gap-2 font-medium text-gray-900 bg-purple-50/40 p-3 rounded-lg">
                  <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                  <span>{termsData.additionalConditions.note}</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div> 
      <div className="mt-8 space-y-4">
        <h3 className="text-[#6b11cb] font-bold text-lg">Զգուշացում</h3>
        <div className="space-y-3 text-gray-700 text-sm md:text-base">
          {termsData.warnings.map((warning, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-[#6b11cb] font-bold text-xl leading-none mt-[2px]">•</span>
              <p>{warning}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessLoan8iMasin3;