import React, { useState } from 'react';

function ArevtriFinansavorumiMasin() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const content = {
    title: "Երաշխիք",
    introParagraph1: "Բանկային երաշխիքը անկախ, անվերապահ և գրավոր պարտավորություն է, որը բանկը ստանձնում է իր հաճախորդի (Applicant) հանձնարարությամբ հօգուտ երրորդ կողմի (Beneficiary) վճարելու երաշխիքում սահմանված գումարը ներկայացված պահանջի դիմաց, եթե պահանջը համապատասխանում է երաշխիքի պայմաններին:",
    introParagraph2: "Բանկային երաշխիքները որպես կանոն կարգավորվում են միջազգային առևտրի պալատի (ICC) կողմից ընդունված URDG 758 կանոններով, եթե երաշխիքում այլ բան նախատեսված չէ:",
    sectionTitle: "Բանկային երաշխիքների հիմնական տեսակները",
    guarantees: [
      {
        title: "Կանխավճարային երաշխիք",
        enTitle: "Advance Payment Guarantee",
        description: "Տրվում է այն դեպքում, երբ գնորդը (Buyer) մատակարարին կանխավճար է տրամադրում մինչև ապրանքի մատակարարումը կամ ծառայության մատուցումը: Երաշխիքը ապահովում է կանխավճարի վերադարձը բանկայինցին, եթե դիմորդը չի կատարում հիմնական պայմանագրով նախատեսված իր պարտավորությունները:"
      },
      {
        title: "Պարտավորությունների կատարման երաշխիք",
        enTitle: "Performance Guarantee / Performance Bond",
        description: "Տրվում է՝ պայմանագրով նախատեսված պարտավորությունների պատշաճ կատարումը ապահովելու նպատակով: Բանկը պարտավորվում է վճարել բանկայինցին երաշխիքով սահմանված գումարը պայմանագրային պարտավորությունների չկատարման կամ ոչ պատշաճ կատարման դեպքում:"
      },
      {
        title: "Մրցութային երաշխիք",
        enTitle: "Tender / Bid Guarantee",
        description: "Տրվում է՝ մրցույթներին կամ տենդերներին մասնակցելու, ինչպես նաև պայմանագրի որակավորման, կանխավճարի ապահովման նպատակներով:"
      },
      {
        title: "Վճարման երաշխիք",
        enTitle: "Payment Guarantee",
        description: "Կիրառվում է բաց հաշվով վճարման open account առևտրային գործարքներում: Երաշխիքը ապահովում է բանկայինցին վճարումն այն դեպքում, երբ դիմորդը չի կատարում պայմանագրով սահմանված վճարային պարտավորությունները:"
      },
      {
        title: "Մաքսային երաշխիք",
        enTitle: "Customs Guarantee",
        description: "Տրվում է մաքսային մարմինների օգտին և ապահովում է մաքսային տուրքերի, հարկերի և այլ վճարների կատարումը մաքսային օրենսդրությամբ նախատեսված դեպքերում: Մաքսային երաշխիքները կարող են և կարգավորվել ինչպես ազգային օրենսդրությամբ, այնպես էլ համապատասխան միջազգային կանոններով:"
      }
    ],

    topTitle: "Պահուստային ակրեդիտիվ",
    topDescription: "Պահուստային ակրեդիտիվը անկախ վճարային գործիք է, որը իր տնտեսական բնույթով համընկնում է բանկային երաշխիքին: Այն սովորաբար կարգավորվում է ICC UCPRO կամ UCP 600 կանոններով և կիրառվում է այն դեպքերում, երբ բանկային երաշխիքի թողարկումը իրավական կամ պայմանագրային առումներով սահմանափակված է: SBLC-ն հիմնված է վճարման պարտավորության վրա և միայն բանկայինցին կողմից պայմանագրին համապատասխանող պահանջ ներկայացնելու դեպքում:",
    
    advantagesTitle: "Բանկային երաշխիքների առավելությունները",
    advantages: [
      "Նվազեցնում են առևտրային և ֆինանսական ռիսկերը",
      "Ապահովում են գործարքների վստահելի իրականացումը",
      "Հնարավորություն են տալիս կիրառել հետաձգված վճարման պայմաններ",
      "Նպաստում են գործընկերների միջև երկարաժամկետ և վստահելի համագործակցությանը",
      "Հանդիսանում են վարկային միջոցներին համեմատ ավելի հեշտ և ծախսարդյունավետ գործիք:"
    ],

    accordionSectionTitle: "ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ",
    accordions: [
      {
        title: "Միջազգային Բանկային երաշխիքներ",
        type: "table",
        rows: [
          { id: "1", label: "Արժույթ", value: "ՀՀ դրամ կամ արտարժույթ" },
          { id: "2", label: "Պահանջվող ապահովվածություն", value: "Պահանջվող ապահովված" },
          { id: "3", label: "Ապահովվածներ", value: "Պահանջվող ապահովված" },
          { id: "4", label: "Երաշխիքի բողոքարկման իսկական հաստատում/ուղարկում", value: "Պահանջվող ապահովված" },
          { id: "5", label: "Երաշխիքի պայմանների փոփոխման խոշորացում/երկարաձգում", value: "0.1%Ն, նվազ. 10,000 ՀՀ դրամ" },
          { id: "6", label: "Երաշխիքի մանրացում", value: "0.1%Ն, նվազ. 10,000 ՀՀ դրամ" },
          { id: "7", label: "Հաճախի կողմից բողոքարկման իսկական հաստատման/երաշխիքով վճարում", value: "0.1%Ն, նվազ. 10,000 ՀՀ դրամ" },
          { id: "8", label: "Երաշխիքի իմաս կանչում", value: "50,000 ՀՀ դրամ" }
        ]
      },
      {
        title: "Տեղական Բանկային երաշխիքներ",
        type: "table",
        rows: [
          { id: "1", label: "Արժույթ", value: "ՀՀ դրամ կամ արտարժույթ" },
          { id: "2", label: "Տրամադրման ժամկետայնություն", value: "Պայմանագրային" },
          { id: "3", label: "Ժամկետանցներ", value: "Մինչև 60 օրվա ժամկետանցով" },
          { id: "4", label: "Կանխավճար վճարման", value: "Իրավաբանական անձանց և անհատ ձեռնարկատերերին տրամադրվող երաշխիքների դեպքում, եթե պահանջվող ապահովվածությամբ ապահովվող երաշխիքի արժեքրացման փաստացի կամ առևտրի ժամանակահատվածի համար չի օգտագործվում 70,000 ՀՀ դրամ, ապա միջնորդավճարից միանվագ վճար 20,000 ՀՀ դրամի արժեքի չափով" },
          { id: "5", label: "Փոփոխման/երկարացում", value: "5,000 ՀՀ դրամ" },
          { id: "6", label: "Շարժական գույքի գրավով/ոչ բանկային ապահովվածության դեպքում", value: "1 %Ն" },
          { id: "7", label: "Շարժական գույքի գրավով այլ ապահովվածության դեպքում", value: "2 %Ն" },
          { id: "8", label: "Ճշգրոտ երաշխիքում", value: "25,000 ՀՀ դրամ" },
          { id: "9", label: "Վճարում պահանջի դիմաց", value: "0.4%, նվազ. 10,000 ՀՀ դրամ" },
          { id: "10", label: "Վարկի դասակարգման դեպքում", value: "Ոչ ավելի քան ՀՀ Կենտրոնական բանկի սահմանված բանկային տոկոսի հաշվարկային տոկոսադրույքի կրկնապատիկ" }
        ]
      },
      {
        title: "Առաջնակարգ ապահովվածությամբ առանց վարկունակության գնահատման Բանկային երաշխիքներ",
        type: "table",
        rows: [
          { id: "1", label: "Արժույթ", value: "ՀՀ դրամ կամ արտարժույթ" },
          { id: "2", label: "Տրամադրման ժամկետայնություն", value: "Պայմանագրային" },
          { id: "3", label: "Ժամկետանցներ", value: "Մինչև 60 օրվա ժամկետանցով" },
          { id: "4", label: "Ապահովվածություն", value: "Դրամական միջոցների հաշվարկային հաշվի կամ ընթացիկ հաշվի մնացորդ, ինչպես նաև Բանկի կողմից թողարկված պարտատոմսեր, պետական պարտատոմսեր" },
          { id: "5", label: "Կանխավճար վճարման", value: "Իրավաբանական անձանց և անհատ ձեռնարկատերերին տրամադրվող երաշխիքների դեպքում, եթե պահանջվող ապահովվածությամբ ապահովվող երաշխիքի արժեքրացման փաստացի կամ առևտրի ժամանակահատվածի համար չի օգտագործվում 70,000 ՀՀ դրամ, ապա միջնորդավճարից միանվագ վճար 20,000 ՀՀ դրամի արժեքի չափով" },
          { id: "6", label: "Փոփոխման/երկարացում", value: "5,000 ՀՀ դրամ" },
          { id: "7", label: "Տարեկան տոկոսադրույք", value: "1 %Ն" },
          { id: "8", label: "Ճշգրոտ երաշխիքում", value: "25,000 ՀՀ դրամ" },
          { id: "9", label: "Վճարում պահանջի դիմաց", value: "0.4%, նվազ. 10,000 ՀՀ դրամ" },
          { id: "10", label: "Վարկի դասակարգման դեպքում", value: "Ոչ ավելի քան ՀՀ Կենտրոնական բանկի սահմանված բանկային տոկոսի հաշվարկային տոկոսադրույքի կրկնապատիկ" }
        ]
      },
      {
        title: "Դրամական միջոցներով ապահովված առանց վարկունակության գնահատման Բանկային երաշխիքներ",
        type: "table",
        rows: [
          { id: "1", label: "Արժույթ", value: "ՀՀ դրամ կամ արտարժույթ" },
          { id: "2", label: "Տրամադրման սահմանափակում", value: "Երաշխիքային գումարը չպետք է գերազանցի ICC/UCP 600 կամ համապատասխան UCP-ի կանոններով կարգավորվող բոլոր պայմաններով ապահովվող երաշխիքի դրամական շրջանառության /հաշվի դրամական միջոցների շրջանառության կամ ժամանակահատվածի համար/ իրականացվող հաշվարկային համապատասխան և հիմքի հանդիսացող ենթակառույցի" },
          { id: "3", label: "Ժամկետանցներ", value: "Մինչև 36 ամիս ժամկետով" },
          { id: "4", label: "Միջնորդավճար վճարման և երաշխիքով ամսական ներառման նկատմամբ", value: "• ՀՀ ռեզիդենտ իրավաբանական անձի, անհատ ձեռնարկատիրոջ\n• Համաձայնագիր ունի 3 և ավելի տարվա ունի Բանկում հաշիվներ ունեցող\n• Երաշխիքային համագործակցության փորձ (բացառությամբ նախորդ տարվա համաձայնության տևողության)\n• Գործող պայմանի միջոց հասանելիության\n• Վերջին 12 ամսում գործառնական ժամկետանց օրերը չեն գերազանցում 60 օրը, միանվագ՝ 1% որդ\n• Բանկի վարկային մասնակցության պարտավորությունները և տարիներ,\n• Վերջին 2 ամսում ոչ պատշաճ ժամկետային վարկային պարտավորություններ\n• Անհավատքի իսկական վաճառատի սահմանման երաշխիքավորություններ" },
          { id: "5", label: "Ապահովվածություն", value: "ICC/UCP 600 կամ համապատասխան հաշվեկշռի դրամական միջոցներ" },
          { id: "6", label: "Տարեկան տոկոսադրույք", value: "1.0%" },
          { id: "7", label: "Ճշգրոտ երաշխիքում", value: "25,000 ՀՀ դրամ" },
          { id: "8", label: "Վճարում պահանջի դիմաց", value: "0.4%, նվազ. 10,000 ՀՀ դրամ" },
          { id: "9", label: "Վարկի դասակարգման դեպքում", value: "ՀՀ Կենտրոնական բանկի սահմանված բանկային տոկոսի հաշվարկային տոկոսադրույք" }
        ]
      },
      {
        title: "Անշարժ գույքով ապահովված Բանկային երաշխիքներ",
        type: "table",
        rows: [
          { id: "1", label: "Արժույթ", value: "ՀՀ դրամ կամ արտարժույթ" },
          { id: "2", label: "Տրամադրման սահմանափակում", value: "Ապահովվող անշարժ գույքի շուկայական/գնահատված արժեքի երկրապատիկի չափով" },
          { id: "3", label: "Ժամկետանցներ", value: "Մինչև 60 ամիս ժամկետով" },
          { id: "4", label: "Միջնորդավճար վճարման և երաշխիքով ամսական ներառման նկատմամբ", value: "• ՀՀ ռեզիդենտ իրավաբանական անձի, անհատ ձեռնարկատիրոջ\n• Համաձայնագիր ունի 3 և ավելի տարվա ունի Բանկում հաշիվներ ունեցող\n• Գործող պայմանի միջոց հասանելիության\n• Վերջին 12 ամսում գործառնական ժամկետանց օրերը չեն գերազանցում 60 օրը\n• Անհավատքի իսկական վաճառատի սահմանման երաշխիքավորություններ" },
          { id: "5", label: "Ապահովվածություն", value: "Բանկի համար ընդունելի անշարժ գույք" },
          { id: "6", label: "Տարեկան տոկոսադրույք", value: "1.0%" },
          { id: "7", label: "Ճշգրոտ երաշխիքում", value: "25,000 ՀՀ դրամ" },
          { id: "8", label: "Վճարում պահանջի դիմաց", value: "0.4%, նվազ. 10,000 ՀՀ դրամ" },
          { id: "9", label: "Վարկի դասակարգման դեպքում", value: "ՀՀ Կենտրոնական բանկի սահմանված բանկային տոկոսի հաշվարկային տոկոսադրույքի կրկնապատիկի չափով" }
        ]
      }
    ]
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 font-sans text-gray-800 space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">{content.title}</h1>
      
      <div className="space-y-4 text-sm leading-relaxed text-gray-700">
        <p>{content.introParagraph1}</p>
        <p>{content.introParagraph2}</p>
      </div>

      <h2 className="text-lg font-bold text-purple-900 mb-6">
        {content.sectionTitle}
      </h2>

      <div className="space-y-6">
        {content.guarantees.map((item, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-bold text-purple-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-700 inline-block"></span>
              {item.title}
            </h3>
            
            <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-5 text-sm text-gray-700 space-y-2">
              {item.enTitle && (
                <p className="italic text-gray-500 font-medium">
                  {item.enTitle}
                </p>
              )}
              <p className="leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 pt-4">
        <h2 className="text-xl font-bold text-gray-900">{content.topTitle}</h2>
        <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
          <p>{content.topDescription}</p>
        </div>
      </div>

      <div className="space-y-4 pt-2">
        <h3 className="text-lg font-bold text-purple-900">{content.advantagesTitle}</h3>
        <ul className="space-y-2">
          {content.advantages.map((adv, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
              <span className="w-2 h-2 rounded-full bg-purple-700 mt-2 flex-shrink-0"></span>
              <span>{adv}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6">
        <h2 className="text-xl font-bold uppercase mb-6 tracking-wide text-gray-900">
          {content.accordionSectionTitle}
        </h2>

        <div className="space-y-4">
          {content.accordions.map((acc, index) => {
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
                  <span className={`font-semibold text-sm md:text-base ${isOpen ? 'font-bold text-purple-900' : 'text-gray-800'}`}>
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
                    {acc.type === 'table' ? (
                      <div className="overflow-x-auto mt-4">
                        <table className="w-full border-collapse border border-purple-200 text-left">
                          <tbody>
                            {acc.rows.map((row, rIdx) => (
                              <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-purple-50/30' : 'bg-white'}>
                                <td className="border border-purple-200 p-3 font-medium w-12 text-center text-gray-500">
                                  {row.id}
                                </td>
                                <td className="border border-purple-200 p-3 font-semibold text-purple-900 w-1/3">
                                  {row.label}
                                </td>
                                <td className="border border-purple-200 p-3 text-gray-700 whitespace-pre-line">
                                  {row.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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
    </div>
  );
}

export default ArevtriFinansavorumiMasin;