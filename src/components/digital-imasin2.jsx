import React from 'react';

const contentData = {
  introParagraphs: [
    {
      text: "Evocabank-ը կապահովի Ձեր կայքում V-POS տերմինալի տեղադրումը: Այն հնարավորություն կտա Ձեզ խուսափել լրացուցիչ ծրագրային ծախսերից, սերտիֆիկացումից և հետագա ծրագրային ապահովումից:",
      highlight: "խուսափել լրացուցիչ ծրագրային ծախսերից"
    },
    {
      text: "Ձեր գնորդները կարող են գնումներ կատարել Ձեր կայքից ու վճարել դրանց համար իրենց միջազգային VISA, Mastercard և տեղական ArCa վճարային քարտերով:"
    },
    {
      text: "V-POS-ը հասանելի կլինի ինչպես Ձեր կայքում, այնպես էլ՝ մոբայլ հավելվածում:"
    }
  ],
  benefits: [
    "Օնլայն վաճառքների շնորհիվ կաճեն Ձեր եկամուտները։",
    "Evocabank-ը V-POS-ով կատարված վաճառքներից կգանձի նվազագույն միջնորդավճարներ՝ հատուկ Ձեր բիզնեսի համար։ Ապասարկման կետի գրանցման համար անհրաժեշտ V-POS տերմինալների տեղադրման ստանդարտ սակագներն են՝"
  ],
  tableHeaders: [
    "Գործարքի տեսակ",
    "Արքա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքների դեպքում",
    "ՀՀ տարածքում գործող բանկերի կողմից թողարկված MasterCard, Visa, քարտերի դեպքում",
    "Արտասահմանյան բանկերի կողմից թողարկված MasterCard, Visa, քարտերի դեպքում",
    "QR կոդով վճարման դեպքում"
  ],
  tableRows: [
    { type: "Վճարվող գումարի չափ[1]", arca: "1.50%", local: "1.90%", international: "3.00%", qr: "1%" },
    { type: "200,000 (երկու հարյուր հազար) ՀՀ դրամը չգերազանցող շրջանառության պարագայում", value: "3000[2]" },
    { type: "Վճարային էջի ստանդարտից դուրս դիզայնի պատվիրման պարագայում", value: "20000[3]" }
  ],
  footnotes: [
    "[1] Կախված ոլորտի առանձնահատկություններից և շրջանառությունից՝ սակագները կարող են փոխվել",
    "[2] Ներառյալ կիրառելի բոլոր հարկերը",
    "[3] Ներառյալ կիրառելի բոլոր հարկերը"
  ],
  securityFeatures: [
    "Վճարումներն անվտանգ են, գործում են 3D Secure Code անվտանգության համակարգերը։",
    "Վճարման պարզ գործընթաց, Ձեր գնորդները վճարում կկատարեն 1 քայլով։",
    "Անվճար տեխնիկական խորհրդատվություն և տեխնիկական սպասարկում Բանկի մասնագետների կողմից։",
    "Անհատական մոտեցում Ձեր բիզնեսին ու կայքին։"
  ],
  steps: [
    "Մեր մասնագետը 3 աշխատանքային օրում կապ կհաստատի Ձեր հետ, կներկայացնի պայմանները, կպատասխանի Ձեր բոլոր հարցերին և կպատրաստի գործընթացի համար անհրաժեշտ բոլոր փաստաթղթերը:",
    "Պայմանագրի ստորագրումից հետո V-POS-ը կտեղադրվի Ձեր բիզնեսի կայքում:"
  ],
  loans: {
    businessLoan: {
      title: "Բիզնես վարկ Pos տերմինալի շրջանառության հիման վրա",
      description: "Եթե ունեք փոքր և միջին բիզնես ու իրականացնում եք անկանխիկ գործարքներ, ապա այս բիզնես վարկը Ձեզ համար է։ Մեզ մոտ փոքր և միջին բիզնեսներն ունեն հնարավորություն ձևակերպել արագ բիզնես վարկեր իրենց կարճաժամկետ ֆինանսական խնդիրները լուծելու համար։",
      applicants: [
        "ՀՀ ռեզիդենտ անհատ ձեռնարկատեր և իրավաբանական անձիք, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս",
        "Այն հաճախորդները, ովքեր Evocabank-ի հետ ունեն կնքված POS տերմինալի համագործակցության պայմանագիր"
      ],
      collateral: [
        "POS տերմինալի շրջանառություն",
        "Անհրաժեշտության դեպքում ֆիզիկական և/կամ իրավաբանական անձի երաշխավորություն"
      ]
    },
    businessOverdraft: {
      title: "Բիզնես օվերդրաֆտ Pos տերմինալի շրջանառության հիման վրա",
      description: "Evocabank-ում կարող եք ձեռք բերել բիզնես օվերդրաֆտ առանց ավելորդ թղթաբանության և ժամանակի կրույսի: Եթե կան կարճաժամկետ ֆինանսական խնդիրներ կամ պարզապես ցանկանում եք ավելի զարգացնել բիզնեսը ապա մեզ մոտ շատ արագ և պարզ տարբերակով կարող եք ձևակերպել բիզնես օվերդրաֆտ:",
      applicants: [
        "ՀՀ ռեզիդենտ իրավաբանական և անհատ ձեռնարկատեր անձինք, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս",
        "Այն հաճախորդները, ովքեր Evocabank-ի հետ ունեն կնքված POS տերմինալի համագործակցության առնվազն 6 ամսվա պայմանագիր"
      ]
    }
  }
};

