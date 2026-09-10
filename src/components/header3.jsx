import React from "react";
import { Link } from "react-router-dom";
function Header3() {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-100 font-sans">
        <div className="flex items-center">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuLt6RmT3Z93EFVPLA410-P3PmujqfjmEzZOXnPGyEL28BYZT"
              alt="Evoca Logo" 
              className="w-32 md:w-44 h-12 md:h-16 object-contain block" 
            />
          </Link>
        </div>

      <button 
        aria-label="Language Selector"
        className="text-[#2b2b2b] hover:text-[#6c11d0] transition-colors p-1 rounded-full focus:outline-none"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.8" 
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8M3.6 15h16.8" />
          <path d="M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
        </svg>
      </button>
    </header>
  );
}
export default  Header3