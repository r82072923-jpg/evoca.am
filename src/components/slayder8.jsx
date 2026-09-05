import React, { useState } from 'react';

const  Slayder8 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const itemsPerPage = 5;

  const accordionData = [
    {
      id: 1,
      title: "Գործարքների արգելափակում ֆունկցիոնալ",
      date: "26.06.2026",
      content: "Այստեղ կարող եք տեղադրել մանրամասն տեղեկատվությունը..."
    },
    {
      id: 2,
      title: "«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ Բաժնետերերի տարեկան ընդհանուր ժողով",
      date: "28.08.2026",
      content: "Այստեղ կարող եք տեղադրել մանրամասն տեղեկատվությունը..."
    },
    {
      id: 3,
      title: "«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Բաժնետերերի տարեկան ընդհանուր ժողով",
      date: "04.06.2025",
      content: "Այստեղ կարող եք տեղադրել մանրամասն տեղեկատվությունը..."
    },
    {
      id: 4,
      title: "«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով",
      date: "28.03.2025",
      content: "Այստեղ կարող եք տեղադրել մանրամասն տեղեկատվությունը..."
    },
    {
      id: 5,
      title: "Արտաքին աուդիտի մրցույթի հայտարարություն",
      date: "30.12.2024",
      content: "Այստեղ կարող եք տեղադրել մանրամասն տեղեկատվությունը..."
    },
    {
      id: 6,
      title: "Բանկի ներսում նույն արժույթով քարտերի միջև փոխանցման սակագինը սահմանվել է 0%",
      date: "12.11.2024",
      content: "Այստեղ կարող եք տեղադրել մանրամասն տեղեկատվությունը..."
    },
    {
      id: 7,
      title: "Նոր մասնաճյուղի պաշտոնական բացում",
      date: "10.10.2024",
      content: "Այստեղ կարող եք տեղադրել մանրամասն տեղեկատվությունը..."
    },
    {
      id: 8,
      title: "Թարմացված պայմաններ վարկերի համար",
      date: "01.09.2024",
      content: "Այստեղ կարող եք տեղադրել մանրամասն տեղեկատվությունը..."
    }
  ];

  // Տվյալների բաժանում էջերի
  const pages = [];
  for (let i = 0; i < accordionData.length; i += itemsPerPage) {
    pages.push(accordionData.slice(i, i + itemsPerPage));
  }
  const totalPages = pages.length;

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setOpenAccordionId(null);
    }
  };

  const nextSlide = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
      setOpenAccordionId(null);
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setOpenAccordionId(null);
  };

  const toggleAccordion = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <div className="w-full bg-[#f7f8fc] py-16 px-4 md:px-10 flex justify-center overflow-hidden font-sans">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-10 items-start">
        
        {/* Ձախ մաս - Նկար */}
        <div className="hidden md:flex flex-1 justify-center items-center relative">
          <img 
            src="image_614b92.png" 
            alt="Clipboard Illustration" 
            className="w-full max-w-md object-contain z-10"
          />
        </div>

        {/* Աջ մաս - Սլայդեր և Ակորդեոն */}
        <div className="flex-[1.5] w-full flex flex-col">
          
          {/* Սլայդերի Կոնտեյներ */}
          <div className="w-full overflow-hidden relative min-h-[450px]">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {pages.map((page, pageIndex) => (
                <div key={pageIndex} className="w-full shrink-0 px-2 flex flex-col">
                  {page.map((item) => {
                    const isOpen = openAccordionId === item.id;
                    return (
                      <div 
                        key={item.id}
                        onClick={() => toggleAccordion(item.id)}
                        className="bg-white rounded-xl mb-4 p-5 shadow-[0_4px_15px_rgba(0,0,0,0.03)] cursor-pointer transition-shadow hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
                      >
                        <div className="flex items-start gap-4">
                          <span className={`text-[#8b3dff] text-lg font-bold transition-transform duration-300 mt-[-2px] ${isOpen ? 'rotate-180' : ''}`}>
                            &#709;
                          </span>
                          
                          <div className="flex-1">
                            <h3 className="font-bold text-[14px] md:text-[15px] text-[#2b2b2b] leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-[11px] md:text-xs text-gray-400 mt-2 font-medium">
                              {item.date}
                            </p>
                            
                            {/* Անիմացիոն բացվող հատված */}
                            <div 
                              className={`grid transition-all duration-300 ease-in-out ${
                                isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                              }`}
                            >
                              <div className="overflow-hidden">
                                <p className="text-sm text-gray-600 leading-relaxed pt-1">
                                  {item.content}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls (Թվեր և սլաքներ) */}
          <div className="w-full flex justify-start items-center space-x-3 mt-6 pl-4">
            <button 
              onClick={prevSlide} 
              disabled={currentIndex === 0}
              className="text-gray-400 hover:text-[#8b3dff] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {pages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'bg-[#8b3dff] text-white shadow-md' 
                      : 'text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={nextSlide} 
              disabled={currentIndex === totalPages - 1}
              className="text-[#8b3dff] hover:text-[#6e2ac9] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Slayder8;