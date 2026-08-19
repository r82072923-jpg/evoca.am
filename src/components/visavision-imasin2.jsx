import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

const tabs = [
  'Քարտի մասին',
  'Visa Vision քարտի սակագներ',
];

const VisaVisioniMasin2 = ({ activeTab, setActiveTab }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "visaVisioniMasin"));
        if (!querySnapshot.empty) {
          setData(querySnapshot.docs[0].data());
        } else {
          console.log("Տվյալներ չեն գտնվել Firebase-ում:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-xl text-[#5c1c81] font-bold">Բեռնվում է...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center mt-10 text-red-500">
        Տվյալները հասանելի չեն։
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-[#2c2c2c]">
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
      
      <p className="text-lg mb-6">
        <span className="font-bold text-[#5c1c81]">{data.bankName}</span>-ը ներկայացնում է իր նոր <span className="text-[#5c1c81]">{data.cardName}</span> քարտը, որի հետ դու կստանաս՝
      </p>

      <ul className="list-disc pl-6 space-y-4 mb-8 marker:text-[#5c1c81]">
        {data.features?.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <p className="text-base mb-8">{data.description}</p>

      <div className="flex justify-start mb-8">
        <div className="flex items-center gap-4 border border-purple-50 bg-[#fdfcff] rounded-xl shadow-[0_2px_10px_rgba(92,28,129,0.05)] p-3">
          
          <div className={`w-[240px] h-[150px] rounded-lg overflow-hidden ${data.cards?.[0]?.bgClass}`}>
            <img
              src={data.cards?.[0]?.src}
              alt={data.cards?.[0]?.alt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-px h-32 bg-purple-100/50"></div>

          <div className={`w-[240px] h-[150px] rounded-lg overflow-hidden ${data.cards?.[1]?.bgClass}`}>
            <img
              src={data.cards?.[1]?.src}
              alt={data.cards?.[1]?.alt}
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>

      <div className="space-y-6 text-base leading-relaxed mb-12">
        <p>Դե կարող ես ընտրել գույնն ու պատվիրել քո Visa Vision քարտը։</p>
        <p>Այո՛, այս ամենն իրական է։</p>
        <p>
          <span className="text-[#5c1c81]">Vision</span> քարտը <span className="font-bold">Visa Rewards</span> տեսակի քարտ է։ Անկախ մնացորդի չափից՝ դրամային քարտի վրա դու կուտակում ես տարեկան <span className="font-bold text-[#5c1c81]">4%</span> գումար, դոլարային քարտերի դեպքում՝ <span className="font-bold text-[#5c1c81]">1%</span>, իսկ Եվրոյով՝ <span className="font-bold text-[#5c1c81]">0.5%</span>։
        </p>
        <p>Բայց այսքանով քարտի առավելությունները չեն ավարտվում։</p>
        <p>
          Կատարիր անկանխիկ գնումներ ու վճարումներ քո Visa Vision քարտով և ստացիր <span className="font-bold text-[#5c1c81]">0.25% cashback</span>՝ տեղական գործարքների համար, և <span className="font-bold text-[#5c1c81]">0.5% cashback</span>՝ արտասահմանյան գործարքների համար։
        </p>
        <p>
          <span className="font-bold text-[#5c1c81]">Visa Vision</span> քարտը գործում է ամենուր, որտեղ կարելի է վճարել Visa տեսակի քարտերով՝ <span className="font-bold">թե՛ Հայաստանում, թե՛ Հայաստանից դուրս՝ 200-ից ավել երկրներում</span>։
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl mb-6 text-[#4a4a4a]">
          <span className="font-bold text-[#5c1c81]">Evoca Vision</span> քարտով կարելի է կատարել՝
        </h2>
        
        <div className="flex flex-col md:flex-row border border-[#f3e8fa] rounded-lg overflow-hidden bg-white">
          {data.actionFeatures?.map((item, index) => (
            <div 
              key={index} 
              className={`flex-1 flex flex-col ${
                index !== data.actionFeatures.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#f3e8fa]' : ''
              }`}
            >
              <div className="flex justify-center items-center h-[140px] border-b border-[#f3e8fa] bg-white">
                <img src={item.src} alt="" className="w-16 h-16 object-contain" />
              </div>
              <div className="p-6 md:p-8 h-full bg-white flex flex-col justify-start">
                <p className="text-[16px] text-[#2c2c2c] mb-6">{item.title}</p>
                <p className="text-[15px] text-[#4a4a4a] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {data.orderInfo && (
        <div className="mt-12">
          <h2 className="text-[22px] font-bold text-[#5c1c81] mb-6">
            {data.orderInfo.title}
          </h2>
          
          <p className="text-[16px] text-[#2c2c2c] mb-6">
            <span className="font-bold">{data.orderInfo.subtitleBold}</span>{data.orderInfo.subtitleText}
          </p>
          
          <ul className="list-disc pl-6 space-y-4 mb-10 text-[16px] text-[#2c2c2c] marker:text-[#5c1c81]">
            {data.orderInfo.options?.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          
          <p className="text-[15px] text-[#4a4a4a]">
            {data.orderInfo.footer}
          </p>
        </div>
      )}

      {data.usageInfo && (
        <div className="mt-12">
          <h2 className="text-[22px] font-bold text-[#5c1c81] mb-6">
            {data.usageInfo.title}
          </h2>
          
          <p className="text-[16px] text-[#2c2c2c] leading-relaxed mb-4">
            <span className="font-bold">{data.usageInfo.subtitleBold}</span>{data.usageInfo.text1}
          </p>
          
          <p className="text-[16px] text-[#2c2c2c] leading-relaxed">
            {data.usageInfo.text2}
          </p>
        </div>
      )}

      {data.feeInfo && (
        <div className="mt-12">
          <h2 className="text-[22px] font-bold text-[#5c1c81] mb-6">
            {data.feeInfo.title}
          </h2>
          
          <p className="text-[16px] text-[#2c2c2c] leading-relaxed">
            {data.feeInfo.text}
          </p>
        </div>
      )}

    </div>
  );
};

export default VisaVisioniMasin2;