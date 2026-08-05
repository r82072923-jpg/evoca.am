import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

function BusinessLoan6iMasin2() {
  const [activeTab, setActiveTab] = useState(0);
  const [loanData, setLoanData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'businessLoan6iMasin'));
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          setLoanData(data);
        }
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoanData();
  }, []);

  const tabs = loanData?.tabs || [
    'Վարկի մասին',
    'Պայմաններ և սակագներ',
    'ՓՄՁ վարկի օնլայն հայտ',
    'Պահանջվող փաստաթղթեր',
  ];

  if (loading) {
    return (
      <div className="w-full py-20 text-center font-sans text-gray-500">
        Տվյալները բեռնվում են...
      </div>
    );
  }

  return (
    <section className="w-full bg-white py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab-եր */}
        <div className="border-b border-gray-200 mb-12 overflow-x-auto">
          <nav className="flex space-x-10 min-w-max">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`pb-4 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                  activeTab === index
                    ? 'text-[#6b11cb]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
                {activeTab === index && (
                  <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Հիմնական բովանդակություն */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Ձախ կողմի տեքստը */}
          <div className="lg:col-span-7 space-y-7 text-[#1a1a1a] text-lg sm:text-xl leading-relaxed">
            <p>
              Evocabank-ը առաջարկում է{' '}
              <Link to="/business" className="text-[#6b11cb] font-extrabold underline hover:opacity-80">
                բիզնես վարկեր
              </Link>
              ` փոքր և միջին բիզնես գործունեություն ծավալող ՀՀ ռեզիդենտ իրավաբանական անձանց և անհատ ձեռնարկատերերի համար:
            </p>

            <p>Տրամադրված վարկի գումարը կարող եք օգտագործել անկանխիկ եղանակով:</p>

            <p>
              Վարկերը կարող եք ձևակերպել մեր Գլխամասային գրասենյակում և ցանկացած մասնաճյուղում (բացառությամբ «Էրեբունի»-ի):
            </p>

            <p className="font-bold text-[#1a1a1a] pt-2">
              Որպես վարկի ապահովության միջոց կարող են հանդիսանալ`
            </p>

            {/* Ցուցակ */}
            <ul className="space-y-4 pt-1">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#6b11cb] rounded-full inline-block shrink-0" />
                <span>Անշարժ և շարժական գույքը,</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#6b11cb] rounded-full inline-block shrink-0" />
                <span>Ավանդային կամ ընթացիկ հաշիվների դրամական միջոցները,</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#6b11cb] rounded-full inline-block shrink-0" />
                <span>Շրջանառու միջոցները, պատրաստի արտադրանքը,</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#6b11cb] rounded-full inline-block shrink-0" />
                <span>Ոսկու ստանդարտացված ձուլակտորները կամ ջարդոնը, թանկարժեք մետաղները,</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#6b11cb] rounded-full inline-block shrink-0" />
                <span>Պետական կարճաժամկետ պարտատոմսերը կամ այլ արժեթղթերը</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#6b11cb] rounded-full inline-block shrink-0" />
                <span>Իրավաբանական կամ ֆիզիկական անձանց երաշխավորություններ:</span>
              </li>
            </ul>
          </div>

          {/* Աջ կողմի քարտը (Firebase-ից ստացված տվյալներով) */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-[32px] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.05)] space-y-8">
            
            {/* Արտարժույթի կոճակներ */}
            <div className="flex gap-3">
              <div className="w-11 h-11 bg-[#5b06bd] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-sm">
                ֏
              </div>
              <div className="w-11 h-11 bg-[#5b06bd] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-sm">
                $
              </div>
              <div className="w-11 h-11 bg-[#5b06bd] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-sm">
                €
              </div>
            </div>

            {/* Սահմանաչափ */}
            <div className="border-b border-gray-100 pb-6 flex justify-between items-end">
              <div>
                <span className="text-xs text-gray-400 block font-medium mb-1">մինչև</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#6b11cb]">
                  {loanData?.limit || '750 մլն. ֏'}
                </span>
              </div>
              <span className="text-[#1a1a1a] font-bold text-base sm:text-lg mb-1">
                Սահմանաչափ
              </span>
            </div>

            {/* Մարման ժամկետ */}
            <div className="border-b border-gray-100 pb-6 flex justify-between items-end">
              <div>
                <span className="text-xs text-gray-400 block font-medium mb-1">մինչև</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#6b11cb]">
                  {loanData?.duration || '84 ամիս'}
                </span>
              </div>
              <span className="text-[#1a1a1a] font-bold text-base sm:text-lg mb-1">
                Մարման ժամկետ
              </span>
            </div>

            {/* Տոկոսադրույք */}
            <div className="pb-2 flex justify-between items-end">
              <div>
                <span className="text-xs text-gray-400 block font-medium mb-1">սկսած</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#6b11cb]">
                  {loanData?.interestRate || '7%-ից'}
                </span>
              </div>
              <span className="text-[#1a1a1a] font-bold text-base sm:text-lg mb-1">
                Տոկոսադրույք
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default BusinessLoan6iMasin2;