import React, { useEffect, useState } from 'react';
import Loan16iMasin2 from './loan16-imasin2';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const Loan16iMasin3 = ({ activeTab, setActiveTab }) => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConditionsFromFirebase = async () => {
      try {
        const docRef = doc(db, 'loans16iMasin2', 'conditionsDetails');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPageData(docSnap.data());
        } else {
          console.log('Փաստաթուղթը գոյություն չունի loans16iMasin2 կոլեկցիայում!');
        }
      } catch (error) {
        console.error('Սխալ Firebase-ից տվյալներ ստանալիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConditionsFromFirebase();
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-gray-500 font-sans">Բեռնվում է...</div>;
  }

  if (!pageData) {
    return <div className="text-center py-12 text-gray-500 font-sans">Տվյալներ չգտնվեցին:</div>;
  }

  const { tabs, conditions } = pageData;

  return (
    <div className="max-w-6xl mx-auto my-12 px-4 font-sans text-[#333333]">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab ? 'text-[#6b11cb]' : 'text-gray-500 hover:text-gray-700'
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
      <div className="overflow-x-auto border border-purple-100 rounded-2xl shadow-sm bg-white">
        <table className="w-full border-collapse text-left text-[15px]">
          <tbody>
            {conditions.map((row, index) => (
              <tr 
                key={row.id} 
                className={index !== conditions.length - 1 ? 'border-b border-gray-100' : ''}
              >
                <td className="py-4 px-6 font-bold text-gray-500 w-12 align-top">
                  {row.id}.
                </td>
                <td className="py-4 px-6 font-semibold text-gray-800 w-1/3 align-top">
                  {row.title}
                </td>
                <td className="py-4 px-6 text-gray-600 align-top whitespace-pre-line">
                  {row.subTable ? (
                    <div className="grid grid-cols-2 gap-4 max-w-xs">
                      <div>
                        <span className="block text-xs text-gray-400 mb-1">{row.subTable.headers[0]}</span>
                        <span className="font-bold text-[#6b11cb]">{row.subTable.values[0]}</span>
                      </div>
                      <div>
                        <span className="block text-xs text-gray-400 mb-1">{row.subTable.headers[1]}</span>
                        <span className="font-bold text-[#6b11cb]">{row.subTable.values[1]}</span>
                      </div>
                    </div>
                  ) : (
                    row.description
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Loan16iMasin3;