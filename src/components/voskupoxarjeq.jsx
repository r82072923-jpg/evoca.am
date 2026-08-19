import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

const tabs = ['Կանխիկ', 'Անկանխիկ', 'Ոսկու փոխարժեք', 'Ռուբլու կանխիկ մուտք'];

function VoskuPoxarjeq({ activeTab = 'Ոսկու փոխարժեք', setActiveTab }) {
  const [goldData, setGoldData] = useState([]);

  useEffect(() => {
    const fetchRatesFromFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'voskupoxarjeq'));
        
        if (!querySnapshot.empty) {
          const ratesArray = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setGoldData(ratesArray);
        }
      } catch (error) {
        console.error('Error fetching rates:', error);
      }
    };

    fetchRatesFromFirebase();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 font-sans text-[#2a2a2a]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
            
            <div className="flex flex-wrap border-b border-gray-100 bg-[#fcfcfd]">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab && setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-bold transition-colors ${
                    activeTab === tab
                      ? 'bg-white text-[#6d28d9] border-t-2 border-t-[#6d28d9] rounded-t-lg shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]'
                      : 'text-[#666] hover:text-[#2a2a2a]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 pb-4 mb-2 border-b border-gray-100 text-xs font-bold text-[#b3b3b3] px-2">
                <div>Հարգ</div>
                <div className="text-right">Սակագին (Արժեքը ՀՀ Դրամով 1 գրամի համար)</div>
              </div>

              <div className="flex flex-col gap-4">
                {goldData.map((item, index) => (
                  <div key={item.id || index} className="grid grid-cols-2 items-center px-2 py-2 border-b border-gray-50 last:border-none">
                    <div className="font-extrabold text-lg text-[#2a2a2a]">
                      {item.purity}
                    </div>
                    <div className="text-right font-bold text-base text-[#2a2a2a]">
                      {item.rate}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 py-3 border-t border-gray-100 bg-white">
              <p className="text-[11px] font-semibold text-[#b3b3b3]">
                Թարմացվել է՝ 31.07.26
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default VoskuPoxarjeq;