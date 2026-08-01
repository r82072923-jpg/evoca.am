import React from 'react';

const sectionData = {
  title: "Բանկի բրենդբուքը",
  descriptions: [
    "Բրենդբուքում կգտնեք Բանկի լոգոյի կիրառման կանոնները, բրենդային գույները, տառատեսակները և բրենդի այլ կարևոր տարրերը:",
    "Սա պարզապես ուղեցույց չէ, այլ ոգեշնչման աղբյուր՝ ուժեղ և ճանաչելի բրենդ կառուցելու համար:"
  ],
  buttonText: "Click Here",
  pdfUrl: "https://www.evoca.am/file_manager/other/Evoca%20Brandbook%20(1).pdf",
  bgImage: "https://www.evoca.am/file_manager/other/52.png"
};

const EvocaiMasin7 = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 font-sans">
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        {sectionData.title}
      </h2>

      <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed mb-10">
        {sectionData.descriptions.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>

      {/* Բանների կոնտեյներ */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
         <a
            href={sectionData.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white text-sm font-medium backdrop-blur-md transition-all duration-300 shadow-lg"
          >
        <img 
          src={sectionData.bgImage} 
          alt="Brandbook Banner" 
          className="w-full h-auto object-contain block"
        />
          </a>

        {/* Կոճակը, որը դիրքավորված է նկարի վրա՝ կենտրոնում */}
      </div>

    </div>
  );
};

export default EvocaiMasin7;