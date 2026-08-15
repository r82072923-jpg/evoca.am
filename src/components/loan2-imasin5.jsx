import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, onSnapshot } from 'firebase/firestore';

const tabs = [
    'Վարկի մասին',
    'Պայմաններ',
    'Գործընկեր ավտոսրահներ',
    'Պահանջվող փաստաթղթերի ցանկ',
];

const Loan2iMasin5 = ({ activeTab, setActiveTab }) => {
    const [documentsData, setDocumentsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "loans2iMasin4"), (snapshot) => {
            const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setDocumentsData(items);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto my-6 px-4 font-sans text-gray-700 text-sm md:text-base">
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
            
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 md:p-8">
                {loading ? (
                    <div className="text-center py-4 text-gray-500">Բեռնվում է...</div>
                ) : documentsData.length === 0 ? (
                    <div className="text-center py-4 text-gray-400">Տվյալներ դեռ չկան բազայում։</div>
                ) : (
                    <ol className="space-y-4 list-decimal pl-5">
                        {documentsData.map((doc) => (
                            <li key={doc.id} className={doc.text ? "font-medium text-gray-800" : ""}>
                                {doc.text ? (
                                    doc.text
                                ) : (
                                    <>
                                        <span className="font-medium text-gray-800">{doc.title}</span>
                                        <ul className="list-disc pl-5 mt-2 space-y-1 font-normal text-gray-700">
                                            {doc.subItems && doc.subItems.map((subItem, subIndex) => (
                                                <li key={subIndex}>{subItem}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </div>
    );
};

export default Loan2iMasin5;