import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore"; // Փոխեցինք setDoc-ը getDoc-ի
import { db } from './firebaseConfog';

function SalaryiMasin2() {
  const [data, setData] = useState(null); // Ստեղծում ենք state տվյալների համար
  const [loading, setLoading] = useState(true); // Loading-ի վիճակ

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "salaryiMasin", "mainData");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data()); // Եթե տվյալները կան, լցնում ենք state-ի մեջ
        } else {
          console.log("Փաստաթուղթը չի գտնվել!");
        }
      } catch (error) {
        console.error("Սխալ տվյալները ստանալիս: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Բեռնվում է...</p>;
  if (!data) return <p>Տվյալներ չկան։</p>;

  return (
    <section className="w-full max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-[#2b2b2b]">
      <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-8">
        {data.intro.textBefore}
        <span className="font-bold text-[#8000ff]">
          {data.intro.highlightText}
        </span>
        {data.intro.textAfter}
      </p>

      <div className="space-y-10">
        {data.offers.map((offer) => (
          <div key={offer.id}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#8000ff] mb-6">
              {offer.title.prefixText && (
                <span>{offer.title.prefixText}</span>
              )}
              <Link 
                to={offer.title.link} 
                className={`underline hover:opacity-80 transition-opacity ${offer.title.isBlockLink ? 'block mt-3' : ''}`}
              >
                {offer.title.cardName}
              </Link>
            </h3>

            {offer.description && (
              <p className="text-base sm:text-lg font-medium leading-relaxed mb-4">
                {offer.description.textBefore}
                <span className="font-bold text-[#8000ff]">
                  {offer.description.highlightText}
                </span>
                {offer.description.textAfter}
              </p>
            )}

            <ul className="space-y-4 text-base sm:text-lg font-medium list-disc list-inside marker:text-[#8000ff] marker:text-xl">
              {offer.features.map((item) => (
                <li key={item.id}>
                  <span>
                    {item.text ? (
                      item.text
                    ) : (
                      <>
                        {item.textBefore}
                        <strong className="font-bold text-[#8000ff]">
                          {item.highlightText}
                        </strong>
                        {item.textAfter}
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SalaryiMasin2;