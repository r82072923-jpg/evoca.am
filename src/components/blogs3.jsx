import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

const Blogs3 = () => {
  const [blogsItem, setBlogsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs3'));
        const blogsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        if (blogsData.length > 0) {
          setBlogsItem(blogsData[0]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading || !blogsItem) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans bg-white relative">
      <div className="mb-4">
        <span className="text-[50px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-extrabold text-[#f4f5f6] leading-none select-none block tracking-wide">
            Լավագույն
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10">
        <div className="flex-1 w-full relative">
          <div className="absolute -top-4 -left-4 w-6 h-6 bg-lime-400 z-25 hidden md:block"></div>
          
          <div className="w-full overflow-hidden relative z-10">
            <img 
              src={blogsItem.url} 
              alt={blogsItem.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-lime-400 z-25 hidden md:block"></div>
        </div>

        <div className="flex-1 w-full flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className={`w-1 h-5 ${blogsItem.categoryColor}`}></span>
            <span className="text-[15px] font-bold text-[#1a1a1a]">
              {blogsItem.category}
            </span>
          </div>
          
          <Link className="group mb-4" to={blogsItem.path}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] group-hover:text-[#5b00c9] transition-colors leading-tight">
              {blogsItem.title}
            </h2>
          </Link>
          
          <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
            {blogsItem.description}
          </p>
          
          <span className="text-[#a0a4ab] text-[15px]">
            {blogsItem.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs3;