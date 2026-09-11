import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const Loan19iMasin3 = ({ activeTab, setActiveTab }) => {
  const [tabs, setTabs] = useState([]);
  const [conditionsData, setConditionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, 'loans19iMasin2', 'mainData');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setTabs(data.tabs || []);
          setConditionsData(data.conditionsData || []);
        } else {
          setError('Տվյալներ չեն գտնվել Firebase-ում (loans19iMasin2/mainData):');
        }
      } catch (err) {
        console.error('Սխալ Firebase-ից տվյալները բեռնելիս:', err);
        setError('Խնդիր առաջացավ տվյալները բեռնելիս:');
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirestore();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto my-12 p-6 text-center text-[#6b11cb] font-bold text-lg">
        Տվյալները բեռնվում են Firebase-ից...
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto my-12 p-6 text-center text-red-500 font-semibold text-lg border border-red-200 rounded-xl bg-red-50">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto my-8 px-4 font-sans">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab && setActiveTab(tab)}
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

      <div className="overflow-x-auto border border-[#e5d5fc] rounded-xl shadow-sm bg-white">
        <table className="w-full text-left border-collapse">
          <tbody>
            {conditionsData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-[#e5d5fc] last:border-b-0 hover:bg-[#faf6ff] transition-colors"
              >
                <td className="py-4 px-3 sm:px-4 text-center font-bold text-[#6b11cb] text-sm sm:text-base w-12 border-r border-[#e5d5fc] align-top">
                  {item.id}.
                </td>
                <td className="py-4 px-4 sm:px-6 font-bold text-[#332052] text-sm sm:text-base w-1/3 border-r border-[#e5d5fc] align-top">
                  {item.title}
                </td>
                <td className="py-4 px-4 sm:px-6 text-gray-800 font-medium text-sm sm:text-base whitespace-pre-line align-top leading-relaxed">
                  {item.content}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Loan19iMasin3;