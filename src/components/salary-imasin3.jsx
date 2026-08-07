import React, { useState } from 'react';
import SalaryiMasin2 from './salary-imasin2';

const faqData = [
  {
    id: 1,
    question: "Ո՞վ կարող է միանալ Evoca աշխատավարձային նախագծին։",
    answer: "Evoca աշխատավարձային նախագծին կարող է միանալ յուրաքանչյուր ֆիզիկական անձ, ով ցանկանում է իր աշխատավարձը ստանալ Evocabank-ի քարտով՝ անկախ գործունեության ոլորտից կամ զբաղվածությունից:"
  },
  {
    id: 2,
    question: "Կարո՞ղ եմ օգտվել միայն նոր գործատու ունենալու դեպքում։",
    answer: "Ո՛չ։ Բավական է ձեր գործատուին ներկայացնել Evoca քարտի տվյալները, և աշխատավարձը կփոխանցվի արդեն Evoca-ում բացված հաշվին։"
  },
  {
    id: 3,
    question: "Կարո՞ղ եմ դիմել, եթե դեռ Evoca-ի հաճախորդ չեմ։",
    answer: "Իհարկե՛։ Եթե դեռ Evoca-ի հաճախորդ չես, դու նույնպես կարող ես միանալ Evoca աշխատավարձային նախագծին:"
  },
  {
    id: 4,
    question: "Ե՞րբ կսկսեմ օգտվել արտոնություններից։",
    answer: "Արտոնություններից կարող ես օգտվել այն պահից, երբ առաջին աշխատավարձդ փոխանցվի Evocabank-ի քարտին։Քարտերի առավելությունները գործում են անմիջապես, իսկ վարկային առավելություններից կարող ես օգտվել աշխատավարձդ Բանկի քարտին մեկ անգամ ստանալուց հետո։"
  },
  {
    id: 5,
    question: "Կարող եմ ունենալ մի քանի քարտ աշխատավարձային նախագծի շրջանակում",
    answer: "Այո՛, կարող ես ունենալ Բանկի կողմից թողարկված մի քանի գործող քարտ, սակայն աշխատավարձային նախագծի շրջանակում կարող ես ընտրել նշված քարտերից մեկը, որի վրա էլ կստանաս աշխատավարձդ, իսկ Evoca Travel Card-ը կարող ես ձեռք բերել 50% զեղչով։"
  },
  {
    id: 6,
    question: "Ինչպե՞ս կարող եմ դիմել աշխատավարձային նախագծին միանալու համար",
    answer: "Միանալու համար կարող ես զանգահարել +37410605555 | 8444 հեռախոսահամարներով կամ այցելել Evocabank-ի ցանկացած մասնաճյուղ և ստանալ խորհրդատվություն"
  }
];

function SalaryiMasin3() {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-8 px-4 font-sans">
      <div className="space-y-4">
        {faqData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => toggleAccordion(item.id)}
              className={`border rounded-2xl p-5 cursor-pointer transition-all duration-300 ${
                isOpen
                  ? 'border-[#8000ff] bg-white shadow-sm'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  {isOpen ? (
                    <svg className="w-5 h-5 text-[#8000ff] transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-[#8000ff] transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className={`text-base sm:text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-[#1a1a1a]' : 'text-gray-400'}`}>
                    {item.question}
                  </h4>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[#4a4a4a] text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SalaryiMasin3;