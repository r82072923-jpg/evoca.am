import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

function IrakanAkteriMasin() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "irakanAkteriMasin", "mainData");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          setError("Տվյալները չեն գտնվել Firebase-ում:");
        }
      } catch (err) {
        console.error("Սխալ տվյալները ստանալիս: ", err);
        setError("Տեղի ունեցավ սխալ տվյալները բեռնելիս:");
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirebase();
  }, []);
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 font-sans text-center">
        <p className="text-gray-600 font-semibold text-lg animate-pulse">
          Տվյալները բեռնվում են...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6 font-sans text-center">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {data?.title}
      </h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {data?.category}
      </h2>
      <ul className="flex flex-col space-y-2">
        {data?.items && data.items.map((item) => (
          <li key={item.id}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:text-purple-900 underline font-semibold text-base leading-relaxed transition-colors duration-200 block"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IrakanAkteriMasin;