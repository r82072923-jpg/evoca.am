import React from 'react';

const safetyDepositBoxesData = {
  descriptionParagraphs: [
    "Պահատուփերի պարունակությունը միայն ձեր գաղտնիքն է: Դրանում կարող եք պահել ձեզ համար արժեք ներկայացնող ցանկացած իր՝ դրամ, արժեթղթեր, թանկարժեք մետաղներ և քարեր, ոսկերչական իրեր, արվեստի գործեր, փաստաթղթեր, մագնիսական կրիչներ և այլն:",
    "Պահատուփերը գտնվում են առանձնացված տարածքում՝ շուրջօրյա հսկողության ներքո: Դրանք զինված են միջազգային չափանիշներին համապատասխան անվտանգության միջոցներով և պաշտպանված են մեխանիկական ու քիմիական գործոնների ազդեցությունից: Յուրաքանչյուր գործարքի ժամանակ պահատուփի առանձնացված տարածքում կարող եք գտնվել մինչև 15 րոպե:",
    "Առաջարկում ենք 3 չափսի պահատուփեր՝ փոքր, միջին, մեծ:",
    "Պահատուփերը փակվում են 2 բանալիով, որոնցից մեկը տրամադրվում է ձեզ, իսկ մյուսը պահվում է ձեզ մոտ: Պահատուփը հնարավոր է բացել երկու բանալիների միաժամանակյա կիրառմամբ: Ձեզ տրամադրված բանալիի օրինակը պարտավոր եք վերադարձնել պահատուփի վարձակալության պայմանագրի գործողության ժամկետի վերջում:",
    "Պահատուփերի վարձակալությունը ձևակերպվում է անհատական պայմանագրի հիման վրա, ձեր նախընտրած վարձակալության ժամկետով: Վարձակալման գինը կախված է պահատուփի չափսից և ժամկետից՝ ըստ ձեր սակագների:",
    "12 ամսից երկար ժամկետով վարձակալելու դեպքում պահատուփերի սակագները սահմանվում են պայմանագրային կարգով:",
    "Անհատական պահատուփից կարելի է օգտվել միայն ձեր սպասարկման օրերին և ժամերին:"
  ],
  residentTariffs: {
    title: "Գերխնայվող անհատական պահատուփերի վարձակալման սակագներ",
    rates: [
      { duration: "15 օր", small: "5,000 ՀՀ դրամ", medium: "7,000 ՀՀ դրամ", large: "10,000 ՀՀ դրամ" },
      { duration: "1 ամիս", small: "7,000 ՀՀ դրամ", medium: "12,000 ՀՀ դրամ", large: "17,000 ՀՀ դրամ" },
      { duration: "3 ամիս", small: "12,000 ՀՀ դրամ", medium: "17,000 ՀՀ դրամ", large: "22,000 ՀՀ դրամ" },
      { duration: "6 ամիս", small: "18,000 ՀՀ դրամ", medium: "27,000 ՀՀ դրամ", large: "37,000 ՀՀ դրամ" },
      { duration: "12 ամիս", small: "32,000 ՀՀ դրամ", medium: "47,000 ՀՀ դրամ", large: "62,000 ՀՀ դրամ" },
      { duration: "Երկարաժամկետ", small: "պայմանագրային", medium: "պայմանագրային", large: "պայմանագրային" }
    ],
    additionalFees: [
      { name: "Պահատուփի բանալու կորուստ կամ վնասում", fee: "70,000 ՀՀ դրամ" },
      { name: "Պահատուփի վնասում", fee: "Նյութական վնասի հատուցում" },
      { name: "Պահատուփի ժամկետի ավարտին բանալին չհանձնում", fee: "Յուրաքանչյուր ուշացած օրվա համար 1000 ՀՀ դրամ" },
      { name: "Խցիկը (բանալին) այլ տարածքում պահպանելու վճար", fee: "1-ին պահի ընդունման յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ" }
    ]
  },
  nonResidentTariffs: {
    title: "Գերխնայվող անհատական պահատուփերի վարձակալում օտարերկրյա քաղաքացիների համար",
    rates: [
      { duration: "15 օր", small: "25,000 ՀՀ դրամ", medium: "35,000 ՀՀ դրամ", large: "40,000 ՀՀ դրամ" },
      { duration: "1 ամիս", small: "35,000 ՀՀ դրամ", medium: "45,000 ՀՀ դրամ", large: "60,000 ՀՀ դրամ" },
      { duration: "3 ամիս", small: "45,000 ՀՀ դրամ", medium: "75,000 ՀՀ դրամ", large: "100,000 ՀՀ դրամ" },
      { duration: "6 ամիս", small: "75,000 ՀՀ դրամ", medium: "100,000 ՀՀ դրամ", large: "125,000 ՀՀ դրամ" },
      { duration: "12 ամիս", small: "100,000 ՀՀ դրամ", medium: "125,000 ՀՀ դրամ", large: "150,000 ՀՀ դրամ" },
      { duration: "Երկարաժամկետ", small: "պայմանագրային", medium: "պայմանագրային", large: "պայմանագրային" }
    ],
    additionalFees: [
      { name: "Պահատուփի բանալու կորուստ կամ վնասում", fee: "70,000 ՀՀ դրամ" },
      { name: "Պահատուփի վնասում", fee: "Նյութական վնասի հատուցում" },
      { name: "Պահատուփի ժամկետի ավարտին բանալին չհանձնում", fee: "Յուրաքանչյուր ուշացած օրվա համար 1000 ՀՀ դրամ" },
      { name: "Խցիկը (բանալին) այլ տարածքում պահպանելու վճար", fee: "1-ին պահի ընդունման յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ" }
    ]
  },
  note: "Նշում` Սակագները ներառում են ԱԱՀ:"
};

