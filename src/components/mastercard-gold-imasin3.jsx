import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { collection, getDocs } from 'firebase/firestore';

function MasterCardGoldiMasin3({ activeTab, setActiveTab }) {
  const tabs = [
    'Քարտի մասին',
    'Սակագներ և դրույթներ'
  ];

  const [pricingData, setPricingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'masterCardGoldiMasin2'));
        const data = querySnapshot.docs.map(doc => doc.data());
        setPricingData(data);
      } catch (error) {
        console.error('Սխալ տվյալների ստացման ժամանակ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4 font-sans overflow-x-auto">
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

      {loading ? (
        <div className="text-center py-10 text-gray-500 font-medium">Բեռնվում է...</div>
      ) : (
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-700 shadow-sm rounded-lg overflow-hidden border border-gray-200">
          <thead>
            <tr className="bg-purple-900 text-white text-base">
              <th scope="col" className="px-6 py-4 font-bold border-b border-purple-800">
                Մատուցվող ծառայություններ
              </th>
              <th scope="col" className="px-6 py-4 font-bold border-b border-purple-800">
                MasterCard Standard / <br /> Visa Classic
              </th>
              <th scope="col" className="px-6 py-4 font-bold border-b border-purple-800">
                MasterCard Gold / Visa Gold <sup className="text-xs">[2]</sup>
              </th>
              <th scope="col" className="px-6 py-4 font-bold border-b border-purple-800">
                Visa Business
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pricingData.map((item, index) => {
              if (item.type === 'header') {
                return (
                  <tr key={index} className="bg-purple-50">
                    <td colSpan="4" className="px-6 py-3 font-bold text-purple-900 border-r border-gray-200">
                      {item.title}
                    </td>
                  </tr>
                );
              }
              if (item.type === 'subheader') {
                return (
                  <tr key={index} className="bg-gray-100">
                    <td colSpan="4" className="px-6 py-2 font-semibold text-gray-800 border-r border-gray-200 text-sm">
                      {item.title}
                    </td>
                  </tr>
                );
              }
              if (item.type === 'colspanRow') {
                return (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-200">
                      {item.service}
                    </td>
                    <td colSpan="3" className="px-6 py-4 font-semibold text-gray-800">
                      {item.value}
                    </td>
                  </tr>
                );
              }
              return (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-200">
                    {item.service}
                  </td>
                  <td className="px-6 py-4 border-r border-gray-200 font-semibold">
                    {item.std}
                  </td>
                  <td className="px-6 py-4 border-r border-gray-200 font-semibold">
                    {item.gold}
                  </td>
                  <td className="px-6 py-4 font-semibold">
                    {item.business}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MasterCardGoldiMasin3;