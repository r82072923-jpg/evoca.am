import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebaseConfog'; 
import { doc, getDoc, setDoc } from 'firebase/firestore';

function EvocaTouch2iMasin2() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true); 
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "evocaTouch2iMasin", "evocaTouchInfo");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPageData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      } finally {
        setFetching(false);
      }
    }
    fetchData();
  }, []);

  const handleSaveToFirebase = async () => {
    if (!pageData) return;
    setLoading(true);
    setMessage("");
    try {
      await setDoc(doc(db, "evocaTouch2iMasin", "evocaTouchInfo"), pageData);
      setMessage("Տվյալները հաջողությամբ ուղարկվեցին Firebase!");
    } catch (error) {
      console.error("Error saving data to Firebase:", error);
      setMessage("Սխալ տվյալները ուղարկելիս։");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="w-full max-w-[900px] mx-auto px-4 md:px-8 py-20 text-center text-[#2b2b2b] font-sans">
        <p className="text-lg">Բեռնվում է տվյալները Firebase-ից...</p>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="w-full max-w-[900px] mx-auto px-4 md:px-8 py-20 text-center text-red-600 font-sans">
        <p className="text-lg">Տվյալներ չհաջողվեց գտնել Firebase-ում։</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[900px] mx-auto px-4 md:px-8 py-10 font-sans text-[#2b2b2b] text-[15px] leading-relaxed">
      {message && (
        <p className={`mb-6 text-sm font-medium ${message.includes("հաջողությամբ") ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}

      <div className="space-y-6">
        {pageData.introParagraphs && pageData.introParagraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
        <p className="font-medium">{pageData.sectionTitle}</p>
      </div>

      <ul className="list-disc list-inside mt-6 space-y-4 marker:text-[#6c11d0] pl-2 md:pl-4">
        {pageData.features && pageData.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      {pageData.video && (
        <div className="mt-10">
          <p className="text-[#6c11d0] font-bold mb-4">
            {pageData.video.title}
          </p>
          
          <div className="w-full overflow-hidden rounded-lg shadow-sm">
            <iframe 
              width="560" 
              height="315" 
              src={pageData.video.src} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full aspect-video"
            ></iframe>
          </div>
        </div>
      )}

      <div className="mt-8">
        <p>
          {pageData.footerText}{' '}
          <Link to="/" className="text-[#6c11d0] font-bold underline underline-offset-4 hover:text-[#580cb0] transition-colors">
            EvocaTOUCH 2
          </Link>{' '}
          հավելվածում։
        </p>
      </div>

    </div>
  );
}

export default EvocaTouch2iMasin2;