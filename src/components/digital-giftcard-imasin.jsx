import React from 'react';

function DigitalGiftCardiMasin() {
  return (
    <section className="relative w-full bg-[#f8f9fb] pt-20 pb-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          <div className="lg:w-1/2 space-y-6 z-10 pl-0 lg:pl-4">
            <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-black text-[#1a1a1a] leading-[1.2] tracking-tight">
              Digital Gift Card
            </h1>
            
            <p className="text-[#595959] text-[15px] sm:text-base leading-[1.6] max-w-[500px]">
              Սիրելի մարդկանց համար նվեր ընտրելը պատասխանատու ու հաճելի գործ է, բայց նաև ժամանակատար ու նյարդայնացնող, հատկապես երբ չգիտես՝ կհավանի՞, թե՞ ոչ։ Մենք առաջարկում ենք իդեալական նվերի տարբերակ։
            </p>

            <div>
              <button className="bg-[#6b11cb] hover:bg-[#5a0eb0] text-white px-8 py-3 rounded-full font-medium transition-colors shadow-md">
                Պատվիրել օնլայն
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative flex justify-center lg:justify-end w-full pr-0 lg:pr-4">
            <div className="absolute top-1/2 right-0 w-[85%] h-[120%] bg-[#eaedf2] rounded-[40px] -z-10 transform -translate-y-1/2 translate-x-12 -rotate-[8deg]"></div>
            
            <div className="relative z-10 w-full max-w-[560px]">
              <img
                src="https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png"
                alt="Digital Gift Card"
                className="w-full h-auto object-contain drop-shadow-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DigitalGiftCardiMasin;