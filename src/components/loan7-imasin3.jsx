import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

const tabs = [
  'Վարկի մասին',
  'Պայմաններ',
];

function Loan7iMasin3({ activeTab, setActiveTab }) {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'loans7iMasin'));
        const fetchedData = querySnapshot.docs.map(doc => doc.data());

        fetchedData.sort((a, b) => {
          const numA = parseInt(a.id.replace('.', ''));
          const numB = parseInt(b.id.replace('.', ''));
          return numA - numB;
        });

        setTableData(fetchedData);
      } catch (error) {
        console.error('Տվյալները բեռնելիս սխալ տեղի ունեցավ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full my-8">
      <div className="border-b border-gray-200 mb-12 pb-4">
        <nav className="flex flex-wrap gap-x-10 gap-y-4">
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

      {loading ? (
        <div className="text-center py-10 text-gray-500 font-medium">
          Բեռնվում է...
        </div>
      ) : (
        <table className="w-full border-collapse border border-[#e4d9f2] text-sm text-gray-800 table-fixed">
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-b border-[#e4d9f2]">
                <td className="p-4 border-r border-[#e4d9f2] align-top w-[5%] sm:w-[5%] font-medium">
                  {row.id}
                </td>

                <td className="p-4 border-r border-[#e4d9f2] align-top w-[35%] sm:w-[30%] font-medium break-words">
                  {row.title}
                </td>

                <td className="p-4 align-top w-[60%] sm:w-[65%] break-words">
                  {Array.isArray(row.content) ? (
                    <ul className="list-disc list-outside ml-5 space-y-2 marker:text-[#6b11cb]">
                      {row.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <span>{row.content}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Loan7iMasin3;