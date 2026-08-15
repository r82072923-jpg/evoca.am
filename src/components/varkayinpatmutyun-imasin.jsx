import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

function VarkayinPatmutyuniMasin() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "varkayinPatmutyuniMasin"));
        if (!querySnapshot.empty) {
          setPageData(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-12">Բեռնվում է...</div>;
  }

  if (!pageData) {
    return <div className="text-center py-12">Տվյալներ չեն գտնվել:</div>;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-gray-800">
        
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
          {pageData.title}
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-6">
          {pageData.subtitle}
        </h2>

        <p className="mb-8 text-sm sm:text-base leading-relaxed">
          Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր <span className="font-bold uppercase">վարկային պատմության</span> վրա:
        </p>

        <div className="space-y-8">
          
          {pageData.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#6C12E7] mt-1 text-xl leading-none">•</span>
                <h3 className="font-bold text-base sm:text-lg">
                  {section.title}
                </h3>
              </div>
              <div className={`pl-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 ${section.isItalic ? 'italic' : ''}`}>
                {section.paragraphs.map((p, pIndex) => (
                  <p key={pIndex}>{p}</p>
                ))}
                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((listItem, lIndex) => (
                      <li key={lIndex} className="flex items-start gap-3">
                        <span className="text-[#6C12E7] mt-1 text-lg leading-none">•</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          <div className="pt-8 mt-12 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-8">
              {pageData.loanCriteria.title}
            </h2>

            <div className="space-y-8 pl-0 sm:pl-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-4 text-base sm:text-lg">
                  Դրական որոշման կայացման չափանիշները՝
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  {pageData.loanCriteria.positive.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#6C12E7] mt-1 text-xl leading-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-4 text-base sm:text-lg">
                  Բացասական որոշման կայացման չափանիշները՝
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  {pageData.loanCriteria.negative.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#6C12E7] mt-1 text-xl leading-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-12 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-6">
              {pageData.creditScore.title}
            </h2>
            
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 pl-0 sm:pl-6">
              {pageData.creditScore.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}

              <p className="mt-6">
                {pageData.creditScore.linksText}{' '}
                {pageData.creditScore.externalLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#6C12E7] font-medium hover:underline">
                      {link.name}
                    </a>
                    {index < pageData.creditScore.externalLinks.length - 1 ? ', ' : ' կայքեր:'}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>

          <div className="pt-8 mt-12 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-6">
              {pageData.documents.title}
            </h2>
            <a 
              href={pageData.documents.fileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              download
              className="group flex items-center gap-4 p-4 bg-gray-50 hover:bg-[#f6f2fd] transition-colors rounded-xl border border-gray-200 hover:border-[#6C12E7] w-full sm:w-max cursor-pointer"
            >
              <span className="font-medium text-gray-800 text-sm sm:text-base group-hover:text-[#6C12E7] transition-colors">
                {pageData.documents.fileTitle}
              </span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default VarkayinPatmutyuniMasin;