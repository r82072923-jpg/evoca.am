import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const tabs = ['Ավանդի մասին', 'Պայմաններ և սակագներ'];

const MankakanAvandiMasin3 = ({ activeTab, setActiveTab }) => {
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [contentData, setContentData] = useState(null);

  // Տվյալների բեռնում Firebase-ից
  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'mankakanAvandiMasin2'));
        
        if (!querySnapshot.empty) {
          // Վերցնում ենք առաջին փաստաթղթի տվյալները
          const docData = querySnapshot.docs[0].data();
          if (docData) {
            setContentData(docData);
          }
        } else {
          // Եթե բազան դատարկ է, սահմանում ենք դեֆոլտ տվյալներ
          setContentData({
            about: {
              paragraphs: [
                `Որպես ավանդատու կարող են հանդես գալ ինչպես երեխաների օրինական ներկայացուցիչները (ծնողները, խնամակալները), այնպես էլ երրորդ անձիք: Ավանդն ընդունվում է ֆիզիկական անձանցից, հօգուտ երեխաների Ավանդ ներդնելու պայմանով 2 տարուց մինչև երեխայի 18 տարին լրանալը:`,
                `Ավանդը կարող է համալրվել սկսած նվազագույնը 40,000 ՀՀ դրամից կամ 100 ԱՄՆ դոլարից: Տոկոսագումարների վճարումը կամ կապիտալացումը կարող է իրականացվել ամենամսյա պարբերականությամբ:`,
                `Ավանդ ներդնելիս Ձեզ տրամադրում ենք առանց տարեկան սպասարկման վճարի միջազգային քարտ, որին՝ Ձեր ցանկությամբ, կփոխանցվեն հաշվարկված տոկոսագումարները:`
              ]
            },
            termsAndConditions: {
              minAmountTable: [
                { minAmount: '100,000 ՀՀ դրամ', rate: '9.5 %' },
                { minAmount: '250 ԱՄՆ դոլար', rate: '4.5 %' }
              ],
              rules: [
                'Ավանդն ընդունվում է ֆիզիկական անձանցից, հօգուտ երեխաների Ավանդ ներդնելու պայմանով` 2 տարուց մինչև երեխայի 18 տարին լրանալը:'
              ],
              additionalConditions: {
                intro: [`ՀՀ ռեզիդենտ հանդիսացող ավանդատուի ցանկության դեպքում Բանկը կարող է տրամադրել վճարային քարտ առանց տարեկան սպասարկման վճարի գանձման:`],
                cardTable: [],
                bullets: []
              },
              yieldTable: [
                { currency: 'ՀՀ դրամ', at: '9.50%', tte: '9.50%' },
                { currency: 'ԱՄՆ դոլար', at: '4.50%', tte: '4.50%' }
              ]
            },
            cardWidget: {
              amountLabel: 'Նվազագույն գումար',
              amount: '40,000 ՀՀ դրամ / 100 ԱՄՆ դոլար',
              termLabel: 'Ժամկետ',
              term: '2 տարուց մինչև 18 տարին',
              rate: '9.5% (ՀՀ դրամ)',
              replenishmentLabel: 'Հնարավորություն',
              replenishment: 'Այո'
            }
          });
        }
      } catch (error) {
        console.error('Սխալ տվյալների ստացման ժամանակ:', error);
        setStatusMessage('Սխալ՝ տվյալները չհաջողվեց բեռնել։');
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirebase();
  }, []);

  // Տվյալները Firebase ուղարկելու ֆունկցիա (օգտակար է թարմացման կամ սկզբնական լցման համար)
  const uploadDataToFirebase = async () => {
    try {
      const db = getFirestore();
      const initialData = {
        about: {
          paragraphs: [
            `Որպես ավանդատու կարող են հանդես գալ ինչպես երեխաների օրինական ներկայացուցիչները (ծնողները, խնամակալները), այնպես էլ երրորդ անձիք: Ավանդն ընդունվում է ֆիզիկական անձանցից, հօգուտ երեխաների Ավանդ ներդնելու պայմանով 2 տարուց մինչև երեխայի 18 տարին լրանալը:`,
            `Ավանդը կարող է համալրվել սկսած նվազագույնը 40,000 ՀՀ դրամից կամ 100 ԱՄՆ դոլարից: Տոկոսագումարների վճարումը կամ կապիտալացումը կարող է իրականացվել ամենամսյա պարբերականությամբ:`,
            `Ավանդ ներդնելիս Ձեզ տրամադրում ենք առանց տարեկան սպասարկման վճարի միջազգային քարտ, որին՝ Ձեր ցանկությամբ, կփոխանցվեն հաշվարկված տոկոսագումարները:`
          ]
        },
        termsAndConditions: {
          minAmountTable: [
            { minAmount: '100,000 ՀՀ դրամ', rate: '9.5 %' },
            { minAmount: '250 ԱՄՆ դոլար', rate: '4.5 %' }
          ],
          rules: [
            'Ավանդն ընդունվում է ֆիզիկական անձանցից, հօգուտ երեխաների Ավանդ ներդնելու պայմանով` 2 տարուց մինչև երեխայի 18 տարին լրանալը:',
            'Որպես ավանդատու կարող են հանդես գալ ինչպես երեխաների օրինական ներկայացուցիչները (ծնողները, խնամակալները), այնպես էլ երրորդ անձիք:',
            'Տոկոսագումարների վճարումը կամ կապիտալացումը իրականացվում է ամենամսյա պարբերականությամբ:',
            'Ավանդը կարող է համալրվել (ավելացվել) սկսած նվազագույնը 40,000 ՀՀ դրամից կամ 100 ԱՄՆ դոլարից:',
            'Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում:'
          ],
          additionalConditions: {
            intro: [
              `ՀՀ ռեզիդենտ հանդիսացող ավանդատուի ցանկության դեպքում Բանկը կարող է տրամադրել վճարային քարտ առանց տարեկան սպասարկման վճարի գանձման:`
            ],
            cardTable: [
              { currency: 'ՀՀ դրամ', classic: '500,000 - 10,000,000 ներառյալ', gold: '10,000,000 - 40,000,000 ներառյալ', infinite: '40,000,000 և ավել' },
              { currency: 'ԱՄՆ դոլար', classic: '1,000 - 25,000 ներառյալ', gold: '25,000 - 100,000 ներառյալ', infinite: '100,000 և ավել' }
            ],
            bullets: [
              `Քարտերը տրամադրվում են տվյալ քարտային պրոդուկտի համար հասանելի արժույթով ըստ հաճախորդի ցանկության:`
            ]
          },
          yieldTable: [
            { currency: 'ՀՀ դրամ', at: '9.50%', tte: '9.50%' },
            { currency: 'ԱՄՆ դոլար', at: '4.50%', tte: '4.50%' }
          ]
        },
        cardWidget: {
          amountLabel: 'Նվազագույն գումար',
          amount: '40,000 ՀՀ դրամ / 100 ԱՄՆ դոլար',
          termLabel: 'Ժամկետ',
          term: '2 տարուց մինչև 18 տարին',
          rate: '9.5% (ՀՀ դրամ)',
          replenishmentLabel: 'Հնարավորություն',
          replenishment: 'Այո'
        }
      };

      await addDoc(collection(db, 'mankakanAvandiMasin2'), initialData);
      setStatusMessage('Տվյալները հաջողությամբ ուղարկվեցին Firebase!');
      setContentData(initialData); 
    } catch (error) {
      console.error('Սխալ տվյալների ուղարկման ժամանակ:', error);
      setStatusMessage('Սխալ՝ տվյալները չհաջողվեց ուղարկել։');
    }
  };

  if (loading) {
    return (
      <div className="w-full py-16 text-center font-sans text-gray-500">
        Բեռնվում է...
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 font-sans">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto w-full">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab ? 'text-[#6b11cb]' : 'text-gray-500 hover:text-gray-700'
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
      {statusMessage && (
        <div className="p-3 mb-4 bg-purple-50 border border-purple-200 text-[#6b11cb] rounded-lg text-sm font-semibold">
          {statusMessage}
        </div>
      )}
      {activeTab === 'Ավանդի մասին' ? (
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-3/5 space-y-6 text-[15px] font-medium text-gray-800 leading-relaxed">
            {contentData?.about?.paragraphs?.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <div className="w-full lg:w-2/5 bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 p-6">
            <div className="flex gap-3 mb-6">
              <span className='w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold bg-[#6b11cb] text-white'>֏</span>
              <span className='w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold bg-[#6b11cb] text-white'>$</span>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between items-center py-4 border-b border-gray-100">
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">{contentData?.cardWidget?.amountLabel}</div>
                  <div className="text-xl font-extrabold text-[#6b11cb]">{contentData?.cardWidget?.amount}</div>
                </div>
                <div className="text-sm font-medium text-gray-800">Գումար</div>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-gray-100">
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">{contentData?.cardWidget?.termLabel}</div>
                  <div className="text-xl font-extrabold text-[#6b11cb]">{contentData?.cardWidget?.term}</div>
                </div>
                <div className="text-sm font-medium text-gray-800">Ժամկետ</div>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-gray-100">
                <div className="text-xl font-extrabold text-[#6b11cb]">{contentData?.cardWidget?.rate}</div>
                <div className="text-sm font-medium text-gray-800">Տոկոսադրույք</div>
              </div>

              <div className="flex justify-between items-center py-4">
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">{contentData?.cardWidget?.replenishmentLabel}</div>
                  <div className="text-xl font-extrabold text-[#6b11cb]">{contentData?.cardWidget?.replenishment}</div>
                </div>
                <div className="text-sm font-medium text-gray-800">Համալրման հնարավորություն</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full space-y-6 text-[15px] font-medium text-gray-800 leading-relaxed max-w-4xl">
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-200 text-left">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th className="border border-gray-200 p-3 font-bold">Նվազագույն գումար</th>
                  <th className="border border-gray-200 p-3 font-bold">Տարեկան տոկոսադրույք</th>
                </tr>
              </thead>
              <tbody>
                {contentData?.termsAndConditions?.minAmountTable?.map((row, idx) => (
                  <tr key={idx}>
                    <td className="border border-gray-200 p-3">{row.minAmount}</td>
                    <td className="border border-gray-200 p-3">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ol className="list-decimal list-inside space-y-4 text-gray-800">
            {contentData?.termsAndConditions?.rules?.map((rule, idx) => (
              <li key={idx}>
                <span className="text-[#6b11cb] font-semibold">{idx + 1}.</span> {rule}
              </li>
            ))}
          </ol>

          {/* Լրացուցիչ պայմաններ և աղյուսակներ */}
          <div className="mt-12 space-y-6 pt-6 border-t border-gray-100">
            <h3 className="text-xl font-extrabold text-[#6b11cb]">Լրացուցիչ պայմաններ</h3>
            
            <div className="space-y-4 text-gray-800">
              {contentData?.termsAndConditions?.additionalConditions?.intro?.map((text, idx) => (
                <p key={idx}>
                  <span className="text-[#6b11cb] font-semibold">{idx + 1}.</span> {text}
                </p>
              ))}
            </div>

            {contentData?.termsAndConditions?.additionalConditions?.cardTable?.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                  <thead>
                    <tr className="bg-gray-50/50 text-gray-800">
                      <th className="border border-gray-200 p-3 font-bold">Ավանդի արժույթ/Քարտի տեսակ *</th>
                      <th className="border border-gray-200 p-3 font-bold">ArCa Classic / Visa Classic</th>
                      <th className="border border-gray-200 p-3 font-bold">Mastercard Gold / Visa Platinum</th>
                      <th className="border border-gray-200 p-3 font-bold">VISA Infinite</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contentData.termsAndConditions.additionalConditions.cardTable.map((row, idx) => (
                      <tr key={idx}>
                        <td className="border border-gray-200 p-3 font-semibold">{row.currency}</td>
                        <td className="border border-gray-200 p-3">{row.classic}</td>
                        <td className="border border-gray-200 p-3">{row.gold}</td>
                        <td className="border border-gray-200 p-3">{row.infinite}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Եկամտաբերության աղյուսակ */}
          <div className="mt-12 space-y-6 pt-6 border-t border-gray-100">
            <h3 className="text-xl font-extrabold text-[#6b11cb]">Ավանդի տարեկան տոկոսային եկամտաբերության չափը</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                <thead>
                  <tr className="bg-gray-50/50 text-gray-800">
                    <th className="border border-gray-200 p-3 font-bold" colSpan="3">ՄԱՆԿԱԿԱՆ ԱՎԱՆԴԱՏԵՍԱԿԻ ՏԱՐԵԿԱՆ ՏՈԿԱՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆ</th>
                  </tr>
                  <tr className="bg-gray-50/50 text-gray-800">
                    <th className="border border-gray-200 p-3 font-bold">Արժույթ</th>
                    <th className="border border-gray-200 p-3 font-bold">ԱՏ</th>
                    <th className="border border-gray-200 p-3 font-bold">ՏՏԵ</th>
                  </tr>
                </thead>
                <tbody>
                  {contentData?.termsAndConditions?.yieldTable?.map((row, idx) => (
                    <tr key={idx}>
                      <td className="border border-gray-200 p-3 font-semibold">{row.currency}</td>
                      <td className="border border-gray-200 p-3">{row.at}</td>
                      <td className="border border-gray-200 p-3">{row.tte}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MankakanAvandiMasin3;