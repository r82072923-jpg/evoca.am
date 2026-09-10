import React from 'react';
import { Link } from 'react-router-dom';
const EvocaTouch2iMasin = () => {
  const articleData = {
    category: "Պրոդուկտներ",
    categoryPath: "/news/products",
    title: "Նոր EvocaTOUCH հավելվածն արդեն հասանելի է",
    description: "Գիտեինք, որ սպասում էիր:",
    url: "https://www.evoca.am/images-cache/news/1/16848286806716/780x585.png" 
  };

  return (
    <div className="w-full bg-[#fcfcfd] py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <div className="flex-1 w-full">
          
          <Link 
            to={articleData.categoryPath} 
            className="inline-flex items-center gap-3 mb-6 group"
          >
            <span className="w-5 h-5 bg-[#FF00FF] shrink-0 group-hover:bg-[#4a00a3] transition-colors"></span>
            <span className="text-[17px] font-bold text-gray-900 group-hover:text-[#5b00c9] transition-colors">
              {articleData.category}
            </span>
          </Link>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            {articleData.title}
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            {articleData.description}
          </p>
        </div>

        <div className="flex-1 w-full relative pl-4 pt-4">
          
          <div className="relative overflow-hidden shadow-sm">
            <img 
              src={articleData.url} 
              alt={articleData.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default EvocaTouch2iMasin;