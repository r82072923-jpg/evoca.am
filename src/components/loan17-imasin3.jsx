import React from 'react';
const tabs = ['Վարկի մասին', 'Պայմաններ'];

const loanTermsData = [
  {
    id: 1,
    title: 'Վարկի տրամադրման նպատակը',
    value: 'Հեծանիվի ձեռքբերում (հեծանիվի հետ միաժամանակ կարող է ձեռք բերվել սաղավարտ, ծնկակալ, բազկակալ և լապտեր)'
  },
  {
    id: 2,
    title: 'Ովքեր կարող են դիմել',
    value: 'Հայաստանի Հանրապետության տարածքում գործող արհեստագործական, միջին մասնագիտական կամ բարձրագույն կրթական ծրագիր իրականացնող պետական և հավատարմագրված ոչ պետական ուսումնական հաստատությունների սովորողները և աշխատողները (որպես վարկառու կարող է հանդիսանալ 18-ից 65 տարեկան կամ շահառու եղող աշխատող է կամ վերջինիս ընտանիքի աշխատող անդամը)'
  },
  {
    id: 3,
    title: 'Վարկավորման արժույթը',
    value: 'ՀՀ դրամ'
  },
  {
    id: 4,
    title: 'Վարկավորման գումար',
    value: '70,000 - 300,000'
  },
  {
    id: 5,
    title: 'Վարկի մարման ժամկետը',
    value: '6-36 ամիս'
  },
  {
    id: 6,
    title: 'Տարեկան անվանական տոկոսադրույքը',
    value: '16% - 21%'
  },
  {
    id: 7,
    title: 'Տարեկան փաստացի տոկոսադրույքը',
    value: '17.20% - 25.50%'
  },
  {
    id: 8,
    title: 'Պետության կողմից սուբսիդավորվող տոկոսադրույքը',
    value: '16%'
  },
  {
    id: 9,
    title: 'Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր',
    list: [
      'ժամկետանց վարկի համար՝ օրական 0.015%',
      'ժամկետանց տոկոսագումարի համար՝ օրական 0.1%'
    ]
  },
  {
    id: 10,
    title: 'Վարկի մարման ձևը',
    value: '«Անուիտետային»'
  },
  {
    id: 11,
    title: 'Վարկի տրամադրման եղանակ',
    value: 'Անկանխիկ'
  },
  {
    id: 12,
    title: 'Վարկային հայտի ձևակերպման վայր',
    value: 'Գործընկեր կազմակերպության տարածք'
  },
  {
    id: 13,
    title: 'Հաճախորդից գանձվող այլ վճարներ',
    value: 'Վարկի տրամադրման և/կամ սպասարկման վճարներ չեն սահմանվում'
  },
  {
    id: 14,
    title: 'Ժամկետից շուտ մարելու տուգանք',
    value: 'Վարկի վաղաժամ մարման դեպքում տույժեր չեն սահմանվում'
  },
  {
    id: 15,
    title: 'Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացում',
    list: [
      'Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 3 (երեք) բանկային օրվա ընթացքում, որոշման կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո:',
      'Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում՝ առավելագույնը 2 (երկու) բանկային օրվա ընթացքում'
    ]
  },
  {
    id: 16,
    title: 'Այլ դրույթներ',
    value: 'Սույն պայմաններով չկարգավորվող դեպքերը կարգավորվում են ՀՀ Կառավարության 2025 թ. մարտի 27-ի N 341-Ն որոշման դրույթներով և պայմաններով:'
  }
];

const Loan17iMasin3 = ({activeTab,setActiveTab}) => {
  return (
    <div className="max-w-6xl mx-auto my-8 px-4 font-sans text-[#333333]">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab ? 'text-[#6b11cb]' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-17px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="border border-[#e5e0fa] rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <tbody>
            {loanTermsData.map((row) => (
              <tr key={row.id} className="border-b border-[#e5e0fa] last:border-b-0 hover:bg-[#faf9fe] transition-colors">
                {/* Համարը */}
                <td className="py-3 px-3 text-xs sm:text-sm font-bold text-gray-800 align-top w-12 border-r border-[#e5e0fa]">
                  {row.id}.
                </td>

                {/* Անվանումը / Վերնագիրը */}
                <td className="py-3 px-4 text-xs sm:text-sm font-bold text-gray-900 align-top w-1/3 md:w-1/4 border-r border-[#e5e0fa]">
                  {row.title}
                </td>

                {/* Նկարագրությունը / Արժեքը */}
                <td className="py-3 px-4 text-xs sm:text-sm text-gray-800 align-top leading-relaxed">
                  {row.value && <span>{row.value}</span>}

                  {row.list && (
                    <ul className="space-y-1.5 list-disc list-inside">
                      {row.list.map((item, idx) => (
                        <li key={idx} className="marker:text-[#6b11cb]">
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Loan17iMasin3;