import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const DigitaliMasin2 = () => {
  const [contentData, setContentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'digitaliMasin', 'content');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setContentData(docSnap.data());
        } else {
          setError('Տվյալները չեն գտնվել բազայում:');
        }
      } catch (err) {
        console.error('Սխալ տվյալների բեռնման ժամանակ:', err);
        setError('Տեղի ունեցավ սխալ տվյալները բեռնելիս:');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full min-h-[400px] bg-white">
        <p className="text-purple-800 font-medium animate-pulse">Բեռնվում է...</p>
      </div>
    );
  }

  if (error || !contentData) {
    return (
      <div className="flex justify-center items-center w-full min-h-[400px] bg-white">
        <p className="text-red-600 font-medium">{error || 'Տվյալները բացակայում են:'}</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full bg-white py-8">
      <div className="max-w-5xl w-full px-6 font-sans text-gray-800 space-y-8">
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
                  <th className="border border-purple-100 p-3 font-semibold w-1/4">{contentData.tableHeaders?.[0]}</th>
                  <th className="border border-purple-100 p-3 font-semibold">{contentData.tableHeaders?.[1]}</th>
                  <th className="border border-purple-100 p-3 font-semibold">{contentData.tableHeaders?.[2]}</th>
                  <th className="border border-purple-100 p-3 font-semibold">{contentData.tableHeaders?.[3]}</th>
                  <th className="border border-purple-100 p-3 font-semibold">{contentData.tableHeaders?.[4]}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-100 p-3 font-medium bg-gray-50/50">{contentData.tableRows?.[0]?.type}</td>
                  <td className="border border-purple-100 p-3">{contentData.tableRows?.[0]?.arca}</td>
                  <td className="border border-purple-100 p-3">{contentData.tableRows?.[0]?.local}</td>
                  <td className="border border-purple-100 p-3">{contentData.tableRows?.[0]?.international}</td>
                  <td className="border border-purple-100 p-3">{contentData.tableRows?.[0]?.qr}</td>
                </tr>
                <tr>
                  <td className="border border-purple-100 p-3 font-medium bg-gray-50/50">{contentData.tableRows?.[1]?.type}</td>
                  <td className="border border-purple-100 p-3 font-bold" colSpan="4">{contentData.tableRows?.[1]?.value}</td>
                </tr>
                <tr>
                  <td className="border border-purple-100 p-3 font-medium bg-gray-50/50">{contentData.tableRows?.[2]?.type}</td>
                  <td className="border border-purple-100 p-3 font-bold" colSpan="4">{contentData.tableRows?.[2]?.value}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-xs text-gray-500 space-y-1 pt-2">
            {contentData.footnotes?.map((note, index) => (
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
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">{contentData.steps?.[0]}</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-100 text-purple-800 font-bold text-sm flex-shrink-0">2</span>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">{contentData.steps?.[1]}</p>
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
              {contentData.loans?.businessLoan?.title}
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {contentData.loans?.businessLoan?.description}
            </p>
            <h3 className="font-bold text-gray-900 pt-2">Վարկի համար կարող են դիմել՝</h3>
            <ul className="space-y-2">
              {contentData.loans?.businessLoan?.applicants?.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-700 mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm md:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="font-bold text-gray-900 pt-2">Որպես վարկի ապահովման միջոց կարող են հանդիսանալ՝</h3>
            <ul className="space-y-2">
              {contentData.loans?.businessLoan?.collateral?.map((item, index) => (
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
              {contentData.loans?.businessOverdraft?.title}
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {contentData.loans?.businessOverdraft?.description}
            </p>
            <h3 className="font-bold text-gray-900 pt-2">Վարկի համար կարող են դիմել՝</h3>
            <ul className="space-y-2">
              {contentData.loans?.businessOverdraft?.applicants?.map((item, index) => (
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
    </div>
  );
};

export default DigitaliMasin2;