import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore'; 
import { db } from './firebaseConfog';
const tabs = ['Վարկի մասին', 'Պայմաններ և սակագներ'];

const Loan14iMasin3 = ({activeTab,setActiveTab}) => {
  const [termsData, setTermsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "loans14iMasin2", "terms");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTermsData(docSnap.data().data);
        } else {
          console.log("Տվյալները չեն գտնվել!");
        }
      } catch (e) {
        console.error("Սխալ տվյալները ստանալիս:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center my-10">Բեռնվում է...</div>;

  return (
    <div className="w-full max-w-6xl mx-auto my-10 px-4 font-sans text-gray-800">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
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
      <div className="bg-white border border-purple-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <tbody className="divide-y divide-purple-50">
              {termsData.map((item) => (
                <tr key={item.id} className="hover:bg-purple-50/30 transition-colors">
                  <td className="p-4 text-center font-semibold text-[#6b11cb]">{item.id}</td>
                  <td className="p-4 font-semibold text-gray-700">{item.title}</td>
                  <td className="p-4 text-gray-600 whitespace-pre-line leading-relaxed">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Loan14iMasin3;