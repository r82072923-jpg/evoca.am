import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfog'; 

function TravelGoldiMasin2({ activeTab, setActiveTab }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "travelGoldiMasin", "mainInfo");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("Տվյալներ չեն գտնվել!");
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Բեռնվում է...</div>;
  if (!data) return <div>Տվյալներ չկան։</div>;
const tabs=[
    "Քարտի մասին",
    "Սակագներ և դրույթներ"
]
  return (
    <section className="w-full bg-white py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
          <nav className="flex space-x-10 min-w-max">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                  activeTab === tab ? 'text-[#6b11cb]' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
                {activeTab === tab && <span className="absolute bottom-[-18px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-7 text-[#1a1a1a] text-lg sm:text-xl leading-relaxed">
            {data.infoText.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-[32px] p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.05)] space-y-6">
            <div className="divide-y divide-gray-100">
              {data.tariffs.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 gap-3">
                  <div className="flex items-baseline gap-2 sm:w-1/3 shrink-0">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#6b11cb] tracking-tight">{item.value}</span>
                  </div>
                  <div className="sm:w-2/3 text-gray-800 text-sm sm:text-base font-medium leading-snug">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TravelGoldiMasin2;