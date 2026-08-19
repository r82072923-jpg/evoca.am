import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const tabs = ['Վարկի մասին', 'Պայմաններ'];

const Loan12iMasin2 = ({ activeTab, setActiveTab }) => {
  const [loanData, setLoanData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const docRef = doc(db, 'loans12iMasin', 'main_info');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setLoanData(docSnap.data());
        } else {
          console.log("Փաստաթուղթը չի գտնվել Firebase-ում:");
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
      <div className="w-full max-w-6xl mx-auto px-4 py-12 text-center text-gray-500 font-bold">
        Բեռնվում է...
      </div>
    );
  }
  if (!loanData) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-12 text-center text-red-500 font-bold">
        Տվյալները չգտնվեցին:
      </div>
    );
  }
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
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
      <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6 leading-snug">
            {loanData.title?.line1}<br />
            {loanData.title?.line2}
          </h2>
          <p className="text-gray-800 mb-6 leading-relaxed text-sm md:text-base">
            {loanData.description?.text1}
            <span className="text-[#6b11cb] font-bold">{loanData.description?.bankName}</span>
            {loanData.description?.text2}
            <span className="text-[#6b11cb] font-bold">{loanData.description?.loanType}</span>
          </p>
          <p className="font-bold text-gray-900 text-sm md:text-base">
            {loanData.footerText}
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-gray-100 p-6 md:p-8">
            <div className="w-10 h-10 bg-[#6b11cb] rounded-full flex items-center justify-center mb-6">
              <span className="text-white font-bold text-xl">֏</span>
            </div>
            <div className="flex flex-col">
              {loanData.details?.map((item, index) => (
                <div 
                  key={item.id || index} 
                  className={`flex items-center ${
                    index === 0 ? 'pb-4' : 'py-5 border-t border-gray-200'
                  }`}
                >
                  <div className="w-1/2">
                    {item.prefix && (
                      <span className="text-[10px] md:text-xs text-gray-500 block mb-1">
                        {item.prefix}
                      </span>
                    )}
                    <div className="text-2xl md:text-3xl font-bold text-[#6b11cb]">
                      {item.value}
                    </div>
                  </div>
                  <div className="w-1/2 text-gray-600 text-sm md:text-base font-medium">
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
export default Loan12iMasin2;