import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfog";

function MasterCardStandardiMasin2({ activeTab, setActiveTab }) {
  const [cardData, setCardData] = useState(null);
  const [activeCurrency, setActiveCurrency] = useState("֏");
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    async function fetchCardData() {
      try {
        const docRef = doc(db, "masterCardStandardiMasin", "content");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCardData(docSnap.data());
          if (docSnap.data().currencies && docSnap.data().currencies.length > 0) {
            setActiveCurrency(docSnap.data().currencies[0]);
          }
        }
      } catch (error) {
        console.error("❌ Firebase fetch error:", error);
      } finally {
        setFetching(false);
      }
    }
    fetchCardData();
  }, []);

  if (fetching) {
    return <div className="p-6 text-center text-gray-500">Բեռնվում է Firebase-ից...</div>;
  }

  if (!cardData) {
    return <div className="p-6 text-center text-red-500">Տվյալները չգտնվեցին Firebase-ում:</div>;
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 font-sans text-[#333333]">
      <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {cardData.tabs && cardData.tabs.map((tab, index) => (
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

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-7/12 space-y-6 text-[15px] leading-relaxed">
          <p>
            <strong className="text-gray-900">Evocabank</strong>-ը, կարևորելով իր հաճախորդների դրամական միջոցների ապահովությունն ու անվտանգությունը, առաջարկում է <strong className="text-purple-700">MasterCard Standard</strong> վճարային քարտեր՝ հնարավորություն տալով կենտրոնանալ կյանքի առավել կարևոր իրադարձությունների վրա:
          </p>

          <p>
            <strong className="text-purple-700">MasterCard Standard</strong> քարտը հանդիսանում է <strong className="text-purple-700">MasterCard միջազգային վճարահաշվարկային համակարգի չիպային քարտ</strong>: Այն օժտված է ժամանակակից տեխնոլոգիաներով և ապահովված է դրամական միջոցների անվտանգության ապահովման բարձր մակարդակով: Քարտը հնարավոր է օգտագործել ինչպես ՀՀ տարածքում, այնպես էլ ամբողջ աշխարհում:
          </p>

          <p>
            Դու կկարողանաս քո <strong className="text-purple-700">MasterCard Standard</strong> քարտից գումար կանխիկացնել, անկանխիկ վճարումներ կատարել բոլոր այն սպասարկման և առևտրի կետերում, որտեղ փակցված կլինի Mastercard տարբերանշանը:
          </p>
        </div>
        <div className="lg:w-5/12 w-full bg-white rounded-xl shadow-sm border border-purple-50 p-6">
          <div className="flex gap-3 mb-6">
            {cardData.currencies && cardData.currencies.map((curr) => (
              <button
                key={curr}
                onClick={() => setActiveCurrency(curr)}
                className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm transition shadow-sm ${
                  activeCurrency === curr
                    ? "bg-[#6b11cb] text-white"
                    : "bg-[#6b11cb] text-white hover:bg-[#580da8]"
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
          <div className="divide-y divide-purple-50">
            {cardData.tariffItems && cardData.tariffItems.map((item, index) => (
              <div key={index} className="py-4 flex items-center justify-between gap-4">
                <div className="w-1/3 text-right">
                  <span className="text-xl md:text-2xl font-bold text-[#6b11cb] block">
                    {item.rate}
                  </span>
                  {item.subRate && (
                    <span className="text-[11px] text-gray-400 block font-medium">
                      {item.subRate}
                    </span>
                  )}
                </div>
                <div className="w-2/3 text-sm text-gray-700 font-medium">
                  {item.description}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <div className="mt-16 space-y-6 text-[15px] leading-relaxed max-w-4xl">
        <p>
          Եթե հաճախ ես ճամփորդում, այս քարտը քեզ համար պարզապես անհրաժեշտություն կդառնա: Դու կկարողանաս նախապես գնել քո ավիատոմսը, ամրագրել հյուրանոցային համար կամ վարձել ավտոմեքենա՝ վճարելով <strong className="text-purple-700">MasterCard Standard</strong> քարտով:
        </p>

        <p>
          Քարտը կարող ես պատվիրել և ստանալ առանց Բանկ այցելելու: <strong className="text-purple-700">EvocaTOUCH</strong> հավելվածի միջոցով պարզ քայլերի հաջորդականությամբ կկարողանաս պատվիրել այն՝ նշելով այն հասցեն, որտեղից կցանկանաս ստանալ քարտը: Կարևորելով մեր հաճախորդների ժամանակը՝ առաքման անվճար ծառայության միջոցով Հայաստանի ցանկացած կետում կտրամադրենք քո քարտը:
        </p>
      </div>
    </div>
  );
}

export default MasterCardStandardiMasin2;