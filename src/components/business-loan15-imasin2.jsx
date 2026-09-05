import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';
const tabs = [
  'Վարկի մասին',
  'Պայմաններ և սակագներ',
  'Պահանջվող փաստաթղթեր'
];
function BusinessLoan15iMasin2({activeTab,setActiveTab}) {
  const [businessLoanData, setBusinessLoanData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'businessLoan15iMasin'));
        
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setBusinessLoanData(docData);
        } else {
          console.log('Տվյալներ չեն գտնվել Firebase-ում:');
        }
      } catch (error) {
        console.error('Սխալ տվյալները կարդալիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px] text-[#6F11B7] font-semibold">
        Բեռնվում է...
      </div>
    );
  }

  if (!businessLoanData) {
    return (
      <div className="text-center p-10 text-gray-500">
        Տվյալներ առկա չեն:
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white font-sans text-gray-800">
      <div className="border-b border-gray-200 mb-8 overflow-x-auto">
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
      <div className="md:col-span-7 space-y-5 text-sm leading-relaxed text-gray-700">
        {businessLoanData.infoParagraphs?.map((item) => (
          <p key={item.id} dangerouslySetInnerHTML={{ __html: item.content }} />
        ))}
      </div>

      <div className="md:col-span-5 bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_10px_30px_rgba(111,17,183,0.06)]">
        <div className="flex items-center gap-3 mb-6">
          {businessLoanData.currencies?.map((curr) => (
            <div
              key={curr.id}
              className={`w-10 h-10 rounded-full font-bold text-lg flex items-center justify-center select-none cursor-pointer transition-colors ${
                curr.isActive
                  ? 'bg-[#6F11B7] text-white shadow-md'
                  : 'bg-[#6F11B7] text-white hover:bg-[#6F11B7]/20'
              }`}
            >
              {curr.symbol}
            </div>
          ))}
        </div>

        <div className="divide-y divide-gray-200">
          {businessLoanData.metrics?.map((metric) => (
            <div key={metric.id} className="py-4 grid grid-cols-2 items-center gap-2">
              <div>
                <span className="block text-[11px] text-gray-400 font-medium">
                  {metric.prefix}
                </span>
                <span className="text-2xl font-black text-[#6F11B7]">
                  {metric.value}
                </span>
              </div>
              <div className="text-xs md:text-sm font-semibold text-gray-800">
                {metric.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default BusinessLoan15iMasin2