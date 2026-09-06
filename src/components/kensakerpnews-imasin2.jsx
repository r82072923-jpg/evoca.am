import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebaseConfog';
import { Link } from 'react-router-dom';

const KensakerpNewsiMasin2 = () => {
  const [lifestyleNewsData, setLifestyleNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchLifestyleNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "kensakerpNewsiMasin"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });

        data.sort((a, b) => Number(a.id) - Number(b.id));

        setLifestyleNewsData(data);
        setLoading(false);
      } catch (error) {
        console.error("Սխալ տվյալները կարդալիս: ", error);
        setLoading(false);
      }
    };

    fetchLifestyleNews();
  }, []);

  const pages = [];
  for (let i = 0; i < lifestyleNewsData.length; i += itemsPerPage) {
    pages.push(lifestyleNewsData.slice(i, i + itemsPerPage));
  }
  const totalPages = pages.length;

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex < totalPages - 1) setCurrentIndex(currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <div className="w-full max-w-[1200px] mx-auto px-4 py-8 flex justify-center items-center min-h-[360px]">
        <p className="text-[#5b00c9] font-bold text-lg">Բեռնվում են տվյալները...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-h-[360px]">
        {pages[currentIndex]?.map((lifestyleNews) => (
          <div key={lifestyleNews.id} className="bg-white flex flex-col justify-between">
            <div>
              <div className="w-full h-[180px] overflow-hidden mb-3">
                <img
                  src={lifestyleNews.imageSrc}
                  alt={lifestyleNews.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <Link to={lifestyleNews.link || "/news/banking"} className="group block mb-2">
                <h3 className="text-[15px] font-bold text-black leading-snug group-hover:text-[#5b00c9] transition-colors line-clamp-3">
                  {lifestyleNews.title}
                </h3>
              </Link>
            </div>

            <p className="text-[13px] text-[#e0e0e0] font-normal mt-2">
              {lifestyleNews.date}
            </p>
          </div>
        ))}
      </div>

      {totalPages > 0 && (
        <div className="w-full border-t border-gray-100 mt-10 pt-6 flex items-center justify-start gap-4">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="text-gray-400 hover:text-[#5b00c9] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>

          <div className="flex items-center space-x-2">
            {pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200 ${
                  currentIndex === idx
                    ? 'bg-[#5b00c9] text-white shadow-sm'
                    : 'text-black hover:text-[#5b00c9]'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentIndex === totalPages - 1}
            className="text-[#5b00c9] hover:text-[#410093] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default KensakerpNewsiMasin2;