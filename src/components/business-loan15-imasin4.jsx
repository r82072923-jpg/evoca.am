import React from 'react';
import BusinessLoan15iMasin3 from './business-loan15-imasin3';

function BusinessLoan15iMasin4() {
  const linksData = [
    {
      title: "Վարկավորման նպատակով հաճախորդներից պահանջվող փաստաթղթերի և տվյալների ցանկ",
      href: "https://www.evoca.am/files/global_files/1/16148640021543.pdf" // Այստեղ կարող եք գրել ձեր նախընտրած էջի հղումը
    },
    {
      title: "Գնահատող ընկերությունների ցանկ",
      href: "https://www.evoca.am/files/global_files/1/16148640316517.pdf"
    },
    {
      title: "Կարևոր տեղեկատվություն",
      href: "https://www.evoca.am/files/global_files/1/important-information-pdf.pdf"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4 font-sans">
      {linksData.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="flex items-center justify-between bg-purple-50 hover:bg-purple-100 transition-colors rounded-xl p-4 shadow-sm border border-purple-100 text-gray-800 font-semibold text-sm md:text-base group"
        >
          <span>{item.title}</span>
          <span className="text-purple-600 group-hover:translate-x-1 transition-transform">
            ➔
          </span>
        </a>
      ))}
    </div>
  );
}

export default BusinessLoan15iMasin4;