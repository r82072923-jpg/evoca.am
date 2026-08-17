import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

function FourUamGiftCardiMasin4({ activeTab, setActiveTab }) {
  const [rules, setRules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const tabs = [
    'Քարտի մասին',
    'Տրամադրման պայմանները',
    'Սպասարկման պայմանները'
  ];

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "4u.amGiftCard2"));
        const rulesList = querySnapshot.docs.map(doc => doc.data().ruleText);
        setRules(rulesList);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRules();
  }, []);

  return (
    <div className="w-full bg-white py-8 font-sans">
      <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max justify-center sm:justify-start px-4 max-w-4xl mx-auto">
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
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="text-center text-gray-500 py-8">
            Բեռնվում է...
          </div>
        ) : (
          <ul className="space-y-6">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#5b21b6] shrink-0"></span>
                <p className="text-[#333333] text-sm sm:text-base leading-relaxed">
                  {rule}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FourUamGiftCardiMasin4;