import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const tabsData = ['Վարկի մասին', 'Պայմաններ', 'Պահանջվող փաստաթղթերի ցանկ'];

const requiredDocumentsData = [
  {
    id: 1,
    text: 'Հիփոթեքային վարկի տրամադրման դիմում-հայտ,'
  },
  {
    id: 2,
    text: 'անձնագիր կամ Նույնականացման քարտ ինչպես նաև, սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է Նույնականացման քարտ),'
  },
  {
    id: 3,
    text: 'անչափահաս երեխաների ծննդյան վկայական (առկայության դեպքում),'
  },
  {
    id: 4,
    text: 'տեղեկանք կամ աշխատանքային պայմանագիր, բանկային հաշվի քաղվածք /12 ամիս/ եկամուտները հավաստող այլ փաստաթղթեր, որոնց տրամադրման ժամկետը Բանկին ներկայացման օրվա դրությամբ չպետք է գերազանցի 30 օրացուցային օրը,'
  },
  {
    id: 5,
    text: 'Ամուսնության վկայական (առկայության դեպքում),'
  },
  {
    id: 6,
    text: 'Լիազորագիր /անհրաժեշտության դեպքում/'
  },
  {
    id: 7,
    text: 'Լիազորված անձի անձնագիր'
  },
  {
    id: 8,
    text: 'Ամուսնացած լինելու դեպքում, ամուսնու/կնոջ համաձայնություն'
  },
  {
    id: 9,
    text: 'Ձեռք բերվող անշարժ գույքի գնահատման հաշվետվություն,'
  },
  {
    id: 10,
    text: 'Ձեռք բերվող անշարժ գույքի սեփականության վկայական,'
  },
  {
    id: 11,
    text: 'Ձեռք բերվող անշարժ գույքի ձեռք բերման հիմքեր ,'
  },
  {
    id: 12,
    text: 'Ձեռք բերվող անշարժ գույքի սեփականատերերի անձնագրեր, ամուսնության վկայական /առկայության դեպքում/'
  },
  {
    id: 13,
    text: 'Երաշխավորող անձ /ՀՀ ռեզիդենտ /'
  },
  {
    id: 14,
    text: 'Բանկի պահանջով այլ փաստաթղթեր:'
  }
];

export const uploadDataToFirestore = async () => {
  try {
    const docRef = doc(db, 'loans18iMasin3', 'mainData');
    await setDoc(docRef, {
      tabs: tabsData,
      requiredDocuments: requiredDocumentsData
    });
    alert('Տվյալները հաջողությամբ պահպանվեցին Firebase-ում (loans18iMasin3)');
  } catch (error) {
    console.error('Խնդիր առաջացավ տվյալներն ուղարկելիս:', error);
    alert('Խնդիր առաջացավ տվյալներն ուղարկելիս: Ստուգեք console-ը:');
  }
};

const Loan18iMasin4 = ({ activeTab, setActiveTab }) => {
  const [tabs, setTabs] = useState([]);
  const [requiredDocs, setRequiredDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocumentsData = async () => {
      setLoading(true);
      setError(null);
      try {
        const docRef = doc(db, 'loans18iMasin3', 'mainData');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const fetchedTabs = data.tabs || tabsData;
          const fetchedDocs = data.requiredDocuments || requiredDocumentsData;

          setTabs(fetchedTabs);
          setRequiredDocs(fetchedDocs);

          if (!activeTab && setActiveTab && fetchedTabs.length > 0) {
            setActiveTab(fetchedTabs[2] || fetchedTabs[0]);
          }
        } else {
          console.warn('Firebase-ում տվյալներ չգտնվեցին: Օգտագործվում են default տվյալները:');
          setTabs(tabsData);
          setRequiredDocs(requiredDocumentsData);
        }
      } catch (err) {
        console.error('Տվյալները ստանալիս խնդիր առաջացավ:', err);
        setError('Չհաջողվեց բեռնել տվյալները Firebase-ից:');
        setTabs(tabsData);
        setRequiredDocs(requiredDocumentsData);
      } finally {
        setLoading(false);
      }
    };

    fetchDocumentsData();
  }, [activeTab, setActiveTab]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12 text-[#6b11cb] font-bold text-lg">
        Տվյալները բեռնվում են Firebase-ից...
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 font-sans">
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">

        {error && (
          <span className="text-red-500 text-sm font-medium">
            {error} (Ցուցադրվում են տեղական տվյալները)
          </span>
        )}
      </div>

      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab && setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-17px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Պահանջվող փաստաթղթերի ցանկ
        </h3>
        
        {requiredDocs.length === 0 ? (
          <p className="text-gray-500">Փաստաթղթեր առկա չեն:</p>
        ) : (
          <ul className="space-y-4">
            {requiredDocs.map((docItem) => (
              <li
                key={docItem.id}
                className="flex items-start gap-3 text-sm sm:text-base text-gray-800 leading-relaxed"
              >
                <span className="font-bold text-[#6b11cb] shrink-0 min-w-[24px]">
                  {docItem.id}.
                </span>
                <span className={docItem.id === 14 ? 'font-semibold' : ''}>
                  {docItem.text}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Loan18iMasin4;