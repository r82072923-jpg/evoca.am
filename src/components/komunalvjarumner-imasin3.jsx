import React, { useState } from 'react';
import Header2 from './header2';
import Footer2 from './footer2';
import FooterBottom from './footerBottom';

const KomunalVjarumneriMasin3 = () => {
  const [contractNumber, setContractNumber] = useState('');

  return (
    <div className="flex flex-col items-center justify-center w-full py-12 px-5  font-sans">
        <Header2></Header2>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10 max-w-2xl leading-snug">
        Ֆիքսված հեռախոսակապ
      </h2>

      <div className="w-full max-w-[450px]">
        <div className="mb-6">
          <label className="block text-gray-600 text-[15px] mb-2">
          * Հեռախոսահամար
          </label>
          <input
            type="text"
            value={contractNumber}
            onChange={(e) => setContractNumber(e.target.value)}
            className="w-full px-4 py-3.5 border border-gray-200 rounded-lg text-slate-800 placeholder-gray-400 focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600 shadow-sm transition-all"
          />
        </div>

        <button 
          className="w-full bg-[#5a00c8] hover:bg-[#4900a3] text-white text-[16px] font-medium py-3.5 rounded-lg transition-colors duration-300"
        >
          Շարունակել
        </button>
      </div>
      <Footer2></Footer2>
      <FooterBottom></FooterBottom>
    </div>
  );
};

export default KomunalVjarumneriMasin3;