import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

const tabs = [
    'Վարկի մասին',
    'Պայմաններ',
    'Ապառիկ համագործակցության հայտ',
    'Գործընկերների ցանկ',
];

const Loan6iMasin3 = ({ activeTab, setActiveTab }) => {
    const [conditionsData, setConditionsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const syncDataToFirebase = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "loans6iMasin2"));
                
                if (querySnapshot.empty) {
                    await addDoc(collection(db, "loans6iMasin2"), { items: initialConditionsData });
                    setConditionsData(initialConditionsData);
                } else {
                    const docData = querySnapshot.docs[0].data();
                    setConditionsData(docData.items || []);
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
        return <div className="text-center py-12 text-[#6b11cb] font-bold">Բեռնվում է պայմանները բազայից...</div>;
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
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
                <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <tbody>
                                {conditionsData.map((item, index) => (
                                    <tr 
                                        key={item.id || index} 
                                        className={`border-b border-gray-100 transition-colors hover:bg-gray-50/50 ${
                                            index % 2 === 0 ? 'bg-white' : 'bg-[#faf8fd]/40'
                                        }`}
                                    >
                                        <td className="py-4 px-6 w-1/12 text-gray-500 font-medium text-sm sm:text-base align-top">
                                            {item.id}.
                                        </td>
                                        <td className="py-4 px-4 w-5/12 text-gray-800 font-medium text-sm sm:text-base align-top">
                                            {item.title}
                                        </td>
                                        
                                        <td className="py-4 px-6 w-6/12 text-gray-700 text-sm sm:text-base align-top whitespace-pre-line leading-relaxed">
                                            {item.desc}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    );
};

export default Loan6iMasin3;