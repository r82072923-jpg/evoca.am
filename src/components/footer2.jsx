import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

function Footer2() {
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ֆունկցիա՝ տվյալները Firebase-ից ՍՏԱՆԱԼՈՒ համար
  const fetchDataFromFirebase = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'footer2'));
      const fetchedData = querySnapshot.docs.map(doc => doc.data());
      
      if (fetchedData.length > 0) {
        setSocialLinks(fetchedData);
      }
    } catch (error) {
      console.error('Սխալ Firebase-ից ստանալիս:', error);
    } finally {
      setLoading(false);
    }
  };

  // Կոմպոնենտը բեռնվելիս ավտոմատ ստանում ենք տվյալները
  useEffect(() => {
    fetchDataFromFirebase();
  }, []);

  return (
    <footer className="w-full bg-white py-8 border-t border-purple-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-4">
          
          {/* Սյունակ 1: Լոգո և Տեղեկատվություն */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center text-3xl tracking-tight">
              <span className="font-bold text-gray-500 lowercase">evoca</span>
              <span className="font-light text-gray-400 uppercase">bank</span>
            </div>
            <div className="text-[13px] text-gray-700 leading-snug font-medium mt-1">
              <p>Բանկը վերահսկվում է ՀՀ</p>
              <p>ԿԲ-ի կողմից</p>
            </div>
            <p className="text-[11px] text-gray-400 mt-2">
              Copyright © 1990-2026 Evocabank
            </p>
          </div>

          {/* Սյունակ 2: Հասցե */}
          <div className="flex flex-col pt-2 text-[13px] text-gray-700 leading-relaxed font-medium">
            <p>ք. Երևան, 0010,</p>
            <p>Հանրապետության 44/2</p>
          </div>

          {/* Սյունակ 3: Կապ */}
          <div className="flex flex-col gap-3 pt-2">
            <a href="mailto:hello@evoca.am" className="text-[14px] text-[#6b21a8] hover:text-purple-900 transition-colors">
              hello@evoca.am
            </a>
            <a href="tel:+37410605555" className="text-[14px] text-[#6b21a8] hover:text-purple-900 transition-colors">
              +374 10 605555
            </a>
          </div>

          {/* Սյունակ 4: QR Կոդ */}
          <div className="pt-1">
            <div className="border border-gray-100 rounded-xl p-2 inline-block shadow-sm">
              <img 
                src="https://payments.evoca.am/assets/images/qr-evoca.png" 
                alt="Evocabank QR" 
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>

          {/* Սյունակ 5: Սոցիալական ցանցեր և App Stores */}
          <div className="flex flex-col items-start lg:items-end gap-6 pt-1">
            
            {/* Սոց. ցանցերի իկոնկաներ */}
            <div className="flex gap-2">
              {loading ? (
                <span className="text-xs text-gray-400">Բեռնվում է...</span>
              ) : (
                socialLinks.map((item) => (
                  <Link 
                    key={item.id} 
                    to={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs hover:bg-gray-500 transition-colors"
                  >
                    {item.icon}
                  </Link>
                ))
              )}
            </div>

            {/* Ներբեռնման կոճակներ */}
            <div className="flex flex-col gap-2">
              <a href="#" className="w-[120px] h-[38px] bg-black text-white rounded-md flex items-center justify-center overflow-hidden hover:bg-gray-800 transition-colors">
                 <span className="text-[10px]">Google Play</span>
              </a>
              <a href="#" className="w-[120px] h-[38px] bg-black text-white rounded-md flex items-center justify-center overflow-hidden hover:bg-gray-800 transition-colors">
                 <span className="text-[10px]">App Store</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer2;