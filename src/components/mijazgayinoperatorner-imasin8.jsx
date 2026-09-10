import React from 'react';
import { Link } from 'react-router-dom';

const staticOrganizations = [
  {
    id: "1",
    name: "Բիլայն Ռուսաստան",
    logo: "https://resource.evoca.am/images/webPayment/beelinenew.png",
    link: "/services/international-mobile/4.1",
    isActive: true,
  },

];

const MijazgayinOperatorneriMasin8 = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-5 bg-slate-50 min-h-screen font-sans">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800 text-center w-full">
          Ռուսական
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {staticOrganizations.map((org) => (
          <Link
            key={org.id}
            to={org.link}
            className={`flex flex-col items-center justify-between min-h-[230px] p-8 rounded-3xl border-2 transition-all duration-300 ease-in-out cursor-pointer
              hover:bg-violet-100 hover:border-violet-500 hover:shadow-md hover:-translate-y-1
              ${
                org.isActive
                  ? "bg-violet-100 border-violet-500 shadow-sm"
                  : "bg-white border-transparent shadow-sm"
              }
            `}
          >
            <div className="h-20 w-full flex items-center justify-center">
              <img
                src={org.logo}
                alt={org.name ? org.name.replace("\n", " ") : "logo"}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <span className="text-base font-semibold text-center leading-snug mt-4 text-slate-800 whitespace-pre-line">
              {org.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MijazgayinOperatorneriMasin8;