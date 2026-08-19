import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

const tabs = [
    'Վարկի մասին',
    'Պայմաններ',
    'Ապառիկ համագործակցության հայտ',
    'Գործընկերների ցանկ',
];

const Loan6iMasin2 = ({ activeTab, setActiveTab }) => {
    const [firebaseData, setFirebaseData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const syncDataToFirebase = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "loans6iMasin"));
                
                if (querySnapshot.empty) {
                    await addDoc(collection(db, "loans6iMasin"), initialFirebaseData);
                    setFirebaseData(initialFirebaseData);
                } else {
                    setFirebaseData(querySnapshot.docs[0].data());
                }
            } catch (error) {
                console.error("Սխալ Firebase-ի հետ աշխատելիս:", error);
            } finally {
                setLoading(false);
            }
        };

        syncDataToFirebase();
    }, []);

    if (loading) {
        return <div className="text-center py-12 text-[#6b11cb] font-bold">Բեռնվում է Firebase-ից...</div>;
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            
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

            {activeTab === 'Վարկի մասին' && firebaseData && (
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    
                    <div className="lg:w-1/2 text-gray-800 text-[17px] leading-[1.7] space-y-5">
                        {firebaseData.textBlocks?.map((block, index) => {
                            if (block.type === 'highlight') {
                                return (
                                    <p key={index}>
                                        <span className="text-[#6b11cb] font-medium">{block.highlightText}</span>
                                        {block.text}
                                    </p>
                                );
                            }
                            if (block.type === 'link') {
                                return (
                                    <div key={index} className={index === firebaseData.textBlocks.length - 1 ? "pt-4" : ""}>
                                        <p>
                                            {block.textBefore}
                                            <a href={block.linkUrl} className="text-[#6b11cb] font-bold underline decoration-2 underline-offset-4">
                                                {block.linkText}
                                            </a>
                                            {block.textAfter}
                                        </p>
                                    </div>
                                );
                            }
                            return <p key={index}>{block.text}</p>;
                        })}
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
                            
                            <div className="p-6 pb-2">
                                <div className="w-12 h-12 bg-[#6b11cb] rounded-full flex items-center justify-center text-white text-xl font-bold">
                                    ֏
                                </div>
                            </div>

                            <div className="flex flex-col mt-2">
                                {firebaseData.cardDetails?.map((item) => (
                                    <div key={item.id} className="flex items-center border-t border-gray-100 px-6 py-5">
                                        <div className="w-1/2">
                                            <div className="text-[13px] text-gray-500 mb-1 font-medium">{item.prefix}</div>
                                            <div className="text-3xl font-bold text-[#6b11cb]">{item.value}</div>
                                        </div>
                                        <div className="w-1/2 text-gray-700 text-lg">
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default Loan6iMasin2;