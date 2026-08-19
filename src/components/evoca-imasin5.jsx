import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfog';

const EvocaiMasin5 = () => {
  const [csrData, setCsrData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "evocaimasin2", "arjeqner");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCsrData(docSnap.data());
        } else {
          console.log("Տվյալներ չեն գտնվել:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-16 text-gray-500 font-sans">Բեռնվում է...</div>;
  }

  if (!csrData) {
    return <div className="text-center py-16 text-red-500 font-sans">Տվյալները բացակայում են:</div>;
  }

  return (
    <div className="bg-[#f9f8fb] py-16 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 whitespace-pre-line">
            {csrData.title}
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl leading-relaxed">
            {csrData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {csrData.items.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="w-8 h-1 bg-[#6a15d6] mt-2.5 shrink-0"></div>
              <p className="text-gray-800 text-base md:text-[17px] leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EvocaiMasin5;