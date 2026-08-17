import React, { useState } from 'react';
import VarkiHashvich from './varkihashvich';

function AvandiHashvich() {
  const [activeTab, setActiveTab] = useState('loan');
  
  const [depositData, setDepositData] = useState({
    amount: 25660000,
    rate: 9,
    term: 379,
  });

  const formatNumber = (num, decimals = 2) => {
    if (isNaN(num)) return '0';
    return Number(num).toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  const parseFormattedNumber = (str) => {
    return parseFloat(str.replace(/,/g, '')) || 0;
  };

  const handleDepositChange = (field, value) => {
    setDepositData((prev) => ({ ...prev, [field]: value }));
  };

  const calculateDeposit = () => {
    const { amount, rate, term } = depositData;
    const dailyInterest = (amount * (rate / 100)) / 365;
    const totalInterest = dailyInterest * term;
    const netInterest = totalInterest * (1 - 0.10);

    const rawResults = [
      { id: 'daily', label: 'Օրական կտրվածքով հաշվարկվող տոկոսագումար *', value: dailyInterest },
      { id: 'total', label: 'Ավանդային պայմանագրի ընթացքում հաշվարկվող ընդհանուր տոկոսային եկամուտ', value: totalInterest },
      { id: 'net', label: 'Ավանդային պայմանագրի ընթացքում փաստացի վճարվող զուտ տոկոսային եկամուտ', value: netInterest }
    ];

    return rawResults.filter(item => item.value > 0);
  };

  const depositResultsList = calculateDeposit();

  return (
    <div className="p-8 font-sans text-gray-800 bg-gray-50 min-h-screen relative">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Հաշվիչներ</h1>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          
          <div className="flex gap-4 border-b border-gray-200 mb-6 pb-2">
            <button 
              onClick={() => setActiveTab('loan')}
              className={`pb-2 px-2 font-bold transition-colors cursor-pointer ${
                activeTab === 'loan' 
                  ? 'text-gray-900 border-b-2 border-purple-600' 
                  : 'text-gray-400 hover:text-gray-600 border-b-2 border-transparent'
              }`}
            >
              Վարկ
            </button>
            <button 
              onClick={() => setActiveTab('deposit')}
              className={`pb-2 px-2 font-bold transition-colors cursor-pointer ${
                activeTab === 'deposit' 
                  ? 'text-gray-900 border-b-2 border-purple-600' 
                  : 'text-gray-400 hover:text-gray-600 border-b-2 border-transparent'
              }`}
            >
              Ավանդ
            </button>
          </div>

          {activeTab === 'loan' ? (
            <VarkiHashvich
              formatNumber={formatNumber} 
              parseFormattedNumber={parseFormattedNumber} 
            />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-2">
                    <span className="text-sm text-gray-600">Ներդրվող գումար</span>
                    <input
                      type="text"
                      className="text-right font-bold text-lg outline-none w-1/2"
                      value={formatNumber(depositData.amount, 0)}
                      onChange={(e) => handleDepositChange('amount', parseFormattedNumber(e.target.value))}
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50000000"
                    value={depositData.amount}
                    onChange={(e) => handleDepositChange('amount', Number(e.target.value))}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-2">
                    <span className="text-sm text-gray-600">Տարեկան տոկոսադրույք</span>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        step="0.1"
                        className="text-right font-bold text-lg outline-none w-16"
                        value={depositData.rate}
                        onChange={(e) => handleDepositChange('rate', Number(e.target.value))}
                      />
                      <span className="text-sm">%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="36"
                    step="0.1"
                    value={depositData.rate}
                    onChange={(e) => handleDepositChange('rate', Number(e.target.value))}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-2">
                    <span className="text-sm text-gray-600">Ավանդի ժամկետ</span>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        className="text-right font-bold text-lg outline-none w-20"
                        value={depositData.term}
                        onChange={(e) => handleDepositChange('term', Number(e.target.value))}
                      />
                      <span className="text-sm">օր</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="91"
                    max="1095"
                    value={depositData.term}
                    onChange={(e) => handleDepositChange('term', Number(e.target.value))}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 pt-2">
                {depositResultsList.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="text-sm text-gray-600 max-w-[260px]">{item.label}</span>
                    <span className="text-xl font-bold text-gray-900">{formatNumber(item.value)}</span>
                  </div>
                ))}
                <div className="text-xs text-gray-400 flex items-start gap-2 pt-2">
                  <span>Ներդրված ավանդի դիմաց ստացվող տոկոսագումարներն հարկվում են 10% եկամտային հարկի չափով:</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default AvandiHashvich