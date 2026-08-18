import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog'; 
import { collection, query, limit, getDocs } from "firebase/firestore";

const tabs = [
  'Վարկի մասին',
  'Պայմաններ',
  'Պահանջվող փաստաթղթերի ցանկ'
];

const Loan8iMasin3 = ({ activeTab, setActiveTab }) => {
  const [loanData, setLoanData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "loans8iMasin2"), limit(1)); 
        const querySnapshot = await getDocs(q);
        
        let fetchedData = null;
        querySnapshot.forEach((doc) => {
          fetchedData = doc.data();
        });
        
        setLoanData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error("Սխալ Firebase-ից բեռնելիս: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const saveLoanDataToFirebase = () => {
    console.log("Տվյալների ուղարկում...");
  };

  if (loading) {
    return <div className="p-8 text-center text-lg font-bold text-gray-600">Տվյալները բեռնվում են Firebase-ից...</div>;
  }

  if (!loanData) {
    return <div className="p-8 text-center text-lg text-red-500">Տվյալներ չեն գտնվել Firebase-ում:</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto overflow-x-auto p-4">
      <button 
        onClick={saveLoanDataToFirebase}
        className="mt-6 bg-[#6b11cb] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#5a0eb0]"
      >
        Ուղարկել տվյալները Firebase
      </button>
      
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
              {activeTab === tab && (
                <span className="absolute bottom-[-18px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <table className="w-full border-collapse text-[14px] text-gray-800 font-sans">
        <tbody>
          <tr>
            <td className="border border-[#e6d9f2] p-4 text-center w-12">1.</td>
            <td className="border border-[#e6d9f2] p-4 font-medium w-64">Վարկի տրամադրման նպատակը</td>
            <td colSpan={2} className="border border-[#e6d9f2] p-4">{loanData.purpose}</td>
          </tr>

          <tr>
            <td className="border border-[#e6d9f2] p-4 text-center">2.</td>
            <td className="border border-[#e6d9f2] p-4 font-medium">Ովքեր կարող են դիմել</td>
            <td colSpan={2} className="border border-[#e6d9f2] p-4">{loanData.eligibleApplicants}</td>
          </tr>

          <tr>
            <td className="border border-[#e6d9f2] p-4 text-center">3.</td>
            <td className="border border-[#e6d9f2] p-4 font-medium">Վարկավորման արժույթը</td>
            <td colSpan={2} className="border border-[#e6d9f2] p-4">{loanData.currency}</td>
          </tr>

          {loanData.loanAmount && Object.entries(loanData.loanAmount).map(([key, val], idx, arr) => (
            <tr key={key}>
              {idx === 0 && (
                <>
                  <td rowSpan={arr.length} className="border border-[#e6d9f2] p-4 text-center align-top">4.</td>
                  <td rowSpan={arr.length} className="border border-[#e6d9f2] p-4 font-medium align-top">Վարկավորման գումար</td>
                </>
              )}
              <td className="border border-[#e6d9f2] p-4 w-1/2">{key}</td>
              <td className="border border-[#e6d9f2] p-4 w-1/4">{val}</td>
            </tr>
          ))}

          {loanData.repaymentPeriod && Object.entries(loanData.repaymentPeriod).map(([key, val], idx, arr) => (
            <tr key={key}>
              {idx === 0 && (
                <>
                  <td rowSpan={arr.length} className="border border-[#e6d9f2] p-4 text-center align-top">5.</td>
                  <td rowSpan={arr.length} className="border border-[#e6d9f2] p-4 font-medium align-top">Վարկի մարման ժամկետը</td>
                </>
              )}
              <td className="border border-[#e6d9f2] p-4">{key}</td>
              <td className="border border-[#e6d9f2] p-4">{val}</td>
            </tr>
          ))}

          {loanData.nominalInterestRateFixed && Object.entries(loanData.nominalInterestRateFixed).map(([key, val], idx, arr) => (
            <tr key={key}>
              {idx === 0 && (
                <>
                  <td rowSpan={arr.length} className="border border-[#e6d9f2] p-4 text-center align-top">6.</td>
                  <td rowSpan={arr.length} className="border border-[#e6d9f2] p-4 font-medium align-top">Տարեկան անվանական տոկոսադրույք /հաստատուն/</td>
                </>
              )}
              {idx === arr.length - 1 ? (
                <td colSpan={2} className="border border-[#e6d9f2] p-4">
                  <div className="flex justify-between items-center">
                    <span>{key}</span>
                    <span className="font-semibold">{val}</span>
                  </div>
                </td>
              ) : (
                <>
                  <td className="border border-[#e6d9f2] p-4">{key}</td>
                  <td className="border border-[#e6d9f2] p-4">{val}</td>
                </>
              )}
            </tr>
          ))}

          <tr>
            <td className="border border-[#e6d9f2] p-4 text-center">7.</td>
            <td className="border border-[#e6d9f2] p-4 font-medium">Տարեկան փաստացի տոկոսադրույք /հաստատուն/</td>
            <td colSpan={2} className="border border-[#e6d9f2] p-4">{loanData.actualInterestRateFixed}</td>
          </tr>

          {loanData.nominalInterestRateFloating && Object.entries(loanData.nominalInterestRateFloating).map(([key, val], idx, arr) => {
            const isLast = idx === arr.length - 1;
            const isNote = key === 'Լողացող տոկոսադրույքի փոփոխուն բաղադրիչի վերանայում';
            return (
              <tr key={key}>
                {idx === 0 && (
                  <>
                    <td rowSpan={arr.length} className="border border-[#e6d9f2] p-4 text-center align-top">8.</td>
                    <td rowSpan={arr.length} className="border border-[#e6d9f2] p-4 font-medium align-top">Տարեկան անվանական տոկոսադրույք /լողացող/</td>
                  </>
                )}
                {isNote ? (
                  <td colSpan={2} className="border border-[#e6d9f2] p-4">
                    <p className="mb-4">{val}</p>
                    <a href="#" className="text-purple-800 font-bold underline text-[13px]">
                      Լողացող տոկոսադրույքի հաշվարկման կարգ
                    </a>
                  </td>
                ) : isLast ? (
                  <td colSpan={2} className="border border-[#e6d9f2] p-4">
                    <div className="flex justify-between items-center">
                      <span>{key}</span>
                      <span className="font-semibold">{val}</span>
                    </div>
                  </td>
                ) : (
                  <>
                    <td className="border border-[#e6d9f2] p-4">{key}</td>
                    <td className="border border-[#e6d9f2] p-4">{val}</td>
                  </>
                )}
              </tr>
            );
          })}

          <tr>
            <td className="border border-[#e6d9f2] p-4 text-center">9.</td>
            <td className="border border-[#e6d9f2] p-4 font-medium">Տարեկան փաստացի տոկոսադրույք /լողացող/</td>
            <td colSpan={2} className="border border-[#e6d9f2] p-4">{loanData.actualInterestRateFloating}</td>
          </tr>

          <tr>
            <td className="border border-[#e6d9f2] p-4 text-center">10.</td>
            <td className="border border-[#e6d9f2] p-4 font-medium">Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք</td>
            <td colSpan={2} className="border border-[#e6d9f2] p-4">{loanData.earlyRepaymentPenalty}</td>
          </tr>

          <tr>
            <td className="border border-[#e6d9f2] p-4 text-center">11.</td>
            <td className="border border-[#e6d9f2] p-4 font-medium">Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
            <td colSpan={2} className="border border-[#e6d9f2] p-4">
              {loanData.latePaymentPenalties && loanData.latePaymentPenalties.map((item, i) => (
                <p key={i} className={i === 0 ? "mb-2" : ""}>{item};</p>
              ))}
            </td>
          </tr>

          <tr>
            <td className="border border-[#e6d9f2] p-4 text-center">12.</td>
            <td className="border border-[#e6d9f2] p-4 font-medium">Վարկի մարման ձևը</td>
            <td colSpan={2} className="border border-[#e6d9f2] p-4">{loanData.repaymentMethod}</td>
          </tr>

          <tr>
            <td className="border border-[#e6d9f2] p-4 text-center">13.</td>
            <td className="border border-[#e6d9f2] p-4 font-medium">Գրավ</td>
            <td colSpan={2} className="border border-[#e6d9f2] p-4">
              <ul className="list-decimal pl-5 space-y-1">
                {loanData.collateral && loanData.collateral.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </td>
          </tr>

          {loanData.loanToValueRatio && Object.entries(loanData.loanToValueRatio).map(([key, val], idx, arr) => (
            <tr key={key}>
              {idx === 0 && (
                <>
                  <td rowSpan={arr.length} className="border border-[#e6d9f2] p-4 text-center align-top">14.</td>
                  <td rowSpan={arr.length} className="border border-[#e6d9f2] p-4 font-medium align-top">Վարկ/գրավ հարաբերակցություն</td>
                </>
              )}
              <td className="border border-[#e6d9f2] p-4">{key === 'additionalNote' ? <strong>Ծանոթագրություն</strong> : key}</td>
              <td className="border border-[#e6d9f2] p-4">{val}</td>
            </tr>
          ))}

          <tr>
            <td className="border border-[#e6d9f2] p-4 text-center">15.</td>
            <td className="border border-[#e6d9f2] p-4 font-medium">Ապահովագրություն</td>
            <td colSpan={2} className="border border-[#e6d9f2] p-4">{loanData.insurance}</td>
          </tr>

          <tr>
            <td className="border border-[#e6d9f2] p-4 text-center">16.</td>
            <td className="border border-[#e6d9f2] p-4 font-medium">Վարկի տրամադրման եղանակը</td>
            <td colSpan={2} className="border border-[#e6d9f2] p-4">
              <ul className="list-disc pl-5 space-y-1">
                {loanData.disbursementMethod && loanData.disbursementMethod.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </td>
          </tr>

          <tr>
            <td className="border border-[#e6d9f2] p-4 text-center">17.</td>
            <td className="border border-[#e6d9f2] p-4 font-medium">Այլ պայմաններ և որոշման ժամկետներ</td>
            <td colSpan={2} className="border border-[#e6d9f2] p-4">
              <div className="font-bold mb-1">Այլ պայմաններ.</div>
              <ul className="list-disc pl-5 mb-4">
                {loanData.otherConditions && loanData.otherConditions.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <div className="font-bold mb-1">Որոշման կայացման ժամկետներ.</div>
              <ul className="list-disc pl-5">
                {loanData.decisionTerms && loanData.decisionTerms.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mt-6 text-sm text-gray-800 flex flex-col gap-4 font-sans">
        {loanData.footnotes && Object.entries(loanData.footnotes).map(([key, text]) => (
          <p key={key}>
            <span className="text-purple-800 font-bold mr-1">[{key}]</span> {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Loan8iMasin3;