import React from "react";

const Services1iMasinSharunakutyun3 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-[#f8f9fb] font-sans flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center leading-tight">
        Վարկի մայր գումարի վաղաժամկետ<br />մարում
      </h2>

      <div className="max-w-xl w-full">
        <p className="text-gray-500 text-sm md:text-base leading-relaxed text-justify mb-10">
          Վարկի մարում ժամկետից շուտ։ Ձեր վճարումը չի հանդիսանում վարկի հերթական մարում և 
          կատարված վճարումը ուղղվելու է վարկի մայր գումարի մարմանը։ Փոփոխված ժամանակացույցը 
          կարող եք ստանալ &lt;&lt;ԲԼԵՍՍ&gt;&gt; ՈՒՎԿ-ի գլխամասային գրասենյակում կամ 
          մասնաճյուղերում։ Ոչ աշխատանքային օրը կատարված վճարումը կհամարվի մարում հաջորդ 
          աշխատանքային օրը։
        </p>

        <form className="w-full space-y-6">
          <div className="flex flex-col items-start w-full">
            <label htmlFor="contract-number" className="block text-slate-700 text-[17px] mb-3">
              * Վարկային պայմանագրի համար
            </label>
            <input
              type="text"
              id="contract-number"
              placeholder="xxx-xxxx-xxx"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600 transition-colors shadow-sm bg-white"
            />
          </div>

          <button
            type="button"
            className="w-full bg-[#5b10b7] hover:bg-[#4a0d96] text-white text-lg font-medium py-3.5 px-4 rounded-lg transition-colors duration-200"
          >
            Շարունակել
          </button>
        </form>
      </div>
    </div>
  );
};

export default Services1iMasinSharunakutyun3;