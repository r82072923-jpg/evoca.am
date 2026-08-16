import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebaseConfog'; // Համոզվեք, որ ֆայլի անունը ճիշտ է (գուցե firebaseConfig)

const tabs = [
    'Վարկի մասին',
    'Պայմաններ',
    'Պահանջվող փաստաթղթերի ցանկ'
];

const Loan5iMasin2 = ({ activeTab, setActiveTab }) => {
    const [loanData, setLoanData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLoanData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "loans5iMasin"));
                
                if (!querySnapshot.empty) {
                    const data = querySnapshot.docs[0].data();
                    setLoanData(data);
                } else {
                    console.log("Տվյալներ չեն գտնվել բազայում:");
                }
            } catch (error) {
                console.error("Սխալ տվյալները կարդալիս: ", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLoanData();
    }, []);

    if (isLoading) {
        return <div className="w-full max-w-7xl mx-auto my-10 p-4 text-center text-[#6b11cb] font-bold text-xl">Բեռնվում է...</div>;
    }

    if (!loanData) {
        return <div className="w-full max-w-7xl mx-auto my-10 p-4 text-center text-red-500 font-bold">Տվյալներ չեն գտնվել:</div>;
    }

    return (
        <div className="w-full max-w-7xl mx-auto my-10 p-4 font-sans">
            
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

            {activeTab === 'Վարկի մասին' && (
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    
                    <div className="flex-1 text-sm sm:text-base text-gray-800 leading-relaxed">
                        <p className="mb-6 font-medium">
                            {loanData.leftSection.introParagraph.text}
                            <span className="text-[#6b11cb] font-bold uppercase ml-1">
                                {loanData.leftSection.introParagraph.highlightText}
                            </span>
                        </p>

                        <p className="mb-6">
                            {loanData.leftSection.midParagraph}
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center lg:justify-end items-start">
                        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50/50">
                            
                            <div className="w-12 h-12 bg-[#6b11cb] rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 shadow-md shadow-purple-200">
                                {loanData.rightSection.icon}
                            </div>

                            <div className="flex flex-col">
                                {loanData.rightSection.details.map((item, idx) => (
                                    <div 
                                        key={item.id || idx} 
                                        className={`grid grid-cols-2 items-center py-5 ${
                                            idx !== loanData.rightSection.details.length - 1 
                                                ? 'border-b border-gray-100' 
                                                : 'pt-5 pb-0 border-none'
                                        }`}
                                    >
                                        <div className="flex flex-col">
                                            <span className="text-[11px] text-gray-500 font-medium mb-1">
                                                {item.prefix}
                                            </span>
                                            <span className="text-3xl font-bold text-[#6b11cb] tracking-tight">
                                                {item.value}
                                            </span>
                                        </div>
                                        <div className="text-gray-800 font-semibold pl-4">
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

export default Loan5iMasin2;