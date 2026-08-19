import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfog';

const tabs = ['Վարկի մասին', 'Պայմաններ'];

const Loan15iMasin2 = ({ activeTab, setActiveTab }) => {
  const [contentData, setContentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContentData = async () => {
      try {
        const docRef = doc(db, "loans15iMasin", "content");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setContentData(docSnap.data());
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchContentData();
  }, []);

  if (loading || !contentData) {
    return <div className="text-center my-12 text-gray-500 font-sans">Բեռնվում է...</div>;
  }

  return (
    <section className="w-full max-w-6xl mx-auto my-12 px-4 font-sans text-gray-800">
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
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        
        <div className="w-full lg:w-1/2 space-y-6">
          <h3 className="text-purple-700 font-bold text-lg tracking-wide">
            {contentData.sectionTitle}
          </h3>
          
          <p className="text-gray-700 text-base leading-relaxed">
            {contentData.paragraphs[0]}
          </p>
          
          <p className="text-gray-700 text-base leading-relaxed">
            {contentData.paragraphs[1]}
          </p>
          
          <ul className="space-y-3 text-gray-700">
            {contentData.listItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-gray-700 text-base leading-relaxed pt-2">
            {contentData.extraTexts.beforeHighlight}
            <span className="text-purple-700 font-medium">
              {contentData.extraTexts.highlightText}
            </span>
            ։
          </p>
          
          <p className="text-gray-700 text-base leading-relaxed">
            {contentData.extraTexts.finalParagraph}
          </p>
        </div>

        <div className="w-full lg:w-1/2 bg-white border border-purple-100 rounded-2xl shadow-sm p-6 sm:p-8">
          
          <div className="flex items-center gap-3 mb-8">
            {contentData.card.currencies.map((symbol, index) => (
              <span
                key={index}
                className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white shadow-md scale-105 bg-[#6b11cb]"
              >
                {symbol}
              </span>
            ))}
          </div>

          <div className="divide-y divide-purple-50">
            
            <div className="py-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400 block mb-1">{contentData.card.amountLabel}</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#6b11cb]">{contentData.card.amountValue}</span>
              </div>
              <span className="text-gray-600 font-medium">{contentData.card.amountTitle}</span>
            </div>

            <div className="py-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400 block mb-1">{contentData.card.termLabel}</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#6b11cb]">{contentData.card.termValue}</span>
              </div>
              <span className="text-gray-600 font-medium">{contentData.card.termTitle}</span>
            </div>

            <div className="py-5 flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#6b11cb]">{contentData.card.rateValue}</span>
              <span className="text-gray-600 font-medium">{contentData.card.rateTitle}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Loan15iMasin2; 