import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog'; 
import { doc, getDoc } from "firebase/firestore";

const tabs = ['Վարկի մասին', 'Պայմաններ'];

function Loan9iMasin2({ activeTab, setActiveTab }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "loans9iMasin", "info");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("Փաստաթուղթը չի գտնվել");
        }
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-10 text-center">Բեռնվում է...</div>;
  if (!data) return <div className="p-10 text-center">Տվյալները չգտնվեցին</div>;

  return (
    <div className="w-full max-w-6xl mx-auto p-4 font-sans">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
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
              {activeTab === tab && <span className="absolute bottom-[-17px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <div className="flex-1 space-y-6 text-[15px] sm:text-base text-gray-800 leading-relaxed">
          <p>
            <span className="text-[#6b11cb] font-semibold">Action</span>
            {data.paragraphs[0].textBeforeLink}
            <a href="#" className="text-[#6b11cb] font-bold underline decoration-[1.5px] underline-offset-2">{data.paragraphs[0].linkText}</a>
            {data.paragraphs[0].textAfterLink}
          </p>
          <p>
            {data.paragraphs[1].textBeforeAppName}
            <span className="text-[#6b11cb] font-semibold">{data.paragraphs[1].appName}</span>
            {data.paragraphs[1].textAfterAppName}
          </p>
          <p>
            <span className="text-[#6b11cb] font-semibold">{data.paragraphs[2].bankName}</span>
            {data.paragraphs[2].textAfterBankName}
          </p>
        </div>
        <div className="flex-1 w-full lg:max-w-md">
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 sm:p-8">
            <div className="w-10 h-10 rounded-full bg-[#6b11cb] flex items-center justify-center text-white font-bold text-xl mb-6">֏</div>
            <div className="flex flex-col">
              {data.specs.map((item, index) => (
                <div key={item.id} className={`grid grid-cols-2 items-center py-5 ${index !== data.specs.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-gray-500 mb-0.5">{item.prefix}</span>
                    <span className="text-2xl sm:text-3xl font-bold text-[#6b11cb]">{item.value}</span>
                  </div>
                  <div className="text-[15px] text-gray-700 pl-4">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loan9iMasin2;