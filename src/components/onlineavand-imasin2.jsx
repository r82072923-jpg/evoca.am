import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "./firebaseConfog";

const tabs = ['Ավանդի մասին', 'Պայմաններ և սակագներ'];

const OnlineAvandiMasin2 = ({ activeTab, setActiveTab }) => {
  const [depositData, setDepositData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepositData = async () => {
      try {
        const docRef = doc(db, "onlineAvandiMasin", "info");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDepositData(docSnap.data());
        } else {
          console.log("Նման դոկումենտ չի գտնվել բազայում:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները կարդալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepositData();
  }, []);
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-10 text-center text-gray-500 font-sans text-lg">
        Բեռնվում է...
      </div>
    );
  }
  if (!depositData) {
    return (
      <div className="max-w-6xl mx-auto p-10 text-center text-red-500 font-sans text-lg">
        Տվյալները հասանելի չեն:
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <div className="border-b border-gray-200 mb-10 pb-4 overflow-x-auto w-full">
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

      <div className="flex flex-col md:flex-row gap-10 items-center justify-between w-full">
        
        <div className="w-full md:w-1/2 space-y-6 text-gray-800 text-sm md:text-base leading-relaxed">
          {depositData.paragraphs.map((item) => (
            <p key={item.id} dangerouslySetInnerHTML={{ __html: item.content }} />
          ))}
        </div>
        <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8">
          <div className="flex gap-3 mb-8">
            {depositData.currencies.map((currency, index) => (
              <span
                key={index}
                className="w-9 h-9 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-lg hover:bg-purple-800 transition-colors"
              >
                {currency}
              </span>
            ))}
          </div>
          <div className="flex flex-col border-t border-gray-100">
            {depositData.stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`flex justify-between items-center py-5 ${
                  index !== depositData.stats.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex flex-col">
                  {stat.prefix && (
                    <span className="text-[10px] text-gray-400 mb-1">{stat.prefix}</span>
                  )}
                  <span className="text-2xl text-purple-700 font-bold">{stat.value}</span>
                </div>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineAvandiMasin2;