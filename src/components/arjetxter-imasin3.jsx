import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfog";

function ArjetxteriMasin3() {
  const [openId, setOpenId] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleAccordion = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "arjetxteriMasin"));
        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        fetchedData.sort((a, b) => Number(a.id) - Number(b.id));

        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto p-4 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold uppercase text-slate-900 tracking-wide">
          ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center p-10 text-slate-500 font-medium">
          Տվյալները բեռնվում են...
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {data.map((item) => {
            const isOpen = openId === Number(item.id);

            return (
              <div
                key={item.id}
                className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#5e219c] shadow-sm"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(Number(item.id))}
                  className="w-full text-left p-4 md:p-5 flex items-center gap-4 bg-white focus:outline-none"
                >
                  <span className="text-[#5e219c] transition-transform duration-200">
                    {isOpen ? (
                      <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                  <span className="font-bold text-slate-900 text-sm md:text-base">
                    {item.title}
                  </span>
                </button>

                {isOpen && item.links && item.links.length > 0 && (
                  <div className="pb-6 pt-1 animate-fadeIn">
                    <div className="flex flex-col gap-6 text-sm md:text-[15px] leading-relaxed text-slate-700 pb-2 px-4 md:px-12">
                      {item.links.map((linkItem, index) => (
                        <div key={index}>
                          <a
                            href={linkItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#5e219c] font-bold underline hover:text-purple-900 transition-colors block mb-2"
                          >
                            {linkItem.text}
                          </a>
                          {linkItem.description && (
                            <p>{linkItem.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ArjetxteriMasin3;