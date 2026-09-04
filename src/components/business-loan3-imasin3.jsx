import React, { useEffect } from 'react';
import { collection, doc, setDoc, getDocs, } from 'firebase/firestore';
import { db } from './firebaseConfog'; 
const fullLoanTermsData = [
  {
    id: '1.',
    title: 'Արժույթ',
    col1: 'ՀՀ դրամ, ԱՄՆ դոլար, Եվրո',
    isFullWidth: true,
  },
  {
    id: '2.',
    title: 'Վարկառու',
    col1: 'ՀՀ ռեզիդենտ իրավաբանական անձ և անհատ ձեռնարկատեր',
    isFullWidth: true,
  },
  {
    id: '3.',
    title: 'Ֆինանսավորում',
    col1: 'Վարկ',
    col2: 'Տեղափոխվող բիզնես վարկին կից վարկ',
    isBoldValues: true,
  },
  {
    id: '4.',
    title: 'Վարկի նպատակ',
    col1: 'Այլ ֆինանսական կառույցներում գործող բիզնես ֆինանսավորումների (վարկ, օվերդրաֆտ, վարկային գիծ) տեղափոխում',
    col2List: [
      'Հիմնական միջոցների ձեռքբերում',
      'Շրջանառու միջոցների համալրում',
      'Ընթացիկ ծախսերի ֆինանսավորում',
      'Կրեդիտորական պարտքի մարում',
      'Այլ ներդրումներ:',
    ],
  },
  {
    id: '5.',
    title: 'Սահմանաչափ',
    col1: '15,000,000 - 500,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ',
    col2: '5,000,001 - 100,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ',
  },
  {
    id: '6.',
    title: 'Ժամկետ',
    col1: '36-120 ամիս',
    col2: '12-60 ամիս',
  },
  {
    id: '7.',
    title: 'Տարեկան անվանական տոկոսադրույք',
    col1List: [
      { text: 'Տեղափոխվող ֆինանսավորումների դեպքում՝ գործող տոկոսադրույք -2 տոկոսային կետ, բայց ոչ պակաս՝', isHeader: false },
      { text: 'Առանց հետվճարի՝', isHeader: true },
      { text: 'ՀՀ դրամ՝ սկսած 12%,', isHeader: false },
      { text: 'ԱՄՆ դոլար՝ սկսած 9%,', isHeader: false },
      { text: 'Եվրո՝ սկսած 8%', isHeader: false },
      { text: 'Հետվճարից օգտվելու դեպքում՝', isHeader: true },
      { text: 'ՀՀ դրամ՝ սկսած 12.5%,', isHeader: false },
      { text: 'ԱՄՆ դոլար՝ սկսած 9.5%,', isHeader: false },
      { text: 'Եվրո՝ սկսած 8.5%', isHeader: false },
    ],
    col2List: [
      { text: 'ՀՀ դրամ՝ 13%,', isHeader: false },
      { text: 'ԱՄՆ դոլար՝ 9.5%,', isHeader: false },
      { text: 'Եվրո՝ 8.5%', isHeader: false },
    ],
  },
  {
    id: '8.',
    title: 'Մայր գումարի մարման արտոնյալ ժամանակահատված (ոչ պարտադիր)',
    col1: 'Մինչև 6 ամիս',
    col2: '-------------',
  },
  {
    id: '9.',
    title: 'Վարկի օգտագործման եղանակ',
    col1: 'Անկանխիկ',
    col2: 'Անկանխիկ/կանխիկ',
  },
  {
    id: '10.',
    title: 'Հետվճար (Cash back)',
    col1: 'Վարկի պայմանագրային գումարի մինչև 2%՝ առավելագույնը 2,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ։ Հետվճարը տրամադրվում է, եթե վերաֆինանսավորվող վարկի ժամկետը նվազագույնը 60 ամիս է։',
    col2: '-------------',
  },
  {
    id: '11.',
    title: 'Վարկի ապահովում',
    col1List: [
      { text: 'Հիմնական ապահովում', isHeader: true },
      { text: 'Տեղափոխվող ֆինանսավորումների ապահովման միջոց հանդիսացող գրավներ՝ անշարժ, շարժական գույք՝ ներառյալ տրանսպորտային միջոց (եթե տեղափոխման ենթակա վարկի ապահովման միջոցն այլ ֆին. կառույցում անշարժ գույք է, վերաֆինանսավորման վարկի գրավային զամբյուղում անշարժ գույքը պարտադիր է),', isHeader: false },
      { text: 'Երաշխավոր (ըստ անհրաժեշտության):', isHeader: false },
      { text: 'Լրացուցիչ ապահովում', isHeader: true },
      { text: 'Այլ անշարժ գույք, տրանսպորտային միջոց և այլ հիմնական միջոց.', isHeader: false },
      { text: 'Ավանդային կամ ընթացիկ հաշիվների դրամական միջոցներ.', isHeader: false },
      { text: 'Ոսկու ստանդարտացված ձուլակտորներ կամ քարդրոկ.', isHeader: false },
      { text: 'Պետական կարճաժամկետ պարտատոմսեր կամ այլ արժեթղթեր.', isHeader: false },
      { text: 'Շրջանառու միջոցները և պատրաստի արտադրանքը (հաշվի առնելով այլ գրավների իրացվելիության աստիճանը կամ վարկ/գրավ հարաբերակցության չափը, վարկավորման ժամկետը, հաճախորդի բնութագիրը և այլն):', isHeader: false },
    ],
    isFullWidth: true,
  },
  {
    id: '12.',
    title: 'Երաշխավոր',
    col1: 'ՀՀ ռեզիդենտ իրավաբանական անձ, ֆիզիկական անձ',
    isFullWidth: true,
  },
  {
    id: '13.',
    title: 'Տեղափոխման ենթակա ֆինանսավորում/ներ',
    col1: 'Տեղափոխման ենթակա են ֆինանսական կառույցներում գործող ֆինանսավորումները:',
    col2: '-------------',
  },
  {
    id: '14.',
    title: 'Գանձվող վճար',
    col1List: [
      { text: 'Վարկային հայտի ուսումնասիրման վճար - չի սահմանվում,', isHeader: false },
      { text: 'Վարկի տրամադրման միանվագ վճար - չի սահմանվում:', isHeader: false },
    ],
    isFullWidth: true,
  },
  {
    id: '15.',
    title: 'Վարկի կանխիկացում',
    col1: '-------------',
    col2: 'Համաձայն Բանկի գործող պայմանների և սակագների',
  },
  {
    id: '16.',
    title: 'Մարում',
    col1List: [
      { text: '• «Անուիտետային»', isHeader: false },
      { text: '• «Հավասարաչափ»', isHeader: false },
      { text: '• Մայր գումարի արտոնյալ ժամկետի դեպքում՝ մայր գումարը արտոնյալ ժամկետի ավարտից հետո, տոկոսները՝ ամսական', isHeader: false },
    ],
    isFullWidth: true,
  },
  {
    id: '17.',
    title: 'Ժամկետանց պարտավորությունների մարման տույժ',
    col1List: [
      { text: 'Յուրաքանչյուր ժամկետանց օրվա համար Բանկն իրավունք ունի հաշվարկել տույժ սկսած ուշացման առաջին օրվանից՝', isHeader: false },
      { text: 'Ժամկետանց մայր գումարի համար՝ օրական 0.015%,', isHeader: false },
      { text: 'Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%:', isHeader: false },
    ],
    isFullWidth: true,
  },
  {
    id: '18.',
    title: 'Մայր գումարի վաղաժամկետ մարման տույժ',
    col1List: [
      { text: 'Առանց հետվճարի պայմանով վարկերի դեպքում՝ Պայմանագրի ժամանակացույցով սահմանված ամսական վարկի մայր գումարի չափից ավելին մարելու դեպքում վճարում է տույժ՝ մարումների ժամանակացույցով սահմանված ամսական վարկի գումարի չափը գերազանցող գումարի 5%-ի չափով վարկի ամբողջական ժամկետի համար:', isHeader: false },
      { text: 'Հետվճարի պայմանով վարկերի դեպքում՝ Պայմանագրի ժամանակացույցով սահմանված ամսական վարկի մայր գումարի չափից ավելին մարելու դեպքում վճարում է տույժ՝ մարումների ժամանակացույցով սահմանված ամսական վարկի գումարի չափը գերազանցող գումարի 7%-ի չափով վարկի ամբողջական ժամկետի համար:', isHeader: false },
    ],
    isFullWidth: true,
  },
  {
    id: '19.',
    title: 'Բանկի կողմից փոխհատուցման ենթակա վճարներ',
    col1List: [
      { text: 'ՀՀ կառավարության առընթեր անշարժ գույքի կադաստրի պետական կոմիտեի կողմից տրամադրվող անշարժ գույքի սահմանափակումների վերաբերյալ միասնական տեղեկանքի համար սահմանված վճար՝ միայն տեղափոխվող վարկի ապահովման միջոց հանդիսացող անշարժ գույքի համար: Լրացուցիչ անգամ միասնական տեղեկանքի համար դիմելու դեպքում յուրաքանչյուր հաջորդ անգամ վճարն իրականացվում է հաճախորդի կողմից:', isHeader: false },
      { text: 'Բացառությամբ այն դեպքերի, եթե հաճախորդը ցանկանում է անշարժ գույքի գրավի գրանցումն իրականացնել օրենքով նախատեսված ստանդարտ ժամկետից ավելի շուտ:', isHeader: false },
      { text: 'Տեղափոխվող վարկի ապահովման միջոց հանդիսացող անշարժ գույքի նოტարական վավերացման վճար:', isHeader: false },
      { text: 'Գրավի պայմանագրից ծագող Բանկի իրավունքի պետական իրավասու մարմնում գրանցման վճար՝ միայն տեղափոխվող վարկի ապահովման միջոց հանդիսացող անշարժ գույքի դեպքում:', isHeader: false },
      { text: 'Տեղափոխվող վարկի ապահովման միջոց հանդիսացող անշարժ գույքի գրավի գնահատում:', isHeader: false },
    ],
    isFullWidth: true,
  },
  {
    id: '20.',
    title: 'Ինտերնետ Բանկ/Մոբայլ բանկինգ',
    col1: 'Բանկի հաճախորդ չհանդիսացող հաճախորդներին՝ անվճար ԻԲ/ՄԲ տրամադրում՝ մինչև 3 օգտագործողի հնարավորությամբ 3 տարի ժամկետով:',
    isFullWidth: true,
  },
  {
    id: '21.',
    title: 'Visa Business քարտ',
    col1List: [
      { text: '1 քարտ՝ տրամադրում և 3 տարի ժամկետով անվճար սպասարկում։ Քարտի վերաթողարկման դեպքում սպասարկումն իրականացվում է տվյալ պահին Բանկում գործող սակագներով:', isHeader: false },
      { text: 'Պարտադիր պայման է անհատ ձեռնարկատիրոջ դեպքում՝ ԱՁ հանդիսացող ֆիզիկական անձի և իրավաբանական անձի դեպքում՝ տնօրենի, 10% և ավել մասնակիցների, իրական շահառուի ՀՀ քաղաքացիությունը:', isHeader: false },
    ],
    isFullWidth: true,
  },
];

const tabs = [
  'Վարկի մասին',
  'Պայմաններ',
];

const BusinessLoan3iMasin3 = ({ activeTab, setActiveTab }) => {
  
  useEffect(() => {
    const uploadDataToFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "businessLoan3iMasin2"));
        
        if (querySnapshot.empty) {
          console.log("Տվյալները ուղարկվում են Firebase...");
          
          for (const item of fullLoanTermsData) {
            const docId = `item_${item.id.replace('.', '')}`;
            await setDoc(doc(db, "businessLoan3iMasin2", docId), item);
          }
          
          console.log("Տվյալները հաջողությամբ պահպանվեցին Firebase-ում:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները Firebase ուղարկելիս:", error);
      }
    };

    uploadDataToFirebase();
  }, []);

  return (
    <div className="w-full overflow-x-auto bg-white p-4">
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
      <div className="min-w-[800px] border-t-[3px] border-t-[#6b11cb]">
        <table className="w-full text-sm sm:text-base text-left border-collapse">
          <tbody>
            {fullLoanTermsData.map((row, index) => (
              <tr key={index}>
                <td className="w-12 align-top p-4 border border-purple-100 text-gray-900 font-medium">
                  {row.id}
                </td>
                <td className="w-[20%] sm:w-[25%] align-top p-4 border border-purple-100 text-gray-900 font-bold">
                  {row.title}
                </td>
                <td 
                  colSpan={row.isFullWidth ? 2 : 1} 
                  className={`align-top p-4 border border-purple-100 ${
                    row.isBoldValues ? 'text-gray-900 font-bold' : 'text-gray-800'
                  } ${!row.isFullWidth ? 'w-[35%]' : ''}`}
                >
                  {row.col1 && <span>{row.col1}</span>}
                  
                  {row.col1List && (
                    <ul className="space-y-3">
                      {row.col1List.map((item, i) => (
                        <li key={i} className={item.isHeader ? 'font-bold text-gray-900 mt-3 first:mt-0' : ''}>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </td>
                {!row.isFullWidth && (
                  <td className={`align-top p-4 border border-purple-100 text-gray-800 ${
                    row.isBoldValues ? 'text-gray-900 font-bold' : ''
                  } w-[35%] tr`}>
                    
                    {row.col2 && <span>{row.col2}</span>}
                    
                    {row.col2List && Array.isArray(row.col2List) && typeof row.col2List[0] === 'string' && (
                      <ul className="space-y-4">
                        {row.col2List.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-gray-500 font-bold">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {row.col2List && Array.isArray(row.col2List) && typeof row.col2List[0] === 'object' && (
                      <ul className="space-y-2">
                        {row.col2List.map((item, i) => (
                          <li key={i}>
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessLoan3iMasin3;