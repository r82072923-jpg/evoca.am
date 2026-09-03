import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfog";
import { NavLink, Link } from "react-router-dom";
import Chat from "./chat";

function Header() {
  const [navItems, setNavItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);     
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchHeaderData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "header"));

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
    <header className="relative bg-white shadow-sm border-b border-gray-100 w-full z-[100]">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-4 md:px-6">

        <div className="flex items-center gap-2">
          <button 
            className="text-slate-800 hover:text-purple-700 transition-colors md:hidden text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-5 h-full whitespace-nowrap">
          {loading ? (
            <p className="text-gray-500 text-sm font-medium">Բեռնվում է...</p>
          ) : (
            navItems.map((item) => (
              <div key={item.id || item.path} className="relative group h-full flex items-center">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative flex items-center gap-1.5 h-full text-sm font-bold transition-all ${
                      isActive
                        ? "text-purple-700 before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-purple-700"
                        : "text-slate-800 hover:text-purple-700"
                    }`
                  }
                >
                  {item.title}
                  {item.subItems && (
                    <i className="fa-solid fa-chevron-down text-[10px] mt-0.5 group-hover:rotate-180 transition-transform duration-200"></i>
                  )}
                </NavLink>

                {/* Dropdown configured with z-[110] to render over all page layers */}
                {item.subItems && (
                  <div className="absolute top-full right-0 mt-0 w-48 bg-white shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2 z-[110]">
                    <div className="py-3 flex flex-col">
                      {item.subItems.map((subItem, index) => {
                        const isPhoneLink = subItem.path.startsWith("tel:");
                        const linkClasses = "px-5 py-2.5 text-sm font-bold text-slate-800 hover:text-purple-700 hover:bg-purple-50 text-right transition-colors block";

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

        <div className="flex items-center gap-4 text-gray-900">
          <Link to="/mutq" className="text-gray-700 hover:text-black transition-colors text-base md:text-lg">
            <i className="fa fa-user"></i>
          </Link>
          <Link to="/qartez" className="hover:text-purple-700 transition-colors">
            <i className="fa-solid fa-location-dot text-lg"></i>
          </Link>
          <Link to="/faq" className="hover:text-purple-700 transition-colors hidden sm:block">
            <i className="fa-regular fa-circle-question text-lg"></i>
          </Link>
          <button className="hover:text-purple-700 transition-colors hidden sm:block">
            <i className="fa-solid fa-globe text-lg"></i>
          </button>
          <button className="hover:text-purple-700 transition-colors">
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-200 py-4 px-6 flex flex-col gap-3 md:hidden z-[110]">
          {loading ? (
            <p className="text-gray-500 text-sm">Բեռնվում է...</p>
          ) : (
            navItems.map((item) => (
              <div key={item.id || item.path} className="flex flex-col">
                <NavLink
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-bold py-2 ${
                      isActive ? "text-purple-700" : "text-slate-800"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
                {item.subItems && (
                  <div className="pl-4 flex flex-col gap-2 border-l-2 border-purple-100 my-1">
                    {item.subItems.map((subItem, index) => (
                      <NavLink
                        key={index}
                        to={subItem.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm text-gray-600 hover:text-purple-700 py-1"
                      >
                        {subItem.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
          
          <div className="border-t border-gray-100 pt-3 flex items-center justify-around sm:hidden">
            <Link to="/qartez" onClick={() => setIsMenuOpen(false)} className="text-gray-700">
              <i className="fa-solid fa-location-dot text-lg"></i>
            </Link>
            <Link to="/faq" onClick={() => setIsMenuOpen(false)} className="text-gray-700">
              <i className="fa-regular fa-circle-question text-lg"></i>
            </Link>
            <button className="text-gray-700">
              <i className="fa-solid fa-globe text-lg"></i>
            </button>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4 z-[120]">
        {isChatOpen && (
          <div className="absolute bottom-[55px] right-0 z-[120]"> 
            <Chat onClose={() => setIsChatOpen(false)} />
          </div>
        )}
        <button 
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-lg bg-white hover:bg-gray-50 transition-colors border border-gray-200"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/000/441/080/small/Basic_Ui__282_29.jpg" 
            alt="chat icon" 
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;