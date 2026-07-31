import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfog";
import { NavLink, Link } from "react-router-dom";
function TopHeader() {
  const [navItems, setNavItems] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        
<div className="flex items-center">
  <Link to="/">
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuLt6RmT3Z93EFVPLA410-P3PmujqfjmEzZOXnPGyEL28BYZT"
      alt="Evoca Logo" 
      className="w-50 h-18 object-contain block" 
    />
  </Link>
</div>

        <div className="flex items-center gap-7 h-full">
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

        <div className="flex items-center">
          <Link
            to="/evoca-online"
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md transition-all flex items-center justify-center"
          >
            EvocaONLINE
          </Link>
        </div>

      </div>
    </header>
  );
}

export default TopHeader;