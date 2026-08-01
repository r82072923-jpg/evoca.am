import React, { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { db } from './firebaseConfog'; // Նշիր ճիշտ ճանապարհը դեպի քո ֆայլը

const sectionData = {
  title: "Բանկի լոգոտիպը",
  description: "Բանկի լոգոն կազմված է evolution՝ էվոլյուցիա բառի արմատից և նմանեցված է evoke՝ զարթնեցնել բառին։ Բառի երկրորդ տառը՝ V-ն, պատկերված է կորացված անկյուններով հավասարակողմ եռանկյան տեսքով և նմանեցված է դեպի աջ և վեր ուղղված սլաքի տեսքով՝ խորհրդանշելով Բանկի ձգտումը դեպի առաջընթաց։",
  logoUrl: "https://www.evoca.am/file_manager/icons/logo.png"
};

const EvocaiMasin6 = () => {
  const [isUploading, setIsUploading] = useState(false);

  const uploadDataToFirebase = async () => {
    setIsUploading(true);
    try {
      const docRef = doc(db, "evocaimasin3", "logo_section");
      await setDoc(docRef, sectionData);
      alert("Տվյալները հաջողությամբ պահպանվեցին Firebase-ում!");
    } catch (error) {
      console.error("Սխալ տվյալները պահպանելիս: ", error);
      alert("Առաջացավ սխալ, ստուգիր console-ը:");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 font-sans">
      
      <div className="flex justify-center mb-8">
        <button 
          onClick={uploadDataToFirebase}
          disabled={isUploading}
          className="bg-purple-900 text-white px-6 py-2 rounded shadow hover:bg-purple-800 disabled:opacity-50"
        >
          {isUploading ? "Ուղարկվում է..." : "Ուղարկել տվյալները Firebase"}
        </button>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        {sectionData.title}
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
        {sectionData.description}
      </p>

      <div className="flex justify-center items-center py-6">
        <img src={sectionData.logoUrl} alt="Logo" />
      </div>

    </div>
  );
};

export default EvocaiMasin6;