import React from 'react';
import { Link } from 'react-router-dom';
const GlxavorNewsiMasin2 = () => {
  return (
    <div className="max-w-[340px] bg-white font-sans">
      <img 
        src="https://www.evoca.am/images-cache/news/1/1782137837549/510x383.jpg" 
        alt="Evocabank-ը և Norakaruyc.am-ը համագործակցության" 
        className="w-full h-auto block"
      />
      
      <div className="py-4">
    <Link to="/news/main" className="inline-flex items-center gap-3 mb-6 group">
        <h3 className="text-[22px] font-bold text-black mb-3 leading-[1.3] group-hover:text-[#5b00c9] transition-colors">
          Evocabank-ը և Norakaruyc.am-ը համագործակցության
        </h3>
    </Link>
        <p className="text-[16px] text-[#c0c0c0]">
          22.06.2026
        </p>
      </div>
    </div>
  );
};

export default GlxavorNewsiMasin2;