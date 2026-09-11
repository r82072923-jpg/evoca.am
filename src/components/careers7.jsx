import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfog";

function Careers7() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "careers3"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setJobs(data);
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const pages = [];
  for (let i = 0; i < jobs.length; i += itemsPerPage) {
    pages.push(jobs.slice(i, i + itemsPerPage));
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
      <div className="w-full bg-[#f7f8fc] py-20 flex justify-center items-center font-sans">
        <p className="text-[#6c11d0] font-bold text-lg">Բեռնվում են աշխատատեղերը...</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f7f8fc] py-12 px-4 md:px-10 flex justify-center font-sans">
      <div className="max-w-[900px] w-full flex flex-col">
        <div className="flex flex-col gap-6 min-h-[500px]">
          {pages[currentIndex]?.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-shadow hover:shadow-[0_6px_25px_rgba(0,0,0,0.06)]"
            >
              <h3 className="text-lg md:text-xl font-bold text-[#2b2b2b] mb-6">
                {job.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-y-3 gap-x-6 text-xs md:text-sm mb-4">
                <div className="text-gray-500 font-medium">
                  Փաստաթղթերի ներկայացման վերջնաժամկետ
                </div>
                <div className="font-bold text-[#2b2b2b]">
                  {job.deadline}
                </div>

                <div className="text-gray-500 font-medium">
                  Աշխատանքի վայր
                </div>
                <div className="font-bold text-[#2b2b2b]">
                  {job.location}
                </div>
              </div>
            </div>
          ))}
          
          {jobs.length === 0 && (
            <div className="text-center text-gray-500 mt-10">Ակտիվ աշխատատեղեր առայժմ չկան:</div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="w-full mt-10 pt-6 flex items-center justify-center gap-4">
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
    </div>
  );
}

export default Careers7;