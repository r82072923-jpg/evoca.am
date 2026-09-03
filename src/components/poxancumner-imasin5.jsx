import React from "react";

const documentsData = [
  {
    id: "1",
    title: "Միջազգային վճարման հանձնարարականներով փոխանցումների իրականացման կանոններ",
    link: "https://www.evoca.am/files/global_files/1/16684900550769.pdf",
  },
  {
    id: "2",
    title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
    link: "https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf",
  },
];

function PoxancumneriMasin5() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 font-sans">
      <h2 className="text-xl font-bold text-slate-900 mb-4">
        Փաստաթղթեր
      </h2>

      <div className="flex flex-col gap-3">
        {documentsData.map((docItem) => (
          <a
            key={docItem.id}
            href={docItem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-5 py-4 bg-[#f6f5f8] rounded-xl font-bold text-slate-900 text-sm md:text-base transition-colors hover:bg-purple-100/60"
          >
            {docItem.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default PoxancumneriMasin5;