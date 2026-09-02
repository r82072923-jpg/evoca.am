import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

function Gortynkerner() {
  const [partnersData, setPartnersData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'partners'));
        const partners = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPartnersData(partners);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPartners();
  }, []);

  const nextSlide = () => {
    if (partnersData.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % partnersData.length);
    }
  };

  const prevSlide = () => {
    if (partnersData.length > 0) {
      setCurrentIndex((prev) => (prev === 0 ? partnersData.length - 1 : prev - 1));
    }
  };

  const visiblePartners = partnersData.length > 0 ? [
    partnersData[currentIndex % partnersData.length],
    partnersData[(currentIndex + 1) % partnersData.length],
    partnersData[(currentIndex + 2) % partnersData.length],
  ] : [];

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 py-10 md:py-16 max-w-7xl mx-auto font-sans overflow-hidden">
      <div className="w-full lg:w-1/3 mb-12 lg:mb-0 z-10 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2a2a2a] mb-4 md:mb-6">
          Գործընկերներ
        </h2>
        <p className="text-[#333] text-sm md:text-base leading-relaxed mb-6 md:mb-8 font-medium px-2 lg:px-0 lg:pr-4">
          Դարձե՛ք Evocabank-ի Գործընկեր և եկե՛ք միասին գնանք դեպի գունեղ նոր իրականություն: 
          Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ: 
          Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար:
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link 
            to="/partners" 
            className="inline-flex w-max mx-auto lg:mx-0 bg-[#f0e6fc] text-[#6d28d9] px-6 md:px-8 py-3 rounded-full font-bold items-center justify-center gap-2 md:gap-3 hover:bg-[#e4d3f9] transition-colors text-sm md:text-base"
          >
            Բոլոր գործընկերները
            <span className="text-lg md:text-xl leading-none">›</span>
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-2/3 relative flex justify-end items-center h-[250px] md:h-[450px]">
        
        <div className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-40 h-40 md:w-80 md:h-80 pointer-events-none opacity-40 md:opacity-100">
          <div className="w-full h-full border-[2px] md:border-[3px] border-dotted border-[#fde047] rounded-full opacity-60 animate-[spin_25s_linear_infinite]"></div>
        </div>
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 pointer-events-none opacity-40 md:opacity-100">
          <div className="w-full h-full border-[2px] md:border-[3px] border-dotted border-[#fde047] rounded-full opacity-80 animate-[spin_20s_linear_infinite_reverse]"></div>
        </div>
        <div className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 w-24 h-24 md:w-48 md:h-48 pointer-events-none hidden md:block">
          <div className="w-full h-full border-[3px] border-dotted border-[#fde047] rounded-full opacity-100 animate-[spin_15s_linear_infinite]"></div>
        </div>

        <div className="bg-gradient-to-r from-[#fbfbfb] to-[#f4f4f4] w-[95%] md:w-[88%] h-28 md:h-56 flex items-center justify-between shadow-sm relative z-10 ml-auto mr-1 md:mr-2 rounded-[1.5rem] md:rounded-[2.5rem] pl-12 md:pl-16 pr-2 md:pr-6">
          
          <button 
            onClick={prevSlide}
            className="text-[#6d28d9] text-2xl md:text-4xl font-bold hover:scale-110 transition-transform cursor-pointer select-none z-30 p-1 md:p-2"
            aria-label="Previous partner"
          >
            ‹
          </button>

          <div className="flex items-center h-full flex-1 justify-center px-2 md:px-4">
            {visiblePartners.length > 0 && visiblePartners.map((partner, index) => (
              partner && (
                <div 
                  key={`${partner.id}-${index}`} 
                  className={`px-2 md:px-4 h-16 md:h-24 flex items-center justify-center w-1/3 ${
                    index !== 2 ? 'border-r border-gray-200' : ''
                  }`}
                >
                  <Link to={partner.link || '#'} className="block transition-transform hover:scale-105">
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className={`max-h-6 md:max-h-14 object-contain rounded-lg transition-all duration-300 ${
                        partner.grayscale 
                          ? 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100 cursor-pointer' 
                          : 'cursor-pointer'
                      }`} 
                    />
                  </Link>
                </div>
              )
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="text-[#6d28d9] text-2xl md:text-4xl font-bold hover:scale-110 transition-transform cursor-pointer select-none z-30 p-1 md:p-2"
            aria-label="Next partner"
          >
            ›
          </button>
        </div>

        <div className="absolute -left-6 md:-left-4 bottom-[-5px] md:bottom-[-10px] z-20 pointer-events-none">
          <img 
            src="https://lightscamerasocial.com/images/footer-rock.png" 
            alt="Rock Hand" 
            className="h-[180px] md:h-[460px] object-contain drop-shadow-xl md:drop-shadow-2xl"
          />
        </div>
        
      </div>
    </section>
  );
}

export default Gortynkerner;