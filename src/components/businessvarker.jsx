import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "./firebaseConfog";

function BusinessVarker() {
  const [loansData, setLoansData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const varkerCollectionRef = collection(db, "businessvarker");
        const querySnapshot = await getDocs(varkerCollectionRef);
        
        const fetchedData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          firebaseId: doc.id,
        }));

        setLoansData(fetchedData);
      } catch (error) {
        console.error("Սխալ Firebase-ից տվյալներ ստանալիս:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLoans();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <h2 className="text-xl font-bold text-[#8431e5]">Բեռնվում է...</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 max-w-[1000px] mx-auto py-8">
      
      {loansData.length === 0 && (
        <div className="text-center text-gray-500">
          Firebase-ում տվյալներ չեն գտնվել:
        </div>
      )}

      {loansData.map((item) => (
        <div 
          key={item.firebaseId || item.id} 
          className="flex flex-col md:flex-row items-center gap-8 bg-white p-2 shadow-sm rounded-2xl"
        >
          <div className="w-full md:w-[40%] bg-[#f8f8fb] rounded-2xl p-8 flex justify-center items-center h-[250px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full md:w-[60%] flex flex-col justify-center">
            <h2 className="text-[28px] font-bold text-black mb-3">
              {item.title}
            </h2>
            
            <p className="text-gray-500 text-[15px] mb-8 leading-relaxed">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-y-6 mb-8">
              <div className="w-1/3 min-w-[120px]">
                <div className="text-gray-500 text-xs mb-1">Մինչև</div>
                <div className="text-[#8431e5] text-3xl font-bold mb-1">{item.duration || "-"}</div>
                <div className="text-gray-500 text-xs">Ժամկետ</div>
              </div>

              <div className="w-1/3 min-w-[150px]">
                <div className="text-gray-500 text-xs mb-1">Մինչև</div>
                <div className="text-[#8431e5] text-3xl font-bold mb-1">{item.amount || "-"}</div>
                <div className="text-gray-500 text-xs leading-tight">Սահմանաչափ կամ<br/>համարժեք արտարժույթ</div>
              </div>

              <div className="w-1/3 min-w-[120px]">
                <div className="text-gray-500 text-xs mb-1">&nbsp;</div>
                <div className="text-[#8431e5] text-3xl font-bold mb-1">{item.interestRate || "-"}</div>
                <div className="text-gray-500 text-xs leading-tight">Տարեկան<br/>տոկոսադրույք</div>
              </div>
            </div>

            <div>
              <Link 
                to={item.link || "#"} 
                className="inline-flex items-center gap-2 bg-[#f4effa] text-[#8431e5] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#ebdcf7] transition-colors"
              >
                Մանրամասն
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default BusinessVarker;