import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const tabs = ['Ավանդի մասին', 'Պայմաններ և սակագներ'];

const MankakanAvandiMasin2 = ({ activeTab, setActiveTab }) => {
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'mankakanAvandiMasin'));
        
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          if (docData) {
            setCardData(docData);
          }
        }
      } catch (error) {
        console.error('Սխալ տվյալների ստացման ժամանակ:', error);
        setStatusMessage('Սխալ՝ տվյալները չհաջողվեց բեռնել։');
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirebase();
  }, []);

  if (loading || !cardData) {
    return (
      <div className="w-full py-16 text-center font-sans text-gray-500">
        Բեռնվում է...
      </div>
    );
  }

  const currentData = cardData;

  return (
    <div className="w-full max-w-7xl mx-auto p-4 font-sans">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto w-full">
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

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-3/5 space-y-6 text-[15px] font-medium text-gray-800 leading-relaxed">
          {statusMessage && (
            <div className="p-3 bg-purple-50 border border-purple-200 text-[#6b11cb] rounded-lg text-sm font-semibold">
              {statusMessage}
            </div>
          )}

          <p>
            Որպես ավանդատու կարող են հանդես գալ ինչպես երեխաների օրինական ներկայացուցիչները (ծնողները, խնամակալները), այնպես էլ երրորդ անձիք: <a href="#" className="text-[#6b11cb] font-bold underline underline-offset-4">Ավանդն</a> ընդունվում է ֆիզիկական անձանցից, հօգուտ երեխաների <a href="#" className="text-[#6b11cb] font-bold underline underline-offset-4">Ավանդ</a> ներդնելու պայմանով 2 տարուց մինչև երեխայի 18 տարին լրանալը:
          </p>
          
          <p>
            Ավանդը կարող է համալրվել սկսած նվազագույնը 40,000 ՀՀ դրամից կամ 100 ԱՄՆ դոլարից: Տոկոսագումարների վճարումը կամ կապիտալացումը կարող է իրականացվել ամենամսյա պարբերականությամբ:
          </p>

          <p>
            Ավանդ ներդնելիս Ձեզ տրամադրում ենք առանց տարեկան սպասարկման վճարի միջազգային քարտ, որին՝ Ձեր ցանկությամբ, կփոխանցվեն հաշվարկված տոկոսագումարները:
          </p>
        </div>

        <div className="w-full lg:w-2/5 bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 p-6">
          
          <div className="flex gap-3 mb-6">
            <span
              className='w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition-colors bg-[#6b11cb] text-white'
            >
              ֏
            </span>
            <span
              className='w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition-colors bg-[#6b11cb] text-white'
            >
              $
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center py-4 border-b border-gray-100">
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">{currentData.amountLabel}</div>
                <div className="text-xl font-extrabold text-[#6b11cb]">{currentData.amount}</div>
              </div>
              <div className="text-sm font-medium text-gray-800">
                Գումար
              </div>
            </div>

            <div className="flex justify-between items-center py-4 border-b border-gray-100">
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">{currentData.termLabel}</div>
                <div className="text-xl font-extrabold text-[#6b11cb]">{currentData.term}</div>
              </div>
              <div className="text-sm font-medium text-gray-800">
                Ժամկետ
              </div>
            </div>

            <div className="flex justify-between items-center py-4 border-b border-gray-100">
              <div className="text-xl font-extrabold text-[#6b11cb]">
                {currentData.rate}
              </div>
              <div className="text-sm font-medium text-gray-800">
                Տոկոսադրույք
              </div>
            </div>

            <div className="flex justify-between items-center py-4">
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">{currentData.replenishmentLabel}</div>
                <div className="text-xl font-extrabold text-[#6b11cb]">{currentData.replenishment}</div>
              </div>
              <div className="text-sm font-medium text-gray-800">
                Համալրման հնարավորություն
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MankakanAvandiMasin2;