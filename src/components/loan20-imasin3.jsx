import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const renderCellContent = (item) => {
  if (item.content) {
    return <p className="text-gray-700">{item.content}</p>;
  }

  if (item.items) {
    return (
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {item.items.map((sub, idx) => (
          <li key={idx}>{sub}</li>
        ))}
      </ul>
    );
  }

  if (item.keyValues) {
    return (
      <div className="space-y-3 divide-y divide-[#e5d5fc]/60">
        {item.keyValues.map((kv, idx) => (
          <div key={idx} className={idx > 0 ? 'pt-2' : 'pb-2'}>
            <span className="font-bold text-[#332052]">{kv.key}</span>
            <span className="text-gray-700">{kv.value}</span>
          </div>
        ))}
      </div>
    );
  }

  if (item.sections) {
    return (
      <div className="space-y-3">
        {item.sections.map((sec, idx) => (
          <div key={idx}>
            {sec.subtitle && (
              <h4 className="font-bold text-[#332052] mb-1">{sec.subtitle}</h4>
            )}
            {sec.items && (
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {sec.items.map((it, iIdx) => (
                  <li key={iIdx}>{it}</li>
                ))}
              </ul>
            )}
            {sec.paragraphs && (
              <div className="space-y-1 text-gray-700">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return null;
};

const Loan20iMasin3 = ({ activeTab, setActiveTab }) => {
  const [tabs, setTabs] = useState([]);
  const [conditionsData, setConditionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'loans20iMasin', 'mainData');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setTabs(data.tabs || []);
          setConditionsData(data.conditionsData || []);
        } else {
          console.warn('Տվյալներ չգտնվեցին loans20iMasin-ում:');
        }
      } catch (error) {
        console.error('Սխալ տվյալները Firebase-ից ստանալիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto my-8 p-4 text-center text-[#6b11cb] font-bold text-lg">
        Տվյալները բեռնվում են Firebase-ից...
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
        {conditionsData.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            Տվյալներ չեն գտնվել Firebase-ում: Սեղմեք «Ուղարկել տվյալները Firebase» կոճակը՝ դրանք ավելացնելու համար:
          </div>
        ) : (
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
                  <td className="py-4 px-4 sm:px-6 text-gray-800 font-medium text-sm sm:text-base align-top leading-relaxed">
                    {renderCellContent(item)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Loan20iMasin3;