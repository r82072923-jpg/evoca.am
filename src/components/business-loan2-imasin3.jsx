import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const tabs = [
  'Վարկի մասին',
  'Պայմաններ'
];

const renderTermValue = (row) => {
  switch (row.type) {
    case 'text':
      return <>{row.value}</>;
      
    case 'multiline':
      return (
        <>
          <span>{row.value[0]}</span>
          <div className="mt-1">{row.value[1]}</div>
        </>
      );
      
    case 'list':
      return (
        <ul className="list-disc pl-5 space-y-1">
          {row.value.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
      
    case 'complex':
      if (row.id === '12.') {
        return (
          <div className="space-y-3">
            <ul className="list-disc pl-5 space-y-1">
              {row.value.list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p>{row.value.paragraphs[0]}</p>
            <p>
              <strong className="text-gray-900">Լրացուցիչ պայման՝</strong>{' '}
              {row.value.paragraphs[1].replace('Լրացուցիչ պայման՝ ', '')}
            </p>
          </div>
        );
      }
      if (row.id === '15.') {
        return (
          <div className="space-y-2">
            <p>{row.value.title}</p>
            <ul className="list-disc pl-5 space-y-1">
              {row.value.list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        );
      }
      return null;
      
    default:
      return null;
  }
};

const BusinessLoan2iMasin3 = () => {
  const [activeTab, setActiveTab] = useState('Վարկի մասին');
  const [loanData, setLoanData] = useState(null);
  const [termsData, setTermsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const loanQuerySnapshot = await getDocs(collection(db, 'businessLoan2iMasin2'));
        if (!loanQuerySnapshot.empty) {
          setLoanData(loanQuerySnapshot.docs[0].data());
        }

        const termsQuerySnapshot = await getDocs(collection(db, 'businessLoan2iMasin2'));
        if (!termsQuerySnapshot.empty) {
          const docData = termsQuerySnapshot.docs[0].data();
          const fetchedTerms = docData.terms || docData || [];
          setTermsData(Array.isArray(fetchedTerms) ? fetchedTerms : []);
        }

        if (loanQuerySnapshot.empty && termsQuerySnapshot.empty) {
          setError('Տվյալներ չգտնվեցին բազայում։');
        }
      } catch (err) {
        console.error('Սխալ տվյալների ստացման ժամանակ:', err);
        setError('Չհաջողվեց բեռնել տվյալները։');
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirebase();
  }, []);

  return (
    <div className="w-full bg-white p-4 sm:p-6">
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

      {loading ? (
        <div className="py-12 text-center text-gray-500">Բեռնվում է...</div>
      ) : error ? (
        <div className="py-12 text-center text-red-500">{error}</div>
      ) : activeTab === 'Վարկի մասին' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed">
            {loanData?.paragraphs?.map((p, index) => {
              if (p.type === 'highlight') {
                return (
                  <p key={index}>
                    <span className="text-[#6b11cb] font-bold">{p.text}</span>
                    {p.rest}
                  </p>
                );
              }
              if (p.type === 'standard') {
                return (
                  <p key={index}>
                    {p.text}
                    <span className="text-[#6b11cb] font-bold">{p.highlightText}</span>
                    {p.rest}
                  </p>
                );
              }
              return <p key={index}>{p.text}</p>;
            })}
          </div>

          <div className="lg:col-span-5 bg-white border border-purple-100 rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-purple-100 flex gap-2">
              {loanData?.currencies?.map((curr, idx) => (
                <span key={idx} className="w-8 h-8 rounded-full bg-[#6b11cb] text-white flex items-center justify-center font-bold text-sm">
                  {curr}
                </span>
              ))}
            </div>

            {loanData?.highlights?.map((item, index) => (
              <div 
                key={index} 
                className={`p-4 flex items-center justify-between ${
                  index !== loanData.highlights.length - 1 ? 'border-b border-purple-100' : ''
                }`}
              >
                <div>
                  {item.limitText && <span className="text-xs text-gray-400 block">{item.limitText}</span>}
                  <span className="text-xl sm:text-2xl font-bold text-[#6b11cb]">{item.mainValue}</span>
                </div>
                <span className={`text-gray-600 text-sm sm:text-base ${index > 0 ? 'text-right' : ''}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full border border-purple-100 rounded-xl overflow-hidden shadow-sm">
          {termsData && termsData.length > 0 ? (
            <div className="divide-y divide-purple-100">
              {termsData.map((row) => (
                <div key={row.id} className="grid grid-cols-1 md:grid-cols-12 text-sm sm:text-base">
                  <div className="md:col-span-4 p-4 bg-purple-50/40 text-gray-700 font-medium flex items-start gap-3 border-r border-purple-100">
                    <span className="text-gray-400 font-normal">{row.id}</span>
                    <span>{row.label}</span>
                  </div>
                  <div className="md:col-span-8 p-4 text-gray-800 flex items-center">
                    {renderTermValue(row)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
             <div className="p-6 text-center text-gray-500">Այս պահին պայմաններ առկա չեն։</div>
          )}
        </div>
      )}
    </div>
  );
};

export default BusinessLoan2iMasin3;