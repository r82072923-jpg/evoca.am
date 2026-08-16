import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebaseConfog';

const tabs = [
    'Վարկի մասին',
    'Պայմաններ',
    'Պահանջվող փաստաթղթերի ցանկ'
];

const Loan5iMasin3 = ({ activeTab, setActiveTab }) => {
    const [loanData, setLoanData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLoanData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "loans5iMasin2"));
                const fetchedData = [];
                
                querySnapshot.forEach((doc) => {
                    fetchedData.push(doc.data());
                });

                fetchedData.sort((a, b) => a.id - b.id);

                setLoanData(fetchedData);
                setLoading(false);
            } catch (error) {
                console.error("Առաջացավ սխալ տվյալները կարդալիս: ", error);
                setLoading(false);
            }
        };

        fetchLoanData();
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto my-10 font-sans">
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

            {loading ? (
                <div className="text-center text-lg font-bold text-gray-600 py-10">
                    Բեռնվում է...
                </div>
            ) : (
                <div className="overflow-x-auto border border-purple-200 rounded-lg shadow-sm">
                    <table className="w-full text-sm sm:text-base text-left border-collapse min-w-[900px]">
                        <tbody>
                            {loanData.map((item) => (
                                <tr key={item.id} className="border-b border-purple-200 last:border-b-0">
                                    <td className="p-4 w-12 font-bold text-gray-800 border-r border-purple-200 text-center align-top">
                                        {item.id}.
                                    </td>
                                    <td className="p-4 w-1/4 font-bold text-gray-800 border-r border-purple-200 align-top">
                                        {item.title}
                                    </td>
                                    <td className="p-0 align-top text-gray-700">
                                        {item.content && (
                                            <div className="p-4">{item.content}</div>
                                        )}

                                        {item.list && (
                                            <ul className="list-disc pl-9 p-4 space-y-2">
                                                {item.list.map((li, idx) => (
                                                    <li key={idx}>{li}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {item.type === 'nested_rows' && item.rows && (
                                            <div className="flex flex-col h-full">
                                                {item.rows.map((row, idx) => (
                                                    <div key={idx} className={`flex ${idx !== item.rows.length - 1 ? 'border-b border-purple-200' : ''}`}>
                                                        <div className="w-1/3 p-4 font-bold text-gray-800 border-r border-purple-200">{row.label}</div>
                                                        <div className="w-2/3 p-4 text-gray-700">{row.value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {item.type === 'rates_table' && item.headers && item.rows && (
                                            <div className="flex flex-col h-full">
                                                <div className="flex border-b border-purple-200 bg-purple-50/30">
                                                    <div className="w-1/3 p-4 font-bold text-gray-800 border-r border-purple-200">{item.headers[0]}</div>
                                                    <div className="w-2/3 p-4 font-bold text-gray-800" colSpan="2">Վարկի մարման եղանակ</div>
                                                </div>
                                                <div className="flex border-b border-purple-200 bg-purple-50/30">
                                                    <div className="w-1/3 p-4 border-r border-purple-200"></div>
                                                    <div className="w-1/3 p-4 font-bold text-gray-800 border-r border-purple-200">{item.headers[1]}</div>
                                                    <div className="w-1/3 p-4 font-bold text-gray-800">{item.headers[2]}</div>
                                                </div>
                                                {item.rows.map((row, idx) => (
                                                    <div key={idx} className={`flex ${idx !== item.rows.length - 1 ? 'border-b border-purple-200' : ''}`}>
                                                        <div className="w-1/3 p-4 font-bold text-gray-800 border-r border-purple-200">{row.term}</div>
                                                        <div className="w-1/3 p-4 border-r border-purple-200">{row.annuitet}</div>
                                                        <div className="w-1/3 p-4">{row.mianvag}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {item.type === 'simple_row' && (
                                            <div className="flex h-full items-stretch">
                                                <div className="w-1/3 p-4 font-bold text-gray-800 border-r border-purple-200 flex items-center">{item.term}</div>
                                                <div className="w-1/3 p-4 border-r border-purple-200 flex items-center">{item.rate}</div>
                                                <div className="w-1/3 p-4 flex items-center">{item.extra}</div>
                                            </div>
                                        )}

                                        {item.type === 'ratio_rows' && item.rows && (
                                            <div className="flex flex-col h-full">
                                                {item.rows.map((row, idx) => (
                                                    <div key={idx} className={`flex ${idx !== item.rows.length - 1 ? 'border-b border-purple-200' : ''}`}>
                                                        <div className="w-2/3 p-4 font-bold text-gray-800 border-r border-purple-200">{row.label}</div>
                                                        <div className="w-1/3 p-4">{row.value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Loan5iMasin3;