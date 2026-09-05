import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebaseConfog';
import { renderToStaticMarkup } from "react-dom/server"; 
const LeasingiMasin = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


const uploadDataToFirebase = async () => {
  try {
    const leasingCollection = collection(db, "leasingiMasin");
    
    for (const item of leasingData) {
      const htmlString = renderToStaticMarkup(item.content);
      
      await addDoc(leasingCollection, {
        title: item.title,
        content: htmlString
      });
    }
    
    alert("Տվյալները հաջողությամբ ուղարկվեցին Firebase!");
  } catch (error) {
    console.error("Սխալ տվյալների պահպանման ժամանակ:", error);
  }
};
  const leasingData = [
    {
      title: "Evoca Leasing",
      content: (
        <div className="text-sm text-gray-700 space-y-5 mt-4 border-t border-purple-100 pt-4 cursor-auto">
            <button onClick={uploadDataToFirebase}>Ուղարկել firebase</button>
          <p>
            Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից՝ առաջնային և երկրորդային շուկաներից: Լիզինգի առարկա կարող են հանդիսանալ՝
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Արտադրական/արդյունաբերական հաստոցներ/հոսքագծեր</li>
            <li>Բեռնատար/մարդատար ավտոմեքենաներ</li>
            <li>Շինարարական տեխնիկա</li>
            <li>Արևային կայաններ</li>
            <li>Բժշկական սարքավորումներ</li>
            <li>Կոմերցիոն անշարժ գույք</li>
            <li>և այլն</li>
          </ul>

          <h3 className="font-bold text-gray-900 text-base">Լիզինգի առավելությունները՝</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Առանց գրավի առկայության պահանջի է,</li>
            <li>Առանց նոտարական/կադաստրային ծախսերի,</li>
            <li>Հնարավորություն է տալիս իրականացնել ԱԱՀ-ի հաշվանցումներ և ծախսագրումներ,</li>
            <li>Լիզինգի առարկայի ձեռքբերում արտերկրից՝ առանց հաճախորդի մասնակցության գնման գործընթացին,</li>
            <li>Ստանալ էքսպերտային գնահատում և խորհրդատվություն լիզինգային նախագծի վերաբերյալ:</li>
          </ul>

          <h3 className="font-bold text-gray-900 text-base">Պայմաններ և սակագներ՝</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-200">
              <tbody>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Լիզինգի առարկայի ապահովագրություն</td>
                <td className="p-3">Լիզինգառուի կողմից։ Ապահովագրությունը պետք է գործի լիզինգի ողջ ժամանակահատվածում</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Այլ ապահովագրություններ (անհրաժեշտության դեպքում)</td>
                <td className="p-3">
                    <ul className="list-disc pl-4 space-y-1">
                    <li>Կյանքի ապահովագրություն</li>
                    <li>Դժբախտ պատահարներից ապահովագրություն</li>
                    <li>Գույքի ապահովագրություն</li>
                    </ul>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Լիզինգի վաղաժամկետ մարման ժամկետների և բացման դեպքում սպասվող տույժեր</td>
                <td className="p-3">
                    <ul className="list-disc pl-4 space-y-1">
                    <li>Տասներկուց շուտ մարման դեպքում՝ տուգանք 0.5%-ի չափով</li>
                    <li>Տասներկուց տոկոսադրույքների դեպքում՝ տուգանք 1%-ի չափով</li>
                    </ul>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Մարմանը ցաս վճարվող տուժանքներ</td>
                <td className="p-3">
                    <ul className="list-disc pl-4 space-y-1">
                    <li>Լիզինգի պայմանագրով որոշվող ժամկետի խախտման դեպքում՝ իջեցված ժամկետների ժամանակացույցով սահմանված սահմանված վարձավճարներից ավելին վճարելու դեպքում (խախտվում է ստանդարտ ժամկետների ժամանակացույցով սահմանված լիզինգի վճարի ժամկետից ավելին` տուգանք 0.1% չափով)</li>
                    <li>Սահմանված ժամկետում վճարումների կատարման ժամանակահատվածի սահմանափակումների պայմանագրի չկատարվող կամ ոչ պատշաճ կատարման դեպքում</li>
                    </ul>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Ապահովով փոխարկում</td>
                <td className="p-3">
                    <ul className="list-disc pl-4 space-y-1">
                    <li>Նպատակավորվող արժույթով` ըստ պահանջարկի</li>
                    <li>Ռեզիդենցիալիզացիայի ոլորտում` ըստ պահանջարկի</li>
                    <li>Սահմանված դեպքերում վարձեր ամբողջացնելու պայմանագրերի դեպքում կարող է տրամադրվել նաև այլ արժույթով</li>
                    </ul>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Դիմում-հայտի վճարներ</td>
                <td className="p-3">
                    <ul className="list-disc pl-4 space-y-1">
                    <li>Լիզինգային հայտի ուսումնասիրման միանվագ վճար` 20,000 ՀՀ դրամ</li>
                    <li>Լիզինգային տրամադրող միջանցкаգահով պահանջվող միջնորդավճար` 0.1%, ոչ ավել քան 100,000 ՀՀ դրամ</li>
                    </ul>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Սեփականության իրավունքի փոխանցման վճար` բացառությամբ պայմանագրի սնանկի մասով պահանջի համաձայնով</td>
                <td className="p-3">10,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                <td className="p-3 font-medium bg-gray-50">Լիզինգի պայմանների վերանայում</td>
                <td className="p-3">15,000 ՀՀ դրամ</td>
                </tr>
            <tr className="border-b border-gray-200">
            <td className="p-3 font-medium bg-gray-50">Ֆինանսավորման առավելագույն չափ</td>
            <td className="p-3 space-y-3">
                <p>
                Մեքենասարքավորումների և դրանց բաղկացուցիչ մասերի դեպքում՝ 1 մլրդ ՀՀ դրամ կամ համարժեք արտարժույթ (պայմանագրի ստորագրման պահի փոխարժեքով):
                </p>
                <p>
                Կապիտալ շինարարության դեպքում՝ ձեռք բերված մեքենասարքավորման 50%:
                </p>
                <p>
                Բիզնես գործընթացների թվայնացման ծրագրային ապահովման և արտադրողականության խորհրդատվության դեպքում՝ 400 մլն ՀՀ դրամ կամ համարժեք արտարժույթ (պայմանագրի ստորագրման պահի փոխարժեքով):
                </p>
                <p>
                Յուրաքանչյուր լիզինգառու կարող է օգտվել ծրագրի բոլոր նպատակներից, սակայն սուբսիդավորվող մասի առավելագույն գումարը չի կարող գերազանցել նշված չափը՝ փոխկապակցված համախումբ կազմակերպությունների գծով:
                </p>
            </td>
            </tr>
            <tr className="border-b border-gray-200">
            <td className="p-3 font-medium bg-gray-50">Մարման ժամկետ</td>
            <td className="p-3">Մինչև 120 ամիս</td>
            </tr>
            <tr className="border-b border-gray-200">
            <td className="p-3 font-medium bg-gray-50">Տարեկան տոկոսադրույք</td>
            <td className="p-3 space-y-1">
                <p>ՀՀ դրամով՝ 9%-14%</p>
                <p>ԱՄՆ դոլարով, Եվրոյով՝ 6%-10%</p>
            </td>
            </tr>
            <tr className="border-b border-gray-200">
            <td className="p-3 font-medium bg-gray-50">Կանխավճար</td>
            <td className="p-3">Լիզինգի առարկայի արժեքի նվազագույնը՝ 10%</td>
            </tr>
            <tr className="border-b border-gray-200">
            <td className="p-3 font-medium bg-gray-50">Ապահովովություն</td>
            <td className="p-3 space-y-2">
                <p>Իրավաբանական անձի, ֆիզիկական անձի երաշխավորություն</p>
                <p>Գույքի գրավ (ըստ պահանջի)</p>
            </td>
            </tr>
            <tr className="border-b border-gray-200">
            <td className="p-3 font-medium bg-gray-50">Սուբսիդավորման ժամանակահատված</td>
            <td className="p-3 space-y-2">
                <p>Մինչև 42 ամիս</p>
                <p>Ընդ որում՝ մատակարարման փուլի տոկոսադրույքի սուբսիդավորումը կատարվում է մինչև 180 օր ժամկետի համար՝ սկսած լիզինգի պայմանագրի կնքման օրվանից, իսկ 180 օր ժամկետը գերազանցող ժամկետի համար տոկոսների վճարման պարտականությունը կրում է Լիզինգառուն</p>
            </td>
            </tr>
            <tr className="border-b border-gray-200">
            <td className="p-3 font-medium bg-gray-50">Վարկային միջոցի օգտագործում</td>
            <td className="p-3">Անկանխիկ և բանկային փոխանցումներով</td>
            </tr>
            <tr className="border-b border-gray-200">
            <td className="p-3 font-medium bg-gray-50">Տոկոսադրույքի սուբսիդավորում</td>
            <td className="p-3 space-y-1">
                <p>ՀՀ դրամով՝ 8%</p>
                <p>ԱՄՆ դոլարով, Եվրոյով՝ 6%</p>
            </td>
            </tr>
            <tr className="border-b border-gray-200">
            <td className="p-3 font-medium bg-gray-50">Լիզինգի առարկայի արժեք</td>
            <td className="p-3">
                Նառառում է լիզինգի առարկայի ձեռքբերման գինը, ՀՀ ներմուծման հետ կապված ծախսերը։ Ներմուծման հետ կապված ծախսերի մեջ կարող է ներառվել տեղափոխման, մաքսազերծման, ավելացված արժեքի հարկի վճարման և տեղափոխման հետ կապված այլ ծախսերը՝ դրանց առկայության դեպքում։
            </td>
            </tr>
            <tr className="border-b border-gray-200">
            <td className="p-3 font-medium bg-gray-50">Մարման եղանակը</td>
            <td className="p-3">
                <ul className="list-disc pl-4 space-y-1">
                <li>Անհավասարաչափ</li>
                <li>Հավասարաչափ</li>
                <li>Պայմանագրային</li>
                </ul>
            </td>
            </tr>
            <tr>
            <td className="p-3 font-medium bg-gray-50">Մայր գումարի արտոնյալ ժամանակաշրջան</td>
            <td className="p-3">Մինչև 6 ամիս</td>
            </tr>
              </tbody>
            </table>
          </div>
        <div className="mt-5 text-xs text-gray-500 space-y-2">
        <p>Լիզինգի սահմանաչափը 1) Լիզինգային պայմանների, յուրահատկությունների դեպքում լիզինգը ոչ ստանդարտագույք կամ տրանսպորտային միջոցի հետ և 2) Լիզինգի առարկայի տեսակից մատակարարից, լիզինգի սահմանաչափավորությունից կախված և այլ սխալներից</p>
        </div>
        </div>
      )
    },
    {
    title: "ՀՀ Կառավարության Տնտեսության Արդիականացման նպատակային ծրագրի ներքո արտադրողականության խթանմանն ուղղված լիզինգ (գործելու է մինչև 31.12.2026թ.)",
    content: (
        <div className="text-sm text-gray-700 space-y-5 mt-4 border-t border-purple-100 pt-4 cursor-auto">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-200">
            <tbody>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50 w-1/3">Ֆինանսավորում</td>
                <td className="p-3">Լիզինգ</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Արժույթ</td>
                <td className="p-3">ՀՀ դրամ, ԱՄՆ դոլար կամ Եվրո</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Լիզինգառու</td>
                <td className="p-3">ՀՀ ռեզիդենտ իրավաբանական անձ և անհատ ձեռնարկատեր</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Նպատակ</td>
                <td className="p-3 space-y-3">
                    <p>
                    Նոր (չօգտագործված) մեքենասարքավորումների գքում կամ ներմուծում, որոնք օգտագործվելու են Հայաստանի Հանրապետության տարածքում (ներառում է նաև մեքենասարքավորումների բաղկացուցիչ մասերը):
                    </p>
                    <p>
                    Կապիտալ շինարարության իրականացում՝ մեքենասարքավորման տեղադրման և սպասարկման դեպքում, եթե կապալառուն ԱԱՀ հարկ վճարող է, և տնտեսվարողը մեքենասարքավորումն ձեռք է բերում սույն ծրագրի շրջանակում:
                    </p>
                    <p>
                    Բիզնես գործընթացների թվայնացման նպատակով թվային ծրագրերի կամ հարթակների ձեռքբերում:
                    </p>
                    <p>
                    Արտադրողականության բարձրացման նպատակով խորհրդատվական ծառայությունների և փորձագետների ներգրավում:
                    </p>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Սուբսիդավորվող ոլորտները</td>
                <td className="p-3">
                    <ul className="list-disc pl-4 space-y-1">
                    <li>Մշակող արդյունաբերություն</li>
                    <li>Հանքարդյունաբերական արդյունաբերություն և բացահանքերի շահագործում</li>
                    <li>Էլեկտրաէներգիա և կապ</li>
                    <li>Շինարարություն</li>
                    <li>Փոխադրում և պահեստային տնտեսություն</li>
                    <li>Մասնագիտական գիտական և տեխնիկական գործունեություն</li>
                    <li>Կրթություն</li>
                    <li>Առողջապահություն և բնակչության սոցիալական սպասարկում</li>
                    <li>Էլեկտրամատակարարման գոլորշու և լավորակ օդի մատակարարում</li>
                    <li>Ավտոմեքենաների տեխնիկական սպասարկում և նորոգում</li>
                    <li>Վարձույթ և լիզինգ</li>
                    <li>Կացության կազմակերպում (խաչմերուկով Երևան քաղաքի վարչական սահմաններում կացության կազմակերպման գործունեություն իրականացնող տնտեսվարողներին)</li>
                    <li>Ստեղծագործական արվեստի և հանդիսատեսի ներկայացումների կազմակերպման բնագավառում գործունեություն</li>
                    </ul>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Ֆինանսավորման առավելագույն չափ</td>
                <td className="p-3 space-y-3">
                    <p>
                    Մեքենասարքավորումների և դրանց բաղկացուցիչ մասերի դեպքում՝ 1 մլրդ ՀՀ դրամ կամ համարժեք արտարժույթ (պայմանագրի ստորագրման պահի փոխարժեքով):
                    </p>
                    <p>
                    Կապիտալ շինարարության դեպքում՝ ձեռք բերված մեքենասարքավորման 50%:
                    </p>
                    <p>
                    Բիզնես գործընթացների թվայնացման ծրագրային ապահովման և արտադրողականության խորհրդատվության դեպքում՝ 400 մլն ՀՀ դրամ կամ համարժեք արտարժույթ (պայմանագրի ստորագրման պահի փոխարժեքով):
                    </p>
                    <p>
                    Յուրաքանչյուր լիզինգառու կարող է օգտվել ծրագրի բոլոր նպատակներից, սակայն սուբսիդավորվող մասի առավելագույն գումարը չի կարող գերազանցել նշված չափը՝ փոխկապակցված համախումբ կազմակերպությունների գծով:
                    </p>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Մարման ժամկետ</td>
                <td className="p-3">Մինչև 120 ամիս</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Տարեկան տոկոսադրույք</td>
                <td className="p-3 space-y-1">
                    <p>ՀՀ դրամով՝ 9%-14%</p>
                    <p>ԱՄՆ դոլարով, Եվրոյով՝ 6%-10%</p>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Կանխավճար</td>
                <td className="p-3">Լիզինգի առարկայի արժեքի նվազագույնը՝ 10%</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Ապահովովություն</td>
                <td className="p-3 space-y-2">
                    <p>Իրավաբանական անձի, ֆիզիկական անձի երաշխավորություն</p>
                    <p>Գույքի գրավ (ըստ պահանջի)</p>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Սուբսիդավորման ժամանակահատված</td>
                <td className="p-3 space-y-2">
                    <p>Մինչև 42 ամիս</p>
                    <p>Ընդ որում՝ մատակարարման փուլի տոկոսադրույքի սուբսիդավորումը կատարվում է մինչև 180 օր ժամկետի համար՝ սկսած լիզինգի պայմանագրի կնքման օրվանից, իսկ 180 օր ժամկետը գերազանցող ժամկետի համար տոկոսների վճարման պարտականությունը կրում է Լիզինգառուն</p>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Վարկային միջոցի օգտագործում</td>
                <td className="p-3">Անկանխիկ և բանկային փոխանցումներով</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Տոկոսադրույքի սուբսիդավորում</td>
                <td className="p-3 space-y-1">
                    <p>ՀՀ դրամով՝ 8%</p>
                    <p>ԱՄՆ դոլարով, Եվրոյով՝ 6%</p>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Լիզինգի առարկայի արժեք</td>
                <td className="p-3">
                    Նառառում է լիզինգի առարկայի ձեռքբերման գինը, ՀՀ ներմուծման հետ կապված ծախսերը։ Ներմուծման հետ կապված ծախսերի մեջ կարող է ներառվել տեղափոխման, մաքսազերծման, ավելացված արժեքի հարկի վճարման և տեղափոխման հետ կապված այլ ծախսերը՝ դրանց առկայության դեպքում։
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Մարման եղանակը</td>
                <td className="p-3">
                    <ul className="list-disc pl-4 space-y-1">
                    <li>Անհավասարաչափ</li>
                    <li>Հավասարաչափ</li>
                    <li>Պայմանագրային</li>
                    </ul>
                </td>
                </tr>
                <tr>
                <td className="p-3 font-medium bg-gray-50">Մայր գումարի արտոնյալ ժամանակաշրջան</td>
                <td className="p-3">Մինչև 6 ամիս</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Լիզինգի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
                <td className="p-3 space-y-1">
                    <ul className="list-disc pl-4 space-y-1">
                    <li>Ժամկետանց մայր գումարի դեպքում՝ օրական 0.015%-ի չափով</li>
                    <li>Ժամկետանց տոկոսագումարների դեպքում՝ օրական 0.1%-ի չափով</li>
                    </ul>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Ժամկետից շուտ մարելու տուգանք</td>
                <td className="p-3">Չի կիրառվում</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Գանձվող միջնորդավճարներ, սպասարկման այլ վճարներ</td>
                <td className="p-3">Չի կիրառվում</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Լրացուցիչ արտոնություն</td>
                <td className="p-3 space-y-3">
                    <p>
                    Փոխկապակցված կազմակերպությունների խմբի մեջ ներառված տնտեսվարողի կողմից օժանդակության համար դիմելուն նախորդող 12 ամսվա ընթացքում կանոնադրական կապիտալում 200 մլն ՀՀ դրամ և ավել ներդրում կատարելու դեպքում փոխկապակցված կազմակերպությունների խմբի մեջ ներառված տնտեսվարողների համար լիզինգի սուբսիդավորվող մասի առավելագույն գումարը յուրաքանչյուր տնտեսվարողի համար, յուրաքանչյուր լիզինգի համար սահմանվում է կանոնադրական կապիտալում կատարված յուրաքանչյուր ներդրման հնգապատիկի չափով բայց ոչ ավել քան 10 մլրդ դրամ (իսկ արտարժույթով վարկավորման դեպքում՝ 5 մլրդ դրամին համժեքը՝ փոխկապակցված կազմակերպությունների խմբի մեջ ներառված տնտեսվարողների նպատակային ծրագրի շրջանակներում տրամադրված լիզինգի սուբսիդավորվող մասի հանրագումարով):
                    </p>
                    <p>
                    Նշված արտոնությունը չի տարածվում էլեկտրամատակարարման, գազի, գոլորշու և լավորակ օդի մատակարարման, շինարարության ոլորտներում գործունեություն իրականացնող տնտեսվարողի վրա:
                    </p>
                </td>
                </tr>
                <tr>
                <td className="p-3 font-medium bg-gray-50">Այլ պայմաններ</td>
                <td className="p-3 space-y-2">
                    <p>
                    Մնացած պայմանները գործում են համաձայն ՀՀ կառավարության 2020թ. մարտի 26-ի «Տնտեսության արդիականացման նպատակային ծրագրերը հաստատելու մասին» N 355-Լ որոշման։
                    </p>
                    <p>
                    Ծրագրի օժանդակությունը հասանելի է նաև Բանկի կողմից տրամադրվող նպատակային լիզինգի նկատմամբ Հայաստանի Հանրապետության կառավարության 2017 թվականի հունիսի 8-ի N 619-Ն որոշմամբ հաստատված Միջազգային զարգացման կազմակերպությունների հետ գործող ծրագրի շրջանակներում տրամադրվող լիզինգների համար։
                    </p>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    )
    },
    {
    title: "Լիզինգ՝ գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով",
    content: (
        <div className="text-sm text-gray-700 space-y-5 mt-4 border-t border-purple-100 pt-4 cursor-auto">
        <p className="font-medium text-gray-800">
            Լիզինգի՝ գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով կանխավճարի մասնակի սուբսիդավորումը գործում է մինչև 30.12.2026թ. լիզինգի տրամադրման պայմանագիր կնքած շահառուների համար:
        </p>
        
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-200">
            <tbody>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50 w-1/3">Արժույթ</td>
                <td className="p-3">ՀՀ դրամ</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Լիզինգառու</td>
                <td className="p-3">Իրավաբանական անձ, Անհատ ձեռնարկատեր</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Գործունեության ոլորտ</td>
                <td className="p-3">Գյուղատնտեսություն</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Նպատակ</td>
                <td className="p-3 space-y-2">
                    <p>Գյուղատնտեսական տեխնիկայի ձեռքբերում</p>
                    <ul className="list-disc pl-4 space-y-1">
                    <li>տրակտորներ՝ տարբեր մակնիշների</li>
                    <li>կոմբայններ</li>
                    <li>հավաքիչ-մամլիչներ</li>
                    <li>շարքացաններ</li>
                    <li>ցրտահարདեր</li>
                    <li>խոտհնձիչներ</li>
                    <li>կարտոֆիլահաններ, կարտոֆիլատնկիչներ</li>
                    <li>կուլտիվատորներ, ֆրեզներ</li>
                    <li>սրսկիչներ</li>
                    <li>տրակտորային կցասայլակներ</li>
                    <li>այլ գյուղատնտեսական տեխնիկա</li>
                    </ul>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Լիզինգի սահմանաչափ</td>
                <td className="p-3">5,000,000-500,000,000 ՀՀ դրամ</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Կանխավճար</td>
                <td className="p-3 space-y-2">
                    <p>Լիզինգի առարկայի արժեքի 20%</p>
                    <p>Ընդ որում՝ ծրագրի շրջանակներում նույն լիզինգառուի կողմից ձեռք բերվող լիզինգի առարկաների արժեքների հանրագումարը չպետք է գերազանցի 500 մլն դրամը</p>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Մարման ժամկետ</td>
                <td className="p-3">36-120 ամիս</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Մարման եղանակ</td>
                <td className="p-3">Մայր գումարի հավասարաչափ վճարում, տոկոսադրույքի հաշվարկ մայր գումարի մնացորդի հաշվով</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Տարեկան տոկոսադրույք և տոկոսադրույքի սուբսիդավորում</td>
                <td className="p-3">
                    Մինչև 14%, որի մինչև 12 տոկոսային կետը սուբսիդավորվում է այնպիսի չափաքանակով, որ լիզինգառուի կողմից վճարվող լիզինգի տարեկան տոկոսադրույքը կազմի 2%, իսկ «Գյուղատնտեսական կոоперативների մասին» օրենքի շրջանակում գրանցված գյուղատնտեսական կոոպերատիվների կողմից գործունեություն իրականացրած լինելու դեպքում, ՀՀ կառավարության 2014 թվականի դեկտեմբերի 18-ի 1444-Ն որոշմամբ հաստատված սոցիալական աջակցություն ստացող սահմանամերձ բնակավայրերի տարածքներում գործունեություն իրականացնող տնտեսվարողների համար լիզինգի տոկոսադրույքի սուբսիդավորումը կիրականացվի այնպիսի չափաքանակով, որ լիզինգառուի կողմից վճարման ենթակա լիզինգի տարեկան տոկոսադրույքը կազմի 0%:
                </td>
                </tr>
                <tr>
                <td className="p-3 font-medium bg-gray-50">Ապահովովություն</td>
                <td className="p-3">Կարող է պահանջվել իրավաբանական անձի/ֆիզիկական անձի երաշխավորություն, այլ գրավ</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Գումարի տրամադրման եղանակ</td>
                <td className="p-3">Անկանխիկ՝ մատակարարի բանկային հաշվին</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Մատակարար</td>
                <td className="p-3">
                    Եվրասիական տնտեսական միության անդամ և այլ երկրներում գյուղատնտեսական տեխնիկա արտադրող ընկերություններից նոր, չօգտագործված տեխնիկա ներδրող մասնագիտացված կառույցներ, որոնք իրականացնում են նաև գյուղատնտեսական տեխնիկայի երաշխիքային և հետերաշխիքային սպասարկում
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Սեփականության իրավունքի պետական գրանցման վճար (պետական տուրք)</td>
                <td className="p-3 space-y-1">
                    <ul className="list-disc pl-4 space-y-1">
                    <li>Տրակտորների և կոմբայնների համար՝ 5,000 դրամ</li>
                    <li>Այլ գյուղատնտեսական տեխնիկայի համար՝ վճար չկա</li>
                    </ul>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Լիզինգի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
                <td className="p-3 space-y-1">
                    <ul className="list-disc pl-4 space-y-1">
                    <li>Ժամկետանց լիզինգի դեպքում՝ օրական 0.015%-ի չափով</li>
                    <li>Ժամկետանց տոկոսագումարների դեպքում՝ օրական 0.1%-ի չափով</li>
                    </ul>
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Լիզինգի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք</td>
                <td className="p-3">Չի կիրառվում</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Հայտի ուսումնասիրման վճար</td>
                <td className="p-3">Միանվագ 70,000 ՀՀ դրամ</td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Ապահովագրություն</td>
                <td className="p-3">
                    Լիզինգի առարկան լիզինգի պայմանագրի գործողության ամբողջ ժամանակահատվածի ընթացքում ապահովագրվում է վնասվածքի և կորստյան ռիսկերից Բանկի կողմից
                </td>
                </tr>
                <tr className="border-b border-gray-200">
                <td className="p-3 font-medium bg-gray-50">Կանխավճարի մասնակի սուբսիդավորում</td>
                <td className="p-3 space-y-2">
                    <p>Շահառու՝ «Գյուղատնտեսական կոոպերատիվների մասին» օրենքի շրջանակում գրանցված գյուղատնտեսական կոոպերատիվ</p>
                    <p>Գործում է մինչև 30.12.2026թ. լիզինգի տրամադրման պայմանագիր կնքած շահառուների համար</p>
                </td>
                </tr>
                <tr>
                <td className="p-3 font-medium bg-gray-50">Այլ պայմաններ</td>
                <td className="p-3">
                    Մնացած պայմանները գործում են համաձայն ՀՀ կառավարության 2022թ. հունվարի 27-ի «Հայաստանի Հանրապետությունում գյուղատնտեսական տեխնիկայի լիզինգի աջակցության ծրագիրը հաստատելու մասին» N 105-Լ որոշման
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    )
    }
  ];

  return (
    <div className="max-w-4xl p-6 font-sans bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Evoca Leasing
      </h1>
      
      <h2 className="text-base font-bold text-gray-900 mb-4 uppercase">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>
      
      <div className="flex flex-col gap-3">
        {leasingData.map((item, index) => (
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
                <svg 
                  width="14" 
                  height="8" 
                  viewBox="0 0 14 8" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M1 1L7 7L13 1" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-slate-500 font-bold text-sm md:text-base leading-relaxed">
                {item.title}
              </div>
            </div>
            
            {openIndex === index && (
              <div className="pl-0 md:pl-8" onClick={(e) => e.stopPropagation()}>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeasingiMasin;