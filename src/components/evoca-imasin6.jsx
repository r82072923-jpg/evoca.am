import React from 'react';

const sectionData = {
  title: "Բանկի լոգոտիպը",
  description: "Բանկի լոգոն կազմված է evolution՝ էվոլյուցիա բառի արմատից և նմանեցված է evoke՝ զարթնեցնել բառին։ Բառի երկրորդ տառը՝ V-ն, պատկերված է կորացված անկյուններով հավասարակողմ եռանկյան տեսքով և նմանեցված է դեպի աջ և վեր ուղղված սլաքի տեսքով՝ խորհրդանշելով Բանկի ձգտումը դեպի առաջընթաց։"
};

const EvocaiMasin6 = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 font-sans">
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        {sectionData.title}
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
        {sectionData.description}
      </p>

      <div className="flex justify-center items-center py-6">
        <img src="https://www.evoca.am/file_manager/icons/logo.png" alt="" />
      </div>

    </div>
  );
};

export default EvocaiMasin6;