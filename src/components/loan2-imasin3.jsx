import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebaseConfog';

const tabs = [
  'Վարկի մասին',
  'Պայմաններ',
  'Գործընկեր ավտոսրահներ',
  'Պահանջվող փաստաթղթերի ցանկ',
];

const Loan2iMasin3 = ({ activeTab, setActiveTab }) => {
  const [conditionsData, setConditionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConditions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "loans2iMasin2"));
        const data = querySnapshot.docs.map(doc => ({
          ...doc.data()
        }));
        
        data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
        
        setConditionsData(data);
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConditions();
  }, []);

  const renderBlock = (block, index) => {
    if (!block) return null;

    if (Array.isArray(block)) {
      return (
        <div key={index}>
          {block.map((b, i) => renderBlock(b, i))}
        </div>
      );
    }

    switch (block.type) {
      case 'group':
        return (
          <div key={index}>
            {block.items.map((b, i) => renderBlock(b, i))}
          </div>
        );

      case 'text':
        return <div key={index} className={block.className || "mb-2"}>{block.value}</div>;

      case 'list':
        return (
          <ul key={index} className="list-disc pl-5 space-y-1 mb-2">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );

      case 'ordered-list':
        return (
          <ol key={index} className="list-decimal pl-5 mt-1 space-y-1 mb-2">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );

      case 'table':
        return (
          <div key={index} className="overflow-x-auto mb-2">
            <table className="w-full border-collapse border border-purple-100 text-sm">
              <thead>
                <tr className="bg-purple-50 text-gray-700">
                  {block.headers.map((h, i) => (
                    <th key={i} className="border border-purple-100 p-2 text-center">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.columns.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-purple-100 p-2 text-left">
                        {typeof cell === 'string' 
                          ? cell 
                          : renderBlock(cell, cellIndex)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  if (loading) {
    return <div className="text-center py-12 text-[#6b11cb] font-semibold text-lg">Բեռնվում է...</div>;
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
      
      <div className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden mb-8">
        <div className="divide-y divide-purple-100">
          {conditionsData.map((item, index) => (
            <div
              key={item.id || index}
              className={`flex flex-col md:flex-row transition-colors ${
                index % 2 === 0 ? 'bg-white' : 'bg-purple-50/30'
              }`}
            >
              <div className="md:w-1/3 p-4 md:p-5 flex gap-3 border-b md:border-b-0 md:border-r border-purple-100">
                <span className="font-bold text-[#6b11cb] min-w-[24px]">{item.id}</span>
                <span className="font-semibold text-gray-800 text-sm md:text-base">{item.title}</span>
              </div>
              <div className="md:w-2/3 p-4 md:p-5 text-gray-700 text-sm md:text-base flex items-center">
                <div className="w-full">
                  {item.content && item.content.map((block, i) => renderBlock(block, i))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-6 space-y-4">
        <h3 className="text-[#6b11cb] font-bold text-lg">ՏԵՂԵԿԱՑՈՒՄ</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
          <li>
            Հարգելի հաճախորդ, տեղեկացնում ենք, որ Ձեր կողմից ներկայացված վարկի ստացման դիմում-հայտերի քանակը, այդ թվում՝ հեռահար եղանակներով/տարբեր տեխնիկածրագրային լուծումներով և հավելվածներով, անկախ հաստատումից կամ մերժումից, բացասական ազդեցություն է ունենալու Ձեր վարկային ամփոփ գնահատականի վրա:
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Loan2iMasin3;