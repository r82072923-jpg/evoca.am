import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore";

function Careers3() {
  const [teamCurrentIndex, setTeamCurrentIndex] = useState(1);
  const [teamReviews, setTeamReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "careers1"));
        
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          if (docData.teamReviews && Array.isArray(docData.teamReviews)) {
            setTeamReviews(docData.teamReviews);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  const handleTeamNext = () => {
    if (teamReviews.length === 0) return;
    setTeamCurrentIndex((prev) => (prev + 1) % teamReviews.length);
  };

  const handleTeamPrev = () => {
    if (teamReviews.length === 0) return;
    setTeamCurrentIndex((prev) => (prev - 1 + teamReviews.length) % teamReviews.length);
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center text-[#6200EA] text-xl font-bold">
        Բեռնվում է...
      </div>
    );
  }

  if (teamReviews.length === 0) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center text-gray-500 text-xl font-bold">
        Տվյալներ չկան:
      </div>
    );
  }

  const teamLeftIdx = (teamCurrentIndex - 1 + teamReviews.length) % teamReviews.length;
  const teamCenterIdx = teamCurrentIndex;
  const teamRightIdx = (teamCurrentIndex + 1) % teamReviews.length;

  const leftTeamCard = teamReviews[teamLeftIdx];
  const centerTeamCard = teamReviews[teamCenterIdx];
  const rightTeamCard = teamReviews[teamRightIdx];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center py-16 px-4 relative overflow-hidden font-sans">
      <div className="max-w-[1300px] w-full text-center mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-black text-[#1A1A24] tracking-wide">
          Հարցրու՛ մեր թիմին. «Ինչպիսի՞ն է Evoca-ն՝ 3 բառով»
        </h2>
      </div>

      <div className="flex items-center justify-center gap-4 md:gap-8 z-10 w-full max-w-[1400px]">
        <button onClick={handleTeamPrev} className="text-[#6200EA] hover:opacity-75 transition-opacity">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>

        <div className="hidden lg:flex w-[350px] bg-[#F8F7FC] rounded-2xl p-8 shadow-md flex-col justify-between relative transition-all duration-500 opacity-70 scale-95 min-h-[280px]">
          <div className="absolute top-6 right-6 bg-[#6200EA] w-8 h-10 flex items-center justify-center rounded-sm text-white">
            <span className="text-xl font-serif font-black">“</span>
          </div>
          <div>
            {leftTeamCard.words.map((word, i) => (
              <h3 key={i} className="text-[#6200EA] font-black text-2xl mb-1 tracking-tight">{word}</h3>
            ))}
          </div>
          <div className="mt-8">
            <h4 className="text-[#1A1A24] font-black text-base">{leftTeamCard.name}</h4>
            <p className="text-gray-600 font-semibold text-xs mt-0.5">{leftTeamCard.role}</p>
          </div>
        </div>

        <div className="w-full max-w-[420px] bg-[#F8F7FC] rounded-2xl p-8 md:p-10 shadow-xl flex flex-col justify-between relative z-20 transition-all duration-500 scale-105 min-h-[320px]">
          <div className="absolute top-6 right-6 bg-[#6200EA] w-10 h-12 flex items-center justify-center rounded-sm text-white shadow-md">
            <span className="text-2xl font-serif font-black">“</span>
          </div>
          <div>
            {centerTeamCard.words.map((word, i) => (
              <h3 key={i} className="text-[#6200EA] font-black text-3xl mb-2 tracking-tight">{word}</h3>
            ))}
          </div>
          <div className="mt-10">
            <h4 className="text-[#1A1A24] font-black text-lg">{centerTeamCard.name}</h4>
            <p className="text-gray-600 font-semibold text-sm mt-0.5">{centerTeamCard.role}</p>
          </div>
        </div>

        <div className="hidden lg:flex w-[350px] bg-[#F8F7FC] rounded-2xl p-8 shadow-md flex-col justify-between relative transition-all duration-500 opacity-70 scale-95 min-h-[280px]">
          <div className="absolute top-6 right-6 bg-[#6200EA] w-8 h-10 flex items-center justify-center rounded-sm text-white">
            <span className="text-xl font-serif font-black">“</span>
          </div>
          <div>
            {rightTeamCard.words.map((word, i) => (
              <h3 key={i} className="text-[#6200EA] font-black text-2xl mb-1 tracking-tight">{word}</h3>
            ))}
          </div>
          <div className="mt-8">
            <h4 className="text-[#1A1A24] font-black text-base">{rightTeamCard.name}</h4>
            <p className="text-gray-600 font-semibold text-xs mt-0.5">{rightTeamCard.role}</p>
          </div>
        </div>

        <button onClick={handleTeamNext} className="text-[#6200EA] hover:opacity-75 transition-opacity">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Careers3;