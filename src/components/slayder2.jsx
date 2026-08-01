import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

const Slayder2 = () => {
  const [historyData, setHistoryData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const visibleCount = 6;

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "slayder2"));
        const data = querySnapshot.docs.map(doc => ({
          ...doc.data()
        }));
        
        data.sort((a, b) => b.year - a.year);
        
        setHistoryData(data);
      } catch (error) {
        console.error("Սխալ տվյալներ ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoryData();
  }, []);

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < historyData.length - 1) setActiveIndex(activeIndex + 1);
  };

  if (loading) {
    return <div className="text-center py-20 text-gray-500 font-medium">Բեռնվում է...</div>;
  }

  if (historyData.length === 0) {
    return <div className="text-center py-20 text-gray-500 font-medium">Տվյալներ չեն գտնվել:</div>;
  }

  let startIndex = Math.max(0, activeIndex - Math.floor(visibleCount / 2));
  let endIndex = startIndex + visibleCount;

  if (endIndex > historyData.length) {
    endIndex = historyData.length;
    startIndex = Math.max(0, endIndex - visibleCount);
  }

  const visibleData = historyData.slice(startIndex, endIndex);
  
  const progressWidth = visibleData.length > 1 
    ? ((activeIndex - startIndex) / (visibleData.length - 1)) * 100 
    : 0;

  return (
    <div className="font-sans max-w-[1100px] mx-auto px-5 py-12">
      
      <style>{`
        @keyframes customFadeIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-content {
          animation: customFadeIn 0.4s ease-out forwards;
        }
      `}</style>

      <div className="flex justify-between items-center mb-16">
        <h2 className="text-[28px] md:text-3xl font-bold text-[#1a1a1a]">
          Բանկի պատմությունը
        </h2>
      </div>

      <div className="relative flex items-center mb-16">
        <button 
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`mr-4 transition-colors ${activeIndex === 0 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-400 hover:text-[#6100eb]'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        <div className="flex-1 relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div 
            className="absolute top-1/2 left-0 h-[2px] bg-[#6100eb] -translate-y-1/2 z-0 transition-all duration-500 ease-in-out"
            style={{ width: `${progressWidth}%` }}
          ></div>

          <div className="flex justify-between relative z-10">
            {visibleData.map((item, index) => {
              const absoluteIndex = startIndex + index;
              return (
                <div 
                  key={item.id || item.year} 
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setActiveIndex(absoluteIndex)}
                >
                  <span className={`mb-3 text-[15px] md:text-[17px] font-bold transition-colors duration-300 ${activeIndex === absoluteIndex ? 'text-[#6100eb]' : 'text-[#333] group-hover:text-[#6100eb]'}`}>
                    {item.year}
                  </span>
                  <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 bg-white ${absoluteIndex <= activeIndex ? 'border-[#6100eb]' : 'border-gray-200'} ${activeIndex === absoluteIndex ? 'bg-[#6100eb] ring-4 ring-[#6100eb]/20' : ''}`}></div>
                </div>
              );
            })}
          </div>
        </div>

        <button 
          onClick={handleNext}
          disabled={activeIndex === historyData.length - 1}
          className={`ml-4 transition-colors ${activeIndex === historyData.length - 1 ? 'text-gray-200 cursor-not-allowed' : 'text-[#6100eb] hover:text-[#4a00b3]'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      <div className="relative flex flex-col md:flex-row items-stretch min-h-[300px]">
        <div className="w-full md:w-[65%] bg-[#f8f6fb] rounded-tl-[40px] p-8 md:p-12 pr-8 md:pr-40 flex items-center">
          <p 
            key={`text-${activeIndex}`} 
            className="text-[#333] text-[15px] leading-[1.8] animate-content"
          >
            {historyData[activeIndex]?.text}
          </p>
        </div>

        <div className="w-full md:w-[45%] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 mt-8 md:mt-0">
          <img 
            key={`img-${activeIndex}`}
            src={historyData[activeIndex]?.image} 
            alt={`Evoca History ${historyData[activeIndex]?.year}`}
            className="w-full h-auto object-cover animate-content"
          />
        </div>
      </div>

    </div>
  );
};

export default Slayder2;