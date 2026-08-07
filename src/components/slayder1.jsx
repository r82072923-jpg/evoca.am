import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfog';

const Slayder1 = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchSlides = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "sliders"));
      const slidesArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      slidesArray.sort((a, b) => a.order - b.order);
      setSlides(slidesArray);
    } catch (error) {
      console.error("Սխալ տվյալները ստանալիս: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const prevSlide = () => {
    if (slides.length === 0) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    if (slides.length === 0) return;
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  if (loading) {
    return <div className="w-full min-h-[600px] flex items-center justify-center">Բեռնվում է...</div>;
  }

  if (slides.length === 0) {
    return (
      <div className="w-full min-h-[600px] flex flex-col items-center justify-center space-y-4">
        <p>Բազայում սլայդեր չկան:</p>
      </div>
    );
  }

  const currentSlide = slides[currentIndex];

  return (
    <div className="w-full relative overflow-hidden">
      
      <style>{`
        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-from-left { animation: slideFromLeft 0.6s ease-out forwards; }
        .animate-from-right { animation: slideFromRight 0.6s ease-out forwards; }
      `}</style>

      {/* Ֆոնի և մնացած դասերը կցված են ուղղակիորեն որպես Tailwind-ի կլասներ */}
      <div 
  style={{ backgroundColor: slides[currentIndex]?.bgColor?.replace(/bg-\[|\]/g, '') }} 
  className="rounded-bl-[200px] w-full min-h-[600px] flex flex-col justify-center transition-colors duration-500 py-10 px-8 md:px-20 relative"
>
        
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between flex-1">
          
<div key={`text-${currentIndex}`} className="w-full md:w-1/2 animate-from-left z-10 mb-8 md:mb-0">
            <h2 
              style={{ color: currentSlide?.textColor?.includes('white') ? '#ffffff' : '#000000' }} 
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight transition-colors duration-300"
            >
              {currentSlide?.title}
            </h2>
            <p 
              style={{ color: '#d1d5db' }} 
              className="text-base md:text-xl mb-8 max-w-lg leading-relaxed transition-colors duration-300"
            >
              {currentSlide?.description}
            </p>
            <Link to={currentSlide?.link}>
              <button 
                style={{ backgroundColor: '#ffffff', color: '#7c3aed' }} 
                className="font-medium py-3.5 px-8 rounded-full transition-colors text-lg"
              >
                {currentSlide?.buttonText}
              </button>
            </Link>
          </div>

          <div key={`img-${currentIndex}`} className="w-full md:w-1/2 flex justify-center items-center animate-from-right z-10">
            <img 
              src={currentSlide?.image} 
              alt={currentSlide?.title}
              className="max-h-[380px] object-contain" 
            />
          </div>

        </div>

        <div className="w-full flex justify-center items-center space-x-6 mt-8 z-20">
          
          <button onClick={prevSlide} className="text-[#6712E0] hover:text-[#560ec0] transition-colors p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>

          <div className="flex space-x-3">
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300 ${
                  currentIndex === slideIndex ? 'bg-[#6712E0]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="text-[#6712E0] hover:text-[#560ec0] transition-colors p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Slayder1;