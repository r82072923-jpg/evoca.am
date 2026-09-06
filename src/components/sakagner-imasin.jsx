import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfog";

const SakagneriMasin = () => {
  const [activeSubCategory, setActiveSubCategory] = useState('Վերանորոգման վարկ EvocaHOME');
  const [extraTablesData, setExtraTablesData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "sakagneriMasin", "allData");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setExtraTablesData(docSnap.data());
        } else {
          console.log("Փաստաթուղթը գոյություն չունի!");
        }
      } catch (err) {
        console.error("Սխալ տվյալների բեռնման ժամանակ:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [categories, setCategories] = useState([
    { 
      name: "Սպառողական վարկեր", 
      isOpen: true,
      subs: [
        "Վերանորոգման վարկ EvocaHOME",
        "Անհատական վարկ «Ներդրումային»",
        "Գույքի գրավով ապահովված վարկ",
        "Անգրավ սպառողական վարկ",
        "Ոսկու գրավով կոմերցիոն վարկ",
        "Վճարային քարտով օվերդրաֆտ/վարկային քարտ",
        "Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ",
        "Ուսանողական-սպառողական վարկ (ծրագրային)",
        "Evolution",
        "Evoca աշխատավարձային փաթեթի շրջանակում տրամադրվող վարկ",
      ]
    },
    { name: "Հիփոթեքային վարկեր", isOpen: false, subs: ["Բնակարանային հիփոթեքային վարկ", "Բնակարանային հիփոթեքային վարկեր լողացող տոկոսադրույքով","Ոչ ռեզիդենտ ֆիզիկական անձանց համար բնակարանային հիփոթեքային վարկեր","Առևտրային հիփոթեքային վարկեր","ԱՀԸ-ի ծրագրով ձեռք բերման վարկ","ԱՀԸ-ի ծրագրով վերանորոգման վարկեր","ԱՀԸ-ի ծրագրով կառուցապատման վարկեր"] },
    { name: "Ավտովարկեր", isOpen: false, subs: ["Ավտոմեքենայի ձեռք բերման նպատակով վարկեր"] },
    { name: "Լիզինգ", isOpen: false, subs: ["Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ"] },
    { name: "Օնլայն վարկեր", isOpen: false, subs: ["Action", "Օնլայն օվերդրաֆտներ վճարային քարտերով (վարկային քարտեր)"] },
  ]);

  const toggleCategory = (index) => {
    setCategories(categories.map((cat, i) => {
      if (i === index) {
        return { ...cat, isOpen: !cat.isOpen };
      }
      return cat; 
    }));
  };

  const currentTableData = extraTablesData[activeSubCategory] || [];

  const saveAllTablesToFirebase = async () => {
    try {
      const sampleData = {
        "Վերանորոգման վարկ EvocaHOME": [
          { id: 1, title: "Վարկի տոկոսադրույք", desc: "Սկսած 13% տարեկան" }
        ]
      };

      await setDoc(doc(db, "sakagneriMasin", "allData"), sampleData);
      alert("Տվյալները հաջողությամբ պահպանվեցին Firebase-ում:");
    } catch (err) {
      console.error("Սխալ պահպանման ժամանակ:", err);
    }
  };

  if (loading) return <div className="p-8 text-center">Բեռնվում է...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Սխալ տեղի ունեցավ:</div>;

  return (
    <div className="max-w-[1300px] mx-auto p-4 md:p-8 font-sans text-[#1a1446]">
      <h1 className="text-2xl md:text-3xl font-black mb-8 leading-snug">
        Ֆիզիկական անձանց տրամադրվող անհատական վարկեր ըստ պրոդուկտների / Պայմաններ և սակագներ /
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/4 flex-shrink-0">
          <div className="flex flex-col space-y-1">
            {categories.map((category, idx) => (
              <div key={idx} className="flex flex-col">
                <div 
                  onClick={() => toggleCategory(idx)}
                  className={`flex justify-between items-center py-3 px-4 cursor-pointer font-bold text-sm select-none transition-colors
                    ${category.isOpen ? 'text-[#512888] border-l-4 border-[#512888]' : 'text-[#1a1446] hover:bg-gray-50 border-l-4 border-transparent'}`}
                >
                  <span>{category.name}</span>
                  <span className="text-lg">
                    {category.isOpen ? '⌃' : '⌄'}
                  </span>
                </div>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    category.isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex flex-col pl-6 pr-2 py-2 space-y-4">
                    {category.subs && category.subs.map((sub, subIdx) => (
                      <div 
                        key={subIdx} 
                        className={`text-[13px] cursor-pointer leading-tight transition-colors
                          ${activeSubCategory === sub ? 'text-[#512888] font-bold' : 'text-gray-600 hover:text-[#512888]'}`}
                        onClick={() => setActiveSubCategory(sub)}
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <h2 className="text-xl font-bold mb-6 text-[#1a1446]">
            {activeSubCategory}
          </h2>

          <div className="w-full border border-[#f0e6ff] rounded-md overflow-hidden bg-white shadow-sm">
            {currentTableData.length > 0 ? (
              currentTableData.map((row, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col sm:flex-row w-full text-[13px] 
                    ${index !== currentTableData.length - 1 ? 'border-b border-[#f0e6ff]' : ''}`}
                >
                  {row.id && (
                    <div className="sm:w-[5%] p-4 font-bold text-gray-800 flex items-start justify-center border-r border-[#f0e6ff]">
                      {row.id}.
                    </div>
                  )}
                  
                  <div className={`${row.id ? 'sm:w-[35%]' : 'sm:w-[30%]'} p-4 font-bold text-[#1a1446] border-r border-[#f0e6ff] flex items-center`}>
                    {row.title}
                  </div>
                  
                  <div className={`{row.id ? 'sm:w-[60%]' : 'sm:w-[70%]} ${row.noPadding ? 'p-0' : 'p-4'} text-gray-700 leading-relaxed flex items-center`}>
                    {row.desc}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                Այս պրոդուկտի տվյալները դեռ մուտքագրված չեն:
              </div>
            )}
          </div>

          {activeSubCategory === 'Անգրավ սպառողական վարկ' && (
            <div className="mt-4 text-[11px] text-gray-500 leading-relaxed space-y-1">
              <p><sup>[1]</sup> DTI (Debt-to-Income) - Վարկունակության ստուգման գործակից...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SakagneriMasin;