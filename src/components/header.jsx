import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfog";
import { NavLink, Link } from "react-router-dom"; // Ավելացրել ենք Link-ը

function Header() {
  const [navItems, setNavItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Firebase-ից տվյալները ստանալու ֆունկցիա
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
    <header className="relative bg-white shadow-sm border-b border-gray-100 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        
        {/* --- ՁԱԽ ՄԱՍ: Մենյուի կետերը (NavItems) --- */}
        <div className="flex items-center gap-7 h-full">
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

                  {/* Եթե ունի ենթամենյու, դնում ենք սլաք <i> տեգով */}
                  {item.subItems && (
                    <i className="fa-solid fa-chevron-down text-[10px] mt-0.5 group-hover:rotate-180 transition-transform duration-200"></i>
                  )}
                </NavLink>

                {/* Drop-down (Բացվող) մենյուն */}
                {item.subItems && (
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

        {/* --- ԱՋ ՄԱՍ: Իկոնկաները <i> տեգերով և Link-երով --- */}
        <div className="flex items-center gap-5 text-gray-900 ml-4">
          
          {/* 1. Տեղանք (Location) */}
          <Link to="/branches" className="hover:text-purple-700 transition-colors">
            <i className="fa-solid fa-location-dot text-lg"></i>
          </Link>

          {/* 2. Հարցեր / Օգնություն (Help) */}
          <Link to="/faq" className="hover:text-purple-700 transition-colors">
            <i className="fa-regular fa-circle-question text-lg"></i>
          </Link>

          {/* 3. Լեզու / Գլոբուս (Language) */}
          <button className="hover:text-purple-700 transition-colors">
            <i className="fa-solid fa-globe text-lg"></i>
          </button>

          {/* 4. Որոնում (Search) */}
          <button className="hover:text-purple-700 transition-colors">
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
          </button>

          {/* 5. Բուրգեր Մենյու (Hamburger Menu) */}
          <button className="hover:text-purple-700 transition-colors ml-2">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;