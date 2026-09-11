import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

function XekavarutyuniMasin() {
  const [boardMembers, setBoardMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoardMembers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "xekavarutyuniMasin"));
        const membersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBoardMembers(membersData);
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBoardMembers();
  }, []);

  if (loading) {
    return <div className="text-center py-10 font-bold">Բեռնվում է...</div>;
  }

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-10 font-sans">
      <div className="mb-10">
        <h2 className="relative inline-block text-[22px] font-bold text-[#2a0845] pb-2">
          Բանկի խորհուրդ
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#38025c]" />
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start">
        {boardMembers.map((member) => (
          <div
            key={member.id}
            className="group cursor-pointer flex flex-col items-center text-center"
          >
            <div className="relative w-full h-[220px] flex justify-center items-end">
              <svg
                viewBox="0 0 200 180"
                className="absolute top-0 w-[230px] h-[220px] fill-[#f2f3f7] transition-colors duration-300 group-hover:fill-[#6d28d9]"
              >
                <path d="M 35 10 L 165 10 C 185 10, 195 25, 185 45 L 115 155 C 108 168, 92 168, 85 155 L 15 45 C 5 25, 15 10, 35 10 Z" />
              </svg>
              <img
                src={member.imgSrc}
                alt={member.name}
                className="relative z-10 h-[215px] object-contain pointer-events-none"
              />
            </div>
            <div className="mt-4 flex flex-col items-center px-1">
              <h3 className="font-bold text-[14px] text-[#1a1a1a] leading-tight uppercase">
                {member.name}
              </h3>

              {member.titles && (
                <span className="font-bold text-[13px] text-[#1a1a1a] mt-0.5">
                  {member.titles}
                </span>
              )}

              <p className="text-[12px] text-[#6e7191] mt-2 leading-snug font-normal max-w-[200px]">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default XekavarutyuniMasin;