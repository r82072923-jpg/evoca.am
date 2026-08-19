import React from 'react';
const tabs = [
    'Քարտի մասին',
    'Սակագներ և դրույթներ',
];
function WilcoVisaInfiniteiMasin2({activeTab,setActiveTab}) {
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
        Wilco Visa Infinite-ը <span className="text-purple-700 font-medium">Evocabank</span>-ի և Wilco-ի համատեղ թողարկված բացառիկ քարտ է, որը 
        միավորում է պրեմիում բանկային սպասարկումն ու անհատականացված կապիտալի 
        կառավարման միջազգային փորձը:
      </p>

      <p className="text-base sm:text-lg">
        Քարտը հնարավորություն է տալիս օգտվել <span className="text-purple-700 font-medium">Evoca</span> Visa Infinite-ի բենեֆիթներից և Wilco-ի կողմից 
        տրամադրվող հատուկ առավելություններից. Wilco-ի փորձագետները կիրականացնեն՝
      </p>

      <ul className="list-disc pl-6 sm:pl-8 space-y-4 text-base sm:text-lg marker:text-purple-700">
        <li className="pl-2">
          Ձեր ֆինանսական կառուցվածքի և ներդրումային պորտֆելի անհատական գնահատում
        </li>
        <li className="pl-2">
          Ձեր կապիտալի երկարաժամկետ զարգացման ռազմավարության մշակում
        </li>
        <li className="pl-2">
          Wilco-ի մասնավոր հանդիպումների տարածքներից օգտվելու հնարավորության 
          տրամադրում
        </li>
        <li className="pl-2">
          Ներդրումներին, կապիտալի կառավարմանը, գլոբալ միտումներին և բարձրակարգ 
          կենսակերպին նվիրված բացառիկ միջոցառումներին մասնակցելու հնարավորության 
          տրամադրում
        </li>
      </ul>

      <p className="text-base sm:text-lg">
        Wilco Visa Infinite քարտ կարող են ձեռք բերել բացառապես Wilco-ի հաճախորդները:<br />
        Դառնալով Wilco Visa Infinite քարտապան՝ Դուք կարող եք օգտվել պրեմիում քարտի բացառիկ 
        արտոնություններից, որոնց կարող եք ծանոթանալ <a href="https://wilco.am/hy/card/" className="text-purple-700 font-bold underline hover:text-purple-800 transition-colors">այստեղ</a>:
      </p>
    </div>
  );
}

export default WilcoVisaInfiniteiMasin2;