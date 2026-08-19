import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore"; 
import { db } from './firebaseConfog';

const LoansiMasin2 = ({ activeTab, setActiveTab }) => {
  const [loanData, setLoanData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const docRef = doc(db, "loans1iMasin", "main-info");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setLoanData(docSnap.data());
          
          if (!activeTab && docSnap.data().tabs && docSnap.data().tabs.length > 0) {
            setActiveTab(docSnap.data().tabs[0]);
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoanData();
  }, [activeTab, setActiveTab]);

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  if (!loanData) {
    return <div className="flex justify-center items-center h-64">Տվյալներ չեն գտնվել</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 relative font-sans">
      <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {loanData.tabs && loanData.tabs.map((tab, index) => (
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="text-gray-800 space-y-4 text-[15px] leading-relaxed">
          {loanData.descriptions && loanData.descriptions.map((text, index) => {
            if (text.includes('Evocabank')) {
              const parts = text.split('Evocabank');
              return (
                <p key={index}>
                  {parts[0]}
                  <span className="font-semibold text-[#6b11cb]">Evocabank</span>
                  {parts[1]}
                </p>
              );
            }
            return <p key={index}>{text}</p>;
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100 p-8">
          <div className="w-10 h-10 bg-[#6b11cb] rounded-full flex items-center justify-center text-white mb-8">
            <span className="font-bold text-xl">֏</span>
          </div>

          <div className="flex flex-col">
            {loanData.loanDetails && loanData.loanDetails.map((detail, index) => (
              <div 
                key={detail.id || index} 
                className={`flex justify-between items-center py-5 ${
                  index !== loanData.loanDetails.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div>
                  <div className="text-xs text-gray-500 mb-1">{detail.prefix}</div>
                  <div className="text-3xl font-bold text-[#6b11cb]">{detail.value}</div>
                </div>
                <div className="text-gray-700 text-sm">{detail.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-[#e2d5f8] text-[#6b11cb] rounded-full flex items-center justify-center shadow-lg hover:bg-[#d4c1f5] transition-colors cursor-pointer">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LoansiMasin2;