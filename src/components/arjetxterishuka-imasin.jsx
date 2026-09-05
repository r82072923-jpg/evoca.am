import React, { useState } from 'react';

const investmentData = {
  title: "Ներդրումային ծառայություններ",
  introParagraph: "Բանկն իր հաճախորդներին Ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:",
  howToBecomeClient: {
    sectionTitle: "Ինչպե՞ս դառնալ հաճախորդ:",
    text1: "Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ",
    linkText: "այստեղ",
    linkUrl: "#",
    text2: "Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ:"
  },
  contactInfo: {
    addressTitle: "Հասցե՝",
    addressValue: "Երևան, Հանրապետության 44/2",
    phoneTitle: "Հետադարձ կապ՝",
    phoneValue: "Հեռ.՝ 374 10 205555",
    emailLabel: "Էլ. հասցե՝",
    email: "invest@evoca.am"
  },
  warningText: "Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում:",
  
  accordionSectionTitle: "Անհրաժեշտ տեղեկատվություն",
  accordions: [
    {
      title: "Ներդրումային ծառայություններ մատուցման կանոններ",
      rules: [
        {
          linkTitle: "Արժեթղթերի շուկայում բրոքերային ծառայությունների մատուցման կանոններ",
          linkUrl: "#",
          description: "Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պայմանների ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները, ինչպես նաև տրամադրող գործառնությունների իրականացման հետ կապված հնարավոր ռիսկերի վերաբերյալ ընդհանրական տեղեկություններ։ Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին, ՀՀ Կենտրոնական բանկի նորմատիվ և այլ իրավական ակտերին համապատասխան։"
        },
        {
          linkTitle: "Արժեթղթերի պահառության գործունեության կանոններ",
          linkUrl: "#",
          description: "Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման կարգն ու պայմանները, պահառության հետ կապված հարաբերությունները, ինչպես նաև պահառուի աշխատանքների կանոնները։ Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին և պահառության գործունեությունը կանոնակարգող իրավական այլ ակտերին և այդ թվում՝ Հայաստանի Կենտրոնական դեպոզիտարիայի կանոնների պահանջներին համապատասխան։"
        }
      ]
    },
    {
      title: "Ծառայությունների մատուցման սակագներ",
      content: "Սակագների վերաբերյալ ինֆորմացիան այստեղ..."
    },
    {
      title: "Լրացուցիչ տեղեկատվություն",
      content: "Լրացուցիչ տեղեկատվությունը այստեղ..."
    }
  ]
};

function ArjetxteriShukaiMasin() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 font-sans text-gray-800">
      
      <div className="space-y-6 mb-12 text-sm leading-relaxed">
        <h1 className="text-2xl font-bold mb-4">{investmentData.title}</h1>
        
        <p>{investmentData.introParagraph}</p>

        <div>
          <h3 className="text-purple-800 font-bold mb-2">{investmentData.howToBecomeClient.sectionTitle}</h3>
          <p>
            {investmentData.howToBecomeClient.text1}{' '}
            <a href={investmentData.howToBecomeClient.linkUrl} className="text-purple-700 underline font-medium">
              {investmentData.howToBecomeClient.linkText}
            </a>:
          </p>
          <p className="mt-2">{investmentData.howToBecomeClient.text2}</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900">{investmentData.contactInfo.addressTitle}</h4>
            <p>{investmentData.contactInfo.addressValue}</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900">{investmentData.contactInfo.phoneTitle}</h4>
            <p>{investmentData.contactInfo.phoneValue}</p>
            <p>
              {investmentData.contactInfo.emailLabel}{' '}
              <a href={`mailto:${investmentData.contactInfo.email}`} className="text-purple-700 underline font-medium">
                {investmentData.contactInfo.email}
              </a>
            </p>
          </div>
        </div>

        <div>
          <p>
            <span className="font-bold">ՈՒՇԱԴՐՈՒԹՅՈՒՆ</span> {investmentData.warningText}
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold uppercase mb-6 tracking-wide text-gray-900">
        {investmentData.accordionSectionTitle}
      </h2>
      
      <div className="space-y-4">
        {investmentData.accordions.map((acc, index) => {
          const isOpen = openAccordion === index;
          
          return (
            <div 
              key={index} 
              className={`border rounded-lg overflow-hidden bg-white transition-colors ${
                isOpen && index === 0 ? 'border-purple-400' : 'border-purple-200'
              }`}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <span className={`font-semibold text-sm md:text-base ${index === 0 && isOpen ? 'font-bold text-purple-900' : 'text-gray-800'}`}>
                  {acc.title}
                </span>
                <svg 
                  className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180 text-purple-700' : 'text-gray-500'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isOpen && (
                <div className="p-5 pt-0 text-sm text-gray-700 border-t border-purple-100">
                  {acc.rules ? (
                    acc.rules.map((rule, rIdx) => (
                      <div key={rIdx} className={rIdx !== 0 ? "mt-6" : "mt-4"}>
                        <a href={rule.linkUrl} className="text-purple-800 underline font-bold mb-2 block">
                          {rule.linkTitle}
                        </a>
                        <p className="leading-relaxed">{rule.description}</p>
                      </div>
                    ))
                  ) : (
                    <p className="mt-4">{acc.content}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArjetxteriShukaiMasin;