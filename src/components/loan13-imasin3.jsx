import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const tabs = ['Վարկի մասին', 'Պայմաններ', 'Պահանջվող փաստաթղթերի ցանկ'];

const Loan13iMasin3 = ({ activeTab, setActiveTab }) => {
  const [termsData, setTermsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'loans13iMasin2', 'terms_data');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTermsData(docSnap.data().termsData || []);
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
    return <div className="p-10 text-center font-bold text-[#6b11cb]">Բեռնվում է...</div>;
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
              {activeTab === tab && <span className="absolute bottom-[-17px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />}
            </button>
          ))}
        </nav>
      </div>

      <div className="min-w-[700px] border border-purple-200 rounded-sm overflow-hidden bg-white shadow-sm">
        {termsData.map((item, index) => (
          <div key={item.id} className={`flex items-stretch text-[13px] md:text-[14px] ${index !== termsData.length - 1 ? 'border-b border-purple-200' : ''}`}>
            <div className="w-12 md:w-16 p-4 flex items-center justify-center font-bold text-gray-800 border-r border-purple-200 bg-white">{item.id}.</div>
            <div className="w-[30%] p-4 font-bold text-gray-800 flex items-center border-r border-purple-200 leading-snug">{item.title}</div>
            <div className="flex-1 flex flex-col justify-center text-gray-700">
              {item.rates ? (
                <div className="flex w-full h-full">
                  <div className="w-1/2 border-r border-purple-200 flex flex-col"><div className="p-3 border-b border-purple-200 font-semibold bg-white">{item.rates.nominalTitle}</div><div className="p-3 flex-1">{item.rates.nominalValue}</div></div>
                  <div className="w-1/2 flex flex-col"><div className="p-3 border-b border-purple-200 font-semibold bg-white">{item.rates.actualTitle}</div><div className="p-3 flex-1">{item.rates.actualValue}</div></div>
                </div>
              ) : item.prepayment ? (
                <div className="flex w-full h-full">
                  <div className="w-1/2 border-r border-purple-200 flex flex-col"><div className="p-3 border-b border-purple-200 font-semibold bg-white">{item.prepayment.withIncomeTitle}</div><div className="p-3 flex-1">{item.prepayment.withIncomeValue}</div></div>
                  <div className="w-1/2 flex flex-col"><div className="p-3 border-b border-purple-200 font-semibold bg-white">{item.prepayment.withoutIncomeTitle}</div><div className="p-3 flex-1">{item.prepayment.withoutIncomeValue}</div></div>
                </div>
              ) : Array.isArray(item.content) ? (
                <ul className="p-4 list-disc pl-8 space-y-2 marker:text-[#6b11cb]">
                  {item.content.map((text, i) => <li key={i} className="leading-relaxed pl-1">{text}</li>)}
                </ul>
              ) : (
                <div className="p-4 leading-relaxed">{item.content}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loan13iMasin3;