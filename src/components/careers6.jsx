import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebaseConfog';

function Careers6() {
  const [teamCharacteristics, setTeamCharacteristics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacteristics = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "careers2"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });

        data.sort((a, b) => Number(a.id) - Number(b.id));

        setTeamCharacteristics(data);
        setLoading(false);
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս: ", error);
        setLoading(false);
      }
    };

    fetchCharacteristics();
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-white py-16 flex justify-center items-center">
        <p className="text-[#5b00c9] font-bold text-lg">Բեռնվում են տվյալները Firebase-ից...</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-16 px-4 md:px-10 flex flex-col items-center font-sans">
      <div className="max-w-[1000px] w-full flex flex-col">
        <div className="border-b border-gray-100 pb-5 mb-12">
          <h2 className="text-xl md:text-[22px] font-bold text-[#2b2b2b]">
            Ինչպիսի՞ թիմակից ենք մենք փնտրում ։
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-14 md:gap-x-20 md:gap-y-16">
          {teamCharacteristics.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center text-center w-[220px]"
            >
              <div className="h-20 flex items-center justify-center mb-4">
                <img 
                  src={item.icon} 
                  alt={item.title.replace('\n', ' ')} 
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-bold text-[#2b2b2b] whitespace-pre-line leading-relaxed">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Careers6;