const DigitaliMasin2 = () => {
  return (
    <div className="max-w-5xl p-6 font-sans bg-white text-gray-800 space-y-8">
      <div className="space-y-6">
        <p className="text-sm md:text-base leading-relaxed">
          <span className="font-bold text-purple-900">Evocabank</span>-ը կապահովի Ձեր կայքում V-POS տերմինալի տեղադրումը: Այն հնարավորություն կտա Ձեզ{' '}
          <span className="text-purple-700 font-medium">խուսափել լրացուցիչ ծրագրային ծախսերից</span>, սերտիֆիկացումից և հետագա ծրագրային ապահովումից:
        </p>

        <p className="text-sm md:text-base leading-relaxed">
          Ձեր գնորդները կարող են գնումներ կատարել Ձեր կայքից ու վճարել դրանց համար իրենց միջազգային VISA, Mastercard և տեղական ArCa վճարային քարտերով:
        </p>

        <p className="text-sm md:text-base leading-relaxed font-medium">
          V-POS-ը հասանելի կլինի ինչպես Ձեր կայքում, այնպես էլ՝ մոբայլ հավելվածում:
        </p>

        <h2 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
          Իսկ ինչո՞ւ տեղադրել Evocabank-ի V-POS տերմինալ՝
        </h2>

        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-purple-700 mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-sm md:text-base">
              <span className="font-bold text-purple-900">Օնլայն վաճառքների շնորհիվ կաճեն Ձեր եկամուտները։</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-purple-700 mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-sm md:text-base">
              <span className="font-bold text-purple-900">Evocabank</span>-ը V-POS-ով կատարված վաճառքներից կգանձի <span className="font-bold">նվազագույն միջնորդավճարներ</span>՝ հատուկ Ձեր բիզնեսի համար։<br />
              Ապասարկման կետի գրանցման համար անհրաժեշտ V-POS տերմինալների տեղադրման ստանդարտ սակագներն են՝
            </span>
          </li>
        </ul>

        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left border-collapse border border-purple-100 text-sm">
            <thead>
              <tr className="bg-purple-50/50 text-gray-700">
                <th className="border border-purple-100 p-3 font-semibold w-1/4">{contentData.tableHeaders[0]}</th>
                <th className="border border-purple-100 p-3 font-semibold">{contentData.tableHeaders[1]}</th>
                <th className="border border-purple-100 p-3 font-semibold">{contentData.tableHeaders[2]}</th>
                <th className="border border-purple-100 p-3 font-semibold">{contentData.tableHeaders[3]}</th>
                <th className="border border-purple-100 p-3 font-semibold">{contentData.tableHeaders[4]}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-purple-100 p-3 font-medium bg-gray-50/50">{contentData.tableRows[0].type}</td>
                <td className="border border-purple-100 p-3">{contentData.tableRows[0].arca}</td>
                <td className="border border-purple-100 p-3">{contentData.tableRows[0].local}</td>
                <td className="border border-purple-100 p-3">{contentData.tableRows[0].international}</td>
                <td className="border border-purple-100 p-3">{contentData.tableRows[0].qr}</td>
              </tr>
              <tr>
                <td className="border border-purple-100 p-3 font-medium bg-gray-50/50">{contentData.tableRows[1].type}</td>
                <td className="border border-purple-100 p-3 font-bold" colSpan="4">{contentData.tableRows[1].value}</td>
              </tr>
              <tr>
                <td className="border border-purple-100 p-3 font-medium bg-gray-50/50">{contentData.tableRows[2].type}</td>
                <td className="border border-purple-100 p-3 font-bold" colSpan="4">{contentData.tableRows[2].value}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-xs text-gray-500 space-y-1 pt-2">
          {contentData.footnotes.map((note, index) => (
            <p key={index}>{note}</p>
          ))}
        </div>

        <ul className="space-y-3 pt-4">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-purple-700 mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-sm md:text-base text-gray-700">
              Վճարումներն անվտանգ են, գործում են <span className="font-bold text-purple-900">3D Secure Code</span> անվտանգության համակարգերը։
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-purple-700 mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-sm md:text-base text-gray-700">
              Վճարման պարզ գործընթաց, Ձեր գնորդները վճարում կկատարեն <span className="font-bold">1 քայլով</span>։
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-purple-700 mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-sm md:text-base text-gray-700">
              <span className="font-bold text-purple-900">Անվճար տեխնիկական խորհրդատվություն և տեխնիկական սպասարկում</span> Բանկի մասնագետների կողմից։
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-purple-700 mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-sm md:text-base text-gray-700">
              <span className="font-bold text-purple-900">Անհատական մոտեցում</span> Ձեր բիզնեսին ու կայքին։
            </span>
          </li>
        </ul>

        <p className="text-sm md:text-base pt-2">
          V-POS տերմինալ տեղադրելու համար լրացրեք{' '}
          <a href="#apply" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">
            Տերմինալի տեղադրման հայտը
          </a>{' '}
          հիմա:
        </p>

        <div className="space-y-4 pt-2">
          <div className="flex items-start space-x-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-100 text-purple-800 font-bold text-sm flex-shrink-0">1</span>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">{contentData.steps[0]}</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-100 text-purple-800 font-bold text-sm flex-shrink-0">2</span>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">{contentData.steps[1]}</p>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            Կառուցեք Ձեր բիզնեսի թվային ապագան:
          </h3>
        </div>

        <div className="space-y-4">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Evocabank-ում այսուհետ գործում են <span className="font-bold text-purple-900">բիզնես վարկ</span> և <span className="font-bold text-purple-900">բիզնես օվերդրաֆտ</span> POS տերմինալի շրջանառության հիման վրա:
          </p>

          <div className="relative rounded-xl overflow-hidden shadow-md max-w-xl border border-purple-100 bg-gray-900">
            <img 
              src="https://www.evoca.am/file_manager/pos2-600x315.jpg" 
              alt="Բիզնես վարկ և օվերդրաֆտ POS տերմինալի շրջանառության հիման վրա" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h2 className="text-lg md:text-xl font-bold text-purple-900">
            {contentData.loans.businessLoan.title}
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {contentData.loans.businessLoan.description}
          </p>
          <h3 className="font-bold text-gray-900 pt-2">Վարկի համար կարող են դիմել՝</h3>
          <ul className="space-y-2">
            {contentData.loans.businessLoan.applicants.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-700 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm md:text-base text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="font-bold text-gray-900 pt-2">Որպես վարկի ապահովման միջոց կարող են հանդիսանալ՝</h3>
          <ul className="space-y-2">
            {contentData.loans.businessLoan.collateral.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-700 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm md:text-base text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm md:text-base text-gray-700 pt-1">
            Օգտվեք մեր կողմից տրվող հնարավորությունից և գրանցեք Ձեր նոր բիզնես հաջողությունը։
          </p>
          <p className="text-sm md:text-base pt-1">
            Վարկի պայմաններին կարող եք ծանոթանալ{' '}
            <a href="#loan-terms" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">այստեղ</a>։
          </p>
        </div>

        <hr className="border-purple-100 my-6" />

        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold text-purple-900">
            {contentData.loans.businessOverdraft.title}
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {contentData.loans.businessOverdraft.description}
          </p>
          <h3 className="font-bold text-gray-900 pt-2">Վարկի համար կարող են դիմել՝</h3>
          <ul className="space-y-2">
            {contentData.loans.businessOverdraft.applicants.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-700 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm md:text-base text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm md:text-base pt-2">
            Օվերդրաֆտի պայմաններին կարող եք ծանոթանալ{' '}
            <a href="#overdraft-terms" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">այստեղ</a>։
          </p>
          <p className="text-sm md:text-base">
            Մեր մյուս բիզնես վարկերին կարող եք ծանոթանալ{' '}
            <a href="#other-loans" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">այստեղ</a>։
          </p>
        </div>

        <div className="pt-4 pb-2">
          <p className="text-sm md:text-base text-gray-700">
            Հարցերի դեպքում մեր թիմի հետ կարող եք կապ հաստատել հետևյալ{' '}
            <a href="#contact" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">հղումով</a>։
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitaliMasin2;