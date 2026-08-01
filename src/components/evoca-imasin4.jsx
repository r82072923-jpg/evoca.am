import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfog'; // Նշիր ճիշտ ճանապարհը դեպի քո ֆայլը

const EvocaiMasin4 = () => {
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "evocaimasin", "arjekner");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setSectionData(docSnap.data());
        } else {
          console.log("Տվյալներ չեն գտնվել այս հասցեով:");
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
    <div className="max-w-6xl mx-auto px-6 py-16 font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
        {sectionData.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {sectionData.values.map((item) => (
          <div key={item.id} className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-purple-900 mb-4 md:max-w-[200px]">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvocaiMasin4;