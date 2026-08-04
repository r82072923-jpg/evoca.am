import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebaseConfog";
import { NavLink, Link } from "react-router-dom";

function TopHeader5() {
  const [navItems, setNavItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "topheader5"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNavItems(items);
      } catch (error) {
        console.error("Error fetching navigation items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNavItems();
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-100 font-sans z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        
        <div className="flex items-center gap-10 lg:gap-14">
          <Link to="/" className="flex items-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuLt6RmT3Z93EFVPLA410-P3PmujqfjmEzZOXnPGyEL28BYZT" 
              alt="Evoca Logo" 
              className="h-7 w-auto object-contain" 
            />
          </Link>

          <nav className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path || "#"}
                className={({ isActive }) =>
                  `text-[15px] font-extrabold transition-colors duration-200 ${
                    isActive
                      ? "text-[#5b00c9]"
                      : "text-[#1a1a1a] hover:text-[#5b00c9]"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center">
          <Link
            to="/evoca-online"
            className="bg-[#5b00c9] hover:bg-[#4a00a3] text-white font-extrabold text-[14px] px-7 py-2.5 rounded-full transition-all duration-300 shadow-sm"
          >
            EvocaONLINE
          </Link>
        </div>

      </div>
    </header>
  );
}

export default TopHeader5;