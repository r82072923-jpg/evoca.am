import React, { useState } from "react";

function ArjetxteriMasin3() {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const accordionData = [
    {
      id: 1,
      title: "Ներդրումային ծառայությունների մատուցման կանոններ",
      content: (
        <div className="flex flex-col gap-6 text-sm md:text-[15px] leading-relaxed text-slate-700 pb-2 px-4 md:px-12">
          <div>
            <a
              href="https://www.evoca.am/files/global_files/1/16708305350017.pdf"
              className="text-[#5e219c] font-bold underline hover:text-purple-900 transition-colors block mb-2"
            >
              Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման կանոններ
            </a>
            <p>
              Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները, ինչպես նաև տրամադրում գործառնությունների իրականացման հետ կապված հնարավոր ռիսկերի վերաբերյալ ընդհանրական տեղեկություններ: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին, ՀՀ Կենտրոնական բանկի նորմատիվ և այլ իրավական ակտերին համապատասխան:
            </p>
          </div>
          <div>
            <a
              href="https://www.evoca.am/files/global_files/1/16708304747333.pdf"
              className="text-[#5e219c] font-bold underline hover:text-purple-900 transition-colors block mb-2"
            >
              Արժեթղթերի Պահառության գործունեության կանոններ
            </a>
            <p>
              Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման կարգն ու պայմանները, պահառության հետ կապված հարաբերությունները, ինչպես նաև պահառուի աշխատանքների կանոնները: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին և պահառության գործունեությունը կանոնակարգող իրավական այլ ակտերին (այդ թվում՝ Հայաստանի կենտրոնական դեպոզիտարիայի կանոնների պահանջներին) համապատասխան:
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Ծառայությունների մատուցման սակագներ",
      content: (
        <div className="flex flex-col gap-6 text-sm md:text-[15px] leading-relaxed text-slate-700 pb-2 px-4 md:px-12">
          <div>
            <a
              href="#"
              className="text-[#5e219c] font-bold underline hover:text-purple-900 transition-colors block mb-2"
            >
              Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման կանոններ
            </a>
          </div>
          <div>
            <a
              href="https://www.evoca.am/file_manager/Bonds%202026/Tariffs%20armenian.pdf"
              className="text-[#5e219c] font-bold underline hover:text-purple-900 transition-colors block mb-2"
            >
              Արժեթղթերի Պահառության գործունեության կանոններ
            </a>
          </div>
        </div>
      ), 
    },
    {
      id: 3,
      title: "Լրացուցիչ տեղեկատվություն",
      content: (
        <div className="flex flex-col gap-6 text-sm md:text-[15px] leading-relaxed text-slate-700 pb-2 px-4 md:px-12">
          <div>
            <a
              href="https://www.evoca.am/files/global_files/1/16708298612185.pdf"
              className="text-[#5e219c] font-bold underline hover:text-purple-900 transition-colors block mb-2"
            >
              Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման կանոններ
            </a>
          </div>
          <div>
            <a
              href="https://www.evoca.am/files/global_files/1/16161384835757.pdf"
              className="text-[#5e219c] font-bold underline hover:text-purple-900 transition-colors block mb-2"
            >
              Արժեթղթերի Պահառության գործունեության կանոններ
            </a>
          </div>
          <div>
            <a
              href="https://www.evoca.am/file_manager/stock-list.pdf"
              className="text-[#5e219c] font-bold underline hover:text-purple-900 transition-colors block mb-2"
            >
              Արժեթղթերի Պահառության գործունեության կանոններ
            </a>
          </div>
          <div>
            <a
              href="https://www.evoca.am/files/global_files/1/16161384961689.pdf"
              className="text-[#5e219c] font-bold underline hover:text-purple-900 transition-colors block mb-2"
            >
              Արժեթղթերի Պահառության գործունեության կանոններ
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-4 font-sans">
      <h2 className="text-xl md:text-2xl font-bold uppercase mb-6 text-slate-900 tracking-wide">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>

      <div className="flex flex-col gap-3">
        {accordionData.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-[#5e219c] shadow-sm"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full text-left p-4 md:p-5 flex items-center gap-4 bg-white focus:outline-none"
              >
                <span className="text-[#5e219c] transition-transform duration-200">
                  {isOpen ? (
                    <svg
                      className="w-5 h-5 stroke-[2.5]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 stroke-[2.5]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
                <span className="font-bold text-slate-900 text-sm md:text-base">
                  {item.title}
                </span>
              </button>

              {isOpen && item.content && (
                <div className="pb-6 pt-1 animate-fadeIn">
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArjetxteriMasin3;