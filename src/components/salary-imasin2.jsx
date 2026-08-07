import React from 'react';
import { Link } from 'react-router-dom';

const salaryProjectData = {
  intro: {
    textBefore: "Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուց բացի, ցանկանում են նաև ստանալ ",
    highlightText: "նոր հնարավորություններ ու առավելություններ",
    textAfter: ":"
  },
  offers: [
    {
      id: 1,
      title: {
        prefixText: "Բեր աշխատավարձդ Evoca, Տար անվճար ",
        cardName: "Mastercard Gold",
        link: "/mastercard-gold"
      },
      features: [
        { id: 1, text: "Պրեմիում դասի քարտ" },
        { id: 2, text: "Հասանելի ամբողջ աշխարհում" },
        { id: 3, text: "Գումարի անվտանգության բարձր մակարդակ" },
        { 
          id: 4, 
          textBefore: "Դրական մնացորդի նկատմամբ ", 
          highlightText: "2% տարեկան տոկոսադրույք" 
        }
      ]
    },
    {
      id: 2,
      title: {
        prefixText: "Բեր աշխատավարձդ Evoca, Տար 50% զեղչով ",
        cardName: "Evoca Travel Card",
        link: "/travel-gold"
      },
      features: [
        { 
          id: 1, 
          textBefore: "Մինչև ", 
          highlightText: "1.5% cashback", 
          textAfter: " արտասահմանում իրականացրած վճարումների համար" 
        },
        { 
          id: 2, 
          textBefore: "Անվճար ", 
          highlightText: "6 մուտք", 
          textAfter: " Lounge Key սրահներ քեզ և հյուրերիդ համար" 
        },
        { 
          id: 3, 
          textBefore: "Անվճար ", 
          highlightText: "6 անգամ", 
          textAfter: " Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար" 
        },
        { 
          id: 4, 
          text: "Այլ ճամփորդական առավելություններ" 
        }
      ]
    },
    {
      id: 3,
      title: {
        prefixText: "Բեր աշխատավարձդ Evoca Տար մի շարք ",
        cardName: "Բենեֆիթներ",
        link: "/benefits"
      },
      description: {
        textBefore: "Դառնալով Evoca քարտապան՝ կունենաս հնարավորություն օգտվելու ",
        highlightText: "Evoca Benefits",
        textAfter: " նախագծից և մեր 100-ից ավել գործընկերների մոտ կստանաս՝"
      },
      features: [
        { 
          id: 1, 
          textBefore: "Մինչև ", 
          highlightText: "25% զեղչ" 
        },
        { 
          id: 2, 
          textBefore: "Մինչև ", 
          highlightText: "25% cashback" 
        },
        { 
          id: 3, 
          text: "Նվեր քարտեր" 
        }
      ]
    },
    {
      id: 4,
      title: {
        prefixText: "Բեր աշխատավարձդ Evoca, Տար ավելի ցածր տոկոսադրույքով վարկեր",
        cardName: "Օվերդրաֆտ կամ Մարման գրաֆիկով վարկ",
        link: "/loans",
        isBlockLink: true
      },
      features: [
        { 
          id: 1, 
          textBefore: "Մինչև աշխատավարձի ", 
          highlightText: "15-ապատիկի չափով" 
        },
        { 
          id: 2, 
          textBefore: "Մինչև ", 
          highlightText: "10 մլն դրամ", 
          textAfter: " գումար" 
        },
        { 
          id: 3, 
          textBefore: "Մինչև ", 
          highlightText: "60 ամիս", 
          textAfter: " մարման ժամկետ" 
        }
      ]
    },
    {
      id: 5,
      title: {
        cardName: "Ավտովարկ",
        link: "/auto-loan"
      },
      features: [
        { 
          id: 1, 
          highlightText: "0.5-ով", 
          textAfter: " ցածր տոկոսադրույք" 
        },
        { 
          id: 2, 
          textBefore: "Մինչև ", 
          highlightText: "50 մլն դրամ", 
          textAfter: " գումար" 
        },
        { 
          id: 3, 
          textBefore: "Մինչև ", 
          highlightText: "84 ամիս", 
          textAfter: " մարման ժամկետ" 
        },
        { 
          id: 4, 
          text: "Նախընտրած մեքենայի ձեռքբերում՝ ինչպես առաջնային, այնպես էլ երկրորդային շուկայից" 
        }
      ]
    },
    {
      id: 6,
      title: {
        cardName: "Անշարժ գույքի գրավով սպառողական վարկ",
        link: "/real-estate-loan"
      },
      features: [
        { 
          id: 1, 
          highlightText: "0.5-ով", 
          textAfter: " ցածր տոկոսադրույք" 
        },
        { 
          id: 2, 
          textBefore: "Մինչև ", 
          highlightText: "100 մլն դրամ", 
          textAfter: " գումար" 
        },
        { 
          id: 3, 
          textBefore: "Մինչև ", 
          highlightText: "120 ամիս", 
          textAfter: " մարման ժամկետ" 
        }
      ]
    }
  ]
};

function SalaryiMasin2() {
  return (
    <section className="w-full max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-[#2b2b2b]">
      <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-8">
        {salaryProjectData.intro.textBefore}
        <span className="font-bold text-[#8000ff]">
          {salaryProjectData.intro.highlightText}
        </span>
        {salaryProjectData.intro.textAfter}
      </p>

      <div className="space-y-10">
        {salaryProjectData.offers.map((offer) => (
          <div key={offer.id}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#8000ff] mb-6">
              {offer.title.prefixText && (
                <span>{offer.title.prefixText}</span>
              )}
              <Link 
                to={offer.title.link} 
                className={`underline hover:opacity-80 transition-opacity ${offer.title.isBlockLink ? 'block mt-3' : ''}`}
              >
                {offer.title.cardName}
              </Link>
            </h3>

            {offer.description && (
              <p className="text-base sm:text-lg font-medium leading-relaxed mb-4">
                {offer.description.textBefore}
                <span className="font-bold text-[#8000ff]">
                  {offer.description.highlightText}
                </span>
                {offer.description.textAfter}
              </p>
            )}

            <ul className="space-y-4 text-base sm:text-lg font-medium list-disc list-inside marker:text-[#8000ff] marker:text-xl">
              {offer.features.map((item) => (
                <li key={item.id}>
                  <span>
                    {item.text ? (
                      item.text
                    ) : (
                      <>
                        {item.textBefore}
                        <strong className="font-bold text-[#8000ff]">
                          {item.highlightText}
                        </strong>
                        {item.textAfter}
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SalaryiMasin2;