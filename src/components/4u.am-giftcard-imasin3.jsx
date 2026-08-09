import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

function FourUamGiftCardiMasin3() {
  const [tariffs, setTariffs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "4u.amGiftCard"));
        const dataList = querySnapshot.docs.map(doc => doc.data());
        setTariffs(dataList);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTariffs();
  }, []);

  return (
    <section className="w-full bg-white py-10 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border border-purple-100 rounded-lg overflow-hidden bg-white">
          <div className="bg-[#fcf8ff] px-6 py-4 border-b border-purple-100 text-center">
            <h2 className="text-sm sm:text-base font-bold text-gray-900">
              Arca Gift Card սակագներ և պայմաններ
            </h2>
          </div>

          {isLoading ? (
            <div className="p-8 text-center text-gray-500">
              Բեռնվում է...
            </div>
          ) : (
            <div className="divide-y divide-purple-100">
              {tariffs.map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-6 py-4 gap-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="sm:w-3/4 text-gray-800 text-sm sm:text-base">
                    {item.description}
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/4 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-purple-50">
                    {item.subtitle && (
                      <span className="text-xs sm:text-sm text-gray-500">
                        {item.subtitle}
                      </span>
                    )}
                    <span className="text-sm sm:text-base font-normal text-gray-900 ml-auto sm:ml-0">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FourUamGiftCardiMasin3;