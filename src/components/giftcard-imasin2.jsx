import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';
function GiftCardiMasin2({ activeTab, setActiveTab }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const tabs = [
    'Քարտի մասին',
    'Տրամադրման պայմանները',
    'Սպասարկման պայմանները'
  ];

  useEffect(() => {
    const fetchGiftCardData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "giftCardiMasin"));
        if (!querySnapshot.empty) {
          setData(querySnapshot.docs[0].data());
        } else {
          console.log("Collection-ը դատարկ է:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGiftCardData();
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-white py-20 flex justify-center items-center">
        <p className="text-xl text-[#6b11cb] font-bold animate-pulse">Բեռնվում է...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-full bg-white py-20 flex justify-center items-center">
        <p className="text-xl text-red-500">Տվյալները բացակայում են։</p>
      </div>
    );
  }

  return (
    <section className="w-full bg-white py-10 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        <p className="text-center text-[#333333] text-base sm:text-lg leading-relaxed">
          {data.topText}
        </p>

        <div className="my-8">
          <ul className="w-fit mx-auto space-y-4">
            {data.occasions && data.occasions.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-[#6b11cb] shrink-0"></span>
                <span className="text-[#333333] text-base sm:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-[#333333] text-base sm:text-lg leading-relaxed">
          {data.bottomText}
        </p>

        <div className="mt-16 text-center">
          <p className="text-[#333333] text-base sm:text-lg mb-8">
            Ընտրիր <strong className="text-[#6b11cb]">Evoca Gift Card</strong>-ի քո սիրելի դիզայնը՝{' '}
            <span className="text-[#6b11cb] font-bold">Violet</span> կամ <span className="text-black font-bold">Black</span>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full rounded-xl overflow-hidden shadow-sm flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/file_manager/Gift%20Card/gift22.png" 
                  alt="Violet Gift Card" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <button className="text-[#6b11cb] font-bold text-base sm:text-lg hover:underline">
                Պատվիրել <span className="text-[#6b11cb]">Violet Gift Card</span>
              </button>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-full rounded-xl overflow-hidden shadow-sm flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/file_manager/Gift%20Card/gift11.png" 
                  alt="Black Gift Card" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <button className="text-gray-900 font-bold text-base sm:text-lg hover:underline">
                Պատվիրել <span className="text-black">Black Gift Card</span>
              </button>
            </div>

          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#333333] text-base sm:text-lg mb-6">
            Քարտը կարող ես ձեռք բերել հետևյալ փաթեթավորմամբ՝
          </p>
          <div className="max-w-md mx-auto flex justify-center">
            <img 
              src="https://www.evoca.am/file_manager/Gift%20Card/GIFTCARD-WEB2.png" 
              alt="Gift Card Packaging" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-[#6b11cb] font-bold text-lg sm:text-xl mb-6">
            Ի՞նչ առավելություններ կտա քարտը.
          </h3>
          <ul className="space-y-4">
            {data.advantages && data.advantages.map((adv, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-[#6b11cb] shrink-0"></span>
                <span className="text-[#333333] text-base sm:text-lg">
                  {adv}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 space-y-6">
          <div>
            <h3 className="text-[#6b11cb] font-bold text-lg sm:text-xl mb-4">
              Ինչպե՞ս պատվիրել քարտը.
            </h3>
            {data.howToOrder && data.howToOrder.map((text, index) => (
              <p key={index} className="text-[#333333] text-base sm:text-lg leading-relaxed mb-4">
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-[#6b11cb] font-bold text-lg sm:text-xl mb-4">
            Ինչպե՞ս ակտիվացնել քարտը.
          </h3>
          <div className="space-y-4 text-[#333333] text-base sm:text-lg leading-relaxed">
             {data.howToActivate && data.howToActivate.map((text, index) => (
              <p key={index}>
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-[#6b11cb] font-bold text-lg sm:text-xl mb-4">
            Որտե՞ղ կարելի է օգտագործել քարտը.
          </h3>
          <p className="text-[#333333] text-base sm:text-lg leading-relaxed">
            {data.whereToUse}
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-[#6b11cb] font-bold text-lg sm:text-xl mb-4">
            Ինչո՞ւ նվիրել Evoca Gift Card, այլ ոչ կանխիկ գումար.
          </h3>
          <p className="text-[#333333] text-base sm:text-lg leading-relaxed">
             {data.whyGiftCard}
          </p>
        </div>

      </div>
    </section>
  );
}

export default GiftCardiMasin2;