function AyliMasin2() {
  const { descriptionParagraphs, residentTariffs, nonResidentTariffs, note } = safetyDepositBoxesData;
  
  const tablesData = [residentTariffs, nonResidentTariffs];

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 text-sm space-y-6 font-sans">
      
      <div className="space-y-4 leading-relaxed text-gray-700">
        {descriptionParagraphs.map((paragraph, index) => {
          let styleClass = "";
          if (index === 2) styleClass = "font-semibold text-gray-900";
          if (index === 6) styleClass = "font-medium text-gray-900";

          return (
            <p key={index} className={styleClass}>
              {paragraph}
            </p>
          );
        })}
      </div>

      {tablesData.map((tariffData, tableIndex) => (
        <div key={tableIndex} className="space-y-3 pt-4">
          <h3 className="font-bold text-base text-gray-900">
            {tariffData.title}
          </h3>
          <div className="overflow-x-auto border border-purple-200 rounded-lg shadow-sm">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-purple-50/60 text-purple-950 border-b border-purple-200">
                  <th rowSpan={2} className="p-3 border-r border-purple-200 font-bold min-w-[160px] align-middle">
                    Ժամկետ
                  </th>
                  <th colSpan={3} className="p-2 text-center font-bold border-b border-purple-200">
                    Պահատուփի չափսերը
                  </th>
                </tr>
                <tr className="bg-purple-50/60 text-purple-950 border-b border-purple-200">
                  <th className="p-2 text-center font-semibold border-r border-purple-200 w-1/4">Փոքր</th>
                  <th className="p-2 text-center font-semibold border-r border-purple-200 w-1/4">Միջին</th>
                  <th className="p-2 text-center font-semibold w-1/4">Մեծ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 text-gray-800">
                {tariffData.rates.map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-2.5 font-medium border-r border-purple-100">{row.duration}</td>
                    {row.small === row.medium && row.medium === row.large ? (
                      <td colSpan={3} className="p-2.5 text-center font-medium">
                        {row.small}
                      </td>
                    ) : (
                      <>
                        <td className="p-2.5 text-center border-r border-purple-100">{row.small}</td>
                        <td className="p-2.5 text-center border-r border-purple-100">{row.medium}</td>
                        <td className="p-2.5 text-center">{row.large}</td>
                      </>
                    )}
                  </tr>
                ))}
                {tariffData.additionalFees.map((feeRow, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-purple-50/20" : ""}>
                    <td className="p-2.5 font-medium border-r border-purple-100">{feeRow.name}</td>
                    <td colSpan={3} className="p-2.5 text-center">
                      {feeRow.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      
      <p className="text-xs text-gray-500 font-medium pt-2">
        {note}
      </p>
    </div>
  );
}
export default AyliMasin2