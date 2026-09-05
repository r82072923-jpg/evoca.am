import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfog';
const LeasingiMasin = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const firestoreLeasingData = [
    {
      title: "Evoca Leasing",
      content: `
        <div class="text-sm text-gray-700 space-y-5 mt-4 border-t border-purple-100 pt-4 cursor-auto">
          <p>Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից՝ առաջնային և երկրորդային շուկաներից: Լիզինգի առարկա կարող են հանդիսանալ՝</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Արտադրական/արդյունաբերական հաստոցներ/հոսքագծեր</li>
            <li>Բեռնատար/մարդատար ավտոմեքենաներ</li>
            <li>Շինարարական տեխնիկա</li>
            <li>Արևային կայաններ</li>
            <li>Բժշկական սարքավորումներ</li>
            <li>Կոմերցիոն անշարժ գույք</li>
            <li>և այլն</li>
          </ul>
          <h3 class="font-bold text-gray-900 text-base">Լիզինգի առավելությունները՝</h3>
          <ul class="list-disc pl-5 space-y-1">
            <li>Առանց գրավի առկայության պահանջի է,</li>
            <li>Առանց նոտարական/կադաստրային ծախսերի,</li>
            <li>Հնարավորություն է տալիս իրականացնել ԱԱՀ-ի հաշվանցումներ և ծախսագրումներ,</li>
            <li>Լիզինգի առարկայի ձեռքբերում արտերկրից՝ առանց հաճախորդի մասնակցության գնման գործընթացին,</li>
            <li>Ստանալ էքսպերտային գնահատում և խորհրդատվություն լիզինգային նախագծի վերաբերյալ:</li>
          </ul>
          <div class="overflow-x-auto mt-4">
            <table class="w-full text-left border-collapse border border-gray-200">
              <tbody>
                <tr class="border-b border-gray-200">
                  <td class="p-3 font-medium bg-gray-50">Լիզինգի առարկայի ապահովագրություն</td>
                  <td class="p-3">Լիզինգառուի կողմից։ Ապահովագրությունը պետք է գործի լիզինգի ողջ ժամանակահատվածում</td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="p-3 font-medium bg-gray-50">Մարման ժամկետ</td>
                  <td class="p-3">Մինչև 120 ամիս</td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="p-3 font-medium bg-gray-50">Տարեկան տոկոսադրույք</td>
                  <td class="p-3 space-y-1">
                    <p>ՀՀ դրամով՝ 9%-14%</p>
                    <p>ԱՄՆ դոլարով, Եվրոյով՝ 6%-10%</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>`
    },
    {
      title: "ՀՀ Կառավարության Տնտեսության Արդիականացման նպատակային ծրագրի ներքո արտադրողականության խթանմանն ուղղված լիզինգ",
      content: `
        <div class="text-sm text-gray-700 space-y-5 mt-4 border-t border-purple-100 pt-4 cursor-auto">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse border border-gray-200">
              <tbody>
                <tr class="border-b border-gray-200">
                  <td class="p-3 font-medium bg-gray-50 w-1/3">Ֆինանսավորում</td>
                  <td class="p-3">Լիզինգ</td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="p-3 font-medium bg-gray-50">Արժույթ</td>
                  <td class="p-3">ՀՀ դրամ, ԱՄՆ դոլար կամ Եվրո</td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="p-3 font-medium bg-gray-50">Սուբսիդավորման ժամանակահատված</td>
                  <td class="p-3 space-y-2">
                    <p>Մինչև 42 ամիս</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>`
    },
    {
      title: "Լիզինգ՝ գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով",
      content: `
        <div class="text-sm text-gray-700 space-y-5 mt-4 border-t border-purple-100 pt-4 cursor-auto">
          <p class="font-medium text-gray-800">
            Լիզինգի՝ գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով կանխավճարի մասնակի սուբսիդավորումը գործում է մինչև 30.12.2026թ. լիզինգի տրամադրման պայմանագիր կնքած շահառուների համար:
          </p>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse border border-gray-200">
              <tbody>
                <tr class="border-b border-gray-200">
                  <td class="p-3 font-medium bg-gray-50 w-1/3">Արժույթ</td>
                  <td class="p-3">ՀՀ դրամ</td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="p-3 font-medium bg-gray-50">Լիզինգի սահմանաչափ</td>
                  <td class="p-3">5,000,000-500,000,000 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>`
    }
  ];

  const uploadToFirestore = async () => {
    try {
      const colRef = collection(db, "leasingiMasin");
      for (const item of firestoreLeasingData) {
        await addDoc(colRef, item);
      }
      alert("Տվյալները հաջողությամբ ավելացվեցին բազայում!");
    } catch (error) {
      console.error("Սխալ Firestore ուղարկելիս՝ ", error);
      alert("Առաջացավ սխալ, ստուգեք կոնսոլը:");
    }
  };

  return (
    <div className="max-w-4xl p-6 font-sans bg-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Evoca Leasing
        </h1>
        <button 
          onClick={uploadToFirestore}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
        >
          Ուղարկել Տվյալները Firebase
        </button>
      </div>
      
      <h2 className="text-base font-bold text-gray-900 mb-4 uppercase">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>
      
      <div className="flex flex-col gap-3">
        {firestoreLeasingData.map((item, index) => (
          <div 
            key={index}
            className="border border-purple-200 rounded-lg p-4 flex flex-col transition-colors duration-200"
          >
            <div 
              onClick={() => toggleItem(index)}
              className="flex items-start cursor-pointer hover:opacity-80"
            >
              <div 
                className={`mt-1 mr-4 text-purple-700 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              >
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-slate-500 font-bold text-sm md:text-base leading-relaxed">
                {item.title}
              </div>
            </div>
            
            {openIndex === index && (
              <div 
                className="pl-0 md:pl-8" 
                onClick={(e) => e.stopPropagation()}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeasingiMasin;