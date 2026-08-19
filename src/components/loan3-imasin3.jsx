import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from './firebaseConfog';

const tabs = [
  'Վարկի մասին',
  'Պայմաններ',
  'Պահանջվող փաստաթղթերի ցանկ',
];

const Loan3iMasin3 = ({ activeTab, setActiveTab }) => {
  const [dbData, setDbData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchLoanData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "loans3iMasin2"));
      querySnapshot.forEach((doc) => {
        setDbData(doc.data());
      });
    } catch (e) {
      console.error("Error fetching documents: ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLoanData();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Բեռնվում է...</div>;
  }

  if (!dbData) {
    return <div className="text-center py-10 text-red-500">Տվյալներ չեն գտնվել Firebase-ում:</div>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto my-10 p-4 font-sans text-sm text-gray-800">
      
      <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? "text-[#6b11cb]"
                  : "text-gray-500 hover:text-gray-700"
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
      <div className="border border-purple-200 rounded-sm overflow-hidden bg-white">
        <table className="w-full text-left border-collapse">
          <tbody>
            {dbData.loanInfo.map((row) => (
              <tr
                key={row.number}
                className="border-b border-purple-200"
              >
                <td className="p-4 w-12 font-bold text-center border-r border-purple-200 align-top">
                  {row.number}.
                </td>

                <td className="p-4 font-semibold border-r border-purple-200 align-top w-1/4">
                  {row.title}
                </td>

                <td className="p-4 align-top">

                  {row.content && (
                    <p>{row.content}</p>
                  )}

                  {row.type === "list" && (
                    <ul className="space-y-4 pl-4">
                      {row.items.map((item, index) => (
                        <li
                          key={index}
                          className="relative before:content-['•'] before:absolute before:-left-4 before:text-gray-800 leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {row.type === "groups" && (
                    <div className="flex flex-col">
                      {row.groups.map((group, index) => (
                        <div
                          key={index}
                          className="flex border-b last:border-b-0 border-purple-200"
                        >
                          <div className="w-1/3 p-4 border-r border-purple-200 font-medium">
                            {group.title}
                          </div>

                          <div className="w-2/3">
                            {group.items.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex border-b last:border-b-0 border-purple-200"
                              >
                                <div className="w-2/3 p-4 border-r border-purple-200">
                                  {item.name}

                                  {item.footnote && (
                                    <sup className="text-[#6b11cb] font-bold">
                                      [{item.footnote}]
                                    </sup>
                                  )}
                                </div>

                                <div className="w-1/3 p-4 font-medium">
                                  {item.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {row.type === "sections" && (
                    <div className="flex flex-col">
                      {row.sections.map((section, index) => (
                        <div key={index} className="border-b last:border-b-0 border-purple-200">
                          <div className="p-4 font-bold bg-gray-50/50">
                            {section.title}
                          </div>
                          <div className="p-4 leading-relaxed">
                            {section.content}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {row.link && (
                    <div className="mt-6">
                      <a
                        href={row.link.href}
                        className="font-bold text-[#6b11cb] underline hover:text-purple-800 transition"
                      >
                        {row.link.text}
                      </a>
                    </div>
                  )}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {dbData.footnote && (
        <div className="mt-4 text-sm text-gray-700 italic flex items-start">
          <span className="text-[#6b11cb] font-bold mr-2 not-italic">
            [{dbData.footnote.number}]
          </span>
          <p>{dbData.footnote.text}</p>
        </div>
      )}

    </div>
  );
};

export default Loan3iMasin3;