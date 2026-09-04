import React, { useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, addDoc } from 'firebase/firestore';

const tabs = [
  'Վարկի մասին',
  'Պայմաններ'
];

const loanData = {
  currencies: ['֏', '$', '€'],
  paragraphs: [
    {
      type: 'highlight',
      text: 'Ցանկանում եք ներմուծել հումք և մեծացնել տեքստիլի',
      rest: ' արտադրության ծավալները, բարձրացնել արդյունավետությունը։ Այդ դեպքում այս վարկատեսակը հենց Ձեզ համար է։'
    },
    {
      type: 'standard',
      text: 'Օգտվելով այս բիզնես վարկից՝ Դուք կստանաք մրցունակ տոկոսադրույք, երկարաժամկետ մարման հնարավորություն, պարզ պայմաններ և ձևակերպման արագ գործընթաց։ ',
      highlightText: 'Դուք նաև կարող եք ստանալ մինչև 8% սուբսիդավորում',
      rest: ' պետության կողմից։'
    },
    {
      type: 'simple',
      text: 'Այս վարկը նախատեսված է ՀՀ ռեզիդենտ իրավաբանական անձանց և անհատ ձեռնարկատերերի համար, որոնք գործունեություն են ծավալում տեքստիլ ոլորտում և զբաղվում են հումքի ներմուծմամբ։'
    },
    {
      type: 'simple',
      text: 'Բիզնես վարկը կարող եք ձևակերպել նաև արտարժույթով։'
    }
  ],
  highlights: [
    {
      limitText: 'Մինչև',
      mainValue: '36 ամիս',
      label: 'Ժամկետ',
    },
    {
      limitText: 'Մինչև',
      mainValue: '500 մլն ֏',
      label: 'Սահմանաչափ կամ համարժեք արտարժույթ',
    },
    {
      limitText: null,
      mainValue: '8%',
      label: 'Տոկոսադրույքի սուբսիդավորման չափ',
    },
  ]
};

const BusinessLoan2iMasin2 = ({ activeTab, setActiveTab }) => {
  
  useEffect(() => {
    const sendDataToFirebase = async () => {
      try {
        await addDoc(collection(db, 'businessLoan2iMasin'), loanData);
        console.log('Տվյալները հաջողությամբ ուղարկվեցին Firebase');
      } catch (error) {
        console.error('Սխալ տվյալների ուղարկման ժամանակ:', error);
      }
    };

    sendDataToFirebase();
  }, []);

  return (
    <div className="w-full bg-white p-4 sm:p-6">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed">
          {loanData.paragraphs.map((p, index) => {
            if (p.type === 'highlight') {
              return (
                <p key={index}>
                  <span className="text-[#6b11cb] font-bold">{p.text}</span>
                  {p.rest}
                </p>
              );
            }
            if (p.type === 'standard') {
              return (
                <p key={index}>
                  {p.text}
                  <span className="text-[#6b11cb] font-bold">{p.highlightText}</span>
                  {p.rest}
                </p>
              );
            }
            return (
              <p key={index}>{p.text}</p>
            );
          })}
        </div>
        <div className="lg:col-span-5 bg-white border border-purple-100 rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-purple-100 flex gap-2">
            {loanData.currencies.map((curr, idx) => (
              <span key={idx} className="w-8 h-8 rounded-full bg-[#6b11cb] text-white flex items-center justify-center font-bold text-sm">
                {curr}
              </span>
            ))}
          </div>

          {loanData.highlights.map((item, index) => (
            <div 
              key={index} 
              className={`p-4 flex items-center justify-between ${
                index !== loanData.highlights.length - 1 ? 'border-b border-purple-100' : ''
              }`}
            >
              <div>
                {item.limitText && <span className="text-xs text-gray-400 block">{item.limitText}</span>}
                <span className="text-xl sm:text-2xl font-bold text-[#6b11cb]">{item.mainValue}</span>
              </div>
              <span className={`text-gray-600 text-sm sm:text-base ${index > 0 ? 'text-right' : ''}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessLoan2iMasin2;