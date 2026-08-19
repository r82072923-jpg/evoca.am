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
    <section className="bg-[#5d0bb9] w-full rounded-none rounded-tl-[80px] md:rounded-tl-[150px] relative overflow-hidden min-h-[500px]">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-5 h-5 bg-[#ffeb3b] rounded-full absolute bottom-[20%] left-[10%] animate-float" style={{ animationDuration: '5s' }}></div>
        <div className="w-10 h-10 border-[5px] border-[#ff4081] rounded-full absolute bottom-[15%] right-[5%] animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-[#ffeb3b] absolute top-[10%] right-[15%] rotate-[15deg] animate-float" style={{ animationDuration: '7s' }}></div>
        <div className="w-3 h-3 bg-[#ff4081] rounded-full absolute top-[15%] left-[15%] animate-float" style={{ animationDuration: '6s', animationDelay: '0.5s' }}></div>
        <div className="w-8 h-8 border-[3px] border-[#ffeb3b] rounded-full absolute top-[45%] left-[4%] animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-[#ffeb3b] absolute bottom-[10%] left-[45%] -rotate-[20deg] animate-float" style={{ animationDuration: '5.5s', animationDelay: '1.5s' }}></div>
        <div className="w-2 h-2 bg-[#ff4081] rounded-full absolute top-[50%] right-[12%] animate-float" style={{ animationDuration: '4s', animationDelay: '0.2s' }}></div>
        <div className="w-16 h-16 border-[2px] border-white/10 rounded-full absolute top-[25%] left-[30%] animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        <div className="w-4 h-4 bg-[#ffeb3b] rounded-full absolute top-[80%] left-[38%] animate-float" style={{ animationDuration: '6.5s', animationDelay: '0.8s' }}></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-center justify-between p-10 md:p-[60px_40px] h-full">
        
        <div className="w-full md:w-[35%] text-white text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-[32px] font-bold mb-5 leading-tight">
            Լավագույնը Evocabank-ից
          </h2>
          <img 
            src="https://www.evoca.am/img/statue-1.png" 
            alt="Statue" 
            className="max-w-full h-auto block mt-5 mx-auto md:mx-0" 
          />
        </div>

        <div className="w-full md:w-[60%]">
          {loading ? (
            <div className="text-white text-center py-10">Բեռնվում է...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {cards.map((card) => (
                <Link 
                  key={card.id}
                  to={card.link} 
                  className="block bg-white rounded-2xl p-6 md:p-[30px_25px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] text-[#333] no-underline"
                >
                  <span className="inline-block bg-[#f0e6fc] text-[#5d0bb9] text-[11px] font-bold py-1 px-3 rounded-full mb-4">
                    {card.tag}
                  </span>
                  <h3 className="text-lg font-extrabold mb-3 text-[#1a1a1a]">
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