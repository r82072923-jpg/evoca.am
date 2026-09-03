import React from "react";

const documents = [
  {
    id: 1,
    title: "Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 08.06.26",
    link: "https://www.evoca.am/files/global_files/1/bank-account-08-06-26.pdf",
  },
  {
    id: 2,
    title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
    link: "https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf",
  },
  {
    id: 3,
    title: "Բանկային հաշիվների բացման սակագներ և դրույքներ 03.09.2026թ.",
    link: "https://www.evoca.am/files/global_files/1/accounts-information-pdf.pdf",
  },
];

function HashivneriMasin5() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 font-sans">
      <h2 className="text-xl font-bold text-slate-900 mb-4">
        Փաստաթղթեր
      </h2>

      <div className="flex flex-col gap-3">
        {documents.map((doc) => (
          <a
            key={doc.id}
            href={doc.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-5 py-4 bg-[#f6f5f8] rounded-xl font-bold text-slate-900 text-sm md:text-base transition-colors hover:bg-purple-100/60"
          >
            {doc.title}
          </a>
        ))}
      </div>
    </div>
  );
}
export default HashivneriMasin5