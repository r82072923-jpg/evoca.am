import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { db } from "./firebaseConfog";
import { collection, getDocs } from "firebase/firestore";

function TopHeader3() {
  const [navItems, setNavItems] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 z-40 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px]">
        
        {/* Լոգո */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuLt6RmT3Z93EFVPLA410-P3PmujqfjmEzZOXnPGyEL28BYZT" 
              alt="Evocabank Logo" 
              className="h-7 w-auto object-contain block" 
            />
          </Link>
        </div>

        <div className="flex items-center gap-6 xl:gap-10 h-full flex-1 justify-center px-4">
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

        {/* Աջ կողմի EvocaONLINE կոճակը */}
        <div className="flex items-center flex-shrink-0">
          <Link
            to="/evoca-online"
            className="bg-[#5b21b6] hover:bg-[#4c1d95] text-white font-bold text-[14px] px-7 py-2.5 rounded-full transition-all flex items-center justify-center tracking-wide"
          >
            EvocaONLINE
          </Link>
        </div>

      </div>
    </header>
  );
}

export default TopHeader3;