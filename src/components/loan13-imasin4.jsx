import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const tabs = ['Վարկի մասին', 'Պայմաններ', 'Պահանջվող փաստաթղթերի ցանկ'];

const Loan13iMasin4 = ({ activeTab, setActiveTab }) => {
  const [documentsData, setDocumentsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'loans13iMasin3', 'main_info');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDocumentsData(docSnap.data().documents || []);
        } else {
          console.log("Տվյալներ չեն գտնվել Firebase-ում:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-10 text-center font-bold text-[#6b11cb]">Բեռնվում է Firebase-ից...</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto my-10 overflow-x-auto px-4 font-sans">
      

      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab ? 'text-[#6b11cb]' : 'text-gray-500 hover:text-gray-700'
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

      <div className="bg-white border border-purple-100 rounded-xl p-6 sm:p-10 shadow-sm text-gray-800">
        <div className="space-y-6">
          {documentsData.length > 0 ? (
            documentsData.map((item) => (
              <div key={item.id} className="flex items-start gap-4 text-[15px] leading-relaxed">
                <span className="font-bold text-[#6b11cb] min-w-[20px] text-right">{item.id}.</span>
                <div className="flex-1">
                  {item.content && <p className="text-gray-700">{item.content}</p>}
                  
                  {item.title && <p className="font-semibold text-gray-800 mb-2">{item.title}</p>}
                  
                  {item.subItems && (
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#6b11cb] text-gray-700 mt-2">
                      {item.subItems.map((sub, idx) => (
                        <li key={idx}>{sub}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Տվյալներ առկա չեն:</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loan13iMasin4;