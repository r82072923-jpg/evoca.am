import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const tabs = [
  'Քարտի մասին',
  'Սակագներ և դրույթներ',
  'Օգտակար խորհուրդներ',
  'Զգուշացում'
];

function VisaBusinessiMasin5({ activeTab, setActiveTab }) {
  const [warningData, setWarningData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWarning = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "visaBusinessiMasin4", "warningTips");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setWarningData(docSnap.data());
        } else {
          console.warn("Փաստաթուղթը չի գտնվել Firebase-ում:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWarning();
  }, []);

  if (loading) return <div className="text-center py-10">Բեռնվում է...</div>;

  return (
    <div className="w-full max-w-4xl mx-auto font-sans text-[#333333] p-4 my-6 space-y-8">
      <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab ? 'text-[#6b11cb]' : 'text-gray-500 hover:text-gray-700'
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
      {warningData ? (
        <div>
          <h2 className="font-bold text-[#6b11cb] text-xl mb-6">{warningData.title}</h2>
          <ul className="space-y-4 list-disc pl-5 leading-relaxed">
            {warningData.items.map((item, index) => (
              <li key={index} className="text-[#333333] text-justify">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">Տվյալներ չեն գտնվել:</div>
      )}
    </div>
  );
}

export default VisaBusinessiMasin5;