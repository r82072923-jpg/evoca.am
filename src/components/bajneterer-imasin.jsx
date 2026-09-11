import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfog";

function BazhnetereriMasin() {
  const [openId, setOpenId] = useState("attention");
  const [accordionData, setAccordionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccordionData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bazhnetereriMasin"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        const order = ["attention", "capital", "dividends"];
        data.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));

        setAccordionData(data);
      } catch (error) {
        console.error("Սխալ տվյալները կարդալիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccordionData();
  }, []);

  const toggleAccordion = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full max-w-[1100px] mx-auto p-6 md:p-10 font-sans space-y-16">
      <section>
        <h2 className="text-2xl md:text-[28px] font-bold text-[#1a1a1a] mb-8">
          Բաժնետերեր
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-[280px] shrink-0">
            <img
              src="https://www.evoca.am/file_manager/Shareholders/Mareta%20Gevorkyan%20Evocabank.png"
              alt="Մարետա Գևորգյան"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col pt-2">
            <h3 className="text-[22px] font-bold text-[#6d28d9] mb-5">
              Մարետա Գևորգյան
            </h3>

            <div className="text-[15px] leading-[1.6] text-[#333] space-y-4">
              <p>
                Մարետա Գևորգյանը միանձնյա տիրապետում է Evocabank-ի բաժնետոմսերի
                100%-ին:
              </p>
              <p>
                Նա ծնվել է Դիլիջանում, ավարտել Դիլիջանի միջնակարգ դպրոցը, այնուհետև՝
                Երևանի պետական մանկավարժական ակադեմիան:
              </p>
              <p>
                2008 թվականից բնակվելով Շվեյցարիայում՝ նա ակտիվորեն ներգրավված է
                բանկային, տարածքային զարգացման և սոցիալական
                նախաձեռնություններում՝ նպաստելով Հայաստանի կայուն զարգացմանը:
              </p>
              <p className="font-semibold text-[14px] mt-6">
                Նշում. Բանկն անուղղակի նշանակալից մասնակից չունի:
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-[20px] font-bold uppercase mb-6 text-[#1a1a1a] tracking-wide">
          ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h2>

        {loading ? (
          <div className="text-center text-purple-600 py-10">
            Բեռնվում է...
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {accordionData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={`border rounded-[10px] transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-purple-600 shadow-sm"
                      : "border-purple-200 hover:border-purple-300"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left py-4 px-5 flex items-center gap-4 bg-white focus:outline-none"
                  >
                    <span className="text-purple-700 transition-transform duration-200">
                      {isOpen ? (
                        <svg
                          className="w-4 h-4 stroke-[3]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 stroke-[3]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>

                    <span className="font-bold text-[14px] text-[#1a1a1a]">
                      {item.title}
                    </span>
                  </button>

                  {isOpen && item.content?.length > 0 && (
                    <div className="px-14 pb-6 pt-1 text-[13px] text-[#4a4a4a] leading-relaxed">
                      <ul className="list-disc flex flex-col gap-3 marker:text-purple-600">
                        {item.content.map((point, index) => (
                          <li key={index} className="pl-1">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default BazhnetereriMasin;