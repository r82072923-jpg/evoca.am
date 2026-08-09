import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebaseConfog'; 
import { collection, getDocs } from 'firebase/firestore';

function UnionPayGoldiMasin2({ activeTab, setActiveTab }) {
  const [tariffs, setTariffs] = useState([]);
  const [loading, setLoading] = useState(true);

  const tabs = [
    'Քարտի մասին',
    'Սակագներ և դրույթներ'
  ];

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "unionPayGoldiMasin"));
        const tariffsData = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }));
    
        tariffsData.sort((a, b) => Number(a.id) - Number(b.id));
        setTariffs(tariffsData);
      } catch (error) {
        console.error("Սխալ տվյալների բեռնման ժամանակ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTariffs();
  }, []);

  return (
    <section className="w-full bg-white py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
          <nav className="flex space-x-10 min-w-max">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                  activeTab === tab
                    ? 'text-[#6b11cb]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-[-18px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-7 text-[#1a1a1a] text-lg sm:text-xl leading-relaxed">
            <p>
              Աշխարհում ավելի քան 240 միլիոն մարդ նախընտրում է Union Pay վճարային համակարգի քարտերը․ այսօր այդ հնարավորությունն ունես նաև դու:
            </p>
            <p>
              Evoca UnionPay Gold քարտն ունի մի շարք առավելություններ։ Քարտն ապահովված է վերջին գերժամանակակից լուծումներով, որը թույլ է տալիս անհպում ու անվտանգ վճարումներ կատարել ամբողջ աշխարհում:
            </p>
            <p>
              EvocaTOUCH հավելվածով կարող ես կառավարել քո ֆինանսները և 24/7 ունենալ քո գործարքներին վերաբերող ցանկացած ինֆորմացիայի հասանելիություն։
            </p>
            <p>
                UnionPay Gold քարտ կարող են պատվիրել ֆիզիկական անձինք՝ EvocaTOUCH հավելվածով, և evoca.am կայքով, իսկ դրանց առաքումը կլինի անվճար։ Չմոռանանք մեր ավանդական տարբերակի մասին․ քարտերը կարելի է նաև ձեռք բերել՝ մոտենալով Բանկի ցանկացած մասնաճյուղ։
            </p>
            <p>
                Բացահայտիր քո քարտի բենեֆիթները՝ բացառիկ զեղչեր և առաջարկներ աշխարհի տարբեր կետերում։ Մանրամասներին ծանոթացիր <Link to="https://www.evoca.am/file_manager/other/UPI%20final%20file.pdf" className='text-purple-500'>այստեղ։</Link>
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-[32px] p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.05)] space-y-6">
              
            <div className="flex gap-3 pb-2">
              <div className="w-11 h-11 bg-[#6b11cb] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">֏</div>
              <div className="w-11 h-11 bg-[#6b11cb] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">$</div>
              <div className="w-11 h-11 bg-[#6b11cb] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">€</div>
            </div>

            <div className="divide-y divide-gray-100">
              {loading ? (
                <div className="py-8 text-center text-gray-500 font-medium">Բեռնվում է...</div>
              ) : tariffs.length === 0 ? (
                <div className="py-8 text-center text-gray-500 font-medium">Տվյալներ չեն գտնվել</div>
              ) : (
                tariffs.map((item, index) => (
                  <div 
                    key={item.id || index} 
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 gap-3"
                  >
                    <div className="flex items-baseline gap-2 sm:w-1/3 shrink-0">
                      {item.subtitle && (
                        <span className="text-[11px] text-gray-400 font-medium leading-none">
                          {item.subtitle}
                        </span>
                      )}
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#6b11cb] tracking-tight">
                        {item.value}
                      </span>
                    </div>

                    <div className="sm:w-2/3 text-gray-800 text-sm sm:text-base font-medium leading-snug">
                      {item.description}
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default UnionPayGoldiMasin2;