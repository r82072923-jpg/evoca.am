import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfog';

=======
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfog';
>>>>>>> 2971032e0d9b753f224de8ca988efd83679c2907
const Slayder1 = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

<<<<<<< HEAD
=======
  const initialSlidesData = [
    {
      id: 1,
      title: "Evoca Travel Card",
      description: "Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը",
      buttonText: "Իմանալ ավելին",
      image: "https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png",
      bgColor: "bg-[#dadada]",
      textColor: "text-black",
      descColor: "text-gray-1000",
      btnBg: "bg-purple-600 hover:bg-purple-700",
      btnTextColor: "text-white",
    },
    {
      id: 2,
      title: "Evoca Աշխատավարձային Նախագիծ",
      description: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
      buttonText: "Իմանալ ավելին",
      image: "https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png",
      bgColor: "bg-[#6539aa]",
      textColor: "text-white",
      descColor: "text-gray-300",
      btnBg: "bg-white hover:bg-gray-100",
      btnTextColor: "text-purple-600",
    },
    {
      id: 3,
      title: "Կարճ հեռախոսահամար՝ 8444",
      description: "Բարի գալուստ, Evocabank։ Մենք սպասում ենք Ձեր զանգին․․․",
      buttonText: "Իմանալ ավելին",
      image: "https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png",
      bgColor: "bg-[#000000]",
      textColor: "text-white",
      descColor: "text-gray-300",
      btnBg: "bg-white hover:bg-gray-100",
      btnTextColor: "text-purple-600",
    },
    {
      id: 4,
      title: "Visa Vision",
      description: "Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից",
      buttonText: "Իմանալ ավելին",
      image: "https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg",
      bgColor: "bg-[#27292b]",
      textColor: "text-white",
      descColor: "text-gray-300",
      btnBg: "bg-white hover:bg-gray-100",
      btnTextColor: "text-purple-600",
    },
    {
      id: 5,
      title: "Visa Infinite",
      description: "Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա",
      buttonText: "Իմանալ ավելին",
      image: "https://www.evoca.am/images-cache/sliders/1/17737433784078/126c54e244e880fd563d8af43979486c-577x485.png",
      bgColor: "bg-[#000000]",
      textColor: "text-white",
      descColor: "text-gray-300",
      btnBg: "bg-white hover:bg-gray-100",
      btnTextColor: "text-purple-600",
    },
    {
      id: 6,
      title: "Հիփոթեքային վարկեր Evocabank-ում` ամենահարմար պայմաններով",
      description: "Ձե՛ռք բեր քո երազանքի բնակարանը` ցածր տոկոսադրույքով:",
      buttonText: "Իմանալ ավելին",
      image: "https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
      bgColor: "bg-[#E4DFFF]",
      textColor: "text-black",
      descColor: "text-gray-700",
      btnBg: "bg-purple-600 hover:bg-purple-700",
      btnTextColor: "text-white",
    },
    {
      id: 7,
      title: "UnionPay Gold",
      description: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը",
      buttonText: "Իմանալ ավելին",
      image: "https://www.evoca.am/images-cache/sliders/1/17262130779724/2fee1054871280f57daf5204f901c563-577x486.png",
      bgColor: "bg-[#b6a44f]",
      textColor: "text-black",
      descColor: "text-gray-1000",
      btnBg: "bg-purple-600 hover:bg-purple-700",
      btnTextColor: "text-white",
    },
    {
      id: 8,
      title: "Օնլայն ավանդ EvocaTOUCH հավելվածով",
      description: "Դի’ր ավանդ Evocabank-ում` բարձր, շա՜տ բարձր տոկոսներով:",
      buttonText: "Ծանոթանալ պայմաններին",
      image: "https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
      bgColor: "bg-[#FFDCFB]",
      textColor: "text-black",
      descColor: "text-gray-1000",
      btnBg: "bg-purple-600 hover:bg-purple-700",
      btnTextColor: "text-white",
    },
  ];

  const uploadDataToFirebase = async () => {
    try {
      const slidersCollection = collection(db, "sliders");
      for (const slide of initialSlidesData) {
        await addDoc(slidersCollection, slide);
      }
      alert("Տվյալները հաջողությամբ ուղարկվեցին Firebase!");
      fetchSlides();
    } catch (error) {
      console.error("Սխալ տվյալները ուղարկելիս: ", error);
    }
  };

>>>>>>> 2971032e0d9b753f224de8ca988efd83679c2907
  const fetchSlides = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "sliders"));
      const slidesArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      slidesArray.sort((a, b) => a.order - b.order);
<<<<<<< HEAD
=======
      
>>>>>>> 2971032e0d9b753f224de8ca988efd83679c2907
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
<<<<<<< HEAD
=======
        <button 
          onClick={uploadDataToFirebase}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg"
        >
          Ուղարկել սկզբնական տվյալները Firebase
        </button>
>>>>>>> 2971032e0d9b753f224de8ca988efd83679c2907
      </div>
    );
  }

<<<<<<< HEAD
  const currentSlide = slides[currentIndex];

=======
>>>>>>> 2971032e0d9b753f224de8ca988efd83679c2907
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

<<<<<<< HEAD
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
=======
      <div className={`${slides[currentIndex]?.bgColor} rounded-bl-[200px] w-full min-h-[600px] flex flex-col justify-center transition-colors duration-500 py-10 px-8 md:px-20 relative`}>
        
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between flex-1">
          
          <div key={`text-${currentIndex}`} className="w-full md:w-1/2 animate-from-left z-10 mb-8 md:mb-0">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 leading-tight transition-colors duration-300 ${slides[currentIndex]?.textColor}`}>
              {slides[currentIndex]?.title}
            </h2>
            <p className={`text-base md:text-xl mb-8 max-w-lg leading-relaxed transition-colors duration-300 ${slides[currentIndex]?.descColor}`}>
              {slides[currentIndex]?.description}
            </p>
            <button className={`${slides[currentIndex]?.btnBg} ${slides[currentIndex]?.btnTextColor} font-medium py-3.5 px-8 rounded-full transition-colors text-lg`}>
              {slides[currentIndex]?.buttonText}
            </button>
>>>>>>> 2971032e0d9b753f224de8ca988efd83679c2907
          </div>

          <div key={`img-${currentIndex}`} className="w-full md:w-1/2 flex justify-center items-center animate-from-right z-10">
            <img 
<<<<<<< HEAD
              src={currentSlide?.image} 
              alt={currentSlide?.title}
=======
              src={slides[currentIndex]?.image} 
              alt={slides[currentIndex]?.title}
>>>>>>> 2971032e0d9b753f224de8ca988efd83679c2907
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