import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

const tabs = ['Վարկի մասին', 'Պայմաններ'];

function Loan10iMasin2({ activeTab, setActiveTab }) {
  const [loanData, setLoanData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'loans10iMasin'));
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          setLoanData(data);
        } else {
          console.log('Տվյալներ չեն գտնվել:');
        }
      } catch (error) {
        console.error('Սխալ տվյալները բեռնելիս: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoanData();
  }, []);

  if (loading) {
    return (
      <div className="w-full text-center py-12 text-gray-500 font-medium">
        Բեռնվում է...
      </div>
    );
  }

  if (!loanData) {
    return (
      <div className="w-full text-center py-12 text-gray-500 font-medium">
        Տվյալներ առկա չեն:
      </div>
    );
  }

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-gray-700 text-base md:text-lg leading-relaxed">
          {loanData.description}
        </div>

        <div className="w-full border border-purple-100 rounded-2xl overflow-hidden bg-white shadow-sm">
          <div className="p-6">
            <div className="flex items-center space-x-4 pb-6 border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#6b11cb] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                {loanData.currencySymbol}
              </div>
            </div>

            {loanData.details?.map((item, index) => {
              const isLast = index === loanData.details.length - 1;

              return (
                <div
                  key={item.id || index}
                  className={`flex items-center justify-between ${
                    isLast ? 'pt-5' : 'py-5 border-b border-gray-100'
                  }`}
                >
                  <div className="text-right">
                    {item.prefix && (
                      <span className="text-xs text-gray-400 block mb-0.5">
                        {item.prefix}
                      </span>
                    )}
                    <span className="text-xl md:text-2xl font-bold text-[#6b11cb]">
                      {item.value}
                    </span>
                  </div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loan10iMasin2;