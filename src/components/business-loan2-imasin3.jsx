import React from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebaseConfog';
import { db } from './firebaseConfog'; 

const tabs = [
  'Վարկի մասին',
  'Պայմաններ'
];

const loanTermsData = [
  { id: '1.', label: 'Ֆինանսավորում', value: 'Վարկ', order: 1 },
  { id: '2.', label: 'Արժույթ', value: 'ՀՀ դրամ, ԱՄՆ դոլար, եվրո', order: 2 },
  { id: '3.', label: 'Վարկառու*', value: 'ՀՀ ռեզիդենտ իրավաբանական անձ, անհատ ձեռնարկատեր', order: 3 },
  { id: '4.', label: 'Նպատակ**', value: 'Հումքի ներմուծում', order: 4 },
  { id: '5.', label: 'Վարկի գումար***', value: '5,100,000-500,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ', order: 5 },
  { id: '6.', label: 'Բիզնես ուղղություն', value: 'Գործունեություն տեքստիլ ոլորտում', order: 6 },
  { id: '7.', label: 'Մարման ժամկետ', value: 'Մինչև 36 ամիս', order: 7 },
  { id: '8.', label: 'Սուբսիդավորման ժամկետ', value: 'Մինչև 12 ամիս', order: 8 },
  { id: '9.', label: 'Տոկոսադրույքի սուբսիդավորման չափ', value: 'ՀՀ դրամ՝ 8%\nԱՄՆ դոլար, եվրո՝ 6%', order: 9 },
  { id: '10.', label: 'Ապահովում', value: '• Երաշխավորություն՝ մինչև 10 մլն ՀՀ դրամ (ներառյալ) կամ համարժեք վարկերի դեպքում։\n• Գրավ՝ 10,000,000 ՀՀ դրամը գերազանցող կամ համարժեք արտարժույթով վարկերի դեպքում։', order: 10 },
  { id: '11.', label: 'Երաշխավոր', value: 'ՀՀ ռեզիդենտ իրավաբանական անձ, ֆիզիկական անձ', order: 11 },
  { id: '12.', label: 'Գրավ', value: '• Անշարժ և շարժական գույքը\n• Ավանդային կամ ընթացիկ հաշիվների դրամական միջոցները\n• Ոսկու ստանդարտացված ձուլակտորները կամ ջարդոնը\n• Պետական կարճաժամկետ պարտատոմսերը կամ այլ արժեթղթերը\n\nԱնհրաժեշտության դեպքում՝ այլ գրավների առկայության պարագայում կարող են ընդունվել նաև շրջանառու միջոցները և պատրաստի արտադրանքը (հաշվի առնելով այլ գրավների իրացվելիության աստիճանը կամ վարկ/գրավ հարաբերակցության չափը վարկավորման ժամկետը, հաճախորդի բնութագիրը և այլն):\n\nԼրացուցիչ պայման՝ Բանկը կարող է պահանջել նաև այլ ֆիզիկական կամ իրավաբանական անձանց երաշխավորություն։', order: 12 },
  { id: '13.', label: 'Վարկային միջոցի օգտագործում', value: 'Անկանխիկ և բանկային փոխանցումներով', order: 13 },
  { id: '14.', label: 'Մարման եղանակը', value: '• Անուիտետային\n• Հավասարաչափ', order: 14 },
  { id: '15.', label: 'Ժամկետանց պարտավորությունների մարման տույժեր', value: 'Յուրաքանչյուր ժամկետանց օրվա համար Բանկն իրավունք ունի հաշվարկել տույժ՝ սկսած ուշացման առաջին օրվանից`\n• Ժամկետանց մայր գումարի համար՝ օրական 0.015%\n• Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%', order: 15 },
  { id: '16.', label: 'Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք', value: 'Չի սահմանվում', order: 16 },
  { id: '17.', label: 'Գանձվող վճարներ', value: '• Վարկային հայտի ուսումնասիրման վճար՝ չի սահմանվում\n• Վարկի տրամադրման վճար՝ չի սահմանվում', order: 17 },
];

const BusinessLoan2iMasin3 = ({ activeTab, setActiveTab }) => {

  const uploadDataToFirebase = async () => {
    try {
      const collectionRef = collection(db, "businessLoan2iMasin2");
      
      for (const item of loanTermsData) {
        await addDoc(collectionRef, item);
      }
      alert("Տվյալները հաջողությամբ վերբեռնվեցին Firebase-ի businessLoan2iMasin2 collection!");
    } catch (error) {
      console.error("Սխալ վերբեռնելիս: ", error);
      alert("Տեղի ունեցավ սխալ, տես console-ը");
    }
  };

  return (
    <div className="w-full bg-white p-4 sm:p-6">

      <div className="mb-4 flex justify-end">
        <button 
          onClick={uploadDataToFirebase}
          className="bg-[#6b11cb] text-white px-4 py-2 rounded-md hover:bg-purple-700 transition shadow-sm text-sm"
        >
          Վերբեռնել Firebase
        </button>
      </div>

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

      <div className="w-full border border-purple-100 rounded-xl overflow-hidden shadow-sm">
        <div className="divide-y divide-purple-100">
          {loanTermsData.map((row) => (
            <div key={row.id} className="grid grid-cols-1 md:grid-cols-12 text-sm sm:text-base">
              <div className="md:col-span-4 p-4 bg-purple-50/40 text-gray-700 font-medium flex items-center gap-3 border-r border-purple-100">
                <span className="text-gray-400 font-normal">{row.id}</span>
                <span>{row.label}</span>
              </div>
              <div className="md:col-span-8 p-4 text-gray-800 flex items-center whitespace-pre-line">
                {row.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessLoan2iMasin3;