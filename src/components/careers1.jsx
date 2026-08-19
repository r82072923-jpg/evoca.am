import React from 'react';

function Careers1() {
  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden bg-pink-50 font-sans">
      
      <img 
        src="https://www.evoca.am/images-cache/menu/1/16195117975601/1920x634.jpg" 
        alt="Creative Evoca Background" 
        className="absolute inset-0 w-full h-full object-center"
      />

      <div className="absolute bottom-0 left-0 md:left-12 lg:left-24 bg-[#F8F9FB] w-full max-w-[550px] p-8 md:p-12 shadow-2xl z-10 rounded-tr-md">
        <h2 className="text-[#1A1A24] text-3xl font-extrabold mb-4 tracking-tight">
          Մշակույթ
        </h2>
        <p className="text-[#5A5A66] text-base leading-relaxed font-medium">
          Evoca-ում աշխատելը հաճելի է։ Առօրյան լցված է նորարարություններով։ 
          Այստեղ տաղանդները անընդհատ զարգանում են ու կատարելագործվում։
        </p>
      </div>


    </div>
  );
}
export default Careers1