// import { useState, useEffect } from "react";
// import { collection, getDocs, addDoc } from "firebase/firestore";
// import { db } from "./firebaseConfog";
// import { NavLink, Link } from "react-router-dom";
// import logo from "./logo.png";

// function TopHeader() {
//   const [navItems, setNavItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const initialNavItems = [
//     { title: "Վարկեր", path: "/loans" },
//     { title: "Քարտեր", path: "/cards" },
//     { title: "Ավանդներ", path: "/deposits" },
//     { title: "Հաշիվներ", path: "/accounts" },
//     { title: "Փոխանցումներ", path: "/transfers" },
//     { title: "Արժեթղթեր", path: "/securities" },
//     { title: "EvocaSALARY", path: "/salary" },
//   ];

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

//   const uploadDataToFirebase = async () => {
//     try {
//       const headerCollection = collection(db, "topHeader");
//       for (const item of initialNavItems) {
//         await addDoc(headerCollection, {
//           title: item.title,
//           path: item.path,
//         });
//       }
//       alert("Բոլոր տվյալները հաջողությամբ ուղարկվեցին Firebase!");
//       fetchHeaderData();
//     } catch (error) {
//       console.error("Սխալ տեղի ունեցավ տվյալները ուղարկելիս:", error);
//       alert("Սխալ տեղի ունեցավ, նայեք Console-ը:");
//     }
//   };

//   return (
//     <>
//       <button 
//         onClick={uploadDataToFirebase}
//         className="fixed bottom-6 right-6 z-[99999] bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-3 px-5 rounded-full shadow-2xl transition-all animate-bounce cursor-pointer"
//       >
//         🚀 Ուղարկել Firebase-ին
//       </button>

//       <header className="w-full bg-white shadow-sm border-b border-gray-100 z-50">
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          
//           <div className="flex items-center">
//             <Link to="/">
//               <img 
//                 src={logo} 
//                 alt="Evoca Logo" 
//                 className="h-10 w-auto object-contain block"
//               />
//             </Link>
//           </div>

//                   <div className="flex items-center gap-7 h-full">
//           {loading ? (
//             <p className="text-gray-500 text-sm font-medium">Բեռնվում է...</p>
//           ) : (
//             navItems.map((item) => (
//               <div key={item.id || item.path} className="relative group h-full flex items-center">
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `relative flex items-center gap-1.5 h-full text-sm font-bold transition-all ${
//                       isActive
//                         ? "text-purple-700 before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-purple-700"
//                         : "text-slate-800 hover:text-purple-700"
//                     }`
//                   }
//                 >
//                   {item.title}

//                   {item.subItems && (
//                     <i className="fa-solid fa-chevron-down text-[10px] mt-0.5 group-hover:rotate-180 transition-transform duration-200"></i>
//                   )}
//                 </NavLink>

//                 {item.subItems && (
//                   <div className="absolute top-full right-0 mt-0 w-48 bg-white shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2">
//                     <div className="py-3 flex flex-col">
//                       {item.subItems.map((subItem, index) => {
//                         const isPhoneLink = subItem.path.startsWith("tel:");
//                         const linkClasses =
//                           "px-5 py-2.5 text-sm font-bold text-slate-800 hover:text-purple-700 hover:bg-purple-50 text-right transition-colors block";

//                         return isPhoneLink ? (
//                           <a key={index} href={subItem.path} className={linkClasses}>
//                             {subItem.title}
//                           </a>
//                         ) : (
//                           <NavLink key={index} to={subItem.path} className={linkClasses}>
//                             {subItem.title}
//                           </NavLink>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))
//           )}
//         </div>

//         </div>
//       </header>
//     </>
//   );
// }

// export default TopHeader;
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfog";
import { NavLink, Link } from "react-router-dom";
import logo from "./logo.png";

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
        
        {/* ՁԱԽ ՄԱՍ: Լոգո */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="Evoca Logo" 
              className="h-10 w-auto object-contain block"
            />
          </Link>
        </div>

        {/* ՄԵՋՏԵՂԻ ՄԱՍ: Մենյու Firebase-ից */}
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

        {/* ԱՋ ՄԱՍ: EvocaONLINE Կոճակ */}
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