import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfog";

function KargavorumneriMasin2() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "kargavorumneriMasin"));
        
        const fetchedDocs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        fetchedDocs.sort((a, b) => Number(a.id) - Number(b.id));

        setDocuments(fetchedDocs);
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս:", error);
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
        <div className="flex justify-center py-8">
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
              className="flex items-center gap-3 w-full px-4 py-3.5 bg-[#f6f5f8] rounded-xl font-bold text-slate-900 text-sm md:text-base transition-colors hover:bg-purple-100/60 group"
            >
              <span className="truncate">{docItem.title}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default KargavorumneriMasin2;