import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BlogiBajinner = () => {
  const location = useLocation();

  const categories = [
    { name: 'Բիզնես', path: '/blog/business' },
    { name: 'Կենսակերպ', path: '/blog/lifestyle' },
    { name: 'Ներդրումներ', path: '/blog/investments' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans bg-white">
      {/* Վերնագիր */}
      <h2 className="text-4xl md:text-[44px] font-extrabold text-[#1a1a1a] mb-8">
        Բլոգ
      </h2>
      
      {/* Ֆիլտրեր և Արխիվ կոճակ */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        
        {/* Կատեգորիաների Link-եր */}
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((category) => {
            const isActive = location.pathname === category.path;

            return (
              <Link
                key={category.path}
                to={category.path}
                className={`px-6 py-2.5 rounded-full font-bold text-[15px] transition-colors ${
                  isActive
                    ? 'bg-[#5b00c9] text-white' // Ակտիվ վիճակ
                    : 'bg-[#f4f5f6] text-[#4a4a4a] hover:bg-[#e9ecef]' // Պասիվ վիճակ
                }`}
              >
                {category.name}
              </Link>
            );
          })}
        </div>

        {/* Արխիվ կոճակ */}
        <Link
          to="/archive"
          className="inline-flex items-center gap-2 bg-[#f0e6fc] text-[#5b00c9] px-6 py-2.5 rounded-full font-bold text-[15px] hover:bg-[#e4d3f9] transition-colors"
        >
          Արխիվ
          <span className="text-xl leading-none mb-0.5">›</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogiBajinner;