import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

function VerjinNorutyunner3() {
  const [fetchedNews, setFetchedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsFromFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'verjinnorutyunner3'));
        const newsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFetchedNews(newsArray);
      } catch (error) {
        console.error("Error fetching news from Firebase: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsFromFirebase();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Բեռնվում է...</div>;
  }

  return (
    <section className="bg-[#f4f7fb] py-16 px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fetchedNews.map((news) => (
            <Link
              key={news.id}
              to={news.link || '#'}
              className="bg-white rounded-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-1 h-3.5 rounded-full ${news.categoryColor}`}></div>
                  <span className="text-[13px] font-extrabold text-[#1a1a1a]">
                    {news.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug mb-6 line-clamp-2">
                  {news.title}
                </h3>

                <div className="mt-auto">
                  <span className="text-xs font-semibold text-[#b3b3b3]">
                    {news.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VerjinNorutyunner3;