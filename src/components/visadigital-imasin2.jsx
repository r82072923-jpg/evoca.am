import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

function VisaDigitaliMasin2() {
  const [data, setData] = useState(null);
  const [activeCurrency, setActiveCurrency] = useState('AMD');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'visaDigitaliMasin', 'content');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.warn('Firebase-ում այսպիսի փաստաթուղթ (document) չկա:');
        }
      } catch (error) {
        console.error('Սխալ տվյալները ստանալիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-[#6b11cb] font-medium text-lg">
        Բեռնվում է...
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans space-y-12">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2 space-y-6 text-[#333333] text-base leading-relaxed">
          {data.heroSection?.introParagraphs?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8">
          <div className="flex gap-3 mb-6">
            {data.currencies?.map((currency) => (
              <button 
                key={currency.id}
                onClick={() => setActiveCurrency(currency.id)}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  activeCurrency === currency.id
                    ? 'bg-[#6b11cb] text-white'
                    : 'bg-[#6b11cb]/10 text-[#6b11cb]'
                }`}
              >
                {currency.symbol}
              </button>
            ))}
          </div>

          <div className="flex flex-col">
            {data.heroSection?.features?.map((item, index) => (
              <div 
                key={item.id || index}
                className={`flex items-center py-5 gap-6 ${
                  index !== data.heroSection.features.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="min-w-[90px] flex flex-col">
                  {item.prefix && (
                    <span className="text-[10px] text-gray-500 uppercase tracking-wide">
                      {item.prefix}
                    </span>
                  )}
                  <span className={`text-3xl font-bold text-[#6b11cb] ${item.prefix ? '-mt-1' : ''}`}>
                    {item.value}
                  </span>
                </div>
                <div className="text-gray-700 text-sm md:text-base">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-[#333333] text-base leading-relaxed space-y-6 pt-4">
        {data.descriptionParagraphs?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="text-[#333333] text-base leading-relaxed pt-4">
        <h3 className="text-[#6b11cb] font-medium text-lg mb-6">
          {data.howToOrder?.title}
        </h3>
        <div className="space-y-6">
          {data.howToOrder?.steps?.map((step) => (
            <p key={step.stepNumber}>
              <span className="text-[#6b11cb] font-bold">{step.label}</span> {step.text}
            </p>
          ))}
        </div>
      </div>

      <div className="text-[#333333] text-base leading-relaxed pt-4">
        <h3 className="text-[#6b11cb] font-medium text-lg mb-6">
          {data.howToViewDetails?.title}
        </h3>
        <div className="space-y-6">
          {data.howToViewDetails?.steps?.map((step) => (
            <p key={step.stepNumber}>
              <span className="text-[#6b11cb] font-bold">{step.label}</span> {step.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VisaDigitaliMasin2;