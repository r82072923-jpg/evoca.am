import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfog';

const EvocaiMasin8 = () => {
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "evocaimasin5", "colors_section");
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
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {sectionData.title}
      </h2>

      <p className="text-gray-600 text-base md:text-lg mb-8">
        {sectionData.description}
      </p>

      <div className="space-y-6 mb-12">
        {sectionData.colors.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <span className={`w-5 h-5 rounded-full shrink-0 ${item.colorClass}`}></span>
            <p className="text-gray-700 text-base md:text-lg">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg aspect-video bg-black">
        <iframe 
          src={sectionData.youtubeUrl} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

    </div>
  );
};

export default EvocaiMasin8;