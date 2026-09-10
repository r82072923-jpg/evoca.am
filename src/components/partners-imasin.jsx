import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

const PartnersiMasin = () => {
  const [partnersData, setPartnersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 9;
  const pages = [];

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "partnersiMasin"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setPartnersData(data);
      } catch (error) {
        console.error("Սխալ Firebase-ից տվյալներ ստանալիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  for (let i = 0; i < partnersData.length; i += itemsPerPage) {
    pages.push(partnersData.slice(i, i + itemsPerPage));
  }
  const totalPages = pages.length;

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (currentIndex < totalPages - 1) setCurrentIndex((prev) => prev + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-20 font-sans">
        <p className="text-[#6a0dad] font-bold text-lg">Բեռնվում է...</p>
      </div>
    );
  }

  const currentItems = pages[currentIndex] || [];
  const paddedItems = [
    ...currentItems,
    ...Array(Math.max(0, 9 - currentItems.length)).fill({ isEmpty: true, id: Math.random() })
  ];

  return (
    <div className="w-full max-w-[1000px] mx-auto px-4 py-10 font-sans">
      <h2 className="text-[22px] font-bold text-[#1a1a1a] mb-6">Գործընկերներ</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-l border-t border-[#ebdff0]">
        {paddedItems.map((partner) => (
          <div 
            key={partner.isEmpty ? partner.id : `partner-${partner.id}`} 
            className="border-r border-b border-[#ebdff0] h-[180px] flex items-center justify-center p-6 bg-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(91,0,201,0.08)]"
          >
            {!partner.isEmpty && (
              <img
                src={partner.logoSrc}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="w-full mt-8 flex items-center justify-start gap-4">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="text-gray-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-[#5b00c9] transition-colors p-1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>

          <div className="flex items-center space-x-3">
            {pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[13px] font-bold transition-all duration-200 ${
                  currentIndex === idx
                    ? 'bg-[#6a0dad] text-white'
                    : 'text-gray-800 hover:text-[#6a0dad]'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentIndex === totalPages - 1}
            className="text-[#6a0dad] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[#4a007a] transition-colors p-1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default PartnersiMasin;