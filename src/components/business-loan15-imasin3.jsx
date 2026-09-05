import React from 'react';
const tabs = [
  'Վարկի մասին',
  'Պայմաններ և սակագներ',
  'Պահանջվող փաստաթղթեր'
];
const tableData = [
  {
    id: '1.',
    title: 'Արժույթ',
    content: <p>ՀՀ դրամ, ԱՄՆ դոլար կամ եվրո</p>,
  },
  {
    id: '2.',
    title: 'Վարկառու',
    content: <p>ՀՀ ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձ, անհատ ձեռնարկատեր*</p>,
  },
  {
    id: '3.',
    title: 'Նպատակ',
    content: (
      <div className="space-y-6">
        <p>Հիմնական միջոցների ձեռքբերում/կապիտալ ներդրումների իրականացում</p>
        <p>Նախագծերի ֆինանսավորում</p>
        <p>Շրջանառու միջոցների համալրում</p>
        <p>Ընթացիկ ծախսերի ֆինանսավորում, կրեդիտորական պարտքի մարում</p>
        <p>Այլ ֆինանսական կազմակերպություններում և/կամ Էվոկաբանկ ՓԲԸ-ում գործող վարկերի վերաֆինանսավորում</p>
        <p>Այլ նպատակներ</p>
      </div>
    ),
  },
  {
    id: '4.',
    title: 'Սահմանաչափ',
    content: <p>10,000,000-4,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ,</p>,
  },
  {
    id: '5.',
    title: 'Տրամադրման եղանակ',
    content: (
      <ul className="list-disc pl-5 space-y-3 text-[#6F11B7]">
        <li><span className="text-gray-800">Անկանխիկ</span></li>
        <li><span className="text-gray-800">Վարկերը կարող են տրամադրվել միանվագ կամ փուլերով</span></li>
      </ul>
    ),
  },
  {
    id: '6.',
    title: 'Մարման ժամկետ',
    content: (
      <ul className="space-y-4">
        <li className="flex gap-2 items-start">
          <span className="text-gray-400 mt-1">-</span>
          <span>Մինչև 120 ամիս՝ հաստատուն տոկոսադրույքի դեպքում,</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="text-gray-400 mt-1">-</span>
          <span>Մինչև 180 ամիս՝ լողացող տոկոսադրույքի դեպքում*:</span>
        </li>
      </ul>
    ),
  },
{
    id: '7.',
    title: 'Մարման եղանակը',
    content: (
      <div className="space-y-4">
        <ul className="space-y-2">
          <li className="flex gap-2 items-start">
            <span className="text-gray-400 mt-1">-</span>
            <span>«Անուիտետային»</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="text-gray-400 mt-1">-</span>
            <span>«Զսպանակաձև»</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="text-gray-400 mt-1">-</span>
            <span>Անհատական՝ կախված հաճախորդի գործունեության տեսակի առանձնահատկությունից,</span>
          </li>
        </ul>
        <p>
          Անհատական մարման եղանակի դեպքում մայր գումարի մարումները պետք է լինեն տարեկան հավասարաչափ և նվազագույնը տարվա ընթացքում մայր գումարի 3 մարում (չի վերաբերվում արտոնյալ ժամանակահատվածին և նախագծերի ֆինանսավորումներին):
        </p>
      </div>
    ),
  },
  {
    id: '8.',
    title: 'Արտոնյալ ժամանակահատված',
    content: <p>Սահմանվում է բիզնեսի առանձնահատկություններից ելնելով</p>,
  },
  {
    id: '9.',
    title: 'Տարեկան անվանական տոկոսադրույք*',
    content: (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-purple-100">
          <thead>
            <tr className="border-b border-purple-100 text-left">
              <th className="p-3 border-r border-purple-100 font-medium">Արժույթ</th>
              <th className="p-3 border-r border-purple-100 font-medium">Հաստատուն</th>
              <th className="p-3 font-medium">Լողացող</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-purple-100">
              <td className="p-3 border-r border-purple-100">ՀՀ դրամ</td>
              <td className="p-3 border-r border-purple-100">Սկսած՝ 12.25%-ից</td>
              <td className="p-3">Սկսած՝ 11.5%-ից (սկսած՝ 4.78%-ից + փոփոխուն բաղադրիչի հանրագումար)</td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-3 border-r border-purple-100">ԱՄՆ դոլար</td>
              <td className="p-3 border-r border-purple-100">Սկսած՝ 8.5%-ից</td>
              <td className="p-3">Սկսած՝ 8.4%-ից (սկսած 4.69%-ից + փոփոխուն բաղադրիչի հանրագումար)</td>
            </tr>
            <tr>
              <td className="p-3 border-r border-purple-100">Եվրո</td>
              <td className="p-3 border-r border-purple-100">Սկսած՝ 8.2%-ից</td>
              <td className="p-3">Սկսած՝ 8.2%-ից (սկսած 5.65%-ից + փոփոխուն բաղադրիչի հանրագումար)</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: '10.',
    title: 'Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր',
    content: (
      <ul className="space-y-4">
        <li className="flex gap-2 items-start">
          <span className="text-gray-400 mt-1">-</span>
          <span>ժամկետանց վարկի դեպքում՝ օրական 0.015%-ի չափով</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="text-gray-400 mt-1">-</span>
          <span>ժամկետանց տոկոսագումարների դեպքում՝ օրական 0.1%-ի չափով</span>
        </li>
      </ul>
    ),
  },
  {
    id: '11.',
    title: 'Ժամկետից շուտ մարելու տուգանք',
    content: (
      <div className="flex gap-2 items-start">
        <span className="text-gray-400 mt-1">-</span>
        <span>
          Մինչև պայմանագրի գործողության ժամկետի կեսը մարումների ժամանակացույցով սահմանված ամսական վարկի մայր գումարի չափից ավելին մարելու դեպքում վճարում է տուգանք՝ մարումների ժամանակացույցով սահմանված ամսական վարկի գումարի չափը գերազանցող գումարի 5%-ի չափով:
        </span>
      </div>
    ),
  },
  {
    id: '12.',
    title: 'Ապահովում',
    content: <p className="font-medium">Գրավ և/կամ երաշխավորություն</p>,
  },
  {
    id: '13.',
    title: 'Երաշխավոր',
    content: <p className="font-medium">ՀՀ ռեզիդենտ իրավաբանական անձ, ֆիզիկական անձ (ըստ անհրաժեշտության)</p>,
  },
{
    id: '14.',
    title: 'Վարկի տրամադրման միանվագ վճար (գանձվում է վարկի տրամադրման պահին)',
    content: <p>0.5%, սակայն առավելագույնը 100,000 ՀՀ դրամ</p>,
  },
  {
    id: '15.',
    title: 'Վարկի օգտագործում',
    content: <p>Համաձայն Բանկային հաշվի սպասարկման պայմանների և սակագների</p>,
  },
  {
    id: '16.',
    title: 'Այլ ծախսեր',
    content: (
      <ul className="space-y-4">
        <li className="flex gap-2 items-start">
          <span className="text-gray-400 mt-1">-</span>
          <span>ՀՀ պետական իրավասու մարմիններում գրավի պետական գրանցման վճար,</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="text-gray-400 mt-1">-</span>
          <span>Նոտարական ծառայությունների վճար,</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="text-gray-400 mt-1">-</span>
          <span>Գրավադրվող արժեքների գնահատման վճար՝ անկախ գնահատող կազմակերպությունների սահմանած սակագների համաձայն:</span>
        </li>
      </ul>
    ),
  },
];

export default function LoanTermsTable({activeTab,setActiveTab}) {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white font-sans">
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
    </div>
  );
}