import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfog';

function ArjetxteriShukaiMasin() {
  const [investmentData, setInvestmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openAccordion, setOpenAccordion] = useState(0);

  useEffect(() => {
    const fetchInvestmentData = async () => {
      try {
        const docRef = doc(db, "arjetxterishukaMasin", "mainContent");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setInvestmentData(docSnap.data());
        } else {
          console.log("Այդպիսի փաստաթուղթ գոյություն չունի բազայում:");
        }
      } catch (error) {
        console.error("Սխալ տվյալների ստացման ժամանակ՝ ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestmentData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-600 font-sans">
        Բեռնվում է տվյալները Firebase-ից...
      </div>
    );
  }

  if (!investmentData) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500 font-sans">
        Տվյալները չհաջողվեց գտնել կամ բեռնել:
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 font-sans text-gray-800">
      <div className="space-y-6 mb-12 text-sm leading-relaxed">
        <h1 className="text-2xl font-bold mb-4">{investmentData.title}</h1>
        
        <p>{investmentData.introParagraph}</p>

        <div>
          <h3 className="text-purple-800 font-bold mb-2">{investmentData.howToBecomeClient?.sectionTitle}</h3>
          <p>
            {investmentData.howToBecomeClient?.text1}{' '}
            <a href={investmentData.howToBecomeClient?.linkUrl} className="text-purple-700 underline font-medium">
              {investmentData.howToBecomeClient?.linkText}
            </a>:
          </p>
          <p className="mt-2">{investmentData.howToBecomeClient?.text2}</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900">{investmentData.contactInfo?.addressTitle}</h4>
            <p>{investmentData.contactInfo?.addressValue}</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900">{investmentData.contactInfo?.phoneTitle}</h4>
            <p>{investmentData.contactInfo?.phoneValue}</p>
            <p>
              {investmentData.contactInfo?.emailLabel}{' '}
              <a href={`mailto:${investmentData.contactInfo?.email}`} className="text-purple-700 underline font-medium">
                {investmentData.contactInfo?.email}
              </a>
            </p>
          </div>
        </div>

        <div>
          <p>
            <span className="font-bold">ՈՒՇԱԴՐՈՒԹՅՈՒՆ</span> {investmentData.warningText}
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold uppercase mb-6 tracking-wide text-gray-900">
        {investmentData.accordionSectionTitle}
      </h2>
      <div className="space-y-4">
        {investmentData.accordions?.map((acc, index) => {
          const isOpen = openAccordion === index;
          
          return (
            <div 
              key={index} 
              className={`border rounded-lg overflow-hidden bg-white transition-colors ${
                isOpen && index === 0 ? 'border-purple-400' : 'border-purple-200'
              }`}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <span className={`font-semibold text-sm md:text-base ${index === 0 && isOpen ? 'font-bold text-purple-900' : 'text-gray-800'}`}>
                  {acc.title}
                </span>
                <svg 
                  className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180 text-purple-700' : 'text-gray-500'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isOpen && (
                <div className="p-5 pt-0 text-sm text-gray-700 border-t border-purple-100">
                  {acc.rules ? (
                    acc.rules.map((rule, rIdx) => (
                      <div key={rIdx} className={rIdx !== 0 ? "mt-6" : "mt-4"}>
                        <a href={rule.linkUrl} className="text-purple-800 underline font-bold mb-2 block">
                          {rule.linkTitle}
                        </a>
                        <p className="leading-relaxed">{rule.description}</p>
                      </div>
                    ))
                  ) : acc.tariffs ? (
                    <div className="space-y-4 mt-4">
                      {acc.tariffs.map((tariff, tIdx) => (
                        <div key={tIdx}>
                          <a href={tariff.linkUrl} className="text-purple-800 underline font-bold block">
                            {tariff.linkTitle}
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : acc.additionalInfo ? (
                    <div className="space-y-4 mt-4">
                      {acc.additionalInfo.map((info, iIdx) => (
                        <div key={iIdx}>
                          <a href={info.linkUrl} className="text-purple-800 underline font-bold block">
                            {info.linkTitle}
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-4">{acc.content}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArjetxteriShukaiMasin;