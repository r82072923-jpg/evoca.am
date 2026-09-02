import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

const Bajinner = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const sectionsCollectionRef = collection(db, 'sections');
        const data = await getDocs(sectionsCollectionRef);
        
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

    fetchSections();
  }, []);

  return (
    <section className="bg-[#5d0bb9] w-full rounded-none rounded-tl-[50px] md:rounded-tl-[150px] relative overflow-x-hidden min-h-[500px]">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(10deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>

      {/* Ֆոնային անիմացիաներ (հեռախոսների վրա մասամբ թեթևացված/փոքրացված) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-4 h-4 bg-[#ffeb3b] rounded-full absolute bottom-[20%] left-[5%] animate-float" style={{ animationDuration: '5s' }}></div>
        <div className="w-8 h-8 border-[4px] border-[#ff4081] rounded-full absolute bottom-[10%] right-[5%] animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-[#ffeb3b] absolute top-[10%] right-[10%] rotate-[15deg] animate-float" style={{ animationDuration: '7s' }}></div>
        <div className="w-3 h-3 bg-[#ff4081] rounded-full absolute top-[15%] left-[10%] animate-float" style={{ animationDuration: '6s', animationDelay: '0.5s' }}></div>
        <div className="w-12 h-12 border-[2px] border-white/10 rounded-full absolute top-[25%] left-[20%] animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-center justify-between px-5 py-12 md:p-[60px_40px] h-full">
        
        {/* Վերնագիր և նկար */}
        <div className="w-full md:w-[35%] text-white text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-[26px] md:text-[32px] font-bold mb-4 md:mb-5 leading-tight px-2 md:px-0">
            Լավագույնը Evocabank-ից
          </h2>
          <img 
            src="https://www.evoca.am/img/statue-1.png" 
            alt="Statue" 
            className="w-[180px] md:w-auto max-w-full h-auto block mt-3 mx-auto md:mx-0 object-contain" 
          />
        </div>

        {/* Քարտերի ցանկ */}
        <div className="w-full md:w-[60%]">
          {loading ? (
            <div className="text-white text-center py-10 text-base">Բեռնվում է...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {cards.map((card) => (
                <Link 
                  key={card.id}
                  to={card.link} 
                  className="block bg-white rounded-2xl p-5 md:p-[30px_25px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 active:scale-[0.98] md:hover:-translate-y-2 md:hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] text-[#333] no-underline"
                >
                  <span className="inline-block bg-[#f0e6fc] text-[#5d0bb9] text-[11px] font-bold py-1 px-3 rounded-full mb-3">
                    {card.tag}
                  </span>
                  <h3 className="text-base md:text-lg font-extrabold mb-2 md:mb-3 text-[#1a1a1a]">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-[#666] leading-relaxed">
                    {card.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Bajinner;