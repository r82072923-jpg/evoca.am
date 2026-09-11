import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const tabs = ['Վարկի մասին', 'Պայմաններ'];

const Loan17iMasin3 = ({ activeTab, setActiveTab }) => {
  const [loanTermsData, setLoanTermsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const docRef = doc(db, 'loan17iMasin2', 'pageDetails');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const fetchedData = docSnap.data();
          setLoanTermsData(fetchedData.terms || []);
        } else {
          console.log('Փաստաթուղթը գոյություն չունի!');
        }
      } catch (error) {
        console.error('Սխալ Firebase-ից տվյալներ ստանալիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirebase();
  }, []);

  if (loading) return <div className="text-center my-8 text-gray-500">Բեռնվում է...</div>;

  return (
    <div className="max-w-6xl mx-auto my-8 px-4 font-sans text-[#333333]">
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

      <div className="border border-[#e5e0fa] rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <tbody>
            {loanTermsData.map((row) => (
              <tr
                key={row.id}
                className="border-b border-[#e5e0fa] last:border-b-0 hover:bg-[#faf9fe] transition-colors"
              >
                <td className="py-3 px-3 text-xs sm:text-sm font-bold text-gray-800 align-top w-12 border-r border-[#e5e0fa]">
                  {row.id}.
                </td>

                <td className="py-3 px-4 text-xs sm:text-sm font-bold text-gray-900 align-top w-1/3 md:w-1/4 border-r border-[#e5e0fa]">
                  {row.title}
                </td>

                <td className="py-3 px-4 text-xs sm:text-sm text-gray-800 align-top leading-relaxed">
                  {row.value && <span>{row.value}</span>}

                  {row.list && (
                    <ul className="space-y-1.5 list-disc list-inside">
                      {row.list.map((item, idx) => (
                        <li key={idx} className="marker:text-[#6b11cb]">
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Loan17iMasin3;