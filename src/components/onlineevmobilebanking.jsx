import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OnlineEvMobileBanking = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="relative w-full min-h-[540px] bg-[#5900E2] rounded-tl-[60px] lg:rounded-tl-[130px] overflow-hidden flex flex-col lg:flex-row items-center justify-between p-6 py-12 lg:p-16 font-sans">
      
      <div className="absolute top-12 left-10 md:left-24 w-8 h-8 md:w-12 md:h-12 border-[8px] md:border-[12px] border-[#FF57A0] rounded-full animate-[spin_8s_linear_infinite] shadow-lg rotate-12"></div>
      <div className="absolute top-1/4 md:top-1/3 left-6 md:left-10 opacity-30 text-2xl md:text-3xl font-extrabold text-black rotate-90 tracking-[0.2em] animate-pulse">~~~</div>
      <div className="absolute bottom-32 md:bottom-28 left-6 md:left-12 w-0 h-0 border-l-[20px] md:border-l-[30px] border-l-transparent border-r-[6px] md:border-r-[10px] border-r-transparent border-b-[35px] md:border-b-[50px] border-b-[#FFE600] animate-[bounce_4s_infinite] rotate-[-20deg]"></div>
      <div className="absolute bottom-10 left-16 md:left-28 flex flex-wrap w-16 md:w-20 gap-[6px] opacity-40">
        {[...Array(18)].map((_, i) => (
          <div key={i} className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full"></div>
        ))}
      </div>
      <div className="absolute top-10 md:top-16 right-10 md:right-16 w-8 h-8 md:w-12 md:h-12 border-[4px] md:border-[5px] border-[#B983FF] rounded-md rotate-[30deg] animate-pulse"></div>
      <div className="absolute bottom-12 md:bottom-16 right-12 md:right-20 text-[#FF57A0] text-4xl md:text-5xl font-bold animate-[bounce_5s_infinite] -rotate-45">~</div>
      <div className="absolute top-1/2 right-8 md:right-12 w-3 h-3 md:w-4 md:h-4 bg-[#3B0099] rounded-full animate-bounce"></div>

      <div className="relative z-10 w-full lg:w-[55%] flex justify-center items-center min-h-[280px] sm:min-h-[380px] lg:min-h-[440px] my-6 lg:my-0">
        
        <div className="relative w-full max-w-[580px] aspect-[16/10] flex items-center justify-center mt-4 md:mt-0">
          
          <img 
            src="https://www.evoca.am/img/macbook.png" 
            alt="Laptop Frame" 
            className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none drop-shadow-2xl"
          />
          
          <div className="absolute top-[12.5%] left-1/2 -translate-x-1/2 w-[74%] h-[70%] md:top-[12%] md:w-[75%] md:h-[72%] lg:top-[11.5%] lg:w-[76%] lg:h-[74%] z-30 overflow-hidden bg-black rounded-[2px] sm:rounded-[3px]">
            
            {!isVideoPlaying ? (
              <div className="relative w-full h-full">
                <img 
                  src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" 
                  alt="Laptop Screen Content" 
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button 
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg hover:scale-110 transition-transform cursor-pointer"
                  >
                    <div className="w-0 h-0 border-t-[6px] md:border-t-[8px] lg:border-t-[10px] border-t-transparent border-l-[10px] md:border-l-[14px] lg:border-l-[18px] border-l-[#00E5FF] border-b-[6px] md:border-b-[8px] lg:border-b-[10px] border-b-transparent ml-1"></div>
                  </button>
                </div>
              </div>
            ) : (
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/KwAgMHEx8ys?si=hco9TqMMlBSwJc-Y&autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        <div className="absolute -bottom-2 -right-2 sm:-right-2 lg:-right-16 w-[90px] sm:w-[130px] lg:w-[175px] aspect-[1/2.05] z-40 drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]">
          <img 
            src="https://www.evoca.am/img/iPhone.png" 
            alt="Phone Frame" 
            className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
          />
          
          <div className="absolute top-[14%] left-1/2 -translate-x-1/2 w-[84%] h-[72%] z-10 overflow-hidden rounded-[12px] sm:rounded-[20px] lg:rounded-[30px] bg-[#5900E2]">
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
              alt="Phone Screen Content" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      <div className="relative z-10 w-full lg:w-[42%] text-white flex flex-col items-center text-center lg:items-start lg:text-left lg:pl-6 mt-8 lg:mt-0">
        
        <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold mb-3 md:mb-4 leading-tight tracking-wide">
          Օնլայն և մոբայլ բանկինգ
        </h1>
        
        <p className="text-[13px] sm:text-sm lg:text-[15px] text-white/90 mb-6 lg:mb-8 max-w-[440px] leading-[1.6] lg:leading-[1.7] font-medium px-4 lg:px-0">
          Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
        </p>
        
        <Link to="/customer" className="inline-block bg-white text-[#5900E2] px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold text-[14px] md:text-[15px] shadow-lg hover:shadow-2xl active:scale-95 md:hover:scale-105 transition-all duration-300 mb-8 cursor-pointer">
          Դառնալ հաճախորդ
        </Link>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full justify-center lg:justify-start">
          <div className="bg-white p-2 rounded-xl shrink-0 shadow-md">
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
              alt="QR Code" 
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
            />
          </div>
          
          <div className="flex flex-col items-center sm:items-start space-y-2">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wide">Ներբեռնել հավելվածները՝</span>
            <div className="flex gap-2 sm:gap-3 items-center">
              <Link 
                to="https://apps.apple.com/am/app/evocatouch/id970309076" 
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                  className="h-[30px] sm:h-[34px] lg:h-[40px] w-auto" 
                />
              </Link>

              <Link 
                to="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank&hl=en&gl=US" 
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-[30px] sm:h-[34px] lg:h-[40px] w-auto" 
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