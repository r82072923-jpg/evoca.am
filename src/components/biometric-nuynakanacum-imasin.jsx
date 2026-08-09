import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfog";

function BiometricNuynakanacumiMasin() {
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const docRef = doc(db, "biometricNuynakanacumiMasin", "evocatouch");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPageData(docSnap.data());
        } else {
          setError("Տվյալներ չեն գտնվել:");
        }
      } catch (err) {
        console.error("Սխալ տվյալները բեռնելիս: ", err);
        setError("Սխալ տվյալները բեռնելիս:");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPageData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen font-sans text-xl text-[#6b11cb]">
        Բեռնվում է...
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="flex justify-center items-center h-screen font-sans text-red-500 text-xl">
        {error || "Տվյալներ չեն գտնվել"}
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 font-sans bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-8">
        {pageData.title}
      </h2>

      <div className="flex flex-col space-y-6 text-[15px] sm:text-base text-[#333333] leading-relaxed">
        {pageData.descriptionParagraphs?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 py-6 font-sans bg-white">
        <ul className="flex flex-col space-y-4 sm:space-y-5">
          {pageData.servicesData?.map((service, index) => (
            <li key={index} className="flex items-start">
              <span className="min-w-[8px] min-h-[8px] w-2 h-2 mt-2 mr-4 bg-[#6b11cb] rounded-full shrink-0"></span>
              <span className="text-[15px] sm:text-base text-[#333333] leading-relaxed">
                {service}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col space-y-6 text-[15px] sm:text-base text-[#333333] leading-relaxed">
        {pageData.footerParagraphs?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="max-w-4xl mx-auto p-6 font-sans mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {pageData.documentsTitle}
        </h2>

        <div className="space-y-4">
          {pageData.documents?.map((doc) => (
            <a
              key={doc.id}
              href={doc.path}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#f8f5fc] hover:bg-[#f0ebf8] transition-colors duration-200 rounded-lg p-5 text-gray-900 text-sm md:text-base font-semibold"
            >
              {doc.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BiometricNuynakanacumiMasin;