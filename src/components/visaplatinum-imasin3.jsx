import React from 'react';

function VisaPlatinumiMasin3() {
  const tariffs = [
    {
      value: "0",
      description: "Քարտի տրամադրում",
      subtitle: ""
    },
    {
      value: "30,000",
      description: "Քարտի տարեկան սպասարկում",
      subtitle: ""
    },
    {
      value: "90,000",
      description: "24.02.2022թ. -ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար քարտի տարեկան սպասարկում",
      subtitle: ""
    },
    {
      value: "0",
      description: "Կից քարտի տրամադրում (Visa Platinum կամ Visa Classic)",
      subtitle: ""
    },
    {
      value: "15,000",
      description: "Կից քարտի տարեկան սպասարկում",
      subtitle: "Visa Platinum"
    },
    {
      value: "0",
      description: "Կից քարտի տարեկան սպասարկում",
      subtitle: "Visa Classic"
    },
    {
      value: "0",
      description: "Քարտային հաշվի չնվազող մնացորդ",
      subtitle: ""
    },
    {
      value: "Չի հաշվարկվում",
      description: "Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք",
      subtitle: ""
    },
    {
      value: "0.5 %",
      description: "Քարտերով կանխիկի տրամադրում Բանկի ATM-ով, Բանկի տարածքում քարտային հաշվից և POS տերմինալով",
      subtitle: "ՀՀ դրամ"
    },
    {
      value: "1 %",
      description: "Քարտերով կանխիկի տրամադրում Բանկի ATM-ով, Բանկի տարածքում քարտային հաշվից և POS տերմինալով",
      subtitle: "ԱՄՆ դոլար և եվրո"
    },
    {
      value: "1 %",
      description: "Քարտերով կանխիկի տրամադրում Բանկի ATM-ով, Բանկի տարածքում քարտային հաշվից և POS տերմինալով",
      subtitle: "Այլ արտարժույթ"
    },
    {
      value: "1 %",
      description: "Քարտերով կանխիկի տրամադրում «ԱրՓա» համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով",
      subtitle: ""
    },
    {
      value: "1.5 % min 1,500",
      description: "Քարտերով կանխիկի տրամադրում օտարերկրյա բանկերի և «ԱրՓա» համակարգի անդամ չհանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով",
      subtitle: ""
    },
    {
      value: "0",
      description: "Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով անկանխիկ գործարքների իրականացում",
      subtitle: ""
    },
    {
      value: "0",
      description: "Քարտի գործողության կասեցում",
      subtitle: ""
    },
    {
      value: "1,000",
      description: "Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)",
      subtitle: ""
    },
{
      value: "0",
      description: "Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում",
      subtitle: ""
    },
    {
      value: "10,000 ՀՀ դրամ",
      description: "Քարտի վերաթողարկում կորուստի, վնասելու կամ PIN ծածկագրի կորուստի դեպքում",
      subtitle: ""
    },
    {
      value: "1,000 ՀՀ դրամ",
      description: "PIN ծածկագրի գեներացման հայտ Բանկի տարածքում",
      subtitle: ""
    },
    {
      value: "0",
      description: "PIN ծածկագրի սահմանում Evoca Touch հավելվածով",
      subtitle: ""
    },
    {
      value: "0",
      description: "Քարտային հաշվի ամսական քաղվածքի տրամադրում",
      subtitle: ""
    },
    {
      value: "0",
      description: "Քարտային հաշվի քաղվածքի տրամադրում այլ ժամկետի համար",
      subtitle: ""
    },
    {
      value: "0",
      description: "Կանխիկի մուտքագրում Բանկի տարածքում գտնվող վճարային տերմինալներով",
      subtitle: ""
    },
    {
      value: "0.8 %",
      description: "Կանխիկի մուտքագրում «ԱրՓա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-IN)",
      subtitle: ""
    },
    {
      value: "0",
      description: "Գործարքի վերաբերյալ հաղորդագրությունների ստացում Evoca Touch հավելվածով",
      subtitle: ""
    },
{
      value: "20 ՀՀ դրամ",
      description: "Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում",
      subtitle: "Մինչև 5,000 ՀՀ դրամ գործարքներ"
    },
    {
      value: "0",
      description: "Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում",
      subtitle: "5,000 ՀՀ դրամը գերազանցող գործարքներ"
    },
    {
      value: "20 % տարեկան",
      description: "Գերածախսի գծով տույժեր",
      subtitle: ""
    },
    {
      value: "",
      description: "Քարտից քարտ փոխանցումներ բանկոմատների միջոցով",
      subtitle: ""
    },
    {
      value: "0.3 %",
      description: "Բանկի վճարային քարտին",
      subtitle: ""
    },
    {
      value: "0.5 %",
      description: "«ԱրՓա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՓա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին",
      subtitle: ""
    },
{
      value: "անվճար",
      description: "Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում",
      subtitle: "Նույն արժույթով քարտին"
    },
    {
      value: "0.3%",
      description: "Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում",
      subtitle: "Տարբեր արժույթով քարտերին"
    },
    {
      value: "700,000 ՀՀ դրամ",
      description: "«ԱրՓա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՓա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին EvocaTouch/EvocaOnline համակարգերի միջոցով քարտից քարտ փոխանցումների 1 գործարքի առավելագույն սահմանաչափ",
      subtitle: ""
    },
    {
      value: "0.5 %",
      description: "Քարտից քարտ փոխանցումներ EvocaTOUCH/EvocaONLINE համակարգերի միջոցով «ԱրՓա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՓա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին՝",
      subtitle: ""
    },
    {
      value: "0",
      description: "Վարկային սահմանաչափի տրամադրման հայտի ուսումնասիրման միջնորդավճար",
      subtitle: ""
    },
    {
      value: "0",
      description: "Գործող վարկային սահմանաչափի ավելացման հայտի ուսումնասիրման միջնորդավճար",
      subtitle: ""
    },
    {
      value: "2,500,000 ՀՀ դրամ",
      description: "Կանխիկի տրամադրման առավելագույն սահմանաչափ",
      subtitle: ""
    },
{
      value: "10",
      description: "Կանխիկացման գործարքների օրական առավելագույն քանակ",
      subtitle: ""
    },
    {
      value: "500,000",
      description: "Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ",
      subtitle: ""
    },
    {
      value: "2,900 ՀՀ դրամ",
      description: "Մեկ օրվա ընթացքում կանխիկացման գործարքների կամ սահմանաչափերի քանակի ավելացման միջնորդավճար քարտի գործողության ամբողջ ընթացքում.",
      subtitle: "Մինչև 5 մլն ՀՀ դրամ"
    },
    {
      value: "4,900 ՀՀ դրամ",
      description: "Մեկ օրվա ընթացքում կանխիկացման գործարքների կամ սահմանաչափերի քանակի ավելացման միջնորդավճար քարտի գործողության ամբողջ ընթացքում.",
      subtitle: "5 մլն ՀՀ դրամից ավել"
    },
    {
      value: "5,000 ՀՀ դրամ",
      description: "Քարտով կատարված գործարքների բողոքարկման հայտ",
      subtitle: ""
    },
    {
      value: "Ամսական 2,000 ՀՀ դրամ, իսկ միջոցների անբավարարության դեպքում՝ հաշվի մնացորդի չափով:",
      description: "Ժամկետը լրացած վճարային քարտի քարտային հաշվի սպասարկման վճար",
      subtitle: ""
    },
    {
      value: "[1]",
      description: "Օտարերկրյա քաղաքացիների համար գործում է նշված սակագни եռապատիկը, իսկ Visa Classic քարտի դեպքում տրամադրման պահին գործող սակագնի եռապատիկը։ Լրացուցիչ քարտերը կտրամադրվեն նախապես հինգ տարվա միջնորդավճարը վճարելու պայմանով:",
      subtitle: ""
    },
    {
      value: "[2]",
      description: "Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:",
      subtitle: ""
    }
  ];

  return (
    <section className="w-full bg-white py-10 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Աղյուսակի հիմնական բլոկ */}
        <div className="border border-purple-100 rounded-lg overflow-hidden bg-white">
          
          {/* Վերնագիր */}
          <div className="bg-[#fcf8ff] px-6 py-4 border-b border-purple-100 text-center">
            <h2 className="text-sm sm:text-base font-bold text-gray-900">
              Visa Platinum վճարային քարտեր
            </h2>
          </div>

          {/* Տողեր */}
          <div className="divide-y divide-purple-100">
            {tariffs.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-6 py-4 gap-4 hover:bg-gray-50 transition-colors"
              >
                {/* Նկարագրություն (ձախ կողմում) */}
                <div className="sm:w-3/4 text-gray-800 text-sm sm:text-base">
                  {item.description}
                </div>

                {/* Արժեք և ենթավերնագիր (աջ կողմում) */}
                <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/4 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-purple-50">
                  {item.subtitle && (
                    <span className="text-xs sm:text-sm text-gray-500">
                      {item.subtitle}
                    </span>
                  )}
                  <span className="text-sm sm:text-base font-normal text-gray-900 ml-auto sm:ml-0">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default VisaPlatinumiMasin3;