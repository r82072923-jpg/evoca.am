import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

const News2 = () => {
  const [mainNews, setMainNews] = useState(null);
  const [smallNews, setSmallNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "news2"));
        const newsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        if (newsData.length > 0) {
          setMainNews(newsData[0]);
          setSmallNews(newsData.slice(1, 5));
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center py-12">Բեռնվում է...</div>;
  }

  if (!mainNews) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans bg-white relative">
      <div className="mb-4">
        <span className="text-[50px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-extrabold text-[#f4f5f6] leading-none select-none block tracking-wide">
          Բաց մի թող
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10">
        <div className="flex-1 w-full flex flex-col relative">
          <div className="absolute -top-4 -left-4 w-6 h-6 bg-yellow-400 z-25 hidden md:block"></div>
          
          <div className="w-full mb-6 overflow-hidden relative z-10">
            <img 
              src={mainNews.url} 
              alt={mainNews.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <span className={`w-1 h-5 ${mainNews.categoryColor}`}></span>
            <span className="text-[15px] font-bold text-[#1a1a1a]">
              {mainNews.category}
            </span>
          </div>
          
          <Link to={mainNews.path} className="group mb-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] group-hover:text-[#5b00c9] transition-colors leading-tight">
              {mainNews.title}
            </h2>
          </Link>
          
          <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
            {mainNews.description}
          </p>
          
          <span className="text-[#a0a4ab] text-[15px] mt-auto">
            {mainNews.date}
          </span>
        </div>

        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {smallNews.map((news) => (
            <div key={news.id} className="flex flex-col h-full">
              <div className="w-full mb-4 overflow-hidden">
                <img 
                  src={news.url} 
                  alt={news.title} 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-1 h-4 ${news.categoryColor}`}></span>
                <span className="text-[14px] font-bold text-[#1a1a1a]">
                  {news.category}
                </span>
              </div>
              
              <Link to={news.path} className="group mb-4">
                <h3 className="text-[17px] font-bold text-[#1a1a1a] group-hover:text-[#5b00c9] transition-colors leading-snug line-clamp-3">
                  {news.title}
                </h3>
              </Link>
              
              <span className="text-[#a0a4ab] text-[14px] mt-auto">
                {news.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News2;