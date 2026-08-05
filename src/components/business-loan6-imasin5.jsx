import React from 'react';

function BusinessLoan6iMasin5({ activeTab, setActiveTab }) {
  const tabs = [
    'Վարկի մասին',
    'Պայմաններ և սակագներ',
    'ՓՄՁ վարկի օնլայն հայտ',
    'Պահանջվող փաստաթղթեր',
  ];

  const documents = [
    {
      id: 1,
      title: 'Վարկավորման նպատակով հաճախորդներից պահանջվող փաստաթղթերի և տվյալների ցանկ',
      url: 'https://www.evoca.am/files/global_files/1/16148640021543.pdf', 
    },
    {
      id: 2,
      title: 'Գնահատող ընկերությունների ցանկ',
      url: 'https://www.evoca.am/files/global_files/1/16148640316517.pdf',
    },
  ];

  return (
    <>
      <div className="border-b border-gray-200 mb-12 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'Պահանջվող փաստաթղթեր' && (
        <div className="flex flex-col gap-3 w-full my-4 font-sans">
          {documents.map((doc) => (
            <a
              key={doc.id}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#f4effa] hover:bg-[#eae0f5] transition-colors rounded-md group cursor-pointer"
            >
              <span className="font-bold text-[#1a1a1a] text-sm md:text-base leading-snug">
                {doc.title}
              </span>
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default BusinessLoan6iMasin5;