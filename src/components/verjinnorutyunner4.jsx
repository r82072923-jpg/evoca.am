import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

function VerjinNorutyunner4() {
  const [fetchedNews, setFetchedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsFromFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'verjinnorutyunner4'));
        const newsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Սորտավորում ենք ըստ id-ի (1, 2, 3...)
        newsArray.sort((a, b) => Number(a.id) - Number(b.id));

        setFetchedNews(newsArray);
        setLoading(false);
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս:", error);
        setLoading(false);
      }
    };

    fetchNewsFromFirebase();
  }, []);

  return (
    <section className="bg-[#f4f7fb] py-10 md:py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-10 gap-3 md:gap-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2a2a2a]">
            Վերջին նորությունները
          </h2>
          <Link
            to="/news"
            className="inline-flex bg-[#f0e6fc] text-[#6d28d9] px-5 sm:px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm items-center gap-2 hover:bg-[#e4d3f9] transition-colors self-start sm:self-auto"
          >
            Բոլոր նորությունները
            <span className="text-base sm:text-lg leading-none">›</span>
          </Link>
        </div>
        {loading ? (
          <div className="flex justify-center py-10 text-slate-500 font-medium">
            Տվյալները բեռնվում են...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {fetchedNews.map((news) => (
              <Link
                key={news.id}
                to={news.link || '#'}
                className="bg-white rounded-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="h-44 sm:h-52 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <div className={`w-1 h-3.5 rounded-full ${news.categoryColor || 'bg-[#6d28d9]'}`}></div>
                    <span className="text-[12px] sm:text-[13px] font-extrabold text-[#1a1a1a]">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] leading-snug mb-4 md:mb-6 line-clamp-2">
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
        )}
      </div>
    </section>
  );
}

export default VerjinNorutyunner4;