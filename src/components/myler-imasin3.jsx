import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

const tabs = [
  'Քարտի մասին',
  'Տրամադրման պայմանները',
  'Սպասարկման պայմանները'
];

function MyLeriMasin3({ activeTab, setActiveTab }) {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'myLeriMasin'));
        const data = querySnapshot.docs.map(doc => doc.data());
        setTableData(data);
      } catch (error) {
        console.error('Սխալ տվյալների բեռնման ժամանակ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-10 font-medium">Բեռնվում է...</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto font-sans text-[#333333] p-4">
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

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse text-base">
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors border-b border-[#ebdef5]">
                <td className="py-4 px-4 align-top font-medium w-3/5 text-[#333333]">
                  {row.service}
                </td>
                <td className="py-4 px-4 align-top w-2/5 text-[#333333]">
                  {typeof row.value === 'string' && row.value.includes('\n') ? (
                    row.value.split('\n').map((paragraph, idx) => (
                      <p key={idx} className={paragraph ? 'mb-2' : ''}>
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    row.value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-xs text-gray-500 leading-relaxed">
        <p>
          <sup>[1]</sup> Մնացորդի տեղափոխության համար հաճախորդից գանձվում է GIFT քարտերի պատվիրումով սահմանված համապատասխան միջնորդավճար: Քարտի վավերականության ժամկետը լրանալուց հետո քարտի կորստի կամ վնասման դեպքում վերջինիս մնացորդային գումարը կարող է տրամադրվել բացառապես մնացորդի տեղափոխման միջոցով այլ GIFT քարտի: Սույն ենթակետով սահմանված դրույթը վերաբերում է ինչպես ակտիվացված, այնպես էլ չակտիվացված GIFT քարտերին:
        </p>
      </div>
    </div>
  );
}

export default MyLeriMasin3;