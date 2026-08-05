import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function VisaInfiniteCardiMasin4({ activeTab, setActiveTab }) {
  const [warningContent, setWarningContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const tabs = [
    'Քարտի մասին',
    'Սահմանաչափի տրամադրման պայմանները',
    'Զգուշացում',
  ];

  useEffect(() => {
    const fetchWarningData = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'visaInfiniteCard3'));
        
        // Որոնում ենք այն փաստաթուղթը, որը պարունակում է զգուշացման տվյալները
        let foundData = null;
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.sectionType === 'Զգուշացում' || data.warnings) {
            foundData = data;
          }
        });

        if (foundData) {
          setWarningContent(foundData);
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWarningData();
  }, []);

  return (
    <>
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

      <div className="max-w-5xl mx-auto px-4 py-8 bg-white font-sans">
        {loading ? (
          <div className="flex justify-center items-center h-32 text-[#6b11cb] font-bold text-lg">
            Բեռնվում է...
          </div>
        ) : !warningContent ? (
          <div className="flex justify-center items-center h-32 text-red-500 font-bold text-lg">
            Տվյալներ չեն գտնվել բազայում:
          </div>
        ) : (
          <ul className="space-y-6 text-gray-800 text-sm sm:text-base">
            {warningContent.warnings?.map((item, index) => (
              <li key={item.id || index} className="flex items-start space-x-3">
                <span className="text-[#6b11cb] text-lg font-bold leading-none mt-1">•</span>
                <p className={`leading-relaxed ${index === 0 ? 'uppercase font-medium' : ''}`}>
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default VisaInfiniteCardiMasin4;