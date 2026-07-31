import React, { useState, useEffect } from 'react';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfog';

const initialGoldData = [
  { purity: '375', rate: '17,300' },
  { purity: '500', rate: '23,100' },
  { purity: '583', rate: '26,900' },
  { purity: '750', rate: '34,600' },
  { purity: '875', rate: '40,400' },
  { purity: '900', rate: '41,600' },
  { purity: '958', rate: '44,300' },
  { purity: '999', rate: '46,200' },
];

const tabs = ['Կանխիկ', 'Անկանխիկ', 'Ոսկու փոխարժեք', 'Ռուբլու կանխիկ մուտք'];

function VoskuPoxarjeq({ activeTab = 'Ոսկու փոխարժեք', setActiveTab }) {
  const [goldData, setGoldData] = useState(initialGoldData);
  const [isUploading, setIsUploading] = useState(false);

  // Տվյալների բեռնումը Firebase-ից
  const fetchRatesFromFirebase = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'voskupoxarjeq'));
      
      if (!querySnapshot.empty) {
        const ratesArray = querySnapshot.docs.map(doc => doc.data());
        setGoldData(ratesArray);
      }
    } catch (error) {
      console.error('Error fetching rates:', error);
    }
  };

  useEffect(() => {
    fetchRatesFromFirebase();
  }, []);

  // Տվյալները Firebase ուղարկելու ֆունկցիա
  const handleUploadToFirebase = async () => {
    if (!window.confirm('Ուղարկե՞լ ոսկու փոխարժեքները Firebase:')) return;

    setIsUploading(true);
    try {
      for (const item of initialGoldData) {
        // Օգտագործում ենք purity-ն որպես document ID
        await setDoc(doc(db, 'voskupoxarjeq', item.purity), item);
      }
      await fetchRatesFromFirebase();
      alert('Տվյալները հաջողությամբ ուղարկվեցին Firebase!');
    } catch (error) {
      console.error('Error uploading rates:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 font-sans text-[#2a2a2a]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        <div className="flex-1">
          <div className="flex justify-end mb-4">
            <button
              onClick={handleUploadToFirebase}
              disabled={isUploading}
              className="inline-flex bg-[#fde047] text-[#422006] px-6 py-2.5 rounded-full font-bold text-sm items-center hover:bg-[#facc15] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              {isUploading ? 'Ուղարկվում է...' : 'Ուղարկել Firebase'}
            </button>
          </div>

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
                  <div key={index} className="grid grid-cols-2 items-center px-2 py-2 border-b border-gray-50 last:border-none">
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