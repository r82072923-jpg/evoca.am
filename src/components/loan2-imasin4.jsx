import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebaseConfog';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const tabs = [
    'Վարկի մասին',
    'Պայմաններ',
    'Գործընկեր ավտոսրահներ',
    'Պահանջվող փաստաթղթերի ցանկ',
];

const Loan2iMasin4 = ({ activeTab, setActiveTab }) => {
    const [partnersData, setPartnersData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "loans2iMasin3"));
                
                if (querySnapshot.empty) {
                    for (const partner of initialPartnersData) {
                        await addDoc(collection(db, "loans2iMasin3"), partner);
                    }
                    setPartnersData(initialPartnersData);
                } else {
                    const data = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setPartnersData(data);
                }
            } catch (error) {
                console.error("Սխալ տվյալները ստանալիս:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPartners();
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto my-6 px-4 font-sans">
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
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 sm:p-6 mb-6 text-center shadow-sm">
                <h2 className="text-[#6b11cb] font-bold text-base sm:text-lg leading-relaxed">
                    Գնի՛ր մեքենա Evoca ավտովարկով՝ դիմում անմիջապես Բանկի հետ համագործակցող ավտոսրահում, վարկի հաստատում րոպեների ընթացքում, պայմանագրի արագ վավերացում և անվճար կասկո:
                </h2>
            </div>

            {/* Աղյուսակ */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden">
                <div className="overflow-x-auto">
                    {loading ? (
                        <div className="p-8 text-center text-gray-500">Բեռնվում է...</div>
                    ) : (
                        <table className="w-full border-collapse text-sm text-left">
                            <thead>
                                <tr className="bg-purple-50 text-gray-700 border-b border-purple-100">
                                    <th className="p-3 sm:p-4 font-bold border-r border-purple-100 w-1/4">Անվանում</th>
                                    <th className="p-3 sm:p-4 font-bold border-r border-purple-100 w-1/4">Մեքենաներ</th>
                                    <th className="p-3 sm:p-4 font-bold border-r border-purple-100 w-1/4">Սրահի հասցե</th>
                                    <th className="p-3 sm:p-4 font-bold w-1/4">Կոնտակտային տվյալներ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-purple-100">
                                {partnersData.map((partner, index) => (
                                    <tr 
                                        key={partner.id || index} 
                                        className={`transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-purple-50/30'}`}
                                    >
                                        <td className="p-3 sm:p-4 font-semibold text-gray-800 border-r border-purple-100 align-top">
                                            {partner.name}
                                        </td>
                                        <td className="p-3 sm:p-4 text-gray-700 border-r border-purple-100 align-top">
                                            {partner.cars}
                                        </td>
                                        <td className="p-3 sm:p-4 text-gray-700 border-r border-purple-100 align-top whitespace-pre-line">
                                            {partner.address}
                                        </td>
                                        <td className="p-3 sm:p-4 text-gray-700 align-top whitespace-pre-line">
                                            {partner.contacts}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            <div className="mt-8 text-center text-sm sm:text-base text-gray-700">
                <span>Evoca-ի գործընկեր ավտոսրահների կողմից առաջարկվող պայմաններին մանրամասն կարող եք ծանոթանալ </span>
                <Link
                    to="/partner-car-dealerships" 
                    className="text-[#6b11cb] underline font-medium hover:text-[#520d9d] transition-colors"
                >
                    հետևյալ հղումով
                </Link>
                <span>:</span>
            </div>
        </div>
    );
};

export default Loan2iMasin4;