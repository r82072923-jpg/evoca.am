import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

const BlogiBajinner = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Բիզնես');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogsibajinner'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCategories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans bg-white">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <h2 className="text-4xl md:text-[44px] font-extrabold text-[#1a1a1a]">
          Բլոգ
        </h2>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((category) => (
            <Link
              key={category.id || category.path}
              to={category.path}
              onClick={() => setActiveTab(category.name)}
              className={`px-6 py-2.5 rounded-full font-bold text-[15px] transition-colors ${
                activeTab === category.name
                  ? 'bg-[#5b00c9] text-white'
                  : 'bg-[#f4f5f6] text-[#4a4a4a] hover:bg-[#e9ecef]'
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>

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