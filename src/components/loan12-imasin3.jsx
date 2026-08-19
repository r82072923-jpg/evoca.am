import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const tabs = ['Վարկի մասին', 'Պայմաններ'];

const Loan12iMasin3 = ({ activeTab, setActiveTab }) => {
  const [termsData, setTermsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTermsData = async () => {
      try {
        const docRef = doc(db, 'loans12iMasin2', 'terms_info');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTermsData(docSnap.data().terms || []);
        } else {
          console.log("Փաստաթուղթը չի գտնվել Firebase-ում:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTermsData();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto my-8 text-center text-gray-500 font-bold py-12">
        Բեռնվում է...
      </div>
    );
  }

  if (!termsData || termsData.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto my-8 text-center text-red-500 font-bold py-12">
        Տվյալները չգտնվեցին: Ստուգեք Firebase-ի տվյալները:
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto my-8 overflow-x-auto px-4">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-17px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="min-w-[650px] border border-purple-200 rounded-lg overflow-hidden bg-white shadow-sm">
        {termsData.map((item, index) => (
          <div
            key={item.id || index}
            className={`flex items-stretch text-xs md:text-sm ${
              index !== termsData.length - 1 ? 'border-b border-purple-200' : ''
            }`}
          >
            <div className="w-12 md:w-16 p-3 flex items-center justify-center font-bold text-gray-800 border-r border-purple-200 bg-purple-50/20">
              {item.id}.
            </div>

            <div className="w-1/3 p-3 md:p-4 font-bold text-gray-900 flex items-center border-r border-purple-200 leading-snug">
              {item.title}
            </div>

            <div className="flex-1 p-3 md:p-4 text-gray-800 flex items-center leading-relaxed">
              {item.rates ? (
                <div className="flex items-center justify-between w-full max-w-md">
                  <span className="font-bold text-[#6b11cb] text-base">{item.rates.nominal}</span>
                  <span className="text-gray-500 font-medium px-4">{item.rates.label}</span>
                  <span className="font-bold text-[#6b11cb] text-base">{item.rates.actual}</span>
                </div>
              ) : Array.isArray(item.content) ? (
                <div className="space-y-1.5">
                  {item.content.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loan12iMasin3;