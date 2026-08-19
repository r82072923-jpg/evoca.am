import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const tabs = ['Վարկի մասին', 'Պայմաններ և սակագներ'];

const defaultOverdraftData = {
  leftContent: {
    paragraphs: [],
    beforeApplyingTitle: "",
    beforeApplyingSteps: [],
    interestRateTitle: "",
    interestRateValues: []
  },
  cardInfo: {
    limitSubText: "",
    limitValue: "",
    limitLabel: "",
    termValue: "",
    termLabel: "",
    rateSubText: "",
    rateValue: "",
    rateLabel: ""
  },
  faqItems: []
};

const Loan14iMasin2 = ({ activeTab, setActiveTab }) => {
  const [overdraftData, setOverdraftData] = useState(defaultOverdraftData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const docRef = doc(db, "loans14iMasin", "overdraft_details");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Տվյալները հաջողությամբ վերցվեցին Firebase-ից:", docSnap.data());
          setOverdraftData(docSnap.data());
        } else {
          console.log("Տվյալներ չեն գտնվել տվյալ հասցեով:");
        }
      } catch (error) {
        console.error("Սխալ Firebase-ից կարդալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirebase();
  }, []);

  const uploadDataToFirebase = async () => {
    try {
      await setDoc(doc(db, "loans14iMasin", "overdraft_details"), overdraftData);
      console.log("Տվյալները հաջողությամբ ուղարկվեցին Firebase!");
    } catch (error) {
      console.error("Սխալ Firebase ուղարկելիս:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-20 text-purple-700 font-semibold text-lg">Բեռնվում է տվյալները Firebase-ից...</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto my-10 px-4 font-sans text-gray-800 space-y-12">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
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
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
        <div className="flex-1 space-y-6 text-[15px] leading-relaxed">
          <p className="text-gray-700">
            <strong className="text-purple-700">Evoca</strong> հաճախորդ՞ ես. ստացիր <strong className="text-purple-700">Online Օվերդրաֆտ</strong> քո Evoca քարտին մինչև 3 րոպեում:
          </p>
          <p className="text-gray-700">
            Իսկ եթե դեռևս Evoca քարտապան չես, օվերդրաֆտին դիմելու ընթացքում տեղում բացիր <strong className="text-purple-700">Evoca Digital քարտ</strong> և ստացիր օվերդրաֆտը քո քարտին: Evoca Digital քարտը կհայտնվի քո EvocaTOUCH հավելվածում հաշված վայրկյանների ընթացքում:
          </p>
          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-gray-900">{overdraftData.leftContent?.beforeApplyingTitle}</h3>
            <ul className="space-y-3 pl-2">
              {overdraftData.leftContent?.beforeApplyingSteps?.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-purple-700 flex-shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700 pt-2">
            <strong className="text-purple-700">Online Օվերդրաֆտը</strong> տրամադրվում է <strong className="text-purple-700">100,000 դրամից 10,000,000 դրամի</strong> չափով և 36 ամիս մարման ժամկետով՝ վերականգնվող՝ ամսական նվազագույն մարման պահանջով։
          </p>
          <div className="space-y-2 pt-2">
            <p className="font-bold">{overdraftData.leftContent?.interestRateTitle}</p>
            <ul className="space-y-2 pl-2">
              {overdraftData.leftContent?.interestRateValues?.map((val, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-purple-700 flex-shrink-0" />
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[420px] bg-white border border-purple-100 rounded-2xl shadow-sm overflow-hidden flex-shrink-0">
          <div className="p-6">
            <div className="w-10 h-10 rounded-full bg-[#6b11cb] flex items-center justify-center text-white mb-6">
              <span className="text-xl font-bold">֏</span>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div>
                  <div className="text-xs text-gray-400 mb-1">{overdraftData.cardInfo?.limitSubText}</div>
                  <div className="text-2xl font-extrabold text-[#6b11cb]">{overdraftData.cardInfo?.limitValue}</div>
                </div>
                <div className="text-sm font-semibold text-gray-700">{overdraftData.cardInfo?.limitLabel}</div>
              </div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div className="text-2xl font-extrabold text-[#6b11cb]">{overdraftData.cardInfo?.termValue}</div>
                <div className="text-sm font-semibold text-gray-700">{overdraftData.cardInfo?.termLabel}</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400 mb-1">{overdraftData.cardInfo?.rateSubText}</div>
                  <div className="text-2xl font-extrabold text-[#6b11cb]">{overdraftData.cardInfo?.rateValue}</div>
                </div>
                <div className="text-sm font-semibold text-gray-700 text-right whitespace-pre-line">
                  {overdraftData.cardInfo?.rateLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-8 pt-6 border-t border-gray-100">
        {overdraftData.faqItems?.map((faq, index) => (
          <div key={index} className="space-y-3">
            <h3 className="font-bold text-[#6b11cb] text-lg flex items-center gap-2">
              <span>•</span> {faq.question}
            </h3>
            <p className="text-gray-700 leading-relaxed pl-4">{faq.answer}</p>
            {faq.example && (
              <div className="pl-4 pt-2">
                <p className="font-bold text-gray-900 mb-1">Օրինակ՝</p>
                <p className="text-gray-700 leading-relaxed">{faq.example}</p>
              </div>
            )}
            {faq.note && (
              <p className="text-gray-500 italic text-sm pl-4">{faq.note}</p>
            )}
            {faq.examples && (
              <div className="pl-4 pt-2 space-y-2">
                <p className="font-bold text-gray-900">Օրինակ՝</p>
                {faq.examples.map((ex, exIdx) => (
                  <p key={exIdx} className="text-gray-700 leading-relaxed">{ex}</p>
                ))}
              </div>
            )}
            {faq.subAnswer && (
              <p className="text-gray-700 leading-relaxed pl-4 pt-1">{faq.subAnswer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loan14iMasin2;