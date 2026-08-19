import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc, setDoc } from 'firebase/firestore';
const Loan11iMasin3 = ({ activeTab, setActiveTab }) => {
  const [loanData, setLoanData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "loans11iMasin2", "loanDocument");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setLoanData(docSnap.data());
        } else {
          console.log("Փաստաթուղթը չի գտնվել Firebase-ում:");
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
    return <div className="p-6 text-center text-gray-500 font-sans">Բեռնվում է...</div>;
  }

  if (!loanData) {
    return (
      <div className="p-6 text-center font-sans">
        <p className="text-red-500 mb-4">Տվյալները չգտնվեցին Firebase-ում:</p>
        <button 
          onClick={saveLoanData} 
          className="px-4 py-2 bg-[#6b11cb] text-white rounded font-bold hover:bg-opacity-90"
        >
          Գրել տվյալները Firebase
        </button>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto p-4 bg-white font-sans">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {loanData.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
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

      <table className="min-w-full border-collapse text-[13px] leading-relaxed text-[#333333] [&_td]:border [&_td]:border-[#E9E4F5] [&_td]:p-4 [&_td]:align-top">
        <tbody>
          {loanData.rows.map((row) => {
            if (row.id === 3) {
              return (
                <React.Fragment key={row.id}>
                  <tr>
                    <td rowSpan={3} className="w-10 text-center text-gray-500">{row.number}</td>
                    <td rowSpan={3} className="w-56 font-semibold">{row.title}</td>
                    <td>{row.subRows[0].currency}</td>
                    <td colSpan={row.subRows[0].colSpan}>{row.subRows[0].target}</td>
                  </tr>
                  <tr>
                    <td rowSpan={2}>{row.subRows[1].currency}</td>
                    <td colSpan={row.subRows[1].colSpan}>{row.subRows[1].target}</td>
                  </tr>
                  <tr>
                    <td colSpan={row.subRows[2].colSpan}>{row.subRows[2].target}</td>
                  </tr>
                </React.Fragment>
              );
            }

            if (row.id === 4 || row.id === 5) {
              return (
                <React.Fragment key={row.id}>
                  <tr>
                    <td rowSpan={2} className="w-10 text-center text-gray-500">{row.number}</td>
                    <td rowSpan={2} className="w-56 font-semibold">{row.title}</td>
                    <td colSpan={row.subRows[0].col1Span}>{row.subRows[0].col1}</td>
                    <td colSpan={row.subRows[0].col2Span}>{row.subRows[0].col2}</td>
                  </tr>
                  <tr>
                    <td colSpan={row.subRows[1].col1Span}>{row.subRows[1].col1}</td>
                    <td colSpan={row.subRows[1].col2Span}>{row.subRows[1].col2}</td>
                  </tr>
                </React.Fragment>
              );
            }

            if (row.id === 6) {
              return (
                <React.Fragment key={row.id}>
                  <tr>
                    <td rowSpan={7} className="w-10 text-center text-gray-500">{row.number}</td>
                    <td rowSpan={7} className="w-56 font-semibold">{row.title}</td>
                    {row.headers.map((h, i) => (
                      <td key={i} className="font-semibold">{h}</td>
                    ))}
                  </tr>
                  {row.ratesRows.map((r, i) => (
                    <tr key={i}>
                      <td>
                        <div className="mb-4">{r.currency}</div>
                        {r.sub && <div>{r.sub}</div>}
                      </td>
                      {r.fixed && <td>{r.fixed}</td>}
                      {r.effective1 && <td>{r.effective1}</td>}
                      <td>{r.floating}</td>
                      <td>{r.effective2}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={3}>{row.threshold}</td>
                    <td colSpan={2}>{row.thresholdVal}</td>
                  </tr>
                  <tr>
                    <td colSpan={5}>
                      <p className="mb-4">{row.footerNote}</p>
                      <a href="#" className="text-[#5F259F] font-bold underline hover:text-opacity-80 transition-opacity">
                        {row.linkText}
                      </a>
                    </td>
                  </tr>
                </React.Fragment>
              );
            }

            if (row.id === 11) {
              return (
                <React.Fragment key={row.id}>
                  <tr>
                    <td rowSpan={3} className="w-10 text-center text-gray-500">{row.number}</td>
                    <td rowSpan={3} className="w-56 font-semibold">
                      {row.title}<sup className="text-[#5F259F] font-bold ml-0.5">{row.sup}</sup>
                    </td>
                    <td colSpan={2}>{row.subRows[0].col1}</td>
                    <td colSpan={3}>{row.subRows[0].col2}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>{row.subRows[1].col1}</td>
                    <td colSpan={3}>{row.subRows[1].col2}</td>
                  </tr>
                  <tr>
                    <td colSpan={5}>{row.subRows[2].col1}</td>
                  </tr>
                </React.Fragment>
              );
            }
            return (
              <tr key={row.id}>
                <td className="w-10 text-center text-gray-500">{row.number}</td>
                <td className="w-56 font-semibold">{row.title}</td>
                <td colSpan={row.colSpan}>
                  {row.content && <p>{row.content}</p>}
                  {row.contentWithSup && <p dangerouslySetInnerHTML={{ __html: row.contentWithSup }} />}
                  {row.paragraphs && row.paragraphs.map((p, idx) => (
                    <p key={idx} className={idx < row.paragraphs.length - 1 ? "mb-4" : ""}>{p}</p>
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="mt-6 space-y-3 text-[13px] text-[#333333]">
        {loanData.footnotes.map((fn) => (
          <div key={fn.id} className="flex items-start">
            <span className="text-[#5F259F] font-bold mr-1.5">{fn.id}</span>
            <span>{fn.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loan11iMasin3;