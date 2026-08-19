import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

const tabs = ['Վարկի մասին', 'Պայմաններ'];

function Loan10iMasin3({ activeTab, setActiveTab }) {
  const [conditionsData, setConditionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConditions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'loans10iMasin2'));
        const dataList = querySnapshot.docs.map((doc) => doc.data());

        dataList.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        
        setConditionsData(dataList);
      } catch (error) {
        console.error('Սխալ տվյալները բեռնելիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConditions();
  }, []);

  if (loading) {
    return (
      <div className="w-full text-center py-12 text-gray-500 font-medium">
        Բեռնվում են պայմանները...
      </div>
    );
  }

  if (conditionsData.length === 0) {
    return (
      <div className="w-full text-center py-12 text-gray-500 font-medium">
        Տվյալներ առկա չեն:
      </div>
    );
  }

  return (
    <div className="w-full mt-8 overflow-x-auto">
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

      <div className="min-w-[700px] border-t border-l border-purple-100 rounded-sm bg-white">
        {conditionsData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[50px_minmax(250px,_1fr)_minmax(350px,_2fr)] text-[15px] text-gray-800 hover:bg-gray-50 transition-colors"
          >
            <div className="p-4 border-b border-r border-purple-100 flex justify-center items-start font-medium text-gray-500">
              {item.id}.
            </div>

            <div className="p-4 border-b border-r border-purple-100 font-medium font-sans">
              {item.label}
            </div>

            <div className="p-4 border-b border-r border-purple-100 font-sans leading-relaxed">
              {Array.isArray(item.value) ? (
                <div className="space-y-3">
                  {item.value.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              ) : (
                item.value
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loan10iMasin3;