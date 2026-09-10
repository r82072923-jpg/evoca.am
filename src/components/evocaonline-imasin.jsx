import React, { useState } from 'react';

function EvocaOnlineiMasin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  return (
    <div className="w-full bg-[#f4f6f8] min-h-screen flex flex-col items-center justify-center p-4 font-sans relative">
      
      <div className="w-full max-w-[480px] bg-white rounded-md shadow-[0_2px_15px_rgba(0,0,0,0.04)] p-8 md:p-10 mb-5">
        <h2 className="text-xl md:text-2xl font-bold text-[#2b2b2b] mb-8">
          Մուտք համակարգ
        </h2>

        <form className="flex flex-col gap-4">
          <div>
            <input 
              type="text" 
              placeholder="Մուտքանուն"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-[#2b2b2b] placeholder-gray-400 focus:outline-none focus:border-[#6c11d0] transition-colors"
            />
          </div>

          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Գաղտնաբառ"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-[#2b2b2b] placeholder-gray-400 focus:outline-none focus:border-[#6c11d0] transition-colors pr-12"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none p-1 transition-colors"
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              )}
            </button>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#6c11d0] hover:bg-[#580cb0] text-white font-bold py-3.5 rounded-md transition-colors mt-2 text-[15px]"
          >
            Մուտք
          </button>
        </form>

        <div className="mt-8 text-center">
          <a href="#" className="text-sm text-gray-600 hover:text-[#6c11d0] transition-colors">
            Մոռացե՞լ եք մուտքանունը կամ գաղտնաբառը
          </a>
        </div>
      </div>

      <div 
        onClick={() => setIsQrModalOpen(true)}
        className="w-full max-w-[480px] bg-white rounded-md shadow-[0_2px_15px_rgba(0,0,0,0.04)] p-5 flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span className="text-[#2b2b2b] font-bold text-[15px]">
          Մուտք QR կոդով
        </span>
      </div>

      {isQrModalOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 transition-opacity animate-fadeIn"
          onClick={() => setIsQrModalOpen(false)}
        >
          <div 
            className="bg-white rounded-md max-w-[420px] w-full p-8 relative flex flex-col items-center text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsQrModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="my-6 p-2 bg-white">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=EvocabankLogin" 
                alt="QR Code" 
                className="w-48 h-48 object-contain"
              />
            </div>

            <h3 className="text-lg font-bold text-[#2b2b2b] mb-3">
              Արագ և ապահով
            </h3>
            
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed px-2">
              Եթե ունեք EvocaTOUCH հավելվածը, սկանավորեք QR կոդը՝ ավելի արագ մուտք գործելու համար
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
export default EvocaOnlineiMasin