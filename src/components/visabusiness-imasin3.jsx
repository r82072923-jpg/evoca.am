import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';
const tabs = [
  'Քարտի մասին',
  'Սակագներ և դրույթներ',
  'Օգտակար խորհուրդներ',
  'Զգուշացում'
];
function VisaBusinessiMasin3({ activeTab, setActiveTab }) {
  const [data, setData] = useState({ paymentCardsData: null, footnotes: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "visaBusinessiMasin2", "cardInfo");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("Տվյալները չեն գտնվել!");
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Բեռնվում է...</div>;
  if (!data.paymentCardsData) return <div>Տվյալներ առկա չեն:</div>;

  const { title, titleNote, headers, rows } = data.paymentCardsData;
  const footnotes = data.footnotes;

  return (
 <div className="w-full max-w-6xl mx-auto font-sans text-[#333333] p-4 my-10">
      <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
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

      <div className="overflow-x-auto border border-[#ebdef5] rounded-sm shadow-sm mb-10">
        <table className="w-full min-w-[900px] border-collapse text-sm sm:text-base">
          <thead>
            <tr>
              <th
                colSpan={5}
                className="text-center py-4 font-bold text-[#300066] border-b border-[#ebdef5] bg-white text-lg"
              >
                {title}<sup className="text-xs">{titleNote}</sup>
              </th>
            </tr>
            <tr className="border-b border-[#ebdef5] bg-white">
              <th colSpan={2} className="py-4 px-4 text-left font-bold text-[#333333] border-r border-[#ebdef5] w-[35%]">
                {headers.service}
              </th>
              <th className="py-4 px-4 text-left font-bold text-[#333333] border-r border-[#ebdef5] w-[25%]">
                {headers.standard}
              </th>
              <th className="py-4 px-4 text-left font-bold text-[#333333] border-r border-[#ebdef5] w-[25%]">
                {headers.gold}<sup className="text-xs">{headers.goldNote}</sup>
              </th>
              <th className="py-4 px-4 text-left font-bold text-[#333333] w-[15%]">
                {headers.business}
              </th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {rows.map((row) => {
              if (row.isSectionTitle) {
                return (
                  <tr key={row.id} className="border-b border-[#ebdef5] bg-gray-50/50">
                    <td colSpan={5} className="py-4 px-4 font-bold text-[#333333] text-sm">
                      {row.title}
                    </td>
                  </tr>
                );
              }
              if (row.colSpanValues !== undefined && row.colSpanValues !== "") {
                return (
                  <tr key={row.id} className="border-b border-[#ebdef5] hover:bg-purple-50/35 transition-colors">
                    <td colSpan={2} className="py-4 px-4 border-r border-[#ebdef5] align-middle font-medium">
                      {row.serviceName.map((text, idx) => (
                        <p key={idx} className={idx > 0 ? "mt-2" : ""}>{text}</p>
                      ))}
                    </td>
                    <td colSpan={3} className="py-4 px-4 align-middle font-normal whitespace-pre-line">
                      {row.colSpanValues}
                    </td>
                  </tr>
                );
              }
              if (row.hasSubTypes) {
                return (
                  <React.Fragment key={row.id}>
                    {row.subTypes.map((sub, subIndex) => (
                      <tr key={sub.id} className="border-b border-[#ebdef5] hover:bg-purple-50/30 transition-colors">
                        {subIndex === 0 && (
                          <td
                            rowSpan={row.subTypes.length}
                            className="py-4 px-4 border-r border-[#ebdef5] align-top w-[20%] font-medium"
                          >
                            {row.serviceName.map((text, idx) => (
                              <p key={idx} className={idx > 0 ? "mt-2" : ""}>{text}</p>
                            ))}
                          </td>
                        )}
                        <td className="py-4 px-4 border-r border-[#ebdef5] font-medium align-top">
                          {sub.type}
                        </td>
                        <td className="py-4 px-4 border-r border-[#ebdef5] align-top whitespace-pre-line leading-relaxed">
                          {sub.standard}
                        </td>
                        <td className="py-4 px-4 border-r border-[#ebdef5] align-top whitespace-pre-line leading-relaxed">
                          {sub.gold}
                        </td>
                        <td className="py-4 px-4 align-top whitespace-pre-line leading-relaxed">
                          {sub.business}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                );
              }
              return (
                <tr key={row.id} className="border-b border-[#ebdef5] hover:bg-purple-50/30 transition-colors last:border-b-0">
                  <td colSpan={2} className="py-4 px-4 border-r border-[#ebdef5] align-middle">
                    {row.serviceName.map((paragraph, idx) => (
                      <p key={idx} className={idx > 0 ? "mt-3" : ""}>
                        {paragraph}
                      </p>
                    ))}
                  </td>
                  <td className="py-4 px-4 border-r border-[#ebdef5] align-middle whitespace-pre-line">
                    {row.standard}
                  </td>
                  <td className="py-4 px-4 border-r border-[#ebdef5] align-middle whitespace-pre-line">
                    {row.gold}
                  </td>
                  <td className="py-4 px-4 align-middle whitespace-pre-line">
                    {row.business}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="space-y-3 text-sm text-[#333333] px-1">
        {footnotes.map((fn, index) => (
          <div key={index} className="flex items-start space-x-2 leading-relaxed">
            {fn.id ? (
              <span className="font-bold text-[#6b11cb] min-w-[20px]">[{fn.id}]</span>
            ) : (
              <span className="min-w-[20px]" />
            )}
            <p>{fn.text || fn.subText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VisaBusinessiMasin3;