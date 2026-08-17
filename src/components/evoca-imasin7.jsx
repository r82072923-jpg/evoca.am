import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfog';

const EvocaiMasin7 = () => {
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "evocaimasin4", "brandbook_section");
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

      <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed mb-10">
        {sectionData.descriptions.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>

      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
          <a
            href={sectionData.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white text-sm font-medium backdrop-blur-md transition-all duration-300 shadow-lg"
          >
          <img 
          src={sectionData.bgImage} 
          alt="Brandbook Banner" 
          className="w-full h-auto object-contain block"
          />
          </a>
      </div>

    </div>
  );
};

export default EvocaiMasin7;