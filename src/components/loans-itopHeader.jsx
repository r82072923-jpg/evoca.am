import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const LoansiTopHeader = () => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    const isActive = location.pathname === path;
    return `${isActive ? 'bg-[#4D0BA6]' : 'hover:bg-[#4D0BA6]'} text-white px-6 sm:px-10 py-4 font-bold text-sm sm:text-base whitespace-nowrap transition-colors`;
  };

  let currentPageName = "Վարկեր";
  if (location.pathname === "/credit-history") {
    currentPageName = "Վարկային պատմություն և սքոր";
  } else if (location.pathname === "/important-information") {
    currentPageName = "Կարևոր տեղեկատվություն";
  }

  return (
    <div className="w-full flex flex-col font-sans">
      
      <div className="w-full bg-[#6C12E7] shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center overflow-x-auto hide-scrollbar">
          
          <Link 
            to="/loans" 
            className={getLinkClassName('/loans')}
          >
            Վարկեր
          </Link>
          
          <Link 
            to="/credit-history" 
            className={getLinkClassName('/credit-history')}
          >
            Վարկային պատմություն և սքոր
          </Link>
          
          <Link 
            to="/important-information" 
            className={getLinkClassName('/important-information')}
          >
            Կարևոր տեղեկատվություն
          </Link>
          
        </div>
      </div>

      <div className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 sm:py-8">
          <nav className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-gray-500 font-medium">
            
            <Link to="/" className="hover:text-[#6C12E7] transition-colors flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            
            <span className="text-gray-400 mt-[1px]">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
            </span>
            
            <Link to="/individual" className="hover:text-[#6C12E7] transition-colors">
              Անհատ
            </Link>
            
            <span className="text-gray-400 mt-[1px]">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
            </span>
            
            <Link to="/loans" className="hover:text-[#6C12E7] transition-colors">
              Վարկեր
            </Link>

            <span className="text-gray-400 mt-[1px]">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
            </span>
            
            <span className="text-gray-900 font-semibold cursor-default">
              {currentPageName}
            </span>
            
          </nav>
        </div>
      </div>
      
    </div>
  );
};

export default LoansiTopHeader;