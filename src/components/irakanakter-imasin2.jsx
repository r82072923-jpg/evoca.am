import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog'
;import { doc, getDoc } from 'firebase/firestore';

function IrakanAkteriMasin2() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "irakanAkteriMasin2", "mainData");
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

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center text-gray-600 font-sans">
        Տվյալները բեռնվում են...
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center text-red-500 font-sans">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {data?.title}
      </h1>

      <ol className="list-decimal list-inside space-y-4">
        {data?.items?.map((item) => (
          <li key={item.id} className="text-purple-700 font-bold">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:text-purple-900 underline font-semibold leading-relaxed transition-colors duration-200 inline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default IrakanAkteriMasin2;