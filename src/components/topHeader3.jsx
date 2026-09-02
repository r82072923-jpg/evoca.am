import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { db } from "./firebaseConfog";
import { collection, getDocs } from "firebase/firestore";

function TopHeader3() {
  const [navItems, setNavItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState(null);

  const fetchHeaderData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "topHeader3"));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setNavItems(items);
    } catch (error) {
      console.error("Սխալ տվյալները ստանալիս:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeaderData();
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileSubMenu(null);
  };

  const toggleSubMenu = (itemId) => {
    if (activeMobileSubMenu === itemId) {
      setActiveMobileSubMenu(null);
    } else {
      setActiveMobileSubMenu(itemId);
    }
  };

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 z-50 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px]">
        
        <div className="flex items-center flex-shrink-0 z-50">
          <Link to="/" onClick={closeMobileMenu}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuLt6RmT3Z93EFVPLA410-P3PmujqfjmEzZOXnPGyEL28BYZT" 
              alt="Evocabank Logo" 
              className="h-7 w-auto object-contain block" 
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6 xl:gap-10 h-full flex-1 justify-center px-4">
          {loading ? (
            <p className="text-gray-500 text-sm font-medium">Բեռնվում է...</p>
          ) : navItems.length === 0 ? (
            <p className="text-red-500 text-xs">Բազան դատարկ է</p>
          ) : (
            navItems.map((item) => (
              <div key={item.id || item.path} className="relative group h-full flex items-center">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative flex items-center gap-1.5 h-full text-[15px] font-bold transition-all ${
                      isActive
                        ? "text-[#6b21a8]"
                        : "text-slate-800 hover:text-[#6b21a8]"
                    }`
                  }
                >
                  {item.title}
                  {item.subItems && item.subItems.length > 0 && (
                    <i className="fa-solid fa-chevron-down text-[10px] mt-0.5 group-hover:rotate-180 transition-transform duration-200"></i>
                  )}
                </NavLink>

                {item.subItems && item.subItems.length > 0 && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-white shadow-xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2 border border-gray-50">
                    <div className="py-2 flex flex-col">
                      {item.subItems.map((subItem, index) => {
                        const isPhoneLink = subItem.path.startsWith("tel:");
                        const linkClasses =
                          "px-5 py-3 text-[14px] font-medium text-slate-700 hover:text-[#6b21a8] hover:bg-purple-50 transition-colors block";

                        return isPhoneLink ? (
                          <a key={index} href={subItem.path} className={linkClasses}>
                            {subItem.title}
                          </a>
                        ) : (
                          <NavLink key={index} to={subItem.path} className={linkClasses}>
                            {subItem.title}
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <div className="flex items-center gap-3 md:gap-4 z-50">
          <Link
            to="/evoca-online"
            className="hidden sm:flex bg-[#5b21b6] hover:bg-[#4c1d95] text-white font-bold text-[14px] px-7 py-2.5 rounded-full transition-all items-center justify-center tracking-wide"
          >
            EvocaONLINE
          </Link>

          <button 
            className="lg:hidden p-2 text-slate-800 focus:outline-none transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>

        </div>
      </div>

      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[85vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          {loading ? (
            <p className="text-gray-500 text-sm font-medium py-4 text-center">Բեռնվում է...</p>
          ) : (
            navItems.map((item) => (
              <div key={item.id || item.path} className="flex flex-col border-b border-gray-50 last:border-0 pb-1">
                
                {item.subItems && item.subItems.length > 0 ? (
                  <button 
                    onClick={() => toggleSubMenu(item.id || item.path)}
                    className="flex items-center justify-between py-3 px-2 text-[15px] font-bold text-slate-800"
                  >
                    {item.title}
                    <i className={`fa-solid fa-chevron-down text-[12px] transition-transform duration-300 ${activeMobileSubMenu === (item.id || item.path) ? 'rotate-180 text-[#6b21a8]' : ''}`}></i>
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `py-3 px-2 text-[15px] font-bold transition-colors ${isActive ? "text-[#6b21a8]" : "text-slate-800 hover:text-[#6b21a8]"}`
                    }
                  >
                    {item.title}
                  </NavLink>
                )}
                {item.subItems && item.subItems.length > 0 && (
                  <div className={`flex flex-col ml-4 space-y-1 overflow-hidden transition-all duration-300 ${activeMobileSubMenu === (item.id || item.path) ? 'max-h-[400px] py-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {item.subItems.map((subItem, index) => {
                      const isPhoneLink = subItem.path.startsWith("tel:");
                      const linkClasses = "py-2 px-2 text-[14px] font-medium text-slate-600 active:text-[#6b21a8] block";
                      
                      return isPhoneLink ? (
                        <a key={index} href={subItem.path} className={linkClasses} onClick={closeMobileMenu}>
                          {subItem.title}
                        </a>
                      ) : (
                        <NavLink key={index} to={subItem.path} className={linkClasses} onClick={closeMobileMenu}>
                          {subItem.title}
                        </NavLink>
                      );
                    })}
                  </div>
                )}

              </div>
            ))
          )}

          <div className="sm:hidden mt-5 mb-3 px-2">
            <Link
              to="/evoca-online"
              onClick={closeMobileMenu}
              className="block w-full text-center bg-[#5b21b6] text-white font-bold text-[15px] py-3.5 rounded-full shadow-md active:scale-95 transition-transform"
            >
              EvocaONLINE
            </Link>
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default TopHeader3;