import React, { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfog";

const initialVisaClassicData = {
  tabs: ["Քարտի մասին", "Սակագներ և դրույթներ"],
  columns: [
    "MasterCard Standard / Visa Classic",
    "MasterCard Gold / Visa Gold",
    "Visa Business",
  ],
  sections: [],
  notes: [],
};

function Note({ number }) {
  if (!number) return null;
  return <sup className="text-xs font-normal ml-1">[{number}]</sup>;
}

function ValueContent({ value }) {
  return value;
}

function VisaClassiciMasin3({ activeTab, setActiveTab }) {
  const [visaData, setVisaData] = useState(initialVisaClassicData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchVisaData() {
      try {
        const docRef = doc(db, "visaClassiciMasin2", "visaClassicData");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setVisaData(docSnap.data());
        }
      } catch (error) {
        console.error("❌ Firebase fetch error:", error);
      }
    }
    fetchVisaData();
  }, []);

  async function uploadVisaClassicData() {
    setLoading(true);
    try {
      const docRef = doc(db, "visaClassiciMasin2", "visaClassicData");
      await setDoc(docRef, visaData);
      alert("Տվյալները հաջողությամբ ուղարկվեցին Firebase!");
    } catch (error) {
      console.error("❌ Firebase upload error:", error);
      alert("Սխալ՝ տվյալները չուղարկվեցին Firebase: Մանրամասները կոնսոլում (F12):");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto overflow-x-auto font-sans p-6"> 
      <table className="w-full min-w-[800px] border-collapse bg-white text-left border border-[#ebdff2]">
        <tbody className="text-[14px] text-[#444444]">
          {visaData.sections && visaData.sections.map((item, index) => {
            if (item.type === "title") {
              return (
                <tr key={index}>
                  <th colSpan="4" className="border border-[#ebdff2] p-4 text-center text-base font-bold bg-gray-50">
                    {item.title} <Note number={item.note} />
                  </th>
                </tr>
              );
            }

            if (item.type === "header") {
              return (
                <tr key={index} className="bg-gray-100 font-bold">
                  {item.columns.map((col, i) => (
                    <th key={i} colSpan={i === 0 ? 2 : 1} className="border border-[#ebdff2] p-4">
                      {col}
                    </th>
                  ))}
                </tr>
              );
            }

            if (item.type === "sectionTitle") {
              return (
                <tr key={index}>
                  <td colSpan="4" className="border border-[#ebdff2] p-4 font-bold bg-gray-50">
                    {item.title}
                  </td>
                </tr>
              );
            }

            if (item.type === "subTitle") {
              return (
                <tr key={index}>
                  <td colSpan="4" className="border border-[#ebdff2] p-4 font-semibold bg-gray-50/50">{item.title}</td>
                </tr>
              );
            }

            if (item.type === "headerOther") {
              return (
                <tr key={index} className="bg-gray-100 font-bold">
                  <td className="border border-[#ebdff2] p-4">{item.first}</td>
                  <td colSpan="3" className="border border-[#ebdff2] p-4">{item.second}</td>
                </tr>
              );
            }

            if (item.type === "customHeader") {
              return (
                <tr key={index} className="bg-gray-100 font-bold">
                  <td colSpan="2" className="border border-[#ebdff2] p-4">{item.left}</td>
                  {item.right.map((rCol, rIdx) => (
                    <td key={rIdx} className="border border-[#ebdff2] p-4">{rCol}</td>
                  ))}
                </tr>
              );
            }

            if (item.type === "limitGroup") {
              return (
                <React.Fragment key={index}>
                  <tr>
                    <td colSpan="4" className="border border-[#ebdff2] p-4 font-semibold bg-gray-50">{item.service}</td>
                  </tr>
                  <tr>
                    <td colSpan="4" className="border border-[#ebdff2] p-4">
                      <div className="flex flex-wrap gap-4">
                        {item.values.map((val, vIdx) => (
                          <span key={vIdx} className="bg-gray-100 px-3 py-1 rounded border border-gray-200">
                            {val}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              );
            }

            if (item.type === "group") {
              return (
                <React.Fragment key={index}>
                  <tr>
                    <td colSpan="4" className="border border-[#ebdff2] p-4 font-semibold bg-gray-50">
                      {item.service} <Note number={item.note} />
                    </td>
                  </tr>
                  {item.rows && item.rows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td className="border border-[#ebdff2] p-4 pl-8 text-gray-500 font-medium">↳</td>
                      <td className="border border-[#ebdff2] p-4">{row.subService}</td>
                      {row.values.map((val, vIdx) => (
                        <td key={vIdx} className="border border-[#ebdff2] p-4 align-top">
                          <ValueContent value={val} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              );
            }

            return (
              <tr key={index}>
                <td colSpan={item.colSpan === 3 ? 4 : 2} className="border border-[#ebdff2] p-4">
                  {item.service} <Note number={item.note} />
                </td>
                {item.colSpan !== 3 && item.values && item.values.map((val, vIdx) => (
                  <td key={vIdx} className="border border-[#ebdff2] p-4 align-top">
                    <ValueContent value={val} />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {visaData.notes && visaData.notes.length > 0 && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-[#ebdff2]">
          <h4 className="font-bold mb-2 text-sm text-gray-700">Ծանոթագրություններ՝</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {visaData.notes.map((noteItem) => (
              <li key={noteItem.id}>
                <b>[{noteItem.id}]</b> {noteItem.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default VisaClassiciMasin3;