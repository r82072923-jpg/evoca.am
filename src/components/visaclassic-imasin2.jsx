import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const tabs = [
  'Քարտի մասին',
  'Սակագներ և դրույթներ'
];

function VisaClassiciMasin2({ activeTab, setActiveTab }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'visaClassiciMasin', 'info');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-lg text-gray-600">Բեռնվում է...</div>;
  }

  if (!data) {
    return <div className="text-center py-12 text-lg text-red-500">Տվյալներ չեն գտնվել:</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans space-y-12">
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

      <div className="w-full max-w-[1200px] mx-auto p-6 md:p-12 font-sans text-[#333333] bg-white">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="lg:w-1/2 flex flex-col gap-6 text-[15px] leading-relaxed text-[#444444]">
            <h1 className="text-[22px] md:text-[24px] font-bold text-[#111111]">
              <span className="text-[#7b2cbf]">{data.titleHighlight}</span> {data.titleDescription}
            </h1>

            {data.paragraphs && data.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="w-full max-w-[800px] mx-auto p-6 bg-white border border-[#ebdff2] rounded-2xl shadow-sm font-sans">
            
            <div className="flex gap-2 mb-6">
              {data.currencies && data.currencies.map((currency, index) => (
                <div key={index} className="w-10 h-10 rounded-full bg-[#7b2cbf] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  {currency}
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              {data.rates && data.rates.map((rate, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col sm:flex-row items-stretch ${index !== data.rates.length - 1 ? 'border-b border-[#ebdff2]' : ''} py-4`}
                >
                  <div className={`sm:w-[35%] flex ${rate.subValue ? 'flex-col items-start sm:items-center justify-center' : 'items-center justify-start sm:justify-center'} text-[#7b2cbf] font-bold pb-2 sm:pb-0`}>
                    {rate.subValue && (
                      <span className="text-[11px] font-normal text-[#666666]">{rate.subValue}</span>
                    )}
                    <span className={rate.isSmallerText ? "text-xl" : "text-2xl"}>{rate.value}</span>
                  </div>
                  <div className="sm:w-[65%] flex items-center text-[14px] text-[#333333]">
                    {rate.label}
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisaClassiciMasin2;