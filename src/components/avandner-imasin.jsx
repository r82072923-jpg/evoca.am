import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from "./firebaseConfog";

function AvandneriMasin() {
  const [deposits, setDeposits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeposits = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'avandneriMasin'));
        const depositsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        depositsArray.sort((a, b) => Number(a.id) - Number(b.id));

        setDeposits(depositsArray);
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeposits();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-purple-700 font-bold text-xl">Բեռնվում է...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {deposits.map((item) => (
        <div 
          key={item.id} 
          className="flex flex-col md:flex-row items-start gap-8 py-10 border-b border-gray-200 last:border-b-0"
        >
          <div className="w-full md:w-72 flex-shrink-0 flex justify-center">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-auto rounded-xl drop-shadow-md hover:-translate-y-1 transition-transform duration-200"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-3">
              {item.title}
            </h2>
            <p className="text-sm text-gray-600 mb-6 max-w-2xl leading-relaxed">
              {item.description}
            </p>

            {item.features && item.features.length > 0 && (
              <div className="flex flex-wrap gap-8 mb-7">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col min-w-[120px]">
                    <span className="text-xs font-semibold text-purple-700 min-h-[16px]">
                      {feature.badge}
                    </span>
                    <span className="text-2xl md:text-3xl font-extrabold text-purple-700 my-1 leading-none">
                      {feature.value}
                    </span>
                    <span className="text-xs text-gray-600 max-w-[150px] leading-tight">
                      {feature.description}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <Link
              to={item.link}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded-full font-bold text-sm transition-colors duration-200"
            >
              {item.buttonText} <span className="text-lg leading-none">&rsaquo;</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AvandneriMasin;