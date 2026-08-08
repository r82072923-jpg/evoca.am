import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from './firebaseConfog';
const VisaVisioniMasin3 = (activeTab,setActiveTab) => {
  const [visaVisionData, setVisaVisionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "visaVisioniMasin2"));
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setVisaVisionData(docData);
        }
      } catch (error) {
        console.error("Սխալ տվյալների բեռնման ժամանակ:", error);
      } finally {
        setFetching(false);
      }
    };

    fetchDataFromFirebase();
  }, []);

  const sendDataToFirebase = async () => {
    if (!visaVisionData) return;
    setLoading(true);
    setMessage('');
    try {
      const docRef = await addDoc(collection(db, "visaVisioniMasin2"), visaVisionData);
      setMessage(`Հաջողությամբ ուղարկվեց! ID: ${docRef.id}`);
    } catch (error) {
      console.error("Սխալ:", error);
      setMessage('Սխալ տեղի ունեցավ ուղարկելիս:');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return <div className="p-8 text-center text-lg">Բեռնվում է Firebase-ից...</div>;
  }

  if (!visaVisionData) {
    return <div className="p-8 text-center text-red-500">Տվյալներ չեն գտնվել Firebase-ի `visaVisioniMasin2` կոլեկցիայում:</div>;
  }
  const tabs=[
    "Քարտի մասին",
    "Visa Vision քարտի սակագներ"
  ]
  return (
    <div className="w-full overflow-x-auto my-8 font-sans text-[#2c2c2c] p-4">
      <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-18px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>
      <table className="w-full border-collapse border border-[#efe9f4] text-[15px]">
        <thead>
          <tr>
            <th colSpan={3} className="border border-[#efe9f4] p-4 text-center font-bold text-[#1a1a1a]">
              {visaVisionData.title}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#efe9f4] p-4 w-1/3 align-top">
              Քարտի տեսակ
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 w-2/3 align-top">
              {visaVisionData.cardType}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top">
              Քարտի արժույթ
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-top">
              {visaVisionData.currencies?.join(', ')}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top">
              Տարեկան սպասարկման վճար
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-top">
              {visaVisionData.fees?.annual}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top">
              Ամսական սպասարկման վճար
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-top">
              {visaVisionData.fees?.monthly}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.fees?.nonResidentForeigner}<sup className="text-[#5c1c81] font-bold text-xs ml-0.5">[1]</sup>
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Քարտապանին այլ արժույթով Visa Classic քարտ՝ նվեր ցանկության դեպքում /Լրացուցիչ քարտ/
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.gifts?.otherCurrencyVisaClassic}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Նույն հաշվեհամարին կից քարտ Visa Vision քարտի սպասարկման վճար
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.fees?.additionalCardSameAccount}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Visa Classic քարտի տրամադրում Visa Vision քարտապանի ընկերոջը՝ նվեր ցանկության դեպքում
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.fees?.visaClassicGiftToFriend}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top">
              Քարտային հաշվի չնվազող մնացորդ
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.account?.minimumBalance}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք<sup className="text-[#5c1c81] font-bold text-xs ml-0.5">[2]</sup>
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              ՀՀ դրամ՝ {visaVisionData.account?.annualInterestRates?.AMD}, ԱՄՆ դոլար՝ {visaVisionData.account?.annualInterestRates?.USD}, Եվրո՝ {visaVisionData.account?.annualInterestRates?.EUR}
            </td>
          </tr>

          <tr>
            <td rowSpan={2} className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Քարտով կատարվող գործարքների դիմաց տրամադրվող cash back<sup className="text-[#5c1c81] font-bold text-xs ml-0.5">[3]</sup>
            </td>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Արփա համակարգի բանկերի POS և vPOS տերմինալներով կատարված գործարքների դեպքում
            </td>
            <td className="border border-[#efe9f4] p-4 align-middle whitespace-nowrap">
              {visaVisionData.cashBack?.arpaSystem}
            </td>
          </tr>
          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Ոչ Արփա համակարգի բանկերի (արտերկրյա) POS և vPOS տերմինալներով կատարված գործարքների դեպքում
            </td>
            <td className="border border-[#efe9f4] p-4 align-middle whitespace-nowrap">
              {visaVisionData.cashBack?.nonArpaSystem}
            </td>
          </tr>

          <tr>
            <td rowSpan={5} className="border border-[#efe9f4] p-4 align-top">
              Կանխիկացում<sup className="text-[#5c1c81] font-bold text-xs ml-0.5">[4]</sup>
            </td>
            <td rowSpan={3} className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Բանկի բանկոմատներից, քարտային հաշվից, Բանկի POS տերմինալների միջոցով
            </td>
            <td className="border border-[#efe9f4] p-4 align-top">
              <p className="font-semibold mb-2">ՀՀ դրամ՝</p>
              <ul className="list-disc pl-5 space-y-2 text-[14px]">
                <li>{visaVisionData.cashWithdrawal?.bankAtmsAndPos?.amd?.[0]},</li>
                <li>{visaVisionData.cashWithdrawal?.bankAtmsAndPos?.amd?.[1]}</li>
                <li>{visaVisionData.cashWithdrawal?.bankAtmsAndPos?.amd?.[2]}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border border-[#efe9f4] p-4 align-top">
              ԱՄՆ դոլար՝ {visaVisionData.cashWithdrawal?.bankAtmsAndPos?.usd}
            </td>
          </tr>
          <tr>
            <td className="border border-[#efe9f4] p-4 align-top">
              Եվրո՝ {visaVisionData.cashWithdrawal?.bankAtmsAndPos?.eur}
            </td>
          </tr>
          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Արփա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով
            </td>
            <td className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.cashWithdrawal?.arpaSystemBanks}
            </td>
          </tr>
          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Այլ բանկերի բանկոմատներից և POS-տերմինալների միջոցով
            </td>
            <td className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.cashWithdrawal?.otherBanks}
            </td>
          </tr>

          <tr>
            <td rowSpan={2} className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Կանխիկացման օրական սահմանափակում
            </td>
            <td className="border border-[#efe9f4] p-4 align-top">
              Գումարային
            </td>
            <td className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.cashWithdrawal?.dailyLimits?.amount}
            </td>
          </tr>
          <tr>
            <td className="border border-[#efe9f4] p-4 align-top">
              Քանակային
            </td>
            <td className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.cashWithdrawal?.dailyLimits?.count}
            </td>
          </tr>

          <tr>
            <td rowSpan={2} className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              առավելագույն սահմանաչափեր
            </td>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ
            </td>
            <td className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.cashWithdrawal?.maxPerAtmTransaction}
            </td>
          </tr>
          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Կանխիկի մուտքագրում Բանկի վճարային տերմինալներով
            </td>
            <td className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.cashDeposit?.bankTerminals}
            </td>
          </tr>
          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Բանկի վճարային տերմինալներով կանխիկի մուտքագրման մեկ գործարքի առավելագույն սահմանաչափ
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.cashDeposit?.maxPerTerminalTransaction}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Կանխիկի մուտքագրում Բանկի և Արփա անդամ այլ բանկերի բանկոմատներով (ATM CASH-IN)
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.cashDeposit?.atmCashIn}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Քարտային հաշվի համալրում անկանխիկ փոխանցմամբ
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.transfersAndPayments?.accountReplenishment}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.transfersAndPayments?.goodsAndServicesPayment}
            </td>
          </tr>

          <tr>
            <td rowSpan={2} className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Քարտից քարտ փոխանցումներ բանկոմատների միջոցով
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              {visaVisionData.transfersAndPayments?.cardToCardAtm?.internal}
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              {visaVisionData.transfersAndPayments?.cardToCardAtm?.arpaSystem}
            </td>
          </tr>

          <tr>
            <td rowSpan={2} className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              {visaVisionData.transfersAndPayments?.cardToCardEvocaApp?.internalSameCurrency}
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              {visaVisionData.transfersAndPayments?.cardToCardEvocaApp?.internalDifferentCurrency}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով «Արփա» համակարգի անդամ հանդիսացող այլ բանկերի և Արփա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին՝
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.transfersAndPayments?.cardToCardEvocaApp?.arpaSystem}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Քարտի գործողության կասեցում
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.serviceOperations?.suspension}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.serviceOperations?.unsuspension}
            </td>
          </tr>

          <tr>
            <td rowSpan={2} className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Քարտի վերաթողարկում
            </td>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              գործողության ժամկետը ավարտվելու դեպքում
            </td>
            <td className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.serviceOperations?.reissue?.expired}
            </td>
          </tr>
          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              կորստի կամ վնասվելու դեպքում
            </td>
            <td className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.serviceOperations?.reissue?.lostOrDamaged}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Նոր PIN ծածկագրի գեներացում
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.serviceOperations?.newPinGeneration}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Քարտային հաշվի ամսական քաղվածքի տրամադրում
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.serviceOperations?.monthlyStatement}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար<sup className="text-[#5c1c81] font-bold text-xs ml-0.5">[5]</sup>
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.serviceOperations?.longTermStatement}
            </td>
          </tr>

          <tr>
            <td rowSpan={2} className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում
            </td>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Մինչև 5,000 ՀՀ դրամ գործարքներ<sup className="text-[#5c1c81] font-bold text-xs ml-0.5">[6]</sup>
            </td>
            <td className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.serviceOperations?.smsNotifications?.under5000}
            </td>
          </tr>
          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              5,000 ՀՀ դրամը գերազանցող գործարքներ
            </td>
            <td className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.serviceOperations?.smsNotifications?.over5000}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Կանխիկացման գործարքների քանակի կամ սահմանաչափերի ավելացման միջնորդավճար
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.serviceOperations?.limitIncreaseFee}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Քարտով կատարված գործարքների բողոքարկման հայտ<sup className="text-[#5c1c81] font-bold text-xs ml-0.5">[7]</sup>
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.serviceOperations?.disputeApplication}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Գերածախսի գծով տույժեր
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.serviceOperations?.overdraftPenalty}
            </td>
          </tr>

          <tr>
            <td className="border border-[#efe9f4] p-4 align-top leading-relaxed">
              Վարկային սահմանաչափի հնարավորություն
            </td>
            <td colSpan={2} className="border border-[#efe9f4] p-4 align-middle">
              {visaVisionData.serviceOperations?.creditLimitAvailability}
            </td>
          </tr>

        </tbody>
      </table>

      <div className="mt-6 space-y-3 text-[14px] text-[#4a4a4a]">
        {visaVisionData.footnotes?.map((note, index) => (
          <p key={index} className="leading-relaxed">
            <span className="font-bold text-[#5c1c81] mr-1">[{index + 1}]</span>
            {note}
          </p>
        ))}
      </div>
    </div>
  );
};

export default VisaVisioniMasin3;