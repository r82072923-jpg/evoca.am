import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'; 
import { db } from './firebaseConfog';

const tabs = ['Ավանդի մասին', 'Պայմաններ և սակագներ'];

function DasakanAvandiMasin2({ activeTab, setActiveTab }) {
  const [depositData, setDepositData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepositData = async () => {
      try {
        const docRef = doc(db, 'dasakanAvandiMasin', 'info');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDepositData(docSnap.data());
        } else {
          console.log("Նման փաստաթուղթ չի գտնվել:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները կարդալիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepositData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 flex justify-center items-center h-64">
        <p className="text-xl text-[#6b11cb] font-bold animate-pulse">Բեռնվում է...</p>
      </div>
    );
  }

  if (!depositData) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center text-red-500 font-bold">
        Տվյալներ չեն գտնվել
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* ՏԱԲԵՐԻ ՀԱՏՎԱԾԸ - Տեղափոխված է վերև */}
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

      {/* ՏԵՔՍՏԻ ԵՎ ՔԱՐՏԻ ՀԱՏՎԱԾԸ - Գտնվում է տաբերի տակ */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Ձախ կողմի տեքստը */}
        <div className="flex-1 text-gray-800 text-[15px] leading-relaxed font-medium">
          <p className="mb-6">
            {depositData.description.paragraph1.text1}
            <span className="text-[#6b11cb] font-bold">
              {depositData.description.paragraph1.highlight}
            </span>
            {depositData.description.paragraph1.text2}
          </p>
          <p className="mb-6">
            <Link to={depositData.description.paragraph2.linkUrl} className="text-[#6b11cb] font-bold underline underline-offset-4 decoration-2">
              {depositData.description.paragraph2.linkText}
            </Link>
            {depositData.description.paragraph2.text}
          </p>
          <p>
            {depositData.description.paragraph3}
          </p>
        </div>

        {/* Աջ կողմի քարտը */}
        <div className="w-full lg:w-[500px] flex-shrink-0">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100">
            <div className="flex gap-3 mb-8">
              {depositData.currencies.map((cur) => (
                <span
                  key={cur.id}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-200 bg-[#6b11cb] text-white shadow-md transform scale-105"
                >
                  {cur.symbol}
                </span>
              ))}
            </div>
            <div className="flex flex-col">
              {depositData.features.map((feature, index) => (
                <div 
                  key={feature.id} 
                  className={`grid grid-cols-2 items-center py-5 ${
                    index !== depositData.features.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex flex-col justify-end">
                    <span 
                      className={`text-[11px] mb-1 min-h-[16px] ${
                        feature.prefix === '-' ? 'text-transparent select-none' : 'text-gray-500'
                      }`}
                    >
                      {feature.prefix}
                    </span>
                    <span className="text-2xl font-extrabold text-[#6b11cb] leading-none">
                      {feature.value}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    {feature.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DasakanAvandiMasin2;