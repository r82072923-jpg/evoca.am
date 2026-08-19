import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog';

const tabs = ['Կանխիկ', 'Անկանխիկ', 'Ոսկու փոխարժեք', 'Ռուբլու կանխիկ մուտք'];

function Ankanxik({ activeTab = 'Անկանխիկ', setActiveTab }) {
  const [ratesData, setRatesData] = useState([]);
  const [haveAmount, setHaveAmount] = useState('54000');
  const [haveCurrency, setHaveCurrency] = useState('AMD');
  const [receiveAmount, setReceiveAmount] = useState('');
  const [receiveCurrency, setReceiveCurrency] = useState('USD');

  useEffect(() => {
    const fetchRatesFromFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'ankanxik'));
        const ratesArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRatesData(ratesArray);
      } catch (error) {
        console.error('Error fetching rates:', error);
      }
    };

    fetchRatesFromFirebase();
  }, []);

  useEffect(() => {
    if (ratesData.length === 0) return;

    const cleanHave = parseFloat(haveAmount.replace(/,/g, '')) || 0;

    if (haveCurrency === receiveCurrency) {
      setReceiveAmount(cleanHave.toString());
      return;
    }

    if (haveCurrency === 'AMD') {
      const targetRate = ratesData.find(r => r.code === receiveCurrency);
      if (targetRate) {
        const sellRate = parseFloat(targetRate.sell);
        const res = cleanHave / sellRate;
        setReceiveAmount(res ? res.toFixed(2) : '');
      }
    } else if (receiveCurrency === 'AMD') {
      const sourceRate = ratesData.find(r => r.code === haveCurrency);
      if (sourceRate) {
        const buyRate = parseFloat(sourceRate.buy);
        const res = cleanHave * buyRate;
        setReceiveAmount(res ? res.toFixed(2) : '');
      }
    } else {
      const sourceRate = ratesData.find(r => r.code === haveCurrency);
      const targetRate = ratesData.find(r => r.code === receiveCurrency);
      if (sourceRate && targetRate) {
        const buyRate = parseFloat(sourceRate.buy);
        const sellRate = parseFloat(targetRate.sell);
        const amountInAmd = cleanHave * buyRate;
        const res = amountInAmd / sellRate;
        setReceiveAmount(res ? res.toFixed(2) : '');
      }
    }
  }, [haveAmount, haveCurrency, receiveCurrency, ratesData]);

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 font-sans text-[#2a2a2a]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
            <div className="flex flex-wrap border-b border-gray-100 bg-[#fcfcfd]">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab && setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-bold transition-colors ${
                    activeTab === tab
                      ? 'bg-white text-[#6d28d9] border-t-2 border-t-[#6d28d9] rounded-t-lg shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]'
                      : 'text-[#666] hover:text-[#2a2a2a]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-6 border-r border-gray-100">
                <div className="grid grid-cols-3 gap-4 mb-4 text-xs font-bold text-[#b3b3b3] px-2">
                  <div></div>
                  <div className="text-right">Առք</div>
                  <div className="text-right">Վաճառք</div>
                </div>

                <div className="flex flex-col gap-3">
                  {ratesData.map((rate, index) => (
                    <div key={rate.id || index} className="grid grid-cols-3 items-center px-2 py-1">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <span className="text-xl">{rate.flag}</span>
                        {rate.currency}
                      </div>
                      <div className="flex justify-end items-center gap-1 font-bold text-sm">
                        <span className="text-red-500 text-[10px]">▼</span>
                        {rate.buy}
                      </div>
                      <div className="flex justify-end items-center gap-1 font-bold text-sm">
                        <span className="text-green-500 text-[10px]">▲</span>
                        {rate.sell}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-[0.8] p-6 bg-[#fcfcfd]">
                <div className="flex flex-col gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#666] mb-2">Ունեմ</label>
                    <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#6d28d9]">
                      <input
                        type="text"
                        value={haveAmount}
                        onChange={(e) => setHaveAmount(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm font-bold outline-none"
                      />
                      <select
                        value={haveCurrency}
                        onChange={(e) => setHaveCurrency(e.target.value)}
                        className="bg-transparent px-3 py-2.5 text-sm font-bold text-[#6d28d9] cursor-pointer outline-none border-l border-gray-200"
                      >
                        <option value="AMD">AMD</option>
                        {ratesData.map((r) => (
                          <option key={r.code} value={r.code}>{r.code}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#666] mb-2">Կստանամ</label>
                    <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#6d28d9]">
                      <input
                        type="text"
                        value={receiveAmount}
                        onChange={(e) => setReceiveAmount(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm font-bold outline-none"
                      />
                      <select
                        value={receiveCurrency}
                        onChange={(e) => setReceiveCurrency(e.target.value)}
                        className="bg-transparent px-3 py-2.5 text-sm font-bold text-[#6d28d9] cursor-pointer outline-none border-l border-gray-200"
                      >
                        <option value="AMD">AMD</option>
                        {ratesData.map((r) => (
                          <option key={r.code} value={r.code}>{r.code}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-3 border-t border-gray-100 bg-white">
              <p className="text-[11px] font-semibold text-[#b3b3b3]">
                Թարմացվել է՝ 31.07.26
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Ankanxik;