import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const tabs = ['Վարկի մասին', 'Պայմաններ','Պահանջվող փաստաթղթերի ցանկ'];

const Loan13iMasin2 = ({ activeTab, setActiveTab }) => {
  const [cardData, setCardData] = useState([]);
  const [paragraphsData, setParagraphsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'loans13iMasin', 'info_data');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setCardData(data.cardInfo || []);
          setParagraphsData(data.descriptionTexts || []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 text-center text-gray-500 font-bold">
        Բեռնվում է...
      </div>
    );
  }

  if (!paragraphsData.length || !cardData.length) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 text-center text-red-500 font-bold">
        Տվյալները չգտնվեցին:
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 font-sans">
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

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        <div className="w-full lg:w-1/2 text-[#2C2C2C] text-[15px] sm:text-base leading-relaxed space-y-5">
          {paragraphsData[0] && <p>{paragraphsData[0]}</p>}
          {paragraphsData[1] && <p>{paragraphsData[1]}</p>}
          {paragraphsData[2] && (
            <p>
              <span className="text-[#6b11cb] font-semibold">Evocabank</span>
              {paragraphsData[2].substring(9)}
            </p>
          )}
          {paragraphsData[3] && <p>{paragraphsData[3]}</p>}
          {paragraphsData[4] && <p>{paragraphsData[4]}</p>}
        </div>

        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(107,17,203,0.06)] border border-purple-50/80 p-8 sm:p-10">
            <div className="w-12 h-12 bg-[#6b11cb] rounded-full flex items-center justify-center mb-8">
              <span className="text-white font-bold text-2xl">֏</span>
            </div>

            <div className="flex flex-col">
              {cardData.map((item, index) => (
                <div
                  key={item.id || index}
                  className={`flex items-center py-6 ${
                    index !== cardData.length - 1 ? 'border-b border-gray-100' : ''
                  } ${index === 0 ? 'pt-0' : ''} ${index === cardData.length - 1 ? 'pb-0' : ''}`}
                >
                  <div className="w-1/2">
                    <span className="text-[11px] sm:text-xs text-gray-500 block mb-1">
                      {item.prefix}
                    </span>
                    <div className="text-3xl sm:text-[34px] leading-tight font-bold text-[#6b11cb]">
                      {item.value}
                    </div>
                  </div>
                  <div className="w-1/2 pl-2 sm:pl-6 text-gray-800 text-sm sm:text-[15px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan13iMasin2;