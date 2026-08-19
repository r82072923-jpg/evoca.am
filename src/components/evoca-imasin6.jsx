import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfog';

const EvocaiMasin6 = () => {
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "evocaimasin3", "logo_section");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setSectionData(docSnap.data());
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
    return <div className="text-center py-16 text-gray-500">Բեռնվում է...</div>;
  }

  if (!sectionData) {
    return <div className="text-center py-16 text-red-500">Տվյալները բացակայում են:</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 font-sans">
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        {sectionData.title}
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
        {sectionData.description}
      </p>

      <div className="flex justify-center items-center py-6">
        <img src={sectionData.logoUrl} alt="Logo" />
      </div>

    </div>
  );
};

export default EvocaiMasin6;