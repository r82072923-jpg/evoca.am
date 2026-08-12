import React from 'react';
import MasterCardStandardiMasin2 from './mastercard-standard-imasin2';

function MasterCardStandardiMasin3() {
  return (
    <div className="relative w-full h-[350px] sm:h-[400px] bg-[#3a007d] flex items-center justify-center overflow-hidden font-sans">
      
      <img
        src="https://www.evoca.am/images-cache/cards/1/16131357309987/1920x527.jpg"
        alt="Evocabank background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
      />


      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug sm:leading-relaxed drop-shadow-md">
          Ամենօրյա գնումներից մինչև անմոռանալի <br className="hidden md:block" />
          ճանապարհորդություն՝ քո Mastercard <br className="hidden md:block" />
          Standard քարտով
        </h1>
      </div>

      
    </div>
  );
}

export default MasterCardStandardiMasin3;