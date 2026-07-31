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
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto font-sans overflow-hidden">
      
      <div className="w-full lg:w-1/3 mb-10 lg:mb-0 z-10">
        <h2 className="text-4xl font-extrabold text-[#2a2a2a] mb-6">
          Գործընկերներ
        </h2>
        <p className="text-[#333] text-base leading-relaxed mb-8 font-medium pr-4">
          Դարձե՛ք Evocabank-ի Գործընկեր և եկե՛ք միասին գնանք դեպի գունեղ նոր իրականություն: 
          Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ: 
          Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար:
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/partners" 
            className="inline-flex w-max bg-[#f0e6fc] text-[#6d28d9] px-8 py-3 rounded-full font-bold items-center justify-center gap-3 hover:bg-[#e4d3f9] transition-colors"
          >
            Բոլոր գործընկերները
            <span className="text-xl leading-none">›</span>
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-2/3 relative flex justify-end items-center h-[450px]">
        
        <div className="absolute left-6 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none">
          <div className="w-full h-full border-[3px] border-dotted border-[#fde047] rounded-full opacity-60 animate-[spin_25s_linear_infinite]"></div>
        </div>
        <div className="absolute left-12 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none">
          <div className="w-full h-full border-[3px] border-dotted border-[#fde047] rounded-full opacity-80 animate-[spin_20s_linear_infinite_reverse]"></div>
        </div>
        <div className="absolute left-20 top-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none">
          <div className="w-full h-full border-[3px] border-dotted border-[#fde047] rounded-full opacity-100 animate-[spin_15s_linear_infinite]"></div>
        </div>

        <div className="bg-gradient-to-r from-[#fbfbfb] to-[#f4f4f4] w-[88%] h-56 flex items-center justify-between shadow-sm relative z-10 ml-auto mr-2 rounded-[2.5rem] pl-16 pr-6">
          
          <button 
            onClick={prevSlide}
            className="text-[#6d28d9] text-4xl font-bold hover:scale-110 transition-transform cursor-pointer select-none z-30"
            aria-label="Previous partner"
          >
            ‹
          </button>

          <div className="flex items-center h-full flex-1 justify-center px-4">
            {visiblePartners.length > 0 && visiblePartners.map((partner, index) => (
              partner && (
                <div 
                  key={`${partner.id}-${index}`} 
                  className={`px-4 h-24 flex items-center justify-center w-1/3 ${
                    index !== 2 ? 'border-r border-gray-200' : ''
                  }`}
                >
                  <Link to={partner.link || '#'} className="block transition-transform hover:scale-105">
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className={`max-h-14 object-contain rounded-lg transition-all duration-300 ${
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
            className="text-[#6d28d9] text-4xl font-bold hover:scale-110 transition-transform cursor-pointer select-none z-30"
            aria-label="Next partner"
          >
            ›
          </button>
        </div>

        <div className="absolute -left-4 bottom-[-10px] z-20 pointer-events-none">
          <img 
            src="https://lightscamerasocial.com/images/footer-rock.png" 
            alt="Rock Hand" 
            className="h-[460px] object-contain drop-shadow-2xl"
          />
        </div>
        
      </div>
    </section>
  );
}

export default Gortynkerner;