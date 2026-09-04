import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfog';

const tabs = [
  'Վարկի մասին',
  'Պայմաններ և սակագներ',
];

function BusinessLoan13iMasin2({ activeTab, setActiveTab }) {
  const [loanData, setLoanData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "businessLoan13iMasin", "info");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setLoanData(docSnap.data());
        } else {
          console.log("Տվյալներ չեն գտնվել Firebase-ում:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-lg text-gray-500">Տվյալները բեռնվում են...</div>;
  }

  if (!loanData) {
    return <div className="text-center py-20 text-lg text-red-500">Տվյալները հասանելի չեն:</div>;
  }

  return (
    <section className="max-w-6xl mx-auto p-6 bg-white text-gray-800 font-sans">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-6 text-sm md:text-base leading-relaxed">
          <p className="text-gray-700">{loanData.mainDescription}</p>

          <ul className="space-y-4 list-disc pl-5 text-gray-700">
            {loanData.creditTypes.map((type) => (
              <li key={type.id}>
                <strong className="text-gray-900 font-bold">{type.title}</strong>
                {type.description}
              </li>
            ))}
          </ul>

          <p className="text-gray-700 pt-4">{loanData.footerNote}</p>
        </div>

        <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
          <div className="flex gap-3 mb-4">
            {loanData.currencies.map((currency, index) => (
              <div 
                key={index} 
                className="w-11 h-11 bg-[#5b06bd] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-sm"
              >
                {currency}
              </div>
            ))}
          </div>
          
          <div className="divide-y divide-gray-100">
            {loanData.statistics.map((stat) => (
              <div key={stat.id} className="py-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block">{stat.prefix}</span>
                  <span className="text-2xl font-black text-[#4c00b0]">
                    {stat.value}
                  </span>
                </div>
                <span className="text-gray-600 font-medium text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessLoan13iMasin2;