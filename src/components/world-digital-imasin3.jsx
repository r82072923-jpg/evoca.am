import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const tabs = ['Քարտի մասին', 'Mastercard World քարտի մասին'];

const initialCardDetails = [];
const initialNotes = [];

export const uploadWorldDigitalData = async (cardDetailsData, notesData) => {
  try {
    await setDoc(doc(db, "worldDigitaliMasin", "details"), {
      cardDetailsData,
      notesData
    });
    console.log("Տվյալները հաջողությամբ ուղարկվեցին Firebase!");
  } catch (error) {
    console.error("Սխալ տվյալները ուղարկելիս:", error);
  }
};

function WorldDigitaliMasin3({ activeTab, setActiveTab }) {
  const [cardDetailsData, setCardDetailsData] = useState(initialCardDetails);
  const [notesData, setNotesData] = useState(initialNotes);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "worldDigitaliMasin", "details");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.cardDetailsData) setCardDetailsData(data.cardDetailsData);
          if (data.notesData) setNotesData(data.notesData);
        } else {
          console.log("Տվյալներ չեն գտնվել Firebase-ում:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-10 font-sans">Բեռնվում է տվյալները Firebase-ից...</div>;
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4 font-sans">
      <div className="border-b border-gray-200 mb-6 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab ? 'text-[#6b11cb]' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-18px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="bg-white border border-[#f0e6ff] rounded-t-md shadow-sm mb-8">
        <div className="h-1.5 w-full bg-[#6b11cb]"></div>

        <div className="p-4 border-b border-[#f0e6ff]">
          <h2 className="text-base sm:text-lg font-bold text-gray-900">
            Mastercard World Digital քարտեր
          </h2>
        </div>

        <div className="flex flex-col">
          {cardDetailsData.map((row) => (
            <div
              key={row.id}
              className="flex flex-col md:flex-row border-b border-[#f0e6ff] last:border-0"
            >
              <div className="w-full md:w-1/3 p-4 md:p-5 text-[#333333] text-sm sm:text-base border-b md:border-b-0 md:border-r border-[#f0e6ff]">
                {row.title}
              </div>

              {row.type === 'nested_table' ? (
                <div className="w-full md:w-2/3 flex flex-col">
                  {row.content.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row border-b border-[#f0e6ff] last:border-b-0"
                    >
                      <div className="w-full md:w-1/2 p-4 md:p-5 text-[#333333] text-sm sm:text-base border-b md:border-b-0 md:border-r border-[#f0e6ff]">
                        {item.subTitle}
                      </div>
                      <div className="w-full md:w-1/2 flex flex-col text-[#333333] text-sm sm:text-base">
                        {item.subValues.map((val, vIdx) => (
                          <div
                            key={vIdx}
                            className="p-4 md:p-5 border-b border-[#f0e6ff] last:border-b-0"
                          >
                            {val}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full md:w-2/3 p-4 md:p-5 text-[#333333] text-sm sm:text-base">
                  {Array.isArray(row.content) ? (
                    <div className="flex flex-col gap-4">
                      {row.content.map((item, index) => (
                        <div key={index} className="border-b border-[#f0e6ff] last:border-0 pb-2 last:pb-0">
                          {item}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>{row.content}</div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 px-2 text-sm sm:text-base text-[#4a4a4a]">
        {notesData.map((note, index) => (
          <p key={index} className="leading-relaxed">
            {note}
          </p>
        ))}
      </div>
    </div>
  );
}

export default WorldDigitaliMasin3;