import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore"; 
import { db } from './firebaseConfog';

const VisaInfiniteCardiMasin5 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBenefitsData = async () => {
      try {
        const docRef = doc(db, "visaInfiniteCard4", "benefitsData");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBenefitsData();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-5xl mx-auto p-6 flex justify-center mt-10">
        <p className="text-lg font-semibold text-gray-500">Բեռնվում է...</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <section className="w-full max-w-5xl mx-auto p-6 font-sans">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#2d2d2d] mb-4">
          {data.sectionTitle}
        </h2>
        <hr className="border-t border-gray-100" />
      </div>

      <div className="flex flex-col gap-12">
        {data.benefits?.map((benefit) => (
          <div key={benefit.id} className="flex flex-col md:flex-row gap-6 md:gap-12">
            
            <div className="flex items-start gap-5 w-full md:w-[35%] shrink-0">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                 <img 
                   src={benefit.iconUrl} 
                   alt={benefit.title} 
                   className="w-full h-full object-contain" 
                 />
              </div>
              <h3 className="text-[17px] font-semibold text-[#1e293b] whitespace-pre-line mt-1">
                {benefit.title}
              </h3>
            </div>

            <div className="flex flex-col gap-5 w-full md:w-[65%] text-[15px] leading-relaxed text-[#374151]">
              {benefit.paragraphs?.map((paragraph, index) => (
                <p 
                  key={index} 
                  dangerouslySetInnerHTML={{ __html: paragraph }} 
                />
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisaInfiniteCardiMasin5;