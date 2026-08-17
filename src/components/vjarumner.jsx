import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from './firebaseConfog';

export const CategoryCard = ({ item }) => {
  const isEvoca = item.isFeatured;

  return (
    <Link
      to={item.path}
      className={`
        flex flex-col items-center justify-center p-6 rounded-3xl transition-all duration-300
        w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 
        bg-white shadow-sm border-2 border-transparent text-gray-800 cursor-pointer
        hover:bg-[#e9e3f7] hover:border-[#6400EC] hover:text-[#6400EC] hover:-translate-y-2 hover:shadow-xl
      `}
    >
      <div className="mb-4 sm:mb-6 flex items-center justify-center h-24 w-24 sm:h-32 sm:w-32">
        <img 
          src={item.image} 
          alt={item.title} 
          className="max-h-full max-w-full object-contain" 
        />
      </div>
      <span className={`text-center leading-tight text-xs sm:text-sm md:text-base ${isEvoca ? 'font-bold' : 'font-medium'}`}>
        {item.title}
      </span>
    </Link>
  );
};

const Vjarumner = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); 


  const fetchDataFromFirebase = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'vjarumner'));
      const fetchedData = querySnapshot.docs.map(doc => doc.data());
      
      setCategories(fetchedData);
    } catch (error) {
      console.error("Տվյալները բեռնելիս առաջացավ սխալ: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromFirebase();
  }, []);

  return (
    <section className="bg-[#f5f5fa] min-h-screen py-12 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Գլխավոր
      </h1>

      {loading ? (
        <div className="text-xl text-gray-500">Բեռնվում է...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl w-full place-items-center">
          {categories.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </div>
      )}
      
    </section>
  );
};

export default Vjarumner;