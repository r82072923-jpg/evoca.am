import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog'; // Համոզվիր, որ ճիշտ ես նշել ֆայլիդ ճանապարհը
import { doc, getDoc } from "firebase/firestore";

const tabs = ['Վարկի մասին', 'Պայմաններ'];

function Loan9iMasin3({ activeTab, setActiveTab }) {
  const [loanConditionsData, setLoanConditionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Տվյալների բեռնումը Firebase-ից բաղադրիչը բացվելիս
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "loans9iMasin2", "conditions");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // Ստանում ենք տվյալները և գրանցում ստեյթում
          setLoanConditionsData(docSnap.data().loanConditionsData || []);
        } else {
          console.log("Տվյալներ չեն գտնվել այս փաստաթղթում:");
        }
      } catch (error) {
        console.error("Սխալ տվյալներըբեռնելիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center p-8 text-gray-600 font-sans">Բեռնվում է տվյալները Firebase-ից...</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 font-sans text-gray-800">

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

      <div className="w-full border border-purple-200 rounded-lg overflow-hidden bg-white ">
        <table className="w-full border-collapse text-gray-700">
          <tbody>
            {loanConditionsData.map((row) => (
              <tr key={row.id} className="border-b border-purple-100 last:border-b-0 text-gray-700">
                
                <td className="w-12 p-4 text-center align-middle border-r border-purple-100 text-gray-700">
                  {row.id}.
                </td>

                <td className="w-1/3 p-4 align-middle border-r border-purple-100 text-gray-700 text-sm sm:text-base">
                  {row.title}
                </td>

                <td className="p-4 align-middle text-sm sm:text-[15px] leading-relaxed text-gray-700">
                  {typeof row.content === 'string' && row.content}

                  {row.id === 4 && row.content && (
                    <>
                      <div className="font-semibold mb-1">{row.content.range}</div>
                      <div>{row.content.description}</div>
                    </>
                  )}

                  {row.id === 6 && row.content && (
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 pb-1 border-b border-gray-100 ">
                        <span className="text-gray-600">Անվանական</span>
                        <span className="font-semibold text-gray-900">{row.content.nominal}</span>
                      </div>
                      <div className="grid grid-cols-2 pb-1 border-b border-gray-100">
                        <span className="text-gray-600">Փաստացի</span>
                        <span className="font-semibold text-gray-900">{row.content.effective}</span>
                      </div>
                      <div className="pt-1">{row.content.note}</div>
                    </div>
                  )}

                  {row.id === 10 && row.content && (
                    <div className="space-y-1">
                      <div>{row.content.overdueLoan},</div>
                      <div>{row.content.overdueInterest}:</div>
                    </div>
                  )}

                  {row.id === 12 && Array.isArray(row.content) && (
                    <div className="space-y-2">
                      {row.content.map((text, i) => (
                        <div key={i}>{text}</div>
                      ))}
                    </div>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Loan9iMasin3;