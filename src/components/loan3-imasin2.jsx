import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, onSnapshot } from 'firebase/firestore';
const tabs = [
    'Վարկի մասին',
    'Պայմաններ',
    'Պահանջվող փաստաթղթերի ցանկ',
];

const Loan3iMasin2 = ({ activeTab, setActiveTab }) => {
    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "loans3iMasin"), (snapshot) => {
            const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const sortedItems = items.sort((a, b) => a.order - b.order);
            setCardData(sortedItems);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto my-10 px-4 font-sans text-gray-800">
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

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                
                <div className="w-full lg:w-1/2 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                        Անկախ նրանից՝ ցանկանում ես ձևակերպել նոր վարկ, թե
                        վերաֆինանսավորել գործողը, Evocabank-ն առաջարկում է քո
                        կարիքներին հարմարեցված ճկուն լուծումներ, մարման
                        հարմար պայմաններ և ֆինանսավորման բարձր
                        սահմանաչափ։ Վարկը կարող է տրամադրվել ինչպես
                        վարկունակության գնահատմամբ, այնպես էլ առանց դրա՝
                        կախված քո նախընտրած տարբերակից։
                    </p>
                    <p className="font-bold">
                        Եթե արդեն ունես գույքի գրավով ապահովված վարկ այլ
                        բանկում կամ վարկային կազմակերպությունում, կարող ես
                        այն տեղափոխել Evocabank և օգտվել ավելի շահավետ ու
                        հարմար պայմաններից․
                    </p>
                    <ul className="space-y-4 pl-2">
                        <li className="flex items-start">
                            <span className="text-[#6b11cb] text-xl leading-none mr-3">•</span>
                            <span className="font-bold">Տարեկան տոկոսադրույքի նվազեցում՝ մինչև 3%-ով</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#6b11cb] text-xl leading-none mr-3">•</span>
                            <span className="font-bold">Վերաֆինանսավորման հետ կապված հիմնական<br/>ծախսերը՝ Բանկի կողմից</span>
                        </li>
                    </ul>
                </div>

                <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-6 md:p-8">+
                    <div className="mb-6">
                        <div className="w-10 h-10 bg-[#6b11cb] rounded-full flex items-center justify-center text-white font-bold text-xl">
                            ֏
                        </div>
                    </div>

                    {loading ? (
                        <div className="text-center py-10 text-gray-400">Բեռնվում է...</div>
                    ) : cardData.length === 0 ? (
                        <div className="text-center py-10 text-gray-400">Տվյալներ դեռ չկան բազայում։</div>
                    ) : (
                        <div className="flex flex-col">
                            {cardData.map((item, index) => (
                                <div 
                                    key={item.id || index} 
                                    className={`flex justify-between items-center py-5 ${
                                        index !== cardData.length - 1 ? 'border-b border-gray-100' : ''
                                    }`}
                                >
                                    <div className="flex flex-col w-1/2 pr-4">
                                        <span className="text-[10px] sm:text-xs text-gray-500 mb-1 leading-tight">
                                            {item.prefix}
                                        </span>
                                        <span className="text-xl sm:text-2xl font-bold text-[#6b11cb]">
                                            {item.value}
                                        </span>
                                    </div>
                                    <div className="w-1/2 text-sm sm:text-base text-gray-700 pl-4">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Loan3iMasin2;