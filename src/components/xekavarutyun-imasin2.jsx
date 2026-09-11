import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

const SectionTitle = ({ title }) => (
  <div className="mb-10">
    <h2 className="relative inline-block text-[22px] font-bold text-[#2a0845] pb-2">
      {title}
      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#38025c]" />
    </h2>
  </div>
);

const TeamMemberCard = ({ member }) => (
  <div className="group cursor-pointer flex flex-col items-center text-center">
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
        {member.titles && `, ${member.titles}`}
      </h3>

      <p className="text-[12px] text-[#6e7191] mt-2 leading-snug font-normal max-w-[200px]">
        {member.role}
      </p>
    </div>
  </div>
);

function XekavarutyuniMasin2() {
  const [boardMembers, setBoardMembers] = useState([]);
  const [managementBoard, setManagementBoard] = useState([]);
  const [internalAudit, setInternalAudit] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "xekavarutyuniMasin2"));
        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBoardMembers(docs.filter((item) => item.category === "board"));
        setManagementBoard(docs.filter((item) => item.category === "managementBoard"));
        setInternalAudit(docs.filter((item) => item.category === "internalAudit"));
      } catch (error) {
        console.error("Firebase-ից տվյալների ստացմանխնդիր:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirebase();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 font-bold text-[#2a0845]">
        Բեռնվում է...
      </div>
    );
  }

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-10 font-sans space-y-16">
      {boardMembers.length > 0 && (
        <div>
          <SectionTitle title="Բանկի խորհուրդ" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 items-start">
            {boardMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}

      {managementBoard.length > 0 && (
        <div>
          <SectionTitle title="Բանկի վարչություն" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 items-start">
            {managementBoard.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}

      {internalAudit.length > 0 && (
        <div>
          <SectionTitle title="Բանկի Ներքին աուդիտ" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 items-start">
            {internalAudit.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default XekavarutyuniMasin2;