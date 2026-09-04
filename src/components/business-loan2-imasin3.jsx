import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';
import BusinessLoan2iMasin2 from './business-loan2-imasin2';

const tabs = [
  'Վարկի մասին',
  'Պայմաններ'
];

const loanTermsData = [
  { id: '1.', label: 'Ֆինանսավորում', value: 'Վարկ' },
  { id: '2.', label: 'Արժույթ', value: 'ՀՀ դրամ, ԱՄՆ դոլար, եվրո' },
  { id: '3.', label: 'Վարկառու*', value: 'ՀՀ ռեզիդենտ իրավաբանական անձ, անհատ ձեռնարկատեր' },
  { id: '4.', label: 'Նպատակ**', value: 'Հումքի ներմուծում' },
  { id: '5.', label: 'Վարկի գումար***', value: '5,100,000-500,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ' },
  { id: '6.', label: 'Բիզնես ուղղություն', value: 'Գործունեություն տեքստիլ ոլորտում' },
  { id: '7.', label: 'Մարման ժամկետ', value: 'Մինչև 36 ամիս' },
  { id: '8.', label: 'Սուբսիդավորման ժամկետ', value: 'Մինչև 12 ամիս' },
  { 
    id: '9.', 
    label: 'Տոկոսադրույքի սուբսիդավորման չափ', 
    value: (
      <>
        <span>ՀՀ դրամ՝ 8%</span>
        <div className="mt-1">ԱՄՆ դոլար, եվրո՝ 6%</div>
      </>
    ) 
  },
  { 
    id: '10.', 
    label: 'Ապահովում', 
    value: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Երաշխավորություն՝ մինչև 10 մլն ՀՀ դրամ (ներառյալ) կամ համարժեք վարկերի դեպքում։</li>
        <li>Գրավ՝ 10,000,000 ՀՀ դրամը գերազանցող կամ համարժեք արտարժույթով վարկերի դեպքում։</li>
      </ul>
    ) 
  },
  { id: '11.', label: 'Երաշխավոր', value: 'ՀՀ ռեզիդենտ իրավաբանական անձ, ֆիզիկական անձ' },
  { 
    id: '12.', 
    label: 'Գրավ', 
    value: (
      <div className="space-y-3">
        <ul className="list-disc pl-5 space-y-1">
          <li>Անշարժ և շարժական գույքը</li>
          <li>Ավանդային կամ ընթացիկ հաշիվների դրամական միջոցները</li>
          <li>Ոսկու ստանդարտացված ձուլակտորները կամ ջարդոնը</li>
          <li>Պետական կարճաժամկետ պարտատոմսերը կամ այլ արժեթղթերը</li>
        </ul>
        <p>
          Անհրաժեշտության դեպքում՝ այլ գրավների առկայության պարագայում կարող են ընդունվել նաև շրջանառու միջոցները և պատրաստի արտադրանքը (հաշվի առնելով այլ գրավների իրացվելիության աստիճանը կամ վարկ/գրավ հարաբերակցության չափը վարկավորման ժամկետը, հաճախորդի բնութագիրը և այլն):
        </p>
        <p>
          <strong className="text-gray-900">Լրացուցիչ պայման՝</strong> Բանկը կարող է պահանջել նաև այլ ֆիզիկական կամ իրավաբանական անձանց երաշխավորություն։
        </p>
      </div>
    ) 
  },
  { id: '13.', label: 'Վարկային միջոցի օգտագործում', value: 'Անկանխիկ և բանկային փոխանցումներով' },
  { 
    id: '14.', 
    label: 'Մարման եղանակը', 
    value: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Անուիտետային</li>
        <li>Հավասարաչափ</li>
      </ul>
    ) 
  },
  { 
    id: '15.', 
    label: 'Ժամկետանց պարտավորությունների մարման տույժեր', 
    value: (
      <div className="space-y-2">
        <p>Յուրաքանչյուր ժամկետանց օրվա համար Բանկն իրավունք ունի հաշվարկել տույժ՝ սկսած ուշացման առաջին օրվանից`</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Ժամկետանց մայր գումարի համար՝ օրական 0.015%</li>
          <li>Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%</li>
        </ul>
      </div>
    ) 
  },
  { id: '16.', label: 'Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք', value: 'Չի սահմանվում' },
  { 
    id: '17.', 
    label: 'Գանձվող վճարներ', 
    value: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Վարկային հայտի ուսումնասիրման վճար՝ չի սահմանվում</li>
        <li>Վարկի տրամադրման վճար՝ չի սահմանվում</li>
      </ul>
    ) 
  },
];

const BusinessLoan2iMasin3 = () => {
  const [activeTab, setActiveTab] = useState('Վարկի մասին');
  const [loanData, setLoanData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'businessLoan2iMasin'));
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setLoanData(docData);
        } else {
          setError('Տվյալներ չեն գտնվեց բազայում։');
        }
      } catch (err) {
        console.error('Սխալ տվյալների ստացման ժամանակ:', err);
        setError('Չհաջողվեց բեռնել տվյալները։');
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirebase();
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

      {activeTab === 'Վարկի մասին' ? (
        loading ? (
          <div className="py-12 text-center text-gray-500">Բեռնվում է...</div>
        ) : error ? (
          <div className="py-12 text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed">
              {loanData?.paragraphs?.map((p, index) => {
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
                return <p key={index}>{p.text}</p>;
              })}
            </div>

            <div className="lg:col-span-5 bg-white border border-purple-100 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-purple-100 flex gap-2">
                {loanData?.currencies?.map((curr, idx) => (
                  <span key={idx} className="w-8 h-8 rounded-full bg-[#6b11cb] text-white flex items-center justify-center font-bold text-sm">
                    {curr}
                  </span>
                ))}
              </div>

              {loanData?.highlights?.map((item, index) => (
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
        )
      ) : (
        <div className="w-full border border-purple-100 rounded-xl overflow-hidden shadow-sm">
          <div className="divide-y divide-purple-100">
            {loanTermsData.map((row) => (
              <div key={row.id} className="grid grid-cols-1 md:grid-cols-12 text-sm sm:text-base">
                <div className="md:col-span-4 p-4 bg-purple-50/40 text-gray-700 font-medium flex items-start gap-3 border-r border-purple-100">
                  <span className="text-gray-400 font-normal">{row.id}</span>
                  <span>{row.label}</span>
                </div>
                <div className="md:col-span-8 p-4 text-gray-800 flex items-center">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessLoan2iMasin3;