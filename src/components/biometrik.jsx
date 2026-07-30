import React, { useState, useEffect } from 'react';

const faces = [
  "https://www.evoca.am/img/temp/biometric/face3.png",
  "https://www.evoca.am/img/temp/biometric/face1.png",
  "https://www.evoca.am/img/temp/biometric/face2.png"
];

export default function EvocaBiometricSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % faces.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto p-6 md:p-10 bg-white flex flex-col md:flex-row items-center justify-between gap-8 font-sans">

      <style>
        {`
          @keyframes scan-line {
            0% { top: 10%; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { top: 90%; opacity: 0; }
          }
          .animate-scan {
            animation: scan-line 2.5s infinite ease-in-out;
          }
          @keyframes pulse-dot {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.5); opacity: 1; }
          }
          .biometric-dot {
            position: absolute;
            width: 4px;
            height: 4px;
            background-color: white;
            border-radius: 50%;
            box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.8);
            animation: pulse-dot 1.5s infinite;
          }
        `}
      </style>

      <div className="relative flex-1 flex justify-center items-center w-full max-w-md min-h-[350px] md:min-h-[400px]">
        
<div className="absolute top-0 w-[105%] h-[95%] flex justify-center items-center pointer-events-none">
          <svg 
            viewBox="0 0 300 260" 
            className="w-full h-full text-[#6c00ff] fill-current"
          >
            <path d="M 25 15 
                     C 10 15, 5 25, 12 37 
                     L 135 240 
                     C 142 252, 158 252, 165 240 
                     L 288 37 
                     C 295 25, 290 15, 275 15 
                     Z" 
            />
          </svg>
        </div>
        
        <div className="relative w-full h-[350px] flex justify-center items-center z-10 overflow-hidden">
          
          <div className="absolute w-[60%] h-[2px] bg-white/80 shadow-[0_0_15px_3px_rgba(255,255,255,0.7)] left-1/2 -translate-x-1/2 z-30 animate-scan"></div>

          {faces.map((faceImg, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ${
                currentIndex === index ? 'opacity-100 z-20' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={faceImg}
                alt={`Biometric Face ${index + 1}`}
                className="max-h-[350px] object-contain"
              />

              {currentIndex === index && (
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                  <div className="biometric-dot top-[38%] left-[43%]"></div>
                  <div className="biometric-dot top-[38%] right-[43%]"></div>
                  <div className="biometric-dot top-[55%] left-[50%] -translate-x-1/2"></div> {/* Քիթ */}
                  <div className="biometric-dot top-[65%] left-[41%]"></div>
                  <div className="biometric-dot top-[65%] right-[41%]"></div>
                  <div className="biometric-dot top-[75%] left-[50%] -translate-x-1/2"></div> {/* Կզակ */}

                  <svg className="absolute inset-0 w-full h-full opacity-60">
                    <line x1="43%" y1="38%" x2="50%" y2="55%" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="57%" y1="38%" x2="50%" y2="55%" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="41%" y1="65%" x2="50%" y2="55%" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="59%" y1="65%" x2="50%" y2="55%" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="41%" y1="65%" x2="50%" y2="75%" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="59%" y1="65%" x2="50%" y2="75%" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#222222] leading-tight mb-4">
            Դարձիր <span className="font-extrabold">Evocabank</span>-ի հաճախորդ <br className="hidden sm:inline" />
            բիոմետրիկ նույնականացմամբ
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և ստացիր քարտ
          </p>
        </div>

        <div className="flex flex-row items-end justify-between pt-2">
          <div className="w-36 h-36 p-1">
            <img
              src="https://www.evoca.am/img/biometric-section-QR-Code.png"
              alt="EvocaTOUCH QR Code"
              className="w-full h-full object-contain"
            />
          </div>
          <a
            href="#learn-more"
            className="px-8 py-3 bg-[#5200cc] hover:bg-[#4100a3] text-white text-base font-semibold rounded-full transition-all duration-200 shadow-sm"
          >
            Իմանալ ավելին
          </a>
        </div>
      </div>

    </section>
  );
}