import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

function ArevtriFinansavorumiMasin() {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFromFirebase = async () => {
      try {
        const docRef = doc(db, 'arevtrifinansavorumiMasin', 'content');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setContent(docSnap.data());
        } else {
          setError("Տվյալները չեն գտնվել բազայում:");
        }
      } catch (err) {
        console.error("Սխալ բեռնման ժամանակ:", err);
        setError("Առաջացավ սխալ տվյալները բեռնելիս:");
      } finally {
        setLoading(false);
      }
    };

    fetchFromFirebase();
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  if (loading) {
    return (
      <div className="p-10 text-center text-purple-800 font-medium animate-pulse">
        Բեռնվում է...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center text-red-600 font-medium">
        {error}
      </div>
    );
  }

  if (!content) return null;

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 font-sans text-gray-800 space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">{content.title}</h1>
      
      <div className="space-y-4 text-sm leading-relaxed text-gray-700">
        <p>{content.introParagraph1}</p>
        <p>{content.introParagraph2}</p>
      </div>

      <h2 className="text-lg font-bold text-purple-900 mb-6">
        {content.sectionTitle}
      </h2>

      <div className="space-y-6">
        {content.guarantees.map((item, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-bold text-purple-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-700 inline-block"></span>
              {item.title}
            </h3>
            
            <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-5 text-sm text-gray-700 space-y-2">
              {item.enTitle && (
                <p className="italic text-gray-500 font-medium">
                  {item.enTitle}
                </p>
              )}
              <p className="leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 pt-4">
        <h2 className="text-xl font-bold text-gray-900">{content.topTitle}</h2>
        <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
          <p>{content.topDescription}</p>
        </div>
      </div>

      <div className="space-y-4 pt-2">
        <h3 className="text-lg font-bold text-purple-900">{content.advantagesTitle}</h3>
        <ul className="space-y-2">
          {content.advantages.map((adv, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
              <span className="w-2 h-2 rounded-full bg-purple-700 mt-2 flex-shrink-0"></span>
              <span>{adv}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6">
        <h2 className="text-xl font-bold uppercase mb-6 tracking-wide text-gray-900">
          {content.accordionSectionTitle}
        </h2>

        <div className="space-y-4">
          {content.accordions.map((acc, index) => {
            const isOpen = openAccordion === index;

            return (
              <div 
                key={index} 
                className={`border rounded-lg overflow-hidden bg-white transition-colors ${
                  isOpen && index === 0 ? 'border-purple-400' : 'border-purple-200'
                }`}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                >
                  <span className={`font-semibold text-sm md:text-base ${isOpen ? 'font-bold text-purple-900' : 'text-gray-800'}`}>
                    {acc.title}
                  </span>
                  <svg 
                    className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180 text-purple-700' : 'text-gray-500'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isOpen && (
                  <div className="p-5 pt-0 text-sm text-gray-700 border-t border-purple-100">
                    {acc.type === 'table' ? (
                      <div className="overflow-x-auto mt-4">
                        <table className="w-full border-collapse border border-purple-200 text-left">
                          <tbody>
                            {acc.rows.map((row, rIdx) => (
                              <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-purple-50/30' : 'bg-white'}>
                                <td className="border border-purple-200 p-3 font-medium w-12 text-center text-gray-500">
                                  {row.id}
                                </td>
                                <td className="border border-purple-200 p-3 font-semibold text-purple-900 w-1/3">
                                  {row.label}
                                </td>
                                <td className="border border-purple-200 p-3 text-gray-700 whitespace-pre-line">
                                  {row.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="mt-4">{acc.content}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ArevtriFinansavorumiMasin;