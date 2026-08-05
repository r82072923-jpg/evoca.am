import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function VisaInfiniteCardiMasin3({ activeTab, setActiveTab }) {
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const tabs = [
    'Քարտի մասին',
    'Սահմանաչափի տրամադրման պայմանները',
    'Զգուշացում',
  ];

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'visaInfiniteCardiMasin2'));
        
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setCardData(docData);
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCardData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-[#6b11cb] font-bold text-lg">
        Բեռնվում է...
      </div>
    );
  }

  if (!cardData) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500 font-bold text-lg">
        Տվյալներ չեն գտնվել բազայում:
      </div>
    );
  }

  const { tariffs } = cardData;

  return (
    <section className="w-full bg-white py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        <div className="max-w-5xl mb-8 space-y-4">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#6b11cb]">
            {cardData.title}
          </h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {cardData.description}
          </p>
        </div>

        <div className="max-w-5xl overflow-x-auto bg-white border border-[#e5d9f2] rounded-xl shadow-sm">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#f9f5ff] border-b border-[#e5d9f2]">
                <th colSpan="2" className="py-3 px-6 text-center font-bold text-[#6b11cb] text-base sm:text-lg">
                  {cardData.cardName}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5d9f2] text-gray-800 text-sm sm:text-base">
              
              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] w-7/12 font-medium">Քարտի տրամադրում</td>
                <td className="py-4 px-6 w-5/12 font-medium">{tariffs.cardProvision}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">Քարտի տարեկան սպասարկում</td>
                <td className="py-4 px-6 font-medium">{tariffs.annualService}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">Շտապ թողարկում</td>
                <td className="py-4 px-6 font-medium">{tariffs.expressIssuance}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար՝
                </td>
                <td className="py-4 px-6 font-medium">{tariffs.nonResidentService}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">Կից քարտի տրամադրում</td>
                <td className="py-4 px-6 font-medium">{tariffs.supplementaryCardProvision}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium" rowSpan="2">
                  Կից քարտի տարեկան սպասարկում <sup className="text-[#6b11cb] font-bold">[1]</sup>
                </td>
                <td className="py-3 px-6 border-b border-[#e5d9f2] flex justify-between items-center">
                  <span className="text-gray-600">Visa Infinite</span>
                  <span className="font-semibold">{tariffs.supplementaryCardAnnualService.visaInfinite}</span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Visa Platinum</span>
                    <span className="font-semibold">{tariffs.supplementaryCardAnnualService.visaPlatinum}</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">Քարտային հաշվի չվնասվող մնացորդ</td>
                <td className="py-4 px-6 font-medium">0</td>
              </tr>

              <tr className="bg-[#fcfbfe]">
                <td colSpan="2" className="py-3 px-6 font-bold text-gray-900">
                  Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %
                </td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] pl-10 font-medium">մինչև 5 մլն. ՀՀ դրամ</td>
                <td className="py-4 px-6 font-medium">{tariffs.positiveBalanceRate.upTo5Million}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] pl-10 font-medium">5 մլն. ՀՀ դրամ և ավել</td>
                <td className="py-4 px-6 font-medium">{tariffs.positiveBalanceRate.from5MillionAndMore}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] pl-10 font-medium">արտարժույթ</td>
                <td className="py-4 px-6 font-medium">{tariffs.positiveBalanceRate.foreignCurrency}</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium" rowSpan="3">
                  Քարտերով կանխիկի տրամադրում Բանկի ATM-ով, քարտային հաշվից և POS տերմինալով <sup className="text-[#6b11cb] font-bold">[2]</sup>
                </td>
                <td className="py-3 px-6 border-b border-[#e5d9f2] flex justify-between items-center">
                  <span className="text-gray-600">ՀՀ դրամ</span>
                  <span className="font-semibold text-lg text-[#6b11cb]">{tariffs.cashWithdrawalAtm.amd}</span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b border-[#e5d9f2] flex justify-between items-center">
                  <span className="text-gray-600">ԱՄՆ դոլար և եվրո</span>
                  <span className="font-semibold text-lg text-[#6b11cb]">{tariffs.cashWithdrawalAtm.usdAndEur} <sup className="text-xs text-[#6b11cb]">[3]</sup></span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 flex justify-between items-center">
                  <span className="text-gray-600">Այլ արտարժույթ</span>
                  <span className="font-semibold text-lg text-[#6b11cb]">{tariffs.cashWithdrawalAtm.otherCurrency}</span>
                </td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Քարտերով կանխիկի տրամադրում «ԱրՓա» համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով <sup className="text-[#6b11cb] font-bold">[4]</sup>
                </td>
                <td className="py-4 px-6 font-semibold text-lg text-[#6b11cb]">
                  {tariffs.cashWithdrawalArCa} <sup className="text-xs text-[#6b11cb]">[5]</sup>
                </td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Քարտերով կանխիկի տրամադրում այլ բանկերի ATM-ներով և «ԱրՓա» համակարգի անդամ չհանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով <sup className="text-[#6b11cb] font-bold">[6]</sup>
                </td>
                <td className="py-4 px-6 font-semibold text-lg text-[#6b11cb]">
                  {tariffs.cashWithdrawalOther} <sup className="text-xs text-[#6b11cb]">[7]</sup>
                </td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium" rowSpan="3">
                  Բանկի տարածքում կանխիկի տրամադրում <sup className="text-[#6b11cb] font-bold">[8] [9] [10]</sup>
                </td>
                <td className="py-3 px-6 border-b border-[#e5d9f2] flex justify-between items-center">
                  <span className="text-gray-600">ՀՀ դրամ</span>
                  <span className="font-semibold text-lg text-[#6b11cb]">{tariffs.cashWithdrawalBankPremises}</span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b border-[#e5d9f2] flex justify-between items-center">
                  <span className="text-gray-600">ԱՄՆ դոլար և եվրո</span>
                  <span className="font-semibold text-lg text-[#6b11cb]">{tariffs.cashWithdrawalBankPremises}</span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 flex justify-between items-center">
                  <span className="text-gray-600">Այլ արտարժույթ</span>
                  <span className="font-semibold text-lg text-[#6b11cb]">{tariffs.cashWithdrawalBankPremises}</span>
                </td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով անկանխիկ գործարքների իրականացում
                </td>
                <td className="py-4 px-6 font-medium">{tariffs.cashlessTransactions}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">Քարտի գործողության կասեցում</td>
                <td className="py-4 px-6 font-medium">{tariffs.cardSuspension}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)
                </td>
                <td className="py-4 px-6 font-medium">{tariffs.cardUnsuspension}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում</td>
                <td className="py-4 px-6 font-medium">{tariffs.reissuanceExpiry}</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Քարտի վերաթողարկում կորուստի, վնասվելու կամ PIN ծածկագրի կորուստի դեպքում
                </td>
                <td className="py-4 px-6 font-medium">{tariffs.reissuanceLoss}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">PIN ծածկագրի գեներացման հայտ</td>
                <td className="py-4 px-6 font-medium">{tariffs.pinGeneration}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                <td className="py-4 px-6 font-medium">{tariffs.monthlyStatement}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար <sup className="text-[#6b11cb] font-bold">[11]</sup>
                </td>
                <td className="py-4 px-6 font-medium">{tariffs.extendedStatement}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Կանխիկի մուտքագրում «ԱրՓա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-IN)
                </td>
                <td className="py-4 px-6 font-semibold text-lg text-[#6b11cb]">{tariffs.cashInAtm}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">Բանկի վճարային տերմինալներով հաշվի/քարտի համալրում</td>
                <td className="py-4 px-6 font-medium">{tariffs.terminalTopUp}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում</td>
                <td className="py-4 px-6 font-medium">{tariffs.smsNotifications}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">Գործարքի վերաբերյալ հաղորդագրությունների ստացում Evoca Touch հավելվածով</td>
                <td className="py-4 px-6 font-medium">{tariffs.evocaTouchNotifications}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Cash back միջազգային գործարքներից <sup className="text-[#6b11cb] font-bold">[12]</sup>
                </td>
                <td className="py-4 px-6 font-semibold text-lg text-[#6b11cb]">{tariffs.cashBack}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">Գերածախսի գծով տույժեր</td>
                <td className="py-4 px-6 font-medium">{tariffs.overspendPenalty}</td>
              </tr>

              <tr className="bg-[#fcfbfe]">
                <td colSpan="2" className="py-3 px-6 font-bold text-gray-900">
                  Քարտից քարտ փոխանցումներ Բանկոմատների միջոցով
                </td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] pl-10 font-medium">
                  Բանկի վճարային քարտերին <sup className="text-[#6b11cb] font-bold">[13]</sup>
                </td>
                <td className="py-4 px-6 font-semibold text-lg text-[#6b11cb]">{tariffs.cardToCardAtm.bankCards}</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] pl-10 font-medium">
                  «ԱրՓա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՓա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին <sup className="text-[#6b11cb] font-bold">[14]</sup>
                </td>
                <td className="py-4 px-6 font-semibold text-lg text-[#6b11cb]">{tariffs.cardToCardAtm.arCaCards}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium" rowSpan="2">
                  Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում
                </td>
                <td className="py-3 px-6 border-b border-[#e5d9f2] flex justify-between items-center">
                  <span className="text-gray-600">Նույն արժույթ</span>
                  <span className="font-semibold text-lg text-[#6b11cb]">{tariffs.cardToCardEvocaInternal}</span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 flex justify-between items-center">
                  <span className="text-gray-600">Տարբեր արժույթ</span>
                  <span className="font-semibold text-lg text-[#6b11cb]">{tariffs.cardToCardEvocaInternal}</span>
                </td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով «ԱրՓա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՓա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին
                </td>
                <td className="py-4 px-6 font-semibold text-lg text-[#6b11cb]">{tariffs.cardToCardEvocaExternal}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Վարկային սահմանաչափի տրամադրման հայտի ուսումնասիրման միջնորդավճար
                </td>
                <td className="py-4 px-6 font-medium">{tariffs.limitApplicationFee}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Գործող վարկային սահմանաչափի ավելացման հայտի ուսումնասիրման միջնորդավճար
                </td>
                <td className="py-4 px-6 font-medium">{tariffs.limitIncreaseFee}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Կանխիկի տրամադրման առավելագույն սահմանաչափ
                </td>
                <td className="py-4 px-6 font-semibold text-lg text-[#6b11cb]">{tariffs.maxCashLimit}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Կանխիկացման գործարքների օրական առավելագույն քանակ
                </td>
                <td className="py-4 px-6 font-medium">{tariffs.maxDailyTransactions}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ
                </td>
                <td className="py-4 px-6 font-medium">{tariffs.maxAtmTransaction}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Մեկ օրվա ընթացքում կանխիկացման գործարքների կամ սահմանաչափերի քանակի ավելացման միջնորդավճար քարտի գործողության ամբողջ ընթացքում։
                </td>
                <td className="py-4 px-6 font-medium">{tariffs.limitChangeFee}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Կանխիկացման սահմանաչափի փոփոխություն մինչև 5մլն ՀՀ դրամի դեպքում
                </td>
                <td className="py-4 px-6 font-medium">{tariffs.limitChangeFee}</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Կանխիկացման սահմանաչափի փոփոխություն 5 մլն ՀՀ դրամ և ավելի դեպքում
                </td>
                <td className="py-4 px-6 font-medium">{tariffs.limitChangeFee}</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Քարտով կատարված գործարքների բողոքարկման հայտ <sup className="text-[#6b11cb] font-bold">[15]</sup>
                </td>
                <td className="py-4 px-6 font-semibold text-lg text-[#6b11cb]">5,000 ՀՀ դրամ</td>
              </tr>

              <tr>
                <td className="py-4 px-6 border-r border-[#e5d9f2] font-medium">
                  Ժամկետը լրացած վճարային քարտի քարտային հաշվի սպասարկման վճար
                </td>
                <td className="py-4 px-6 font-medium">
                  Ամսական 2000 ՀՀ դրամ, իսկ միջոցների անբավարարության դեպքում՝ հաշվի մնացորդի չափով:
                </td>
              </tr>
              <tr className="bg-[#fcfbfe]">
                <td colSpan="2" className="py-4 px-6 text-gray-700 text-sm space-y-3">
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[1]</sup> Օտարերկրյա քաղաքացիների համար գործում է նշված սակագնի հնգապատիկը, ընդ որում լրացուցիչ քարտերը կտրամադրվեն նախապես երեք տարվա միջնորդավճարը վճարելու պայմանով:
                  </p>
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[2]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար՝ 1%:
                  </p>
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[3]</sup> Սակագինը գործում է VISA Infinite քարտին կից տրամադրված ցանկացած տեսակի լրացուցիչ քարտերի դեպքում:
                  </p>
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[4]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար՝ 1.5 %:
                  </p>
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[5]</sup> Սակագինը գործում է VISA Infinite քարտին կից տրամադրված ցանկացած տեսակի լրացուցիչ քարտերի դեպքում:
                  </p>
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[6]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար՝ 1.5 % min 2,500 ՀՀ դրամ:
                  </p>
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[7]</sup> Սակագինը գործում է VISA Infinite քարտին կից տրամադրված ցանկացած տեսակի լրացուցիչ քարտերի դեպքում:
                  </p>
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[8]</sup> Սակագինը գործում է նաև VISA Infinite վճարային քարտի քարտային հաշվից փոխանցում իրականացնելու դեպքում:
                  </p>
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[9]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար՝ ՀՀ դրամ՝ 1%, արտարժույթ՝ 1%: Այս սակագինը գործում է նաև Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտի քարտային հաշվից փոխանցում իրականացնելու դեպքում:
                  </p>
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[10]</sup> Սակագինը գործում է նաև VISA Infinite քարտին կից տրամադրված ցանկացած տեսակի լրացուցիչ քարտերի դեպքում:
                  </p>
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[11]</sup> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:
                  </p>
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[12]</sup> Cashback տրամադրվում է, եթե կուտակված cashback-ի գումարը գերազանցում է 5000 ՀՀ դրամը կամ համարժեք արտարժույթը: Cashback առավելագույն սահմանաչափը կազմում է 200 000 ՀՀ դրամ կամ համարժեք արտարժույթ:
                  </p>
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[13]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար՝ 1%:
                  </p>
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[14]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար՝ 1.5%:
                  </p>
                  <p className="leading-relaxed">
                    <sup className="font-bold text-[#6b11cb]">[15]</sup> Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

export default VisaInfiniteCardiMasin3;