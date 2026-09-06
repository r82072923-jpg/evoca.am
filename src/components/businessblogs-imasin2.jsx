import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const bankingNewsData = [
  {
    id: 1,
    imageSrc: "https://www.evoca.am/images-cache/blogs/1/16679076091685/510x383.jpg",
    title: "Ամեն ինչ բանկոմատների մասին",
    date: "31.01.2024",
  },
  {
    id: 2,
    imageSrc: "https://www.evoca.am/images-cache/blogs/1/16691870758279/510x383.jpg",
    title: "Ինչպե՞ս սկսել բիզնես։ Guide from A to Z",
    date: "05.01.2024",
  },
  {
    id: 3,
    imageSrc: "https://www.evoca.am/images-cache/blogs/1/16329967423394/510x383.png",
    title: "Ֆինանսական ճգնաժամեր",
    date: "06.07.2020",
  },
  {
    id: 4,
    imageSrc: "https://www.evoca.am/images-cache/blogs/1/16336139236001/510x383.png",
    title: "Հաջողակ բանակցությունների 10 պատվիրանները",
    date: "18.06.2020",
  },
  {
    id: 5,
    imageSrc: "https://www.evoca.am/images-cache/blogs/1/16336898810327/510x383.png",
    title: "15 համաշխարհային բիզնեսներ, որոնք ծնվել են ավտոտնակներում և…",
    date: "18.06.2020",
  },
  {
    id: 6,
    imageSrc: "https://www.evoca.am/images-cache/blogs/1/16339589553963/510x383.png",
    title: "Բիզնես էթիկա",
    date: "16.06.2020",
  },
];

const BusinessBlogsiMasin2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  
  const itemsPerPage = 1;


  const pages = [];
  for (let i = 0; i < bankingNewsData.length; i += itemsPerPage) {
    pages.push(bankingNewsData.slice(i, i + itemsPerPage));
  }
  const totalPages = pages.length;

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex < totalPages - 1) setCurrentIndex(currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 font-sans">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-h-[360px]">
        {pages[currentIndex]?.map((bankingNews) => (
          <div key={bankingNews.id} className="bg-white flex flex-col justify-between">
            <div>
              <div className="w-full h-[180px] overflow-hidden mb-3">
                <img
                  src={bankingNews.imageSrc}
                  alt={bankingNews.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <Link to={bankingNews.link || "/news/banking"} className="group block mb-2">
                <h3 className="text-[15px] font-bold text-black leading-snug group-hover:text-[#5b00c9] transition-colors line-clamp-3">
                  {bankingNews.title}
                </h3>
              </Link>
            </div>

            <p className="text-[13px] text-[#e0e0e0] font-normal mt-2">
              {bankingNews.date}
            </p>
          </div>
        ))}
      </div>

      {totalPages > 0 && (
        <div className="w-full border-t border-gray-100 mt-10 pt-6 flex items-center justify-start gap-4">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="text-gray-400 hover:text-[#5b00c9] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>

          <div className="flex items-center space-x-2">
            {pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200 ${
                  currentIndex === idx
                    ? 'bg-[#5b00c9] text-white shadow-sm'
                    : 'text-black hover:text-[#5b00c9]'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentIndex === totalPages - 1}
            className="text-[#5b00c9] hover:text-[#410093] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default BusinessBlogsiMasin2;