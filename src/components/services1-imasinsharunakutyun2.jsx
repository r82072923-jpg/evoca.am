import React from "react";
const Services1iMasinSharunakutyun2 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 md:p-10 bg-[#f8f9fb] font-sans rounded-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
        Հերթական մարում
      </h2>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed text-justify mb-8">
        Եթե Ձեր կատարած վճարումը գերազանցում է սույն վարկի հերթական մարման գումարի չափը, ապա
        գերազանցող մասը համարվելու է պարտավորության ժամկետից շուտ կատարում և ուղղվելու է սույն վարկի
        մայր գումարի մարմանը։ Փոփոխված ժամանակացույցը կարող եք ստանալ &lt;&lt;ԲԼԵՍՍ&gt;&gt;
        ՈՒՎԿ-ի գլխամասային գրասենյակում կամ մասնաճյուղերում։ Ոչ աշխատանքային օրը
        կատարված վճարումը կհամարվի մարում հաջորդ աշխատանքային օրը։
      </p>

      <form className="w-full max-w-md space-y-6">
        <div>
          <label htmlFor="contract-number" className="block text-slate-700 text-lg mb-2">
            * Վարկային պայմանագրի համար
          </label>
          <input
            type="text"
            id="contract-number"
            placeholder="xxx-xxxx-xxx"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600 transition-colors shadow-sm"
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
  );
};

export default Services1iMasinSharunakutyun2;