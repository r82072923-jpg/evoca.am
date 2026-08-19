    import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import { getFirestore, collection, getDocs } from 'firebase/firestore';

    const Slayder7 = () => {
    const [loans, setLoans] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchLoansFromFirebase = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'slayder7'));
        
        if (!querySnapshot.empty) {
          const allLoans = [];

          querySnapshot.forEach((doc) => {
            const docData = doc.data();
            if (docData && docData.loans) {
              allLoans.push(docData.loans); 
            }
          });
          
          console.log("Վերջնական զանգվածը՝", allLoans);
          setLoans(allLoans);
        }
      } catch (error) {
        console.error('Սխալ տվյալների ստացման ժամանակ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoansFromFirebase();
  }, []);

    const handleNext = () => {
        if (loans.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % loans.length);
    };

    const handlePrev = () => {
        if (loans.length === 0) return;
        setCurrentIndex((prev) => (prev - 1 + loans.length) % loans.length);
    };

    if (loading) {
        return (
        <div className="w-full py-16 text-center font-sans text-gray-500">
            Բեռնվում է...
        </div>
        );
    }

    if (loans.length === 0) {
        return (
        <div className="w-full py-16 text-center font-sans text-gray-500">
            Տվյալներ չեն գտնվել:
        </div>
        );
    }

    const visibleIndices = [0, 1, 2, 3].map(
        (offset) => (currentIndex + offset) % loans.length
    );

    return (
        <div className="w-full max-w-7xl mx-auto my-12 px-4 font-sans">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Այլ վարկեր</h2>
        </div>
        
        <div className="flex items-center justify-between gap-2 md:gap-6 relative group">
            <button
            onClick={handlePrev}
            className="z-10 w-10 h-10 shrink-0 bg-white shadow-lg border border-purple-100 rounded-full flex items-center justify-center text-[#6b11cb] hover:bg-purple-50 transition-all focus:outline-none"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            </button>

            <div className="flex flex-1 justify-center gap-4 md:gap-6 overflow-hidden">
            {visibleIndices.map((index) => {
                const loan = loans[index];
                if (!loan) return null;
                
                return (
                <div 
                    key={`${loan.id}-${index}`} 
                    className="w-full max-w-[260px] shrink-0 flex flex-col cursor-pointer group/card animate-fade-in"
                >
                    <Link to={loan.link}>
                    <div className={`w-full h-40 ${loan.bgColor || 'bg-gray-100'} rounded-xl mb-4 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover/card:scale-[1.02]`}>
                        <img src={loan.url} alt={loan.title} className="object-cover w-full h-full" />
                    </div>
                    <h3 className="text-center text-sm md:text-base font-bold text-gray-800 leading-snug">
                        {loan.title}
                    </h3>
                    </Link> 
                </div>
                );
            })}
            </div>

            <button
            onClick={handleNext}
            className="z-10 w-10 h-10 shrink-0 bg-white shadow-lg border border-purple-100 rounded-full flex items-center justify-center text-[#6b11cb] hover:bg-purple-50 transition-all focus:outline-none"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
            </button>
        </div>
        </div>
    );
    };

    export default Slayder7;