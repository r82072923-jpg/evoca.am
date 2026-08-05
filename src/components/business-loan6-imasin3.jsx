import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfog'; // Համոզվիր, որ ուղին ճիշտ է նշված

const BusinessLoan6iMasin3 = ({ activeTab, setActiveTab }) => {
  const [loanData, setLoanData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'businessLoan6iMasin3', 'main_info');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setLoanData(docSnap.data());
        } else {
          console.log("Փաստաթուղթը չի գտնվել:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full text-center py-10 font-sans text-[#6b11cb] font-semibold">
        Բեռնվում է...
      </div>
    );
  }

  if (!loanData) {
    return (
      <div className="w-full text-center py-10 font-sans text-red-500 font-semibold">
        Տվյալները չգտնվեցին:
      </div>
    );
  }
  const tabs = [
    'Վարկի մասին',
    'Պայմաններ և սակագներ',
    'ՓՄՁ վարկի օնլայն հայտ',
    'Պահանջվող փաստաթղթեր',
  ];
  return (
    <div className="w-full font-sans text-[#1a1a1a]">
      <div className="border border-purple-200 rounded-lg overflow-hidden flex flex-col w-full mb-10 shadow-sm">
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
        {/* Արժույթ */}
        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Արժույթ
          </div>
          <div className="md:w-2/3 p-4">
            {loanData.currency}
          </div>
        </div>

        {/* Վարկառուներ */}
        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Վարկառուներ
          </div>
          <div className="md:w-2/3 p-4">
            {loanData.borrowers}
          </div>
        </div>

        {/* Վարկի տրամադրման նպատակ */}
        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Վարկի տրամադրման նպատակ
          </div>
          <div className="md:w-2/3 p-4 leading-relaxed">
            {loanData.purpose}
          </div>
        </div>

        {/* Սահմանաչափերը */}
        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Սահմանաչափերը
          </div>
          <div className="md:w-2/3 p-4">
            {loanData.limit}
          </div>
        </div>

        {/* Տրամադրման եղանակ */}
        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Տրամադրման եղանակ
          </div>
          <div className="md:w-2/3 p-4">
            {loanData.method}
          </div>
        </div>

        {/* Մարման ժամկետ */}
        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Մարման ժամկետ
          </div>
          <div className="md:w-2/3 p-4">
            {loanData.duration}
          </div>
        </div>

        {/* Վարկի մարման եղանակ */}
        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Վարկի մարման եղանակ
          </div>
          <div className="md:w-2/3 p-4">
            <ul className="list-disc pl-5 space-y-1">
              {loanData.repaymentMethods?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Տոկոսադրույք */}
        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Տոկոսադրույք (տարեկան)
          </div>
          <div className="md:w-2/3 p-4">
            <div className="grid grid-cols-2 gap-2 mb-4 max-w-sm">
              <div className="font-bold border-b border-gray-200 pb-1">ՀՀ դրամ</div>
              <div className="border-b border-gray-200 pb-1">{loanData.interestRates?.amd}</div>
              
              <div className="font-bold border-b border-gray-200 pb-1">ԱՄՆ դոլար</div>
              <div className="border-b border-gray-200 pb-1">{loanData.interestRates?.usd}</div>
              
              <div className="font-bold pb-1">Եվրո</div>
              <div className="pb-1">{loanData.interestRates?.eur}</div>
            </div>
            <p className="text-sm text-gray-500 italic mt-2">
              {loanData.interestRates?.note}
            </p>
          </div>
        </div>

        {/* Վարկի ապահովվածության միջոց */}
        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Վարկի ապահովվածության միջոց
          </div>
          <div className="md:w-2/3 p-4">
            <ul className="list-disc pl-5 space-y-1">
              {loanData.collateralOptions?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր */}
        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր
          </div>
          <div className="md:w-2/3 p-4">
            <ul className="list-disc pl-5 space-y-1">
              {loanData.penaltiesForDelay?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ժամկետից շուտ մարելու տուգանք */}
        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Ժամկետից շուտ մարելու տուգանք
          </div>
          <div className="md:w-2/3 p-4">
            <ul className="list-disc pl-5 space-y-1">
              {loanData.earlyRepaymentPenalty?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Գանձվող վճարներ */}
        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Գանձվող վճարներ
          </div>
          <div className="md:w-2/3 p-4">
            <ul className="list-disc pl-5 space-y-1">
              {loanData.fees?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Պետական տուրքեր և այլ ծախսեր */}
        <div className="flex flex-col md:flex-row bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Պետական տուրքեր և այլ ծախսեր
          </div>
          <div className="md:w-2/3 p-4">
            <ul className="list-disc pl-5 space-y-1">
              {loanData.stateTaxesAndExpenses?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      <div className="mb-10">
        <h3 className="text-lg font-extrabold text-[#6b11cb] mb-4">Անհրաժեշտ տեղեկատվություն</h3>
        <h4 className="text-md font-bold text-gray-900 mb-3">Վարկ/գրավ ընդունելի սահմանաչափերը՝ ըստ գրավի տեսակների</h4>
        
        <ul className="list-disc pl-6 space-y-2 text-[#1a1a1a]">
          {loanData.acceptableLimitsByCollateral?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-10">
        <h3 className="text-lg font-extrabold text-[#6b11cb] mb-4">Որոշումների կայացման և վարկերի տրամադրման ժամկետները</h3>
        
        <ul className="list-disc pl-6 space-y-2 text-[#1a1a1a]">
          {loanData.decisionAndProvisionTimes?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-10">
        <h3 className="text-lg font-extrabold text-[#6b11cb] mb-4">Վարկի վերաբերյալ որոշման կայացման չափանիշները</h3>
        <h4 className="text-md font-bold text-gray-900 mb-3">Դրական որոշման կայացման չափանիշները՝</h4>
        
        <ul className="list-disc pl-6 space-y-2 text-[#1a1a1a]">
          {loanData.decisionCriteriaPositive?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-10">
        <h4 className="text-md font-bold text-gray-900 mb-3">Մերժման չափանիշները՝</h4>
        
        <ul className="list-disc pl-6 space-y-2 text-[#1a1a1a]">
          {loanData.decisionCriteriaNegative?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-10">
        <h3 className="text-lg font-extrabold text-[#6b11cb] mb-4">Վարկերի մարման, տոկոսների հաշվեգրման և վճարման կարգը</h3>
        
        <ul className="list-disc pl-6 space-y-2 text-[#1a1a1a]">
          {loanData.repaymentProcedures?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-10">
        <h3 className="text-lg font-extrabold text-[#6b11cb] mb-4">Զգուշացում</h3>
        
        <ul className="list-disc pl-6 space-y-2 text-[#1a1a1a]">
          {loanData.warnings?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default BusinessLoan6iMasin3;