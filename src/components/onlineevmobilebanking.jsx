import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const OnlineEvMobileBanking = () => {
  // Վիդեոյի վիճակը (state)՝ միացված է, թե ոչ
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="relative w-full min-h-[540px] bg-[#5900E2] rounded-tl-[100px] lg:rounded-tl-[130px] overflow-hidden flex flex-col lg:flex-row items-center justify-between p-6 lg:p-16 font-sans">
      
      {/* ================= ԵՏՆԱՖՈՆԻ ԴԵԿՈՐԱՑԻԱՆԵՐ ================= */}
      <div className="absolute top-12 left-24 w-12 h-12 border-[12px] border-[#FF57A0] rounded-full animate-[spin_8s_linear_infinite] shadow-lg rotate-12"></div>
      <div className="absolute top-1/3 left-10 opacity-30 text-3xl font-extrabold text-black rotate-90 tracking-[0.2em] animate-pulse">~~~</div>
      <div className="absolute bottom-28 left-12 w-0 h-0 border-l-[30px] border-l-transparent border-r-[10px] border-r-transparent border-b-[50px] border-b-[#FFE600] animate-[bounce_4s_infinite] rotate-[-20deg]"></div>
      <div className="absolute bottom-10 left-28 flex flex-wrap w-20 gap-[6px] opacity-40">
        {[...Array(18)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
        ))}
      </div>
      <div className="absolute top-16 right-16 w-12 h-12 border-[5px] border-[#B983FF] rounded-md rotate-[30deg] animate-pulse"></div>
      <div className="absolute bottom-16 right-20 text-[#FF57A0] text-5xl font-bold animate-[bounce_5s_infinite] -rotate-45">~</div>
      <div className="absolute top-1/2 right-12 w-4 h-4 bg-[#3B0099] rounded-full animate-bounce"></div>


      {/* ================= ՁԱԽ ՄԱՍ: ՍԱՐՔԱՎՈՐՈՒՄՆԵՐ ================= */}
      <div className="relative z-10 w-full lg:w-[55%] flex justify-center items-center min-h-[380px] lg:min-h-[440px] my-6 lg:my-0">
        
        {/* === 1. ՆՈԹԲՈՒՔԻ ԲԼՈԿ === */}
        <div className="relative w-full max-w-[580px] aspect-[16/10] flex items-center justify-center">
          
          {/* Նոթբուքի շրջանակը (PNG Frame) */}
          <img 
            src="https://www.evoca.am/img/macbook.png" 
            alt="Laptop Frame" 
            className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none drop-shadow-2xl"
          />
          
          {/* Նոթբուքի էկրանի պարունակությունը */}
          <div className="absolute top-[5%] left-[6.5%] w-[80%] h-[80%] z-30 overflow-hidden bg-black rounded-[3px]">
            
            {!isVideoPlaying ? (
              // 1. Եթե վիդեոն դեռ սեղմված չէ -> ցույց ենք տալիս ՆԿԱՐԸ և PLAY ԿՈՃԱԿԸ
              <div className="relative w-full h-full">
                <img 
                  src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" 
                  alt="Laptop Screen Content" 
                  className="w-full h-full object-cover"
                />

                {/* Play Կոճակը */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <button 
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-12 h-12 lg:w-16 lg:h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg hover:scale-110 transition-transform cursor-pointer"
                  >
                    <div className="w-0 h-0 border-t-[8px] lg:border-t-[10px] border-t-transparent border-l-[14px] lg:border-l-[18px] border-l-[#00E5FF] border-b-[8px] lg:border-b-[10px] border-b-transparent ml-1"></div>
                  </button>
                </div>
              </div>
            ) : (
              // 2. Երբ Play կոճակը սեղմում են -> ցույց ենք տալիս ՎԻԴԵՈՆ
<iframe width="560" height="315" src="https://www.youtube.com/embed/KwAgMHEx8ys?si=hco9TqMMlBSwJc-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            )}

          </div>

        </div>


        {/* === 2. ՀԵՌԱԽՈՍԻ ԲԼՈԿ === */}
        <div className="absolute -bottom-4 -right-14 sm:-right-2 lg:-right-16 w-[120px] sm:w-[155px] lg:w-[175px] aspect-[1/2.05] z-40 drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]">
          <img 
            src="https://www.evoca.am/img/iPhone.png" 
            alt="Phone Frame" 
            className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
          />
          
          <div className="absolute top-[15%] w-[76%] h-[70%] z-10 overflow-hidden rounded-[20px] sm:rounded-[26px] lg:rounded-[30px] bg-[#5900E2]">
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
              alt="Phone Screen Content" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>


      {/* ================= ԱՋ ՄԱՍ: ՏԵՔՍՏ ԵՎ ԿՈՃԱԿՆԵՐ ================= */}
      <div className="relative z-10 w-full lg:w-[42%] text-white flex flex-col items-start lg:pl-6 mt-6 lg:mt-0">
        
        <h1 className="text-3xl lg:text-[40px] font-extrabold mb-4 leading-tight tracking-wide">
          Օնլայն և մոբայլ բանկինգ
        </h1>
        
        <p className="text-sm lg:text-[15px] text-white/90 mb-8 max-w-[440px] leading-[1.7] font-medium">
          Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
        </p>
        
        <Link to="/customer" className="bg-white text-[#5900E2] px-8 py-3.5 rounded-full font-bold text-[15px] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-10 cursor-pointer">
          Դառնալ հաճախորդ
        </Link>

        {/* QR & Stores */}
        <div className="flex flex-row items-center gap-5">
          <div className="bg-white p-2 rounded-xl shrink-0 shadow-md">
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
              alt="QR Code" 
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wide">Ներբեռնել հավելվածները՝</span>
<div className="flex gap-2 sm:gap-3 items-center">
  {/* App Store */}
  <Link 
    to="https://apps.apple.com/am/app/evocatouch/id970309076" 
    className="hover:opacity-80 transition-opacity"
  >
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
      alt="Download on the App Store" 
      className="h-[34px] sm:h-[40px] w-auto" 
    />
  </Link>

  {/* Google Play */}
  <Link 
    to="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank&hl=en&gl=US" 
    className="hover:opacity-80 transition-opacity"
  >
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
      alt="Get it on Google Play" 
      className="h-[34px] sm:h-[40px] w-auto" 
    />
  </Link>
</div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default OnlineEvMobileBanking;