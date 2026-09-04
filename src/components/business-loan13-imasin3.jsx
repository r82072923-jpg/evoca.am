import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

const tabs = [
  'Վարկի մասին',
  'Պայմաններ և սակագներ',
];

const BusinessLoan13iMasin3 = ({ activeTab, setActiveTab }) => {
  const [loanConditionsData, setLoanConditionsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "businessLoan13iMasin2"));
        
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          setLoanConditionsData(data);
        } else {
          console.log("Տվյալներ չեն գտնվել Firebase-ում:");
        }
      } catch (error) {
        console.error("Սխալ Firebase-ից տվյալներ ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirebase();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 font-sans text-lg text-purple-700">
        Բեռնվում է...
      </div>
    );
  }

  if (!loanConditionsData) {
    return (
      <div className="flex justify-center items-center h-64 font-sans text-lg text-red-500">
        Տվյալները չհաջողվեց գտնել բազայում:
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 font-sans space-y-6">
      <div className="border-b border-gray-200 mb-12 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="overflow-x-auto w-full border border-purple-100 rounded-sm shadow-sm bg-white border-t-4 border-t-[#6b11cb]">
        <table className="w-full text-sm md:text-base text-left text-gray-800 border-collapse">
          <tbody className="divide-y divide-purple-100">
            <tr className="divide-x divide-purple-100">
              <td className="w-1/4 p-4 font-bold align-top bg-white">
                {loanConditionsData.loanTypes?.title}
              </td>
              <td className="w-[37.5%] p-4 align-top">
                <div className="mb-6 font-medium">{loanConditionsData.loanTypes?.columns?.[0]?.items?.[0]}</div>
                <div className="font-medium">{loanConditionsData.loanTypes?.columns?.[0]?.items?.[1]}</div>
              </td>
              <td className="w-[37.5%] p-4 align-top">
                <div className="mb-6 font-medium">{loanConditionsData.loanTypes?.columns?.[1]?.items?.[0]}</div>
                <div className="font-medium">{loanConditionsData.loanTypes?.columns?.[1]?.items?.[1]}</div>
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td className="p-4 font-bold align-top bg-white">{loanConditionsData.currency?.title}</td>
              <td colSpan={2} className="p-4 font-medium align-top">
                {loanConditionsData.currency?.value}
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td className="p-4 font-bold align-top bg-white">{loanConditionsData.borrower?.title}</td>
              <td colSpan={2} className="p-4 font-medium align-top">
                {loanConditionsData.borrower?.value}
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td className="p-4 font-bold align-top bg-white">{loanConditionsData.purpose?.title}</td>
              <td className="p-4 align-top">
                <ul className="list-disc pl-5 space-y-2 marker:text-[#6b11cb] text-gray-700 font-medium">
                  {loanConditionsData.purpose?.column1?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </td>
              <td className="p-4 align-top">
                <ul className="list-disc pl-5 space-y-2 marker:text-[#6b11cb] text-gray-700 font-medium">
                  {loanConditionsData.purpose?.column2?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td className="p-4 font-bold align-top bg-white">{loanConditionsData.limit?.title}</td>
              <td colSpan={2} className="p-4 font-medium align-top">
                {loanConditionsData.limit?.value}
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td className="p-4 font-bold align-top bg-white">{loanConditionsData.provisionMethod?.title}</td>
              <td colSpan={2} className="p-4 font-medium align-top">
                {loanConditionsData.provisionMethod?.value}
              </td>
            </tr>
            <tr className="divide-x divide-purple-100 border-b border-purple-100">
              <td className="p-4 font-bold align-top bg-white" rowSpan={2}>
                {loanConditionsData.term?.title}
              </td>
              <td colSpan={2} className="p-4 font-medium align-top">
                {loanConditionsData.term?.general}
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td className="p-4 font-medium align-top text-gray-400">--------</td>
              <td className="p-4 font-medium align-top text-gray-700 leading-relaxed">
                {loanConditionsData.term?.details}
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td className="w-1/4 p-4 font-bold align-top bg-white" rowSpan={2}>
                {loanConditionsData.repaymentMethod?.title}
              </td>
              <td colSpan={2} className="p-4 align-top">
                {loanConditionsData.repaymentMethod?.lineType}
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td colSpan={2} className="p-4 align-top">
                <div className="mb-2 font-medium">{loanConditionsData.repaymentMethod?.graphicTitle}</div>
                <ul className="list-disc pl-5 space-y-2 marker:text-[#6b11cb] text-gray-700 font-medium">
                  {loanConditionsData.repaymentMethod?.options?.map((opt, index) => (
                    <li key={index}>{opt}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td className="p-4 font-bold align-top bg-white" rowSpan={2}>
                {loanConditionsData.interestRate?.title}
              </td>
              <td colSpan={2} className="p-4 align-top font-medium">
                {loanConditionsData.interestRate?.rates}
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td colSpan={2} className="p-4 align-top text-gray-700 leading-relaxed text-sm">
                {loanConditionsData.interestRate?.description}
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td className="p-4 font-bold align-top bg-white">
                {loanConditionsData.penalties?.title}
              </td>
              <td colSpan={2} className="p-4 align-top space-y-3 font-medium">
                <div>{loanConditionsData.penalties?.overdueLoan}</div>
                <div>{loanConditionsData.penalties?.overdueInterest}</div>
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td className="p-4 font-bold align-top bg-white">
                {loanConditionsData.unusedLimitRate?.title}
              </td>
              <td className="p-4 align-top font-medium">
                {loanConditionsData.unusedLimitRate?.col1}
              </td>
              <td className="p-4 align-top text-gray-400 font-medium">
                {loanConditionsData.unusedLimitRate?.col2}
              </td>
            </tr>
            <tr className="divide-x divide-purple-100 border-b border-purple-100">
              <td className="p-4 font-bold align-top bg-white">
                {loanConditionsData.security?.title}
              </td>
              <td colSpan={2} className="p-4 align-top">
                <ul className="list-disc pl-5 space-y-2 marker:text-[#6b11cb] text-gray-700 font-medium">
                  {loanConditionsData.security?.items?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td className="w-1/4 p-4 font-bold align-top bg-white">
                {loanConditionsData.guarantor?.title}
              </td>
              <td colSpan={2} className="p-4 align-top font-medium">
                {loanConditionsData.guarantor?.value}
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td className="p-4 font-bold align-top bg-white">
                {loanConditionsData.upfrontFee?.title}
              </td>
              <td colSpan={2} className="p-4 align-top font-medium">
                {loanConditionsData.upfrontFee?.value}
              </td>
            </tr>
            <tr className="divide-x divide-purple-100">
              <td className="p-4 font-bold align-top bg-white">
                {loanConditionsData.otherExpenses?.title}
              </td>
              <td colSpan={2} className="p-4 align-top">
                <ul className="list-disc pl-5 space-y-2 marker:text-[#6b11cb] text-gray-700 font-medium">
                  {loanConditionsData.otherExpenses?.items?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="space-y-4 px-2">
        <h3 className="text-lg font-bold text-gray-900">Զգուշացում</h3>
        <ul className="list-disc pl-5 space-y-3 marker:text-[#6b11cb] text-gray-700 text-sm md:text-base leading-relaxed">
          {loanConditionsData.warnings?.map((warning, index) => (
            <li key={index}>{warning}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BusinessLoan13iMasin3;