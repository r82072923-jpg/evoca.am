import React, { useState } from 'react';
import Leasing from './leasing';

const LeasingiMasin = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leasingData = [
    "Evoca Leasing",
    "ՀՀ Կառավարության Տնտեսության Արդիականացման նպատակային ծրագրի ներքո արտադրողականության խթանմանն ուղղված լիզինգ (գործելու է մինչև 31.12.2026թ.)",
    "Լիզինգ՝ գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով"
  ];

  return (
    <div className="max-w-4xl p-6 font-sans bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Evoca Leasing
      </h1>
      
      <h2 className="text-base font-bold text-gray-900 mb-4 uppercase">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>
      
      <div className="flex flex-col gap-3">
        {leasingData.map((text, index) => (
          <div 
            key={index}
            onClick={() => toggleItem(index)}
            className="border border-purple-200 rounded-lg p-4 flex items-start cursor-pointer hover:bg-purple-50 transition-colors duration-200"
          >
            <div 
              className={`mt-1 mr-4 text-purple-700 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            >
              <svg 
                width="14" 
                height="8" 
                viewBox="0 0 14 8" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M1 1L7 7L13 1" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-slate-500 font-bold text-sm md:text-base leading-relaxed">
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeasingiMasin;