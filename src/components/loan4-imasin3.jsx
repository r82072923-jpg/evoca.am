import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

const tabs = [
    'Վարկի մասին',
    'Պայմաններ',
];

const Loan4iMasin3 = ({ activeTab, setActiveTab }) => {
    const [loanDetailsData, setLoanDetailsData] = useState({ rows: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLoanData = async () => {
            try {
                setLoading(true);
                const querySnapshot = await getDocs(collection(db, "loans4iMasin2"));
                
                if (!querySnapshot.empty) {
                    const docData = querySnapshot.docs[0].data();
                    if (docData && docData.rows) {
                        setLoanDetailsData(docData);
                    }
                } else {
                    console.log("Տվյալներ չեն գտնվել Firebase-ում:");
                }
            } catch (error) {
                console.error("Error reading from Firebase:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLoanData();
    }, []);

    if (loading) {
        return <div className="text-center py-12 text-purple-700 font-bold">Բեռնվում են տվյալները Firebase-ից...</div>;
    }

    if (!loanDetailsData.rows || loanDetailsData.rows.length === 0) {
        return <div className="text-center py-12 text-red-500 font-bold">Տվյալներ չեն գտնվել: Համոզվեք, որ Firebase-ում ճիշտ collection և տվյալներ կան:</div>;
    }

    return (
        <div className="w-full max-w-6xl mx-auto overflow-x-auto my-8">

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

            <table className="w-full border-collapse border border-purple-200 text-sm text-slate-800 text-left">
                <tbody>
                    {loanDetailsData.rows.map((row) => (
                        <tr key={row.id} className="border-b border-purple-200">
                            <td className="w-10 p-4 border-r border-purple-200 text-center align-top font-medium">
                                {row.id}.
                            </td>
                            <td className="w-1/4 p-4 border-r border-purple-200 font-semibold align-top">
                                {row.title}
                            </td>

                            {row.type === "split" ? (
                                <>
                                    <td className="w-1/3 p-4 border-r border-purple-200 font-semibold">
                                        {row.col1}
                                    </td>
                                    <td className="w-1/3 p-4 font-semibold">
                                        {row.col2}
                                    </td>
                                </>
                            ) : row.type === "list" ? (
                                <td className="p-6" colSpan={row.colSpan || 2}>
                                    <ul className="space-y-4 font-medium">
                                        {row.items.map((item, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <span className="font-bold text-purple-700">
                                                    {row.id === 17 ? "•" : `${idx + 1}.`}
                                                </span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            ) : row.type === "subList" ? (
                                <td className="p-4" colSpan={row.colSpan || 2}>
                                    <div className="space-y-2 font-medium">
                                        {row.items.map((item, idx) => (
                                            <p key={idx}>{item}</p>
                                        ))}
                                    </div>
                                </td>
                            ) : (
                                <td className="p-4 font-medium" colSpan={row.colSpan || 2}>
                                    {row.content}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Loan4iMasin3;