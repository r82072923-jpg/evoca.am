import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog'; 
import { doc, getDoc } from "firebase/firestore";

const tabs = [
  'Վարկի մասին',
  'Պայմաններ',
  'Պահանջվող փաստաթղթերի ցանկ'
];

function Loan8iMasin4({ activeTab, setActiveTab }) {
  const [requiredDocuments, setRequiredDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const docRef = doc(db, "loans8iMasin3", "requiredDocs");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setRequiredDocuments(docSnap.data().documentsList || []);
        } else {
          console.log("Փաստաթուղթը չի գտնվել Firebase-ում:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 text-[14px] sm:text-[15px] font-sans text-gray-800">

      <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab ? 'text-[#6b11cb]' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-18px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500 font-medium">
          Բեռնվում է...
        </div>
      ) : (
        <div className="space-y-4">
          {requiredDocuments.map((doc) => (
            <div key={doc.id} className="flex gap-2">
              <span className="text-[#6b11cb] font-bold min-w-[24px]">
                {doc.id}.
              </span>
              
              <div className="flex-1">
                <span className={doc.subItems ? "block mb-2" : ""}>
                  {doc.id === 1 ? (
                    <>
                      <a href="#" className="text-[#6b11cb] font-bold underline decoration-[1.5px] underline-offset-2">
                        Հիփոթեքային վարկի
                      </a> տրամադրման դիմում-հայտ,
                    </>
                  ) : (
                    doc.content
                  )}
                </span>
                
                {doc.subItems && (
                  <ul className="list-disc pl-5 space-y-2 marker:text-[#6b11cb]">
                    {doc.subItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Loan8iMasin4;