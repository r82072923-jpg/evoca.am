import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

function TravelGoldiMasin3({ activeTab, setActiveTab }) {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const tabs = [
    "Քարտի մասին",
    "Սակագներ և դրույթներ"
  ];

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "travelGoldiMasin2"));
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          if (docData.tableData) {
            setTableData(docData.tableData);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirebase();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Բեռնվում է...</div>;
  }

  return (
    <div className="overflow-x-auto p-4">
      <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab ? 'text-[#6b11cb]' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && <span className="absolute bottom-[-18px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />}
            </button>
          ))}
        </nav>
      </div>

      <table className="w-full border-collapse bg-white text-left text-sm text-gray-700">
        <thead>
          <tr className="bg-purple-50">
            <th colSpan="2" className="p-4 text-center text-base font-bold text-gray-900 border border-purple-200">
              Evoca Master Card Travel
            </th>
          </tr>
        </thead>
        <tbody className="border border-purple-200 divide-y divide-purple-200">
          {tableData.map((row, index) => {
            if (row.type === "header") {
              return (
                <tr key={index}>
                  <td colSpan="3" className="p-4 font-bold text-gray-900">
                    {row.title}
                  </td>
                </tr>
              );
            }
            if (row.type === "sectionHeader") {
              return (
                <tr key={index} className="bg-purple-50">
                  <th colSpan="2" className="p-4 text-center text-base font-bold text-gray-900 border border-purple-200">
                    {row.title}
                  </th>
                </tr>
              );
            }
            if (row.type === "rowspan") {
              return (
                <React.Fragment key={index}>
                  {row.items.map((subItem, subIndex) => (
                    <tr key={`${index}-${subIndex}`}>
                      {subIndex === 0 && (
                        <td rowSpan={row.items.length} className="p-4 border-r border-purple-200 w-3/5 align-middle">
                          {row.mainTitle}
                        </td>
                      )}
                      <td className={`p-4 ${subIndex !== row.items.length - 1 ? 'border-b border-purple-200' : ''} ${row.items.length === 3 ? 'w-2/5 flex justify-between items-center' : 'border-r border-purple-200'}`}>
                        <span>{subItem.subtitle}</span>
                        {row.items.length === 3 && <span className="font-bold text-[#6b11cb]">{subItem.subvalue}</span>}
                      </td>
                      {row.items.length === 3 && (
                        <td className={`p-4 ${subIndex !== row.items.length - 1 ? 'border-b border-purple-200' : ''} w-1/5`}>
                          {subItem.subvalue}
                        </td>
                      )}
                      {row.items.length === 2 && (
                        <td className="p-4">
                          {subItem.subvalue}
                        </td>
                      )}
                    </tr>
                  ))}
                </React.Fragment>
              );
            }
            return (
              <tr key={index}>
                <td className="p-4 border-r border-purple-200 w-3/5">{row.title}</td>
                <td className="p-4 w-2/5" colSpan="2">{row.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TravelGoldiMasin3;