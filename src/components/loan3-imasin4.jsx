import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebaseConfog';

function Loan3iMasin4() {
    const [loanData, setLoanData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "loans3iMasin3"));
                let data = [];
                querySnapshot.forEach((doc) => {
                    const docData = doc.data();
                    if (docData.loanInfo) {
                        data = data.concat(docData.loanInfo);
                    }
                });
                setLoanData(data);
            } catch (e) {
                console.error("Սխալ տվյալների բեռնման ժամանակ: ", e);
            } finally {
                setLoading(false);
            }
        };

        fetchDocuments();
    }, []);

    if (loading) {
        return <div className="text-center py-10 text-gray-500">Բեռնվում է...</div>;
    }

    if (loanData.length === 0) {
        return <div className="text-center py-10 text-red-500">Տվյալներ չեն գտնվել Firebase-ում:</div>;
    }

    return (
        <>
          <div className="w-full max-w-7xl mx-auto my-10 p-4 font-sans text-sm text-gray-800">
            <div className="space-y-4">
              {loanData.map((row) => (
                <div 
                  key={row.number} 
                  className="flex items-start p-4 bg-white rounded-md"
                >
                  <span className="font-bold text-[#6b11cb] mr-4 min-w-[24px]">
                    {row.number}.
                  </span>

                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 leading-relaxed">
                      {row.title}
                    </p>

                    {row.type === "list" && row.items && (
                      <ul className="space-y-2 pl-4 mt-3">
                        {row.items.map((item, index) => (
                          <li
                            key={index}
                            className="relative before:content-['•'] before:absolute before:-left-4 before:text-[#6b11cb] leading-relaxed text-gray-600"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
    );
}

export default Loan3iMasin4;