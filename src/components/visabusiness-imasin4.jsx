import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const tabs = [
  'Քարտի մասին',
  'Սակագներ և դրույթներ',
  'Օգտակար խորհուրդներ',
  'Զգուշացում'
];

function VisaBusinessiMasin4({ activeTab, setActiveTab }) {
  const [tipsData, setTipsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTipsFromFirebase = async () => {
      try {
        const docRef = doc(db, "visaBusinessiMasin3", "usefulTips");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTipsData(docSnap.data());
        } else {
          console.log("Փաստաթուղթը չի գտնվել Firebase-ում:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTipsFromFirebase();
  }, []);

  if (loading) {
    return <div className="text-center py-10 font-sans text-gray-500">Բեռնվում է տվյալները Firebase-ից...</div>;
  }

  if (!tipsData) {
    return <div className="text-center py-10 font-sans text-red-500">Տվյալներ չեն գտնվել բազայում:</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto font-sans text-[#333333] p-4 my-6 space-y-8">
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
      {tipsData.section1 && (
        <div>
          <h3 className="font-bold text-[#6b11cb] text-lg mb-4">
            {tipsData.section1.title}
          </h3>
          <ul className="space-y-3 list-disc pl-5 leading-relaxed">
            {tipsData.section1.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {tipsData.section2 && (
        <div>
          <h3 className="font-bold text-[#6b11cb] text-lg mb-4">
            {tipsData.section2.title}
          </h3>
          <h4 className="font-bold text-[#333333] mb-3">{tipsData.section2.subtitle}</h4>
          <ul className="space-y-3 list-disc pl-5 leading-relaxed">
            {tipsData.section2.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {tipsData.note && (
        <div className="bg-purple-50/50 border-l-4 border-[#6b11cb] p-4 text-sm leading-relaxed">
          <p>
            <strong className="text-[#6b11cb]">Նշում.</strong> {tipsData.note}
          </p>
        </div>
      )}
      {tipsData.section3 && (
        <div>
          <h3 className="font-bold text-[#6b11cb] text-lg mb-4">
            {tipsData.section3.title}
          </h3>
          <ul className="space-y-3 list-disc pl-5 leading-relaxed">
            {tipsData.section3.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default VisaBusinessiMasin4;