import React from 'react';

function ArcaClassiciMasin() {
  return (
    <section className="relative w-full bg-[#f8f9fb] pt-20 pb-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          <div className="lg:w-1/2 space-y-5 z-10 pl-0 lg:pl-4">
            <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-black text-[#1a1a1a] leading-[1.2] tracking-tight">
            Arca Classic
            </h1>
            
            <p className="text-[#595959] text-[15px] sm:text-base leading-[1.6] max-w-[500px]">
            Evocabank-ի հետ ցանկացած գնում և վճարում ապահով է և հուսալի։
            </p>
          </div>

          <div className="lg:w-1/2 relative flex justify-center lg:justify-end w-full pr-0 lg:pr-4">
            <div className="absolute top-1/2 right-0 w-[85%] h-[120%] bg-[#eaedf2] rounded-[40px] -z-10 transform -translate-y-1/2 translate-x-12 -rotate-[8deg]"></div>
            
            <div className="relative z-10 w-full max-w-[560px]">
              <img
                src="https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png"
                alt="Փոքր և միջին բիզնեսի վարկավորում"
                className="w-full h-auto object-contain drop-shadow-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ArcaClassiciMasin;