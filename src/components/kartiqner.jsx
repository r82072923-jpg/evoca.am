import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

function Kartiqner() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchTestimonials = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'kartiqner'));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestimonials(data);
    } catch (error) {
      console.error('Սխալ տվյալները բեռնելիս: ', error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <section className="relative w-full py-20 bg-[#f9f8fc] overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
      
      <style>
        {`
          @keyframes float-y {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes float-x {
            0%, 100% { transform: translateX(0px) rotate(0deg); }
            50% { transform: translateX(10px) rotate(5deg); }
          }
        `}
      </style>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center px-4">
        
        <div className="flex gap-2 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <img
              key={star}
              src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNDY3YmF0Y2gyLXN0YXItMDAxXzEucG5n.png" 
              alt="Star"
              className="w-8 h-8 object-contain" 
            />
          ))}
        </div>

        {testimonials.length > 0 && (
          <>
            <div className="flex items-start justify-center w-full gap-4 md:gap-8 min-h-[160px]">
              <span className="text-[#6d28d9] text-6xl md:text-8xl leading-none font-serif pt-2">“</span>
              
              <div className="flex flex-col items-center flex-1 transition-opacity duration-500 ease-in-out">
                <p className="text-[#4a4a4a] text-lg md:text-xl leading-relaxed font-medium mb-6">
                  {testimonials[currentIndex].text}
                </p>
                <h3 className="text-[#2a2a2a] font-bold text-lg">
                  {testimonials[currentIndex].author}
                </h3>
                <p className="text-[#666] text-sm md:text-base">
                  {testimonials[currentIndex].position}
                </p>
              </div>

              <span className="text-[#6d28d9] text-6xl md:text-8xl leading-none font-serif pt-16">”</span>
            </div>

            <div className="flex gap-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentIndex === index ? 'bg-[#6d28d9]' : 'bg-[#d1d5db] hover:bg-[#9ca3af]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Kartiqner;