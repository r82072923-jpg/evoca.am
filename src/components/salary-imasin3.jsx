import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

function SalaryiMasin3() {
  const [openId, setOpenId] = useState(1);
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const getFaqData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "salaryiMasin2"));
        const dataList = querySnapshot.docs.map(doc => doc.data());
        
        dataList.sort((a, b) => a.id - b.id);
        
        setFaqData(dataList);
      } catch (error) {
        console.error(error);
      }
    };

    getFaqData();
  }, []);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-8 px-4 font-sans">
      <div className="space-y-4">
        {faqData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => toggleAccordion(item.id)}
              className={`border rounded-2xl p-5 cursor-pointer transition-all duration-300 ${
                isOpen
                  ? 'border-[#8000ff] bg-white shadow-sm'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  {isOpen ? (
                    <svg className="w-5 h-5 text-[#8000ff] transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-[#8000ff] transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className={`text-base sm:text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-[#1a1a1a]' : 'text-gray-400'}`}>
                    {item.question}
                  </h4>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[#4a4a4a] text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SalaryiMasin3;