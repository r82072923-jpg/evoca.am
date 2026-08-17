import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from "./firebaseConfog";
import { collection, getDocs } from 'firebase/firestore';

function LoansiMasin() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "loansiMasin"));
        const loansArray = [];
        
        querySnapshot.forEach((doc) => {
          loansArray.push({ id: doc.id, ...doc.data() });
        });

        loansArray.sort((a, b) => Number(a.id) - Number(b.id));

        setLoans(loansArray);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-xl font-bold text-[#6C12E7]">Բեռնվում է...</div>;
  }

  return (
    <div className="flex flex-col gap-10 py-10">
      {loans.map((loan) => (
        <div key={loan.id} className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-3xl max-w-5xl mx-auto font-sans">
          
          <div className="w-full md:w-2/5 aspect-[4/3] rounded-2xl flex items-center justify-center p-6 shrink-0">
            <img
              src={loan.url}
              alt={loan.title}
              className="w-full h-full rounded-[20px] object-cover"
            />
          </div>

          <div className="w-full md:w-3/5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
                {loan.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {loan.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-2">
              {loan.features && loan.features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-xs sm:text-sm text-gray-800 font-medium">
                    {feature.prefix}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-[#6C12E7] my-0.5">
                    {feature.value}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to={loan.link}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#F1E8FA] hover:bg-[#e2d2f7] transition-colors rounded-full text-[#6C12E7] font-semibold text-sm sm:text-base"
              >
                <span>Մանրամասն</span>
                <svg
                  className="w-4 h-4 stroke-current stroke-[2.5]"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default LoansiMasin;