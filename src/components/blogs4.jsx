import React from 'react';
import { Link } from 'react-router-dom';

function Blogs4() {
  const mainArticle = {
    image: 'https://www.evoca.am/images-cache/blogs/1/16336923273854/1440x650.png',
    category: 'Կենսակերպ',
    categoryColor: 'bg-[#311158]',
    title: 'Evoca-գույնի հոգեբանական նկարագիրը',
    description: 'Գույնը մարքեթինգային գործիք է: Այն ազդում է մարդու հոգեբանության վրա:',
    link: '/blog/evoca-color'
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-16 md:py-24 font-sans bg-white">
      <div className="absolute top-0 left-6 md:left-12 z-0">
        <span className="text-[70px] md:text-[120px] lg:text-[160px] font-extrabold text-[#f4f5f6] leading-none select-none tracking-wide">
          Գլխավոր
        </span>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-end mt-12 md:mt-24">
        <div className="w-full md:w-[85%] ml-auto relative h-[350px] md:h-[500px]">
          <img
            src={mainArticle.image}
            alt={mainArticle.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] relative -mt-20 md:mt-0 md:absolute md:bottom-[-40px] md:left-[5%] w-[90%] mx-auto md:mx-0 md:w-[45%] lg:w-[40%] z-20">
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-6 h-3 ${mainArticle.categoryColor}`}></div>
            <span className="text-[14px] md:text-[15px] font-bold text-[#1a1a1a]">
              {mainArticle.category}
            </span>
          </div>
          
          <Link to={mainArticle.link} className="block group mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-[#1a1a1a] group-hover:text-[#5b00c9] transition-colors leading-tight">
              {mainArticle.title}
            </h2>
          </Link>
          
          <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed">
            {mainArticle.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Blogs4;