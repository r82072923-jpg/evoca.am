import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfog";
import { NavLink, Link } from "react-router-dom";
function TopHeader4() {
  const [navItems, setNavItems] = useState([]);
  const [loading, setLoading] = useState(true);

//   const fetchHeaderData = async () => {
//     try {
//       setLoading(true);
//       const querySnapshot = await getDocs(collection(db, "topHeader"));
//       const items = [];
//       querySnapshot.forEach((doc) => {
//         items.push({ id: doc.id, ...doc.data() });
//       });
//       setNavItems(items);
//     } catch (error) {
//       console.error("Սխալ տվյալները ստանալիս:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchHeaderData();
//   }, []);

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

export default TopHeader4;