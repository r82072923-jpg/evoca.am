import React from 'react';

const EvocaiMasin3 = () => {
  return (
    <div className="font-sans bg-white py-16 m-0 p-0">
      <div className="max-w-[1000px] mx-auto px-5">
        
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-12">
          Մեր առաքելությունը
        </h2>
        
        <div className="max-w-[850px] mx-auto flex flex-col items-center">
          <img 
            src="https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg" 
            alt="Evoca Mission" 
            className="w-full h-auto object-cover"
          />
          
          <div className="bg-[#f8f6fb] border-l-[3px] border-[#6100eb] p-6 md:p-10 w-[90%] md:w-[80%] -mt-14 md:-mt-20 relative z-10 shadow-sm text-[#333] text-[15px] md:text-[16px] leading-[1.8]">
            Որպես human-first և խելացի ֆինտեխ ընկերություն՝ մենք 
            հնարավորություն ենք տալիս մարդկանց երազելու ավելի 
            համարձակ, բիզնեսներին՝ բացահայտելու նոր հորիզոններ, և 
            հասարակությանը՝ կառուցելու ավելի լավ ապագա:
          </div>
        </div>

      </div>
    </div>
  );
};

export default EvocaiMasin3;