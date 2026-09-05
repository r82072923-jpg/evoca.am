import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

const tabs = [
  'Վարկի մասին',
  'Պայմաններ և սակագներ',
  'Պահանջվող փաստաթղթեր'
];

function BusinessLoan15iMasin3({ activeTab, setActiveTab }) {
  const [loanData, setLoanData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "businessLoan15iMasin2"));
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setLoanData(docData);
        } else {
          setError("Տվյալներ չեն գտնվել Firebase-ում:");
        }
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("Սխալ տեղի ունեցավ տվյալները բեռնելիս։");
      } finally {
        setLoading(false);
      }
    };

    fetchLoanData();
  }, []);

  const renderTableContent = (content) => {
    if (typeof content === 'string') {
      return <p>{content}</p>;
    }
    
    if (Array.isArray(content)) {
      return (
        <ul className="list-disc pl-4 space-y-1">
          {content.map((item, idx) => {
            if (typeof item === 'string') {
              return <li key={idx}>{item}</li>;
            }
            if (item.currency) {
              return (
                <li key={idx}>
                  <strong>{item.currency}</strong> - Հաստատուն՝ {item.fixed}, Լողացող՝ {item.floating}
                </li>
              );
            }
            return null;
          })}
        </ul>
      );
    }
    
    if (typeof content === 'object' && content !== null) {
      return (
        <div className="space-y-2">
          {content.types && (
            <ul className="list-disc pl-4 space-y-1">
              {content.types.map((type, idx) => (
                <li key={idx}>{type}</li>
              ))}
            </ul>
          )}
          {content.description && <p>{content.description}</p>}
        </div>
      );
    }
    
    return null;
  };

  if (loading) {
    return <div className="text-center py-10 text-lg font-medium text-gray-600">Բեռնվում է տվյալները Firebase-ից...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500 font-medium">{error}</div>;
  }

  if (!loanData) {
    return null;
  }

  const {
    tableData,
    limitsData,
    decisionTermsData,
    positiveCriteria,
    rejectionCriteria,
    repaymentRules,
    creditLinesData,
    earlyRepaymentText,
    warningsData
  } = loanData;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white font-sans">
      <div className="border-b border-gray-200 mb-8 overflow-x-auto">
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
      <div className="border-t-4 border-[#6F11B7] w-full shadow-sm">
        <table className="w-full border-collapse border border-purple-100 text-sm text-gray-800">
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-b border-purple-100">
                <td className="border-r border-purple-100 p-4 w-12 align-top font-medium text-center">
                  {row.id}
                </td>
                <td className="border-r border-purple-100 p-4 w-1/4 align-top font-medium">
                  {row.title}
                </td>
                <td className="p-4 align-top">
                  {renderTableContent(row.content)}
                </td>
              </tr>
            ))}
            <tr className="border-b border-purple-100">
              <td colSpan="3" className="p-4 align-top text-xs md:text-sm text-gray-700 space-y-3">
                <p>
                  *Անհատ ձեռնարկատեր հանդիսացող ֆիզիկական անձի տարիքը վարկի սպասարկման ողջ ընթացքում չպետք է գերազանցի 70 տարեկանը:
                </p>
                <p>
                  **120 ամիսը գերազանցող ժամկետով ֆինանսավորում կարող է տրամադրվել միայն հիմնական միջոցների ձեռքբերման (եթե գրավը հանդիսանում է անշարժ գույք և/կամ ձեռք է բերվում անշարժ գույք), կառուցապատման, նախագծերի ֆինանսավորման նպատակով:
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Անհրաժեշտ տեղեկատվություն
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-gray-800">
          <li className="flex gap-3 items-start">
            <span className="text-[#6F11B7] text-lg mt-0.5">•</span>
            <p>
              Ձեզ հետ փոխհարաբերությունները կարգավորվում են վարկային պայմանագրով՝ ՀՀ օրենսդրական ակտերին համապատասխան:
            </p>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-[#6F11B7] text-lg mt-0.5">•</span>
            <p>
              Վարկավորման տոկոսադրույքները, ժամկետները, սահմանաչափերը, պայմանները և սկզբունքները սահմանվում են մեր «Վարկային քաղաքականությամբ» և վարկավորման գործընթացը կարգավորող ներքին այլ իրավական ակտերով:
            </p>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-[#6F11B7] text-lg mt-0.5">•</span>
            <p>
              Մենք՝ Ծրագրային վարկավորման գործընթացներում ընդգրկվելու դեպքում, վարկային միջոցները տրամադրում ենք տվյալ Ծրագրի վարկավորման պայմաններով՝ տոկոսադրույքներ, սահմանաչափեր, մարման ժամկետ, գրավ/վարկ հարաբերակցություն և այլն (Ծրագրային վարկավորման պայմանները չեն կարգավորվում մեր «Վարկային քաղաքականությամբ»):
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Վարկ/գրավ ընդունելի սահմանաչափերը՝ ըստ գրավի տեսակների
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-gray-800">
          {limitsData?.map((item, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="text-[#6F11B7] text-xl leading-none mt-0.5">•</span>
              <p className="leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Որոշումների կայացման և վարկերի տրամադրման ժամկետները
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-gray-800">
          {decisionTermsData?.map((item, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="text-[#6F11B7] text-xl leading-none mt-0.5">•</span>
              <p className="leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Վարկի վերաբերյալ որոշման կայացման չափանիշները
        </h3>
        <div className="mb-6">
          <h4 className="text-gray-900 font-bold text-base md:text-lg mb-4">
            Դրական որոշման կայացման չափանիշները՝
          </h4>
          <ul className="space-y-4 text-sm md:text-base text-gray-800">
            {positiveCriteria?.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="text-[#6F11B7] text-xl leading-none mt-0.5">•</span>
                <p className="leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 font-bold text-base md:text-lg mb-4">
            Մերժման չափանիշները՝
          </h4>
          <ul className="space-y-4 text-sm md:text-base text-gray-800">
            {rejectionCriteria?.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="text-[#6F11B7] text-xl leading-none mt-0.5">•</span>
                <p className="leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Վարկերի մարման, տոկոսների հաշվեգրման և վճարման կարգը
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-gray-800">
          {repaymentRules?.map((rule, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="text-[#6F11B7] text-xl leading-none mt-0.5">•</span>
              <div className="space-y-2">
                <p className="leading-relaxed">{rule.text}</p>
                {rule.subItems && (
                  <ul className="space-y-2 pl-4">
                    {rule.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="flex gap-2 items-start">
                        <span className="text-gray-400 mt-1">-</span>
                        <span className="leading-relaxed">{subItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Վարկային գծերի տրամադրումը
        </h3>
        <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-4">
          {creditLinesData?.intro}
        </p>
        <ul className="space-y-4 text-sm md:text-base text-gray-800">
          {creditLinesData?.items?.map((item, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="text-[#6F11B7] text-xl leading-none mt-0.5">•</span>
              <p className="leading-relaxed">
                <strong className="text-gray-900">{item.title}՝</strong> {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Վաղաժամկետ մարման պայմանները
        </h3>
        <p className="text-sm md:text-base text-gray-800 leading-relaxed">
          {earlyRepaymentText}
        </p>
      </div>
      <div className="mt-10 mb-8">
        <h3 className="text-[#6F11B7] font-bold text-lg md:text-xl mb-6">
          Զգուշացում
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-gray-800">
          {warningsData?.map((warning, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="text-[#6F11B7] text-xl leading-none mt-0.5">•</span>
              <p className="leading-relaxed">{warning}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BusinessLoan15iMasin3;