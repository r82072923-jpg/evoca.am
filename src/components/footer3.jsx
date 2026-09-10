import React from 'react';

function Footer3() {
  return (
    <footer className="w-full bg-[#f4f6f8] py-6 px-4 md:px-10 font-sans border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
        
        <div className="flex flex-col text-[13px] md:text-sm text-gray-500 space-y-1 text-center lg:text-left">
          <span>© 2026 Էվոկաբանկ</span>
          <span>Բանկը վերահսկվում է ՀՀ Կենտրոնական բանկի կողմից</span>
          <span>Տարբերակ 8.19.0.0</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-[#2b2b2b] text-[15px]">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.5 2.53.77 3.9.77.55 0 1 .45 1 1v3.5a1 1 0 01-1 1A19.93 19.93 0 012 4a1 1 0 011-1h3.5c.55 0 1 .45 1 1 0 1.37.27 2.69.77 3.9.1.28.03.6-.27.8l-2.2 2.2z" />
            </svg>
            <span>(+374 10) 60 55 55</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span>hello@evoca.am</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://apps.apple.com/us/app/evocatouch/id970309076" className="hover:opacity-80 transition-opacity">
            <img 
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
              alt="Download on the App Store" 
              className="h-10"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank" className="hover:opacity-80 transition-opacity">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              className="h-10"
            />
          </a>
        </div>

      </div>
    </footer>
  );
}
export default Footer3