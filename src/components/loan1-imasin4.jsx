import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

const Loan1iMasin4 = ({ activeTab, setActiveTab }) => {
  const [tabs, setTabs] = useState([]);
  const [requiredDocuments, setRequiredDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, 'loans1iMasin3'));
        
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          if (docData.tabs) setTabs(docData.tabs);
          if (docData.requiredDocuments) setRequiredDocuments(docData.requiredDocuments);
        } else {
          setError('Տվյալներ չեն գտնվել Firebase-ում:');
        }
      } catch (err) {
        console.error('Սխալ տվյալների բեռնման ժամանակ:', err);
        setError('Չհաջողվեց բեռնել տվյալները:');
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  if (loading) return <div className="text-center p-10">Բեռնվում է...</div>;
  if (error) return <div className="text-center p-10 text-red-600">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 font-sans text-xs sm:text-sm text-gray-800 bg-white">
      <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
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

      <ol className="list-none space-y-4">
        {requiredDocuments.map((doc) => (
          <li key={doc.id} className="flex items-start">
            <span className="font-bold text-[#6b11cb] mr-3 min-w-[20px]">
              {doc.id}.
            </span>
            <span className="text-gray-800 leading-relaxed">
              {doc.text}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Loan1iMasin4;