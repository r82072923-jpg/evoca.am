import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from './firebaseConfog';

function AyliMasin2() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "ayliMasin"));
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setData(docData);
        } else {
          setError("Տվյալներ չեն գտնվել Firebase-ում:");
        }
      } catch (err) {
        console.error("Սխալ տվյալները ստանալիս: ", err);
        setError("Տվյալների բեռնման սխալ:");
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirebase();
  }, []);

  if (loading) {
    return <div className="p-6 text-center text-purple-600 font-semibold">Բեռնվում է...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500 font-semibold">{error}</div>;
  }

  if (!data) return null;

  const { descriptionParagraphs = [], residentTariffs, nonResidentTariffs, note } = data;
  const tablesData = [residentTariffs, nonResidentTariffs].filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 text-sm space-y-6 font-sans">
      <div className="space-y-4 leading-relaxed text-gray-700">
        {descriptionParagraphs.map((paragraph, index) => {
          let styleClass = "";
          if (index === 2) styleClass = "font-semibold text-gray-900";
          if (index === 6) styleClass = "font-medium text-gray-900";

          return (
            <p key={index} className={styleClass}>
              {paragraph}
            </p>
          );
        })}
      </div>

      {tablesData.map((tariffData, tableIndex) => (
        <div key={tableIndex} className="space-y-3 pt-4">
          <h3 className="font-bold text-base text-gray-900">
            {tariffData.title}
          </h3>
          <div className="overflow-x-auto border border-purple-200 rounded-lg shadow-sm">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-purple-50/60 text-purple-950 border-b border-purple-200">
                  <th rowSpan={2} className="p-3 border-r border-purple-200 font-bold min-w-[160px] align-middle">
                    Ժամկետ
                  </th>
                  <th colSpan={3} className="p-2 text-center font-bold border-b border-purple-200">
                    Պահատուփի չափսերը
                  </th>
                </tr>
                <tr className="bg-purple-50/60 text-purple-950 border-b border-purple-200">
                  <th className="p-2 text-center font-semibold border-r border-purple-200 w-1/4">Փոքր</th>
                  <th className="p-2 text-center font-semibold border-r border-purple-200 w-1/4">Միջին</th>
                  <th className="p-2 text-center font-semibold w-1/4">Մեծ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 text-gray-800">
                {tariffData.rates?.map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-2.5 font-medium border-r border-purple-100">{row.duration}</td>
                    {row.small === row.medium && row.medium === row.large ? (
                      <td colSpan={3} className="p-2.5 text-center font-medium">
                        {row.small}
                      </td>
                    ) : (
                      <>
                        <td className="p-2.5 text-center border-r border-purple-100">{row.small}</td>
                        <td className="p-2.5 text-center border-r border-purple-100">{row.medium}</td>
                        <td className="p-2.5 text-center">{row.large}</td>
                      </>
                    )}
                  </tr>
                ))}
                {tariffData.additionalFees?.map((feeRow, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-purple-50/20" : ""}>
                    <td className="p-2.5 font-medium border-r border-purple-100">{feeRow.name}</td>
                    <td colSpan={3} className="p-2.5 text-center">
                      {feeRow.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <p className="text-xs text-gray-500 font-medium pt-2">
        {note}
      </p>
    </div>
  );
}

export default AyliMasin2;