import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfog";

function PoxancumneriMasin5() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "poxancumneriMasin2"));
        
        const fetchedDocs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        fetchedDocs.sort((a, b) => Number(a.id) - Number(b.id));

        setDocuments(fetchedDocs);
      } catch (error) {
        console.error("Սխալ փաստաթղթերը բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 font-sans">
      <h2 className="text-xl font-bold text-slate-900 mb-4">
        Փաստաթղթեր
      </h2>

      {loading ? (
        <div className="flex justify-center py-6">
          <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {documents.map((docItem) => (
            <a
              key={docItem.id}
              href={docItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-5 py-4 bg-[#f6f5f8] rounded-xl font-bold text-slate-900 text-sm md:text-base transition-colors hover:bg-purple-100/60"
            >
              {docItem.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default PoxancumneriMasin5;