import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebaseConfog'; 
import { collection, getDocs } from 'firebase/firestore';

function Cards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0); 
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  const imageRef = useRef(null);

<<<<<<< HEAD
=======
  // ----------------------------------------------------
  // Firebase-ից տվյալների ստացում (fetch)
  // ----------------------------------------------------
>>>>>>> 2971032e0d9b753f224de8ca988efd83679c2907
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cardsCollectionRef = collection(db, 'cards');
        const data = await getDocs(cardsCollectionRef);
        
        if (!data.empty) {
          const firebaseCards = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setCards(firebaseCards);
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const currentCard = cards[currentIndex];

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

  const handleUpClick = () => {
    if (visibleStartIndex > 0) {
      setVisibleStartIndex(prev => prev - 1);
    }
  };

  const handleDownClick = () => {
    if (visibleStartIndex < cards.length - 3) {
      setVisibleStartIndex(prev => prev + 1);
    }
  };

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    const rotateY = ((x - width / 2) / (width / 2)) * 15;
    const rotateX = ((y - height / 2) / (height / 2)) * -15;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

<<<<<<< HEAD
=======
  // Եթե բեռնվում է, ցույց ենք տալիս լոուդեր
>>>>>>> 2971032e0d9b753f224de8ca988efd83679c2907
  if (loading) {
    return <div className="min-h-screen bg-[#F0F8FF] flex justify-center items-center font-sans">Բեռնվում են քարտերը...</div>;
  }

<<<<<<< HEAD
=======
  // Եթե բազայում տվյալներ չեն գտնվել
>>>>>>> 2971032e0d9b753f224de8ca988efd83679c2907
  if (cards.length === 0) {
    return <div className="min-h-screen bg-[#F0F8FF] flex justify-center items-center font-sans text-gray-700">Բազայում քարտեր չկան:</div>;
  }

  const visibleCards = cards.slice(visibleStartIndex, visibleStartIndex + 3);

  return (
    <div className="min-h-screen bg-[#F0F8FF] flex justify-center items-center font-sans p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-[1100px] w-full p-8">
<<<<<<< HEAD

=======
        
        {/* Ձախ մաս (Սլայդեր / Ցանկ) */}
>>>>>>> 2971032e0d9b753f224de8ca988efd83679c2907
        <div className="flex flex-col items-center gap-3">
          <button 
            onClick={handleUpClick}
            disabled={visibleStartIndex === 0}
            className={`text-[#5b00e5] text-2xl font-bold transition-all ${
              visibleStartIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-110'
            }`}
          >
            ︿
          </button>
          
          <div className="flex flex-col gap-3 min-h-[240px] justify-center">
            {visibleCards.map((card, idx) => {
              const actualIndex = visibleStartIndex + idx; 
              
              return (
                <div
                  key={card.id}
                  onClick={() => handleThumbnailClick(actualIndex)}
                  className={`text-center cursor-pointer transition-all duration-300 p-1 rounded-xl ${
                    currentIndex === actualIndex ? 'opacity-100 scale-105 shadow-md bg-white/50' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={card.image} 
                    alt={card.name} 
                    className="w-[95px] h-[60px] object-cover rounded-md mb-1 shadow-sm" 
                  />
                  <span className="block text-[10px] text-gray-800 font-medium">{card.name}</span>
                </div>
              )
            })}
          </div>

          <button 
            onClick={handleDownClick}
            disabled={visibleStartIndex >= cards.length - 3}
            className={`text-[#5b00e5] text-2xl font-bold transition-all ${
              visibleStartIndex >= cards.length - 3 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-110'
            }`}
          >
            ﹀
          </button>
        </div>

<<<<<<< HEAD
=======
        {/* Կենտրոնական մաս */}
>>>>>>> 2971032e0d9b753f224de8ca988efd83679c2907
        <div className="relative flex justify-center items-center py-6">
          {currentCard && (
            <img
              ref={imageRef}
              src={currentCard.image}
              alt={currentCard.title}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ 
                transform: transformStyle, 
                transformStyle: 'preserve-3d' 
              }}
              className="w-[360px] h-[220px] object-contain cursor-pointer transition-all duration-500 ease-out drop-shadow-xl"
            />
          )}
        </div>

<<<<<<< HEAD
=======
        {/* Աջ մաս (Տեքստեր և Link) */}
>>>>>>> 2971032e0d9b753f224de8ca988efd83679c2907
        <div className="max-w-[320px]">
          {currentCard && (
            <>
              <h2 className="text-[24px] text-gray-900 mb-3 font-bold">{currentCard.title}</h2>
              {currentCard.description && (
                <p className="text-[13px] text-gray-600 leading-[1.6] mb-3">
                  {currentCard.description}
                </p>
              )}
              {currentCard.highlightText && (
                <p 
                  className="text-[13px] leading-[1.6] mb-4 text-[#5b00e5]"
                  dangerouslySetInnerHTML={{ __html: currentCard.highlightText }}
                />
              )}
              
              <Link 
                to={currentCard.link}
                className="inline-block bg-[#5b00e5] hover:bg-[#4a00b8] text-white px-[26px] py-[10px] rounded-full text-[14px] font-medium transition-colors duration-300 text-center shadow-md"
              >
                {currentCard.buttonText || "Մանրամասն"}
              </Link>
            </>
          )}
        </div>

      </div>
    </div>
  ); 
}

export default Cards;