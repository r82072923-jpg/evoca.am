import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const tabs = ['Վարկի մասին', 'Պայմաններ'];

const Loan11iMasin2 = ({ activeTab, setActiveTab }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'loans11iMasin', 'mainData');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log('Փաստաթուղթը չի գտնվել!');
        }
      } catch (error) {
        console.error('Սխալ տվյալները բեռնելիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full text-center py-12 text-gray-500 font-medium">
        Բեռնվում են տվյալները...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-full text-center py-12 text-gray-500 font-medium">
        Տվյալներ առկա չեն:
      </div>
    );
  }

  const { currencies, loanDetails, textContent } = data;

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 font-sans text-gray-800">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6 text-gray-700 text-base leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            {textContent?.title}
          </h2>

          <p>{textContent?.desc1}</p>

          <p>{textContent?.desc2}</p>

          <div className="pt-2">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {textContent?.benefitsTitle}
            </h3>
            <p className="font-bold text-gray-900 mb-3">
              {textContent?.benefitsSubtitle}
            </p>

            <ul className="space-y-3 pl-1">
              {textContent?.benefits?.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#6b11cb] mr-3 text-xl leading-none">•</span>
                  <span>
                    <strong className="font-bold text-gray-900">{item.boldText}</strong>
                    {item.normalText}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="pt-2">{textContent?.footerText}</p>
        </div>

        <div className="lg:col-span-5 w-full">
          <div className="w-full bg-white border border-purple-100 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              {currencies?.map((curr) => (
                <p
                  key={curr.id}
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-[#6b11cb]"
                >
                  {curr.symbol}
                </p>
              ))}
            </div>
            
            <div className="divide-y divide-gray-100">
              {loanDetails?.map((item, index) => (
                <div
                  key={index}
                  className="py-5 flex items-center justify-between first:pt-0 last:pb-0"
                >
                  <div>
                    <span className="text-xs text-gray-400 block mb-0.5 font-medium">
                      {item.prefix}
                    </span>
                    <span className="text-2xl md:text-3xl font-extrabold text-[#6b11cb]">
                      {item.value}
                    </span>
                  </div>
                  <div className="text-gray-700 font-semibold text-base md:text-lg">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan11iMasin2;