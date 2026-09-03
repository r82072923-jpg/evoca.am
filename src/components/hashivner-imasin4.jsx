import React, { useState } from "react";

const accordionData = {
  title: "ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ",
  items: [
    {
      id: "docs",
      title: "Անհրաժեշտ փաստաթղթեր",
      content: [
        "Հաշվի բացման դիմում՝ մեր ձևանմուշի համաձայն:",
        "Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն նույնականացման քարտ:",
        "Մեր պահանջով այլ փաստաթղթեր:"
      ]
    },
    {
      id: "procedure",
      title: "Հաշիվ բացելու ընթացակարգ",
      content: []
    },
    {
      id: "service",
      title: "Բանկային հաշիվների սպասարկում",
      content: []
    },
    {
      id: "other_terms",
      title: "Հաշիվների սպասարկմանն առնչվող այլ դրույթներ",
      content: []
    },
    {
      id: "cancellation",
      title: "Բանկային հաշվի պայմանագրի լուծման պայմաններ",
      content: []
    },
    {
      id: "guarantee_limits",
      title: "Երաշխավորված ավանդների սահմանաչափերը",
      content: []
    }
  ]
};

function HashivneriMasin4() {
  const [openId, setOpenId] = useState("docs");

  const toggleAccordion = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 font-sans">
      <h2 className="text-xl font-bold uppercase mb-6 text-slate-900 tracking-wide">
        {accordionData.title}
      </h2>

      <div className="flex flex-col gap-3">
        {accordionData.items.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-purple-600 shadow-sm"
                  : "border-purple-200 hover:border-purple-300"
              }`}
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full text-left p-5 flex items-center gap-4 bg-white focus:outline-none"
              >
                <span className="text-purple-700 transition-transform duration-200">
                  {isOpen ? (
                    <svg
                      className="w-5 h-5 stroke-[2.5]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 stroke-[2.5]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>

                <span className="font-bold text-slate-800 text-base">
                  {item.title}
                </span>
              </button>

              {isOpen && item.content?.length > 0 && (
                <div className="px-14 pb-6 pt-1 text-slate-700 text-sm leading-relaxed">
                  <ul className="list-disc flex flex-col gap-3 marker:text-purple-600">
                    {item.content.map((point, index) => (
                      <li key={index} className="pl-1">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HashivneriMasin4