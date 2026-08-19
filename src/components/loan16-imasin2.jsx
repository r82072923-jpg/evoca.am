import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const Loan16iMasin2 = ({ activeTab, setActiveTab }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const docRef = doc(db, 'loans16iMasin', 'pageDetails');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log('Փաստաթուղթը գոյություն չունի!');
        }
      } catch (error) {
        console.error('Սխալ Firebase-ից տվյալներ ստանալիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirebase();
  }, []);

  if (loading) return <div>Բեռնվում է...</div>;
  if (!data) return <div>Տվյալներ չգտնվեցին:</div>;

  return (
    <div className="max-w-6xl mx-auto my-12 px-4 font-sans text-[#333333]">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {data.tabs.map((tab) => (
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

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-3/5 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            {data.title}
          </h2>
          {data.paragraphs.map((p, idx) => (
            <p key={idx} className="text-gray-600 leading-relaxed text-[15px]">
              {p}
            </p>
          ))}

          <div className="pt-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{data.advantages.title}</h3>
            <ul className="space-y-3 text-gray-600 text-[15px]">
              {data.advantages.items.map((adv, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-gray-900">{adv.boldText}</strong> {adv.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:w-2/5 w-full">
          <div className="bg-white border border-purple-100 rounded-2xl shadow-sm p-6 relative overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-[#6b11cb] flex items-center justify-center text-white mb-6">
              <span className="font-bold text-lg">{data.card.currencySymbol}</span>
            </div>

            {data.card.metrics.map((metric, idx) => (
              <div key={idx} className={`py-4 ${idx !== data.card.metrics.length - 1 ? 'border-b border-gray-100' : 'pt-4'} flex items-center justify-between`}>
                <div>
                  {metric.prefix && <span className="text-xs text-gray-400 block mb-1">{metric.prefix}</span>}
                  <span className="text-xl sm:text-2xl font-bold text-[#6b11cb]">{metric.value}</span>
                </div>
                <span className="text-sm font-medium text-gray-500">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan16iMasin2;