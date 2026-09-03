import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfog";
const documents = [
  {
    id: 1,
    title: "Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 08.06.26",
    link: "https://www.evoca.am/files/global_files/1/bank-account-08-06-26.pdf",
  },
  {
    id: 2,
    title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
    link: "https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf",
  },
  {
    id: 3,
    title: "Բանկային հաշիվների բացման սակագներ և դրույքներ 03.09.2026թ.",
    link: "https://www.evoca.am/files/global_files/1/accounts-information-pdf.pdf",
  },
];

function HashivneriMasin5() {
  const uploadDataToFirebase = async () => {
    try {
      for (const docItem of documents) {
        const docRef = doc(db, "hashivneriMasin2", docItem.id.toString());
        
        await setDoc(docRef, {
          title: docItem.title,
          link: docItem.link
        });
      }
      alert("Տվյալները հաջողությամբ պահպանվել են hashivneriMasin2 հավաքածուում:");
    } catch (error) {
      console.error("Սխալ տվյալները պահպանելիս:", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 font-sans">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-slate-900">
          Փաստաթղթեր
        </h2>
        
        <button 
          onClick={uploadDataToFirebase}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition"
        >
          Ուղարկել Firebase
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {documents.map((docItem) => (
          <a
            key={docItem.id}
            href={docItem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-5 py-4 bg-[#f6f5f8] rounded-xl font-bold text-slate-900 text-sm md:text-base transition-colors hover:bg-purple-100/60"
          >
            {docItem.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default HashivneriMasin5;