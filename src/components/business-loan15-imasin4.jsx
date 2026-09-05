import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

function BusinessLoan15iMasin4({ activeTab, setActiveTab }) {
  const tabs = [
    'Վարկի մասին',
    'Պայմաններ և սակագներ',
    'Պահանջվող փաստաթղթեր'
  ];

  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinksDataFromFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "businessLoan15iMasin3"));
        let fetchedLinks = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.linksData) {
            fetchedLinks = [...fetchedLinks, ...data.linksData];
          }
        });

        setLinks(fetchedLinks);
      } catch (e) {
        console.error("Սխալ տվյալների բեռնման ժամանակ՝ ", e);
      } finally {
        setLoading(false); 
      }
    };

    fetchLinksDataFromFirebase();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4 font-sans">
      <div className="border-b border-gray-200 mb-8 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {loading && (
        <div className="text-center text-gray-500 py-4 text-lg">
          Տվյալները բեռնվում են...
        </div>
      )}

      {!loading && links.length > 0 && links.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-purple-50 hover:bg-purple-100 transition-colors rounded-xl p-4 shadow-sm border border-purple-100 text-gray-800 font-semibold text-sm md:text-base group"
        >
          <span>{item.title}</span>
        </a>
      ))}

      {!loading && links.length === 0 && (
        <div className="text-center text-gray-500 py-4 text-lg">
          Տվյալներ դեռևս չկան:
        </div>
      )}
    </div>
  );
}

export default BusinessLoan15iMasin4;