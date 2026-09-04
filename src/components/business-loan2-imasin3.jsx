import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from './firebaseConfog';

const tabs = [
  'Վարկի մասին',
  'Պայմաններ'
];

const BusinessLoan2iMasin3 = ({ activeTab, setActiveTab }) => {
  const [loanTermsData, setLoanTermsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoanTerms = async () => {
      try {
        const q = query(
          collection(db, "businessLoan2iMasin2"),
          orderBy("order", "asc")
        );
        
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          docId: doc.id,
          ...doc.data()
        }));
        
        setLoanTermsData(data);
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoanTerms();
  }, []);

  return (
    <div className="w-full bg-white p-4 sm:p-6">
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

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <span className="text-gray-500 text-lg">Բեռնվում է...</span>
        </div>
      ) : (
        <div className="w-full border border-purple-100 rounded-xl overflow-hidden shadow-sm">
          <div className="divide-y divide-purple-100">
            {loanTermsData.map((row) => (
              <div key={row.docId} className="grid grid-cols-1 md:grid-cols-12 text-sm sm:text-base">
                <div className="md:col-span-4 p-4 bg-purple-50/40 text-gray-700 font-medium flex items-center gap-3 border-r border-purple-100">
                  <span className="text-gray-400 font-normal">{row.id}</span>
                  <span>{row.label}</span>
                </div>
                <div className="md:col-span-8 p-4 text-gray-800 flex items-center whitespace-pre-line">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessLoan2iMasin3;