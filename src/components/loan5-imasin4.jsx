import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { db } from './firebaseConfog';
import { useState, useEffect } from "react";

const uploadRequiredDocs = async () => {
    try {
        for (const item of requiredDocuments) {
            await setDoc(doc(db, "loans5iMasin3", item.id.toString()), item);
        }
        alert("Տվյալները հաջողությամբ ուղարկվեցին loans5iMasin3 collection!");
        console.log("Տվյալները հաջողությամբ ուղարկվեցին loans5iMasin3 collection!");
    } catch (error) {
        alert("Սխալ տվյալները ուղարկելիս, տես console-ը:");
        console.error("Սխալ տվյալները ուղարկելիս: ", error);
    }
};

const tabs = [
    'Վարկի մասին',
    'Պայմաններ',
    'Պահանջվող փաստաթղթերի ցանկ'
];

const Loan5iMasin4 = ({ activeTab, setActiveTab }) => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "loans5iMasin3"));
                const fetchedDocs = [];

                querySnapshot.forEach((doc) => {
                    fetchedDocs.push(doc.data());
                });

                fetchedDocs.sort((a, b) => a.id - b.id);

                setDocuments(fetchedDocs);
                setLoading(false);
            } catch (error) {
                console.error("Սխալ տվյալները ստանալիս: ", error);
                setLoading(false);
            }
        };

        fetchDocuments();
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto py-6 font-sans">
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
                <ul className="space-y-6">
                    {documents.map((item) => (
                        <li key={item.id} className="flex items-start text-gray-800 text-base sm:text-lg leading-relaxed">
                            <span className="font-extrabold text-[#6b11cb] mr-3 shrink-0">
                                {item.id}.
                            </span>
                            <span className="font-semibold text-gray-800">
                                {item.text}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Loan5iMasin4;