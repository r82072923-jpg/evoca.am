import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const tabs = [
  'Վարկի մասին',
  'Պայմաններ և սակագներ',
];

const BusinessLoan8iMasin3 = ({ activeTab, setActiveTab }) => {
  const [termsData, setTermsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTermsData = async () => {
      try {
        const docRef = doc(db, "businessLoan8iMasin2", "loanTermsDoc");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTermsData(docSnap.data());
          console.log("Տվյալները հաջողությամբ բեռնվեցին Firebase-ից։");
        } else {
          console.log("Նման փաստաթուղթ գոյություն չունի Firebase-ում:");
        }
      } catch (error) {
        console.error("Սխալ տվյալների բեռնման ժամանակ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTermsData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 font-sans text-lg text-[#6b11cb]">
        Բեռնվում է...
      </div>
    );
  }

  if (!termsData) {
    return (
      <div className="flex justify-center items-center h-64 font-sans text-lg text-red-500">
        Տվյալները չհաջողվեց բեռնել։
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 font-sans">
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
      <div className="border border-purple-200 rounded-lg overflow-hidden shadow-sm bg-white mb-10">
        <table className="w-full border-collapse text-left">
          <tbody>
            <tr className="border-b border-purple-100">
              <td className="w-1/4 p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Արժույթը
              </td>
              <td className="w-3/4 p-4 text-gray-700">
                {termsData.currency}
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Վարկառուները
              </td>
              <td className="p-4 text-gray-700">
                <ul className="space-y-2">
                  {termsData.borrowers?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Նպատակը
              </td>
              <td className="p-4 text-gray-700 space-y-3">
                <p>{termsData.purpose?.intro}</p>
                <ul className="space-y-2 pl-2">
                  {termsData.purpose?.list?.map((purposeItem, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                      <span>{purposeItem}</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Սահմանաչափերը
              </td>
              <td className="p-4 text-gray-700 p-0">
                <table className="w-full">
                  <tbody>
                    {termsData.limits?.map((limit, index) => (
                      <tr key={index} className={index !== termsData.limits.length - 1 ? "border-b border-purple-100" : ""}>
                        <td className="w-1/3 p-4 text-gray-600 border-r border-purple-100 align-top">
                          {limit.label}
                        </td>
                        <td className="w-2/3 p-4 text-gray-800 font-medium">
                          {limit.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Տրամադրման եղանակը
              </td>
              <td className="p-4 text-gray-700">
                {termsData.disbursementMethod}
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Մարման ժամկետը
              </td>
              <td className="p-4 text-gray-700">
                {termsData.loanTerm}
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Տարեկան անվանական տոկոսադրույքը
              </td>
              <td className="p-4 text-gray-700 p-0">
                <table className="w-full">
                  <tbody>
                    {termsData.interestRates?.map((rateObj, index) => (
                      <tr key={index} className={index !== termsData.interestRates.length - 1 ? "border-b border-purple-100" : ""}>
                        <td className="w-3/4 p-4 text-gray-600 border-r border-purple-100 align-top">
                          {rateObj.range}
                        </td>
                        <td className="w-1/4 p-4 text-[#6b11cb] font-extrabold text-right">
                          {rateObj.rate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Գրավի առարկա
              </td>
              <td className="p-4 text-gray-700">
                <ul className="space-y-2">
                  {termsData.collateral?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Վարկ/գրավ ընունելի սահմանաչափերը
              </td>
              <td className="p-4 text-gray-700 p-0">
                <table className="w-full">
                  <tbody>
                    {termsData.ltvLimits?.map((item, index) => (
                      <tr key={index} className={index !== termsData.ltvLimits.length - 1 ? "border-b border-purple-100" : ""}>
                        <td className="w-2/3 p-4 text-gray-600 border-r border-purple-100 align-top">
                          {item.range}
                        </td>
                        <td className="w-1/3 p-4 text-gray-800 font-medium">
                          {item.limit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Ապահովագրություն
              </td>
              <td className="p-4 text-gray-700">
                {termsData.insurance}
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Պահանջներ երաշխավոր անձանց նկատմամբ
              </td>
              <td className="p-4 text-gray-700">
                <ul className="space-y-2">
                  {termsData.guarantorRequirements?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Գանձվող վճարներ
              </td>
              <td className="p-4 text-gray-700 p-0">
                <table className="w-full">
                  <tbody>
                    {termsData.fees?.map((fee, index) => (
                      <tr key={index} className={index !== termsData.fees.length - 1 ? "border-b border-purple-100" : ""}>
                        <td className="w-1/2 p-4 text-gray-600 border-r border-purple-100 align-top">
                          {fee.name}
                        </td>
                        <td className="w-1/2 p-4 text-gray-800 font-medium">
                          {fee.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="border-b border-purple-100">
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Պետական տուրքեր և այլ ծախսեր
              </td>
              <td className="p-4 text-gray-700">
                <ul className="space-y-2">
                  {termsData.stateTaxesAndExpenses?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-800 bg-purple-50/50 border-r border-purple-100 align-top">
                Լրացուցիչ պայմաններ
              </td>
              <td className="p-4 text-gray-700 space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">• Ստանդարտ էներգաարդյունավետ ներդրումների պարագայում՝</p>
                  <ul className="space-y-2 pl-4">
                    {termsData.additionalConditions?.standard?.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#6b11cb] font-bold mt-[2px]">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="flex items-start gap-2">
                  <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                  <span>{termsData.additionalConditions?.nonStandard}</span>
                </p>
                <p className="flex items-start gap-2 font-medium text-gray-900 bg-purple-50/40 p-3 rounded-lg">
                  <span className="text-[#6b11cb] font-bold mt-[2px]">•</span>
                  <span>{termsData.additionalConditions?.note}</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div> 
      <div className="mt-8 space-y-4">
        <h3 className="text-[#6b11cb] font-bold text-lg">Զգուշացում</h3>
        <div className="space-y-3 text-gray-700 text-sm md:text-base">
          {termsData.warnings?.map((warning, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-[#6b11cb] font-bold text-xl leading-none mt-[2px]">•</span>
              <p>{warning}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessLoan8iMasin3;