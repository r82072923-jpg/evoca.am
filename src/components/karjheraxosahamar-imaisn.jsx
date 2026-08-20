import React from 'react';
import { Link } from 'react-router-dom';
const KarjHeraxosahamariMasin = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto mt-12 rounded-3xl overflow-hidden font-sans bg-[#fbfafc]">
      
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-3 bg-purple-700 rounded-sm"></div>
            <Link to="/news/banking" className="text-sm font-extrabold text-gray-900">
              Բանկային
            </Link>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
            Կարճ հեռախոսահամար՝<br />
            8444
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-[90%]">
            Evocabank-ի հետ արդեն կարող եք կապ հաստատել նոր,
            կարճ հեռախոսահամարով՝ ընդամենը հավաքելով 8444:
          </p>
        </div>

        <div className="mt-12 text-gray-400 text-sm font-medium">
          22.10.2025
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <img 
          src="https://www.evoca.am/images-cache/news/1/17611221350351/780x585.jpg"
          alt="Evoca կարճ հեռախոսահամար 8444" 
          className="w-full h-full object-cover object-center"
        />
      </div>

    </div>
  );
};

export default KarjHeraxosahamariMasin;