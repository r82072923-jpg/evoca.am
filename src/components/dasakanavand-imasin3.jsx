import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfog";

const tabs = ['Ավանդի մասին', 'Պայմաններ և սակագներ'];

const uploadDepositData = async () => {
  try {
    await setDoc(doc(db, "dasakanAvandiMasin2", "depositDetails"), depositContent);
    console.log("Data successfully uploaded to Firestore!");
  } catch (error) {
    console.error("Error uploading data: ", error);
  }
};

const DasakanAvandiMasin3 = ({ activeTab, setActiveTab }) => {
  const [depositData, setDepositData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepositData = async () => {
      try {
        const docRef = doc(db, "dasakanAvandiMasin2", "depositDetails");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDepositData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepositData();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center p-10">
        <span className="text-[#6b11cb] font-bold text-lg">Բեռնվում է...</span>
      </div>
    );
  }

  if (!depositData) {
    return (
      <div className="w-full flex justify-center items-center p-10">
        <span className="text-red-500 font-bold text-lg">Տվյալները չեն գտնվել</span>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto p-4">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto w-full">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab ? 'text-[#6b11cb]' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-17px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <table className="min-w-max w-full border-collapse border border-purple-200 text-center text-sm font-sans">
        <thead className="bg-white text-gray-800">
          <tr>
            <th rowSpan={2} className="border border-purple-200 p-4 w-32 font-bold align-middle whitespace-pre-line">
              {depositData.mainDepositTable.headers.minAmount}
            </th>
            <th rowSpan={2} className="border border-purple-200 p-4 w-48 font-bold align-middle whitespace-pre-line">
              {depositData.mainDepositTable.headers.paymentMethod}
            </th>
            <th colSpan={7} className="border border-purple-200 p-3 font-bold">
              {depositData.mainDepositTable.headers.termTitle}
            </th>
          </tr>
          <tr className="text-xs">
            {depositData.mainDepositTable.headers.days.map((day, i) => (
              <th key={i} className="border border-purple-200 p-2 font-bold whitespace-pre-line">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-700 bg-white">
          {depositData.mainDepositTable.currencies.map((item, idx) => (
            <React.Fragment key={idx}>
              {item.rows.map((row, rIdx) => (
                <tr key={rIdx}>
                  {rIdx === 0 && (
                    <td rowSpan={item.rows.length} className="border border-purple-200 p-4 font-bold text-gray-800 align-middle whitespace-pre-line">
                      {item.currency}
                    </td>
                  )}
                  <td className="border border-purple-200 p-3 text-left pl-4 font-medium whitespace-pre-line">
                    {row.type}
                  </td>
                  {row.rates.map((rate, rateIdx) => (
                    <td key={rateIdx} className="border border-purple-200 p-3 font-semibold">
                      {rate}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <div className="mt-10 space-y-6 text-[15px] text-gray-800 font-medium leading-relaxed">
        <div className="flex gap-2">
          <span className="text-[#6b11cb] font-bold">1.</span>
          <p>
            <Link to="/deposits" className="text-[#6b11cb] font-bold underline underline-offset-4">Ավանդն</Link> ընդունվում է ֆիզիկական և իրավաբանական անձանցից, ինչպես Բանկի գործունեության վայրում, այնպես էլ՝ «EvocaTouch» կամ «EvocaOnline» հեռակառավարման համակարգերի միջոցով:
          </p>
        </div>

        <div className="flex gap-2">
          <span className="text-[#6b11cb] font-bold">2.</span>
          <p>
            Ավանդատուն կարող է համալրել (ավելացնել) իր Ավանդի գումարը սկսած նվազագույնը 40,000 ՀՀ դրամից, 100 ԱՄՆ դոլարից, 100 Եվրոյից կամ 10,000 ՌԴ ռուբլուց: Ավելացման հնարավորությամբ ավանդ ներդնելու դեպքում ՀՀ դրամով ավանդների համար սահմանվում է վերոնշյալ սանդղակի տոկոսադրույքներից 0.5 %-ով պակաս տոկոսադրույք, իսկ ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով ավանդների համար սահմանվում է վերոնշյալ սանդղակի տոկոսադրույքներից 0.25 %-ով պակաս տոկոսադրույք: Կատարված բոլոր համալրումների հանրագումարը չի կարող գերազանցել Ավանդի ներդրման սկզբնական գումարը: Ավանդային պայմանագրի գործողության վերջին 3 (երեք) ամիսների ընթացքում Ավանդի գումարի համալրում չի թույլատրվում:
          </p>
        </div>

        <div className="flex gap-2">
          <span className="text-[#6b11cb] font-bold">3.</span>
          <p>Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում:</p>
        </div>

        <div className="flex gap-2">
          <span className="text-[#6b11cb] font-bold">4.</span>
          <p>
            Ավանդատուի պահանջով ավանդային պայմանագիրը ժամկետից շուտ լուծելու դեպքում Բանկը իրականացնում է Ավանդի տոկոսագումարների վերահաշվարկ հետևյալ դրույքաչափերով՝
          </p>
        </div>
      </div>

      <div className="w-full overflow-x-auto my-6">
        <table className="min-w-max w-full border-collapse border border-purple-200 text-center text-sm font-sans bg-white">
          <thead className="bg-white text-gray-800">
            <tr>
              <th rowSpan={2} className="border border-purple-200 p-4 font-bold align-middle w-1/3 text-left pl-4">
                {depositData.earlyTermination.headers.currency}
              </th>
              <th colSpan={2} className="border border-purple-200 p-3 font-bold">
                {depositData.earlyTermination.headers.title}
              </th>
            </tr>
            <tr>
              <th className="border border-purple-200 p-3 font-bold w-1/3">{depositData.earlyTermination.headers.subHeaders[0]}</th>
              <th className="border border-purple-200 p-3 font-bold w-1/3">{depositData.earlyTermination.headers.subHeaders[1]}</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {depositData.earlyTermination.rows.map((item, idx) => (
              <tr key={idx}>
                <td className="border border-purple-200 p-3 font-bold text-left pl-4 text-gray-800">{item.currency}</td>
                <td className="border border-purple-200 p-3 font-semibold">{item.rates[0]}</td>
                <td className="border border-purple-200 p-3 font-semibold">{item.rates[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-2 mb-10 text-[15px] text-gray-800 font-medium leading-relaxed">
        <span className="text-[#6b11cb] font-bold">5.</span>
        <p>Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում:</p>
      </div>

      <div className="mt-8">
        <h3 className="text-[#6b11cb] font-extrabold text-lg mb-6">Լրացուցիչ պայմաններ</h3>
        
        <div className="space-y-6 text-[15px] text-gray-800 font-medium leading-relaxed">
          <div className="flex gap-2">
            <span className="text-[#6b11cb] font-bold">1.</span>
            <p>ՀՀ ռեզիդենտ հանդիսացող ավանդատուի ցանկության դեպքում Բանկը կարող է տրամադրել վճարային քարտ առանց տարեկան սպասարկման վճարի գանձման.</p>
          </div>

          <div className="flex gap-2 mb-2">
            <span className="text-[#6b11cb] font-bold">2.</span>
            <p>Տրամադրվող վճարային քարտի տեսակները ըստ ներդրվող ավանդի գումարի սահմանվում է ստորև.</p>
          </div>
        </div>

        <div className="w-full overflow-x-auto mt-6">
          <table className="min-w-max w-full border-collapse border border-purple-200 text-sm font-sans bg-white">
            <thead className="bg-white text-gray-800">
              <tr>
                <th className="border border-purple-200 p-4 font-bold align-middle w-1/4 text-left whitespace-pre-line">
                  {depositData.cardConditions.headers[0]}
                </th>
                <th className="border border-purple-200 p-4 font-bold align-middle w-1/4 text-left">
                  {depositData.cardConditions.headers[1]}
                </th>
                <th className="border border-purple-200 p-4 font-bold align-middle w-1/4 text-left">
                  Mastercard Gold/Evoca Travel<br />
                  <span className="font-normal text-xs mt-1 inline-block">(ըստ հաճախորդի ընտրության)</span>
                </th>
                <th className="border border-purple-200 p-4 font-bold align-middle w-1/4 text-left">
                  {depositData.cardConditions.headers[3]}
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {depositData.cardConditions.rows.map((item, idx) => (
                <tr key={idx}>
                  <td className="border border-purple-200 p-3 font-bold pl-4 text-gray-800">{item.currency}</td>
                  <td className="border border-purple-200 p-3 pl-4 font-medium">{item.cards[0]}</td>
                  <td className="border border-purple-200 p-3 pl-4 font-medium">{item.cards[1]}</td>
                  <td className="border border-purple-200 p-3 pl-4 font-medium">{item.cards[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ul className="mt-8 space-y-5 text-[15px] text-gray-800 font-medium leading-relaxed list-disc pl-5 marker:text-[#6b11cb] marker:text-xl">
        <li className="pl-2">{depositData.cardRules[0]}</li>
        <li className="pl-2">{depositData.cardRules[1]}</li>
        <li className="pl-2">{depositData.cardRules[2]}</li>
        <li className="pl-2">{depositData.cardRules[3]}</li>
        <li className="pl-2">{depositData.cardRules[4]}</li>
        <li className="pl-2">{depositData.cardRules[5]}</li>
        <li className="pl-2">
          {depositData.cardRules[6]}
          <ul className="mt-3 space-y-3 list-none pl-2">
            <li className="flex gap-3 items-start">
              <span className="text-[#6b11cb] font-bold text-lg leading-none">–</span>
              <span>Անվճար, եթե հաճախորդի ավանդը գործում է, կամ եթե վերաթողարկման պահին հաճախորդի անունով գործում է համապատասխան սահմանաչափով այլ ավանդ, և որի շրջանակներում հաճախորդին արդեն չի տրամադրվել անվճար քարտ:</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#6b11cb] font-bold text-lg leading-none">–</span>
              <span>Բանկի կողմից մատուցվող ծառայությունների սակագներով, եթե ավանդի ժամկետը լրացել է և չի երկարաձգվել:</span>
            </li>
          </ul>
        </li>
        <li className="pl-2">{depositData.cardRules[7]}</li>
      </ul>

      <div className="mt-14">
        <div className="h-[3px] bg-[#6b11cb] w-full mb-5"></div>
        
        <h2 className="text-[#6b11cb] font-extrabold text-lg mb-6">
          Ավանդի տարեկան տոկոսային եկամտաբերության չափը
        </h2>
        
        <p className="text-[15px] text-gray-800 font-medium leading-relaxed mb-6">
          Տարեկան տոկոսային եկամտաբերությանը ըստ ավանդատեսակների՝ հաշվարկված ՀՀ Կենտրոնական Բանկի կողմից սահմանված կարգով, կարող եք ծանոթանալ ստորև՝
        </p>
        
        <div className="text-[15px] text-gray-800 font-medium leading-relaxed mb-8">
          <p>ԱՏ-անվանական տոկոսադրույք</p>
          <p>ՏՏԵ-տարեկան տոկոսային եկամտաբերություն</p>
        </div>

        <div className="w-full overflow-x-auto shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-purple-100 rounded-lg">
          <div className="bg-white p-4 font-extrabold text-gray-800 border-b border-purple-200 text-[15px]">
            Դասական ավանդատեսակի տարեկան տոկոսային եկամտաբերություն
          </div>
          <table className="min-w-max w-full border-collapse text-center text-sm font-sans bg-white">
            <thead className="bg-white text-gray-800">
              <tr>
                <th rowSpan={2} className="border border-purple-200 p-3 font-bold align-middle">Արժույթ</th>
                <th colSpan={2} className="border border-purple-200 p-3 font-bold">31-90 օր</th>
                <th colSpan={2} className="border border-purple-200 p-3 font-bold">91-180 օր</th>
                <th colSpan={2} className="border border-purple-200 p-3 font-bold">181-270 օր</th>
                <th colSpan={2} className="border border-purple-200 p-3 font-bold">271-365 օր</th>
              </tr>
              <tr className="text-xs">
                <th className="border border-purple-200 p-2 font-bold">Անվանական<br/>%-դրույք</th>
                <th className="border border-purple-200 p-2 font-bold">Տարեկան %-ային<br/>եկամտաբերություն</th>
                <th className="border border-purple-200 p-2 font-bold">Անվանական<br/>%-դրույք</th>
                <th className="border border-purple-200 p-2 font-bold">Տարեկան %-ային<br/>եկամտաբերություն</th>
                <th className="border border-purple-200 p-2 font-bold">Անվանական<br/>%-դրույք</th>
                <th className="border border-purple-200 p-2 font-bold">Տարեկան %-ային<br/>եկամտաբերություն</th>
                <th className="border border-purple-200 p-2 font-bold">Անվանական<br/>%-դրույք</th>
                <th className="border border-purple-200 p-2 font-bold">Տարեկան %-ային<br/>եկամտաբերություն</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {depositData.yieldTable.map((section, sIdx) => (
                <React.Fragment key={sIdx}>
                  <tr>
                    <td colSpan={9} className="border border-purple-200 p-3 font-bold text-left text-gray-800 bg-[#fbf9ff]">
                      {section.category}
                    </td>
                  </tr>
                  {section.rows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td className="border border-purple-200 p-3 font-bold text-gray-800 text-left pl-4">{row.currency}</td>
                      {row.data.map((pair, pIdx) => (
                        <React.Fragment key={pIdx}>
                          <td className="border border-purple-200 p-3 font-semibold">{pair.nominal}</td>
                          <td className="border border-purple-200 p-3 font-semibold">{pair.annual}</td>
                        </React.Fragment>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-14">
        <h3 className="font-extrabold text-gray-800 text-lg mb-6">
          Ռուբլով ավանդի ներդրման և վերադարձման կարգը՝
        </h3>
        
        <ul className="space-y-4 text-[15px] text-gray-800 font-medium leading-relaxed list-disc pl-5 marker:text-[#6b11cb] marker:text-xl mb-10">
          <li className="pl-2">{depositData.rurRules[0]}</li>
          <li className="pl-2">{depositData.rurRules[1]}</li>
          <li className="pl-2">{depositData.rurRules[2]}</li>
        </ul>

        <h3 className="text-[#6b11cb] font-extrabold text-lg mb-4">
          Ուշադրություն.
        </h3>
        
        <div className="text-[15px] text-gray-800 font-medium leading-relaxed space-y-4">
          <p>
            Ձեր և մեր պայմանագրային փոխհարաբերությունները կարգավորվում են ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ: Այն հրապարակային առաջարկ է (օֆերտա) և Ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ առցանց համակարգերի միջոցով մեզ եք ներկայացնում ձեր կողմից պատշաճ լրացված և վավերացված բանկային ծառայություններից օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ <a href="#" className="text-[#6b11cb] font-bold underline underline-offset-4">այստեղ</a>:
          </p>
          <p>
            ՀՀ «Հարկային օրենսգրքի» համաձայն՝ մեր կողմից ֆիզիկական անձ ավանդատուին (ռեզիդենտ, ոչ ռեզիդենտ) վճարված տոկոսագումարները ենթակա են հարկման՝ ձեր կողմից ստացված եկամտի 10%-ի չափով: Ավանդային պայմանագիր կնքելիս և ավանդային պայմանագրի գործողության ընթացքում այլ վճարներ չենք գանձում: Անկանխիկ կերպով ներդրված ավանդը կանխիկ վերադարձնելու դեպքում Ձեզանից գանձում ենք գումարի կանխիկացման վճար, համաձայն՝ մեր <a href="#" className="text-[#6b11cb] font-bold underline underline-offset-4">Դրամարկղային գործառնությունների իրականացման սակագների</a>:
          </p>
          <p>
            Ավանդների ներգրավման պայմաններին (ըստ գործող ավանդատեսակների) կարող եք ծանոթանալ այստեղ:
            <br />
            Ավանդների ներգրավման նախկին պայմաններին կարող եք ծանոթանալ <a href="#" className="text-[#6b11cb] font-bold underline underline-offset-4">Պայմանների արխիվ</a> բաժնում:
            <br />
            Տարեկան տոկոսային եկամտաբերությանը առնչվող տեղեկատվությանը կարող եք ծանոթանալ այս էջի <a href="#" className="text-[#6b11cb] font-bold underline underline-offset-4">Կարևոր տեղեկատվություն</a> բաժնում:
          </p>
        </div>
      </div>
    </div>
  );
};

export default DasakanAvandiMasin3;