import React from 'react';
import { Link } from 'react-router-dom';
const NerdrumnerBlogsiMasin = () => {
  const articleData = {
    category: "Ներդրումներ",
    categoryPath: "/blog/business-lifestyle",
    title: "Ներդրումների կարելիներն ու չի կարելիները",
    description: "Ներդրումներ կատարելիս՝ դժվար է կողմնորոշվել՝ որտեղի՞ց սկսել, ինչպե՞ս կայացնել որոշումներ: Այսօր կխոսենք ներդրումների կարելիների և չի կարելիների մասին:",
    url: "https://www.evoca.am/images-cache/blogs/1/17138737784517/780x585.jpg" 
  };

  return (
    <div className="w-full bg-[#fcfcfd] py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <div className="flex-1 w-full">
          
          <Link 
            to={articleData.categoryPath} 
            className="inline-flex items-center gap-3 mb-6 group"
          >
            <span className="w-5 h-5 bg-[#23004d] shrink-0 group-hover:bg-[#4a00a3] transition-colors"></span>
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
          
          <div className="absolute top-0 left-0 w-12 h-12 border-t-[6px] border-l-[6px] border-[#23004d]"></div>
          
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

export default NerdrumnerBlogsiMasin;