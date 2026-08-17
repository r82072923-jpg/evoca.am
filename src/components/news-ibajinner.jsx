import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfog'; 

const NewsiBajinner = () => {
  const [categoriesData, setCategoriesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "newsibajinner", "categories_list");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCategoriesData(docSnap.data());
        } else {
          console.log("Տվյալներ չեն գտնվել");
        }
      } catch (error) {
        console.error("Սխալ տվյալները կարդալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-gray-500">Բեռնվում է...</div>;
  }

  if (!categoriesData) {
    return <div className="text-center py-12 text-red-500">Տվյալները բացակայում են:</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans">
      
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
        {categoriesData.title}
      </h2>

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        
        <div className="flex flex-wrap gap-3 max-w-4xl">
          {categoriesData.categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="px-5 py-2.5 bg-[#f4f5f6] hover:bg-gray-200 text-gray-700 text-sm rounded-full font-medium transition-colors whitespace-nowrap"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0">
          <Link
            to="/news/archive"
            className="group flex flex-col items-center justify-center gap-2"
          >
            <span className="px-6 py-2.5 bg-purple-100 hover:bg-purple-200 text-purple-700 text-sm font-semibold rounded-full transition-colors">
              Բոլորը
            </span>
            <svg 
              className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NewsiBajinner;