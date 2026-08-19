import React from 'react';
import { Link } from 'react-router-dom';
const Header2 = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white w-full shadow-sm">
      
      {/* Ձախ հատված՝ Լոգո և Վերնագիր */}
      <div className="flex items-center space-x-8">
        
        {/* Լոգոյի նմանակում (Evoca) */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuLt6RmT3Z93EFVPLA410-P3PmujqfjmEzZOXnPGyEL28BYZT"
              alt="Evoca Logo" 
              className="w-50 h-18 object-contain block" 
            />
          </Link>
        </div>
        
        {/* Բաժանարար և Տեքստ */}
        <div className="text-gray-600 text-lg font-medium">
          Online payment
        </div>
      </div>

      {/* Աջ հատված՝ Հեռախոսահամար, Լեզու և Կոճակ */}
      <div className="flex items-center space-x-6">
        
        {/* Հեռախոսահամար */}
        <a href="tel:+37410605555" className="text-[#6400EC] text-lg font-medium hover:underline">
          +374 10 605555
        </a>

        {/* Լեզվի ընտրության գլոբուսի պատկերակ (SVG) */}
        <button className="text-black hover:text-gray-600 transition-colors cursor-pointer" aria-label="Change language">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" 
            />
          </svg>
        </button>

        {/* «Պատմություն» Կոճակ */}
        <button className="bg-[#6400EC] hover:bg-[#5200c4] text-white text-base font-medium py-2.5 px-6 rounded-full transition-colors shadow-sm">
          Պատմություն
        </button>
        
      </div>
    </header>
  );
};

export default Header2;