import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Loan2iMasin from './loan2-imasin';
const tabs=[
    'Վարկի մասին',
    'Պայմաններ',
    'Գործընկեր ավտոսրահներ',
    'Պահանջվող փաստաթղթերի ցանկ',
]
const Loan2iMasin2 = ({activeTab,setActiveTab}) => {
  const [loanData, setLoanData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoanDataFromFirebase = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'loans2iMasin'));
        
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setLoanData(docData);
        }
      } catch (error) {
        console.error('Սխալ տվյալների ստացման ժամանակ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoanDataFromFirebase();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-16 text-center font-sans text-gray-500">
        Բեռնվում է...
      </div>
    );
  }

  if (!loanData) {
    return (
      <div className="w-full py-16 text-center font-sans text-gray-500">
        Տվյալներ չեն գտնվել:
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4 font-sans">
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
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div className="w-full lg:w-1/2 space-y-6">
          {loanData.paragraphs && loanData.paragraphs.map((paragraph, index) => {
            if (index === 0) {
              return (
                <p key={index} className="text-gray-700 text-base leading-relaxed">
                  21-րդ դարում{' '}
                  <span className="text-[#6b11cb]">ավտովարկերի</span>
                  {' '}շնորհիվ հեշտացել և պարզեցվել է նոր ավտոմեքենա ձեռք բերելու գործընթացը:
                </p>
              );
            } else if (index === 1) {
              return (
                <p key={index} className="text-gray-700 text-base leading-relaxed">
                  Evocabank-ն առաջարկում է մեքենայի ձեռքբերման նպատակով տրամադրվող վարկեր՝ փոխշահավետ պայմաններով։{' '}
                  <span className="text-[#6b11cb] font-semibold">Գնե՛ք</span> Ձեր ցանկալի ավտոմեքենան ինչպես{' '}
                  <span className="text-[#6b11cb] hover:text-purple-800 transition-colors cursor-pointer">
                    առաջնային
                  </span>
                  {' '}այնպես էլ{' '}
                  <span className="text-[#6b11cb] hover:text-purple-800 transition-colors cursor-pointer">
                    երկրորդային
                  </span>
                  {' '}շուկայից:
                </p>
              );
            } else {
              return (
                <p key={index} className="text-gray-700 text-base leading-relaxed">
                  {paragraph}
                </p>
              );
            }
          })}
        </div>

        <div className="w-full lg:w-1/2 max-w-xl">
          <div className="bg-white rounded-3xl shadow-xl border border-purple-50 p-6 md:p-8 space-y-6">
            
            <div className="w-10 h-10 bg-[#6b11cb] rounded-full flex items-center justify-center text-white mb-8">
              <span className="font-bold text-xl">֏</span>
            </div>

            <div className="divide-y divide-gray-100">
              {loanData.stats && loanData.stats.map((stat, index) => (
                <div key={index} className={`py-4 flex items-center justify-between ${index === loanData.stats.length - 1 ? 'pt-4 pb-0' : ''}`}>
                  <div>
                    <span className="text-xs text-gray-400 block mb-1">{stat.subText}</span>
                    <span className="text-2xl md:text-3xl font-bold text-[#6b11cb]">{stat.value}</span>
                  </div>
                  <span className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Loan2iMasin2;