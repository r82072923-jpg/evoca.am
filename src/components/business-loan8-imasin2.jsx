import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebaseConfog';

const tabs = [
  'Վարկի մասին',
  'Պայմաններ և սակագներ',
];

const BusinessLoan8iMasin2 = ({ activeTab, setActiveTab }) => {
  const [loanData, setLoanData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Տվյալների բեռնում Firebase-ից
  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "businessLoan8iMasin"));
        if (!querySnapshot.empty) {
          setLoanData(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoanData();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-20 text-center font-sans text-gray-500">
        Տվյալները բեռնվում են...
      </div>
    );
  }

  if (!loanData) {
    return (
      <div className="w-full py-20 text-center font-sans text-gray-500">
        Տվյալներ չեն գտնվել:
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 font-sans">

      <div className="border-b border-gray-200 mb-12 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="lg:w-1/2 space-y-6 text-[#2D2D2D] text-base md:text-lg leading-relaxed">
          {loanData.paragraphs?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {loanData.purposeIntro && (
            <div className="pl-4 md:pl-8 space-y-4">
              <p>
                <span className="text-[#6b11cb] font-semibold underline">
                  {loanData.purposeIntro.highlight}
                </span>
                {loanData.purposeIntro.text}
              </p>
              
              <ul className="space-y-3">
                {loanData.purposesList?.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#6b11cb] text-2xl leading-none mt-[2px]">•</span>
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p>{loanData.footerText}</p>
        </div>

        <div className="lg:w-1/2 w-full bg-white border border-gray-100 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] p-6 md:p-10">
          <div className="mb-8 flex gap-3">
            {loanData.currencies?.map((curr, index) => (
              <div 
                key={index} 
                className="w-12 h-12 rounded-full bg-[#6b11cb] text-white flex items-center justify-center font-bold text-xl shadow-md"
              >
                {curr}
              </div>
            ))}
          </div>
          
          <div className="divide-y divide-gray-200">
            {loanData.cards?.map((card, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between py-6 ${
                  index === 0 ? 'pt-0' : ''
                } ${index === loanData.cards.length - 1 ? 'pb-0' : ''}`}
              >
                <div>
                  <span className="text-xs text-gray-400 block mb-1">
                    {card.topLabel}
                  </span>
                  <span className="text-2xl md:text-3xl font-extrabold text-[#6b11cb]">
                    {card.value}
                  </span>
                </div>
                <div className="text-right text-gray-700 font-medium text-sm md:text-base">
                  {card.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BusinessLoan8iMasin2;