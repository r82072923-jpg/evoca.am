import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfog";
import { NavLink, Link } from "react-router-dom";

function TopHeader() {
  const [navItems, setNavItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const fetchHeaderData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "topHeader"));
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

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuLt6RmT3Z93EFVPLA410-P3PmujqfjmEzZOXnPGyEL28BYZT"
              alt="Evoca Logo" 
              className="w-32 md:w-44 h-12 md:h-16 object-contain block" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-7 h-full">
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
                    `relative flex items-center gap-1.5 h-full text-sm font-bold transition-all ${
                      isActive
                        ? "text-purple-700 before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-purple-700"
                        : "text-slate-800 hover:text-purple-700"
                    }`
                  }
                >
                  {item.title}

                  {item.subItems && item.subItems.length > 0 && (
                    <i className="fa-solid fa-chevron-down text-[10px] mt-0.5 group-hover:rotate-180 transition-transform duration-200"></i>
                  )}
                </NavLink>

                {item.subItems && item.subItems.length > 0 && (
                  <div className="absolute top-full right-0 mt-0 w-48 bg-white shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2">
                    <div className="py-3 flex flex-col">
                      {item.subItems.map((subItem, index) => {
                        const isPhoneLink = subItem.path.startsWith("tel:");
                        const linkClasses =
                          "px-5 py-2.5 text-sm font-bold text-slate-800 hover:text-purple-700 hover:bg-purple-50 text-right transition-colors block";

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

        {/* Actions & Hamburger Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/evoca-online"
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-md transition-all flex items-center justify-center"
          >
            EvocaONLINE
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-800 p-2 text-xl focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-3 shadow-lg max-h-[80vh] overflow-y-auto">
          {loading ? (
            <p className="text-gray-500 text-sm font-medium">Բեռնվում է...</p>
          ) : navItems.length === 0 ? (
            <p className="text-red-500 text-xs">Բազան դատարկ է</p>
          ) : (
            navItems.map((item) => (
              <div key={item.id || item.path} className="flex flex-col border-b border-gray-100 pb-2">
                <div className="flex items-center justify-between py-1.5">
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-base font-bold transition-all ${
                        isActive ? "text-purple-700" : "text-slate-800"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>

                  {item.subItems && item.subItems.length > 0 && (
                    <button
                      onClick={() => toggleDropdown(item.id || item.path)}
                      className="p-2 text-slate-600 focus:outline-none"
                    >
                      <i
                        className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 ${
                          activeDropdown === (item.id || item.path) ? "rotate-180 text-purple-700" : ""
                        }`}
                      ></i>
                    </button>
                  )}
                </div>

                {/* Mobile Submenu Accordion */}
                {item.subItems && item.subItems.length > 0 && activeDropdown === (item.id || item.path) && (
                  <div className="pl-4 py-2 flex flex-col gap-2 bg-purple-50/50 rounded-lg my-1">
                    {item.subItems.map((subItem, index) => {
                      const isPhoneLink = subItem.path.startsWith("tel:");
                      const mobileSubClasses =
                        "py-1.5 px-3 text-sm font-semibold text-slate-700 hover:text-purple-700 block";

                      return isPhoneLink ? (
                        <a key={index} href={subItem.path} className={mobileSubClasses}>
                          {subItem.title}
                        </a>
                      ) : (
                        <NavLink
                          key={index}
                          to={subItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={mobileSubClasses}
                        >
                          {subItem.title}
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </header>
  );
}

export default TopHeader;