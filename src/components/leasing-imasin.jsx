import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebaseConfog';
const LeasingiMasin = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [leasingData, setLeasingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeasingData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "leasingiMasin"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setLeasingData(data);
      } catch (error) {
        console.error("Սխալ տվյալները կարդալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeasingData();
  }, []);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return <div className="p-6">Բեռնվում է...</div>;
  }

  return (
    <div className="max-w-4xl p-6 font-sans bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Evoca Leasing
      </h1>
      
      <h2 className="text-base font-bold text-gray-900 mb-4 uppercase">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>
      
      <div className="flex flex-col gap-3">
        {leasingData.map((item, index) => (
          <div 
            key={item.id}
            className="border border-purple-200 rounded-lg p-4 flex flex-col transition-colors duration-200"
          >
            <div 
              onClick={() => toggleItem(index)}
              className="flex items-start cursor-pointer hover:opacity-80"
            >
              <div 
                className={`mt-1 mr-4 text-purple-700 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              >
                <svg 
                  width="14" 
                  height="8" 
                  viewBox="0 0 14 8" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M1 1L7 7L13 1" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-slate-500 font-bold text-sm md:text-base leading-relaxed">
                {item.title}
              </div>
            </div>
            
            {openIndex === index && (
              <div 
                className="pl-0 md:pl-8" 
                onClick={(e) => e.stopPropagation()}
              >
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeasingiMasin;