import React from 'react';

function Customer   () {
  return (
    <div className="bg-white font-sans text-gray-800 flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 text-white px-4 py-3 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-3">
          <div className="text-yellow-400 font-bold text-2xl">
            <svg className="w-8 h-8 inline" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </div>
          <span className="text-xl font-semibold tracking-wide">ArmSoft Internet Banking</span>
        </div>
        <div className="text-right text-xs">
          <p>Երևանի ժամանակը</p>
          <p className="font-semibold">13/08/2026 13:18:18 (UTC+04:00)</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-12 gap-12">

        <section className="md:col-span-5 space-y-6">
          <div className="max-w-sm">
            <p className="text-sm text-gray-700 mb-4">
              Մուտքագրեք Ձեր մուտքանունը և գաղտնաբառը
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm text-red-600 font-medium">
                  <span className="text-red-600">*</span> Մուտքանուն
                </label>
                <input 
                  type="text" 
                  className="border border-gray-400 px-2 py-1 w-48 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm text-red-600 font-medium">
                  <span className="text-red-600">*</span> Գաղտնաբառ
                </label>
                <div className="flex items-center space-x-1">
                  <input 
                    type="password" 
                    className="border border-gray-400 px-2 py-1 w-48 text-sm focus:outline-none focus:border-blue-500"
                  />
                  <button type="button" className="border border-gray-400 p-1 bg-gray-50 hover:bg-gray-100 flex items-center justify-center w-7 h-7">
                    <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm8-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm12-2h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4 0h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-6-6h2v2h-2v-2zm2 2h2v2h-2v-2z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Մոռացել եք գաղտնաբառը */}
              <div>
                <a href="#forgot" className="text-sm text-blue-800 hover:underline">
                  Մոռացե՞լ եք գաղտնաբառը
                </a>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="px-8 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-400 text-sm font-medium shadow-sm cursor-pointer"
                >
                  Մուտք
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
            <div className="flex items-start space-x-2">
              <span className="text-black font-bold">▶</span>
              <p><strong className="text-black">ՀՖ-Ինտերնետբանկ</strong> համակարգը թույլ է տալիս Ձեզ աշխարհի ցանկացած կետից, ցանկացած պահին Ինտերնետի միջոցով, ապահով և անվտանգ օգտվել բանկային ծառայություններից` առանց Բանկ այցելելու:</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-black font-bold">▶</span>
              <p>Բարձր մակարդակի անվտանգություն ապահովելու համար համակարգում կիրառված են <strong className="text-black">VASCO Data Security</strong> համաշխարհային ճանաչում ունեցող ընկերության <strong className="text-black">Digipass</strong> ընտանիքի սարքերը:</p>
            </div>
            <ul className="list-disc pl-9 space-y-1">
              <li>Սարքերից օգտվելու կանոններին ծանոթանալու համար, մանրամասն տես՝ <a href="https://online.evoca.am/InternetBank/Resources/Files/Login/hy-AM/DP270_Instructions.pdf" className="text-blue-800 underline">Digipass 270</a>, <a href="https://online.evoca.am/InternetBank/Resources/Files/Login/hy-AM/DP260_Instructions.pdf" className="text-blue-800 underline">Digipass 260</a>, <a href="https://online.evoca.am/InternetBank/Resources/Files/Login/hy-AM/DPGO3_Instructions.pdf" className="text-blue-800 underline">Digipass GO3</a>, <a href="https://online.evoca.am/InternetBank/Resources/Files/Login/hy-AM/DPGO6_Instructions.pdf" className="text-blue-800 underline">Digipass GO6</a>:</li>
            </ul>
            <div className="flex items-start space-x-2">
              <span className="text-black font-bold">▶</span>
              <p>Համակարգը ապահովում է անվտանգ և պաշտպանված բանկային սպասարկում 256-բիթր գաղտնագրմամբ SSL արձանագրության միջոցով:</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-black font-bold">▶</span>
              <p>Համակարգից օգտվելու համար մանրամասն տես՝ <a href="https://online.evoca.am/InternetBank/Resources/Files/Login/hy-AM/InternetBank_UserGuide.pdf" className="text-blue-800 underline">Օգտագործողի ձեռնարկը</a>:</p>
            </div>
          </div>
        </section>

        <section className="md:col-span-7 border-t md:border-t-0 md:border-l border-gray-200 md:pl-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Նորություններ</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold">
                <a href="#news" className="text-blue-800 hover:underline">Առցանց Անվտանգություն</a> 
                <span className="text-gray-500 font-normal"> - 23 սեպտեմբերի, 2024</span>
              </h3>
              <p className="text-xs text-gray-700 mt-1">Անվտանգության նկատառումներից ելնելով խորհուրդ ենք տալիս</p>
              <p className="mt-1"><a href="#details" className="text-blue-800 text-xs underline">Մանրամասն</a></p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-gray-300">
            <a href="#all-news" className="text-xs text-blue-800 underline">Բոլոր նորությունները</a>
          </div>
        </section>

      </main>

      <footer className="mt-auto py-3 px-6 border-t border-gray-300 text-right text-xs text-gray-600">
        © 2008-2026 Մշակված է Հայկական Ծրագրեր կողմից | Տարբերակ 8.17.3
      </footer>

    </div>
  );
}
export default Customer