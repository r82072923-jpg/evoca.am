import React, { useState } from 'react';

function AvandiHashvich() {
  // Սթեյթ, որը կառավարում է թե որ էջում/բաժնում ենք ('loan' թե 'deposit')
  const [activeTab, setActiveTab] = useState('loan');
  
  // Բոլոր դաշտերը մեկ state-ում (առանց առանձին setRate-երի)
  const [formData, setFormData] = useState({
    // Վարկի դաշտեր
    amount: 14520000,
    term: 256,
    rate: 10,
    repaymentType: 'spring',
    
    // Ավանդի դաշտեր
    depositAmount: 25660000,
    depositRate: 9,
    depositTerm: 379,
  });

  const [results, setResults] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAmountChange = (e) => {
    const val = parseFormattedNumber(e.target.value);
    if (val <= 50000000) {
      handleInputChange('amount', val);
    }
  };

  const calculateLoan = () => {
    const { amount, term, rate, repaymentType } = formData;
    const monthlyRate = rate / 100 / 12;
    let schedule = [];
    let totalInterest = 0;
    let totalPrincipal = 0;
    let remainingBalance = amount;

    if (repaymentType === 'spring') {
      const principalPayment = amount / term;
      for (let i = 1; i <= term; i++) {
        const interestPayment = remainingBalance * monthlyRate;
        const monthlyPayment = principalPayment + interestPayment;

        schedule.push({
          month: i,
          interest: interestPayment,
          principal: principalPayment,
          total: monthlyPayment,
        });

        totalInterest += interestPayment;
        totalPrincipal += principalPayment;
        remainingBalance -= principalPayment;
      }
    } else {
      const monthlyPayment =
        (amount * (monthlyRate * Math.pow(1 + monthlyRate, term))) /
        (Math.pow(1 + monthlyRate, term) - 1);

      for (let i = 1; i <= term; i++) {
        const interestPayment = remainingBalance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;

        schedule.push({
          month: i,
          interest: interestPayment,
          principal: principalPayment,
          total: monthlyPayment,
        });

        totalInterest += interestPayment;
        totalPrincipal += principalPayment;
        remainingBalance -= principalPayment;
      }
    }

    setResults({
      schedule,
      totalInterest,
      totalPrincipal,
      totalPayment: totalInterest + amount,
    });
    
    setIsModalOpen(true);
  };

  // Ավանդի հաշվարկ (օգտագործված է filter() մեթոդը)
  const calculateDeposit = () => {
    const { depositAmount, depositRate, depositTerm } = formData;
    
    const dailyInterest = (depositAmount * (depositRate / 100)) / 365;
    const totalInterest = dailyInterest * depositTerm;
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

        {/* ՄՈՒՏՔԱԳՐՄԱՆ ԲԼՈԿ */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          
          {/* ՎԵՐԵՎԻ ՄԵՆՅՈՒ (Սեղմելիս բացվում է համապատասխան բաժինը) */}
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

          {/* ԵԹԵ ԸՆՏՐՎԱԾ Է ՎԱՐԿԸ */}
          {activeTab === 'loan' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Վարկի գումար */}
                <div>
                  <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-2">
                    <span className="text-sm text-gray-600">Վարկի գումար</span>
                    <input
                      type="text"
                      className="text-right font-bold text-lg outline-none w-1/2"
                      value={formData.amount ? formatNumber(formData.amount, 0) : ''}
                      onChange={handleAmountChange}
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50000000"
                    value={formData.amount}
                    onChange={(e) => handleInputChange('amount', Number(e.target.value))}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0</span>
                    <span>50,000,000</span>
                  </div>
                </div>

                {/* Ժամկետ */}
                <div>
                  <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-2">
                    <span className="text-sm text-gray-600">Ժամկետ</span>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        className="text-right font-bold text-lg outline-none w-16"
                        value={formData.term}
                        onChange={(e) => handleInputChange('term', Number(e.target.value))}
                      />
                      <span className="text-sm">ամիս</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="1200"
                    value={formData.term}
                    onChange={(e) => handleInputChange('term', Number(e.target.value))}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1 ամիս</span>
                    <span>1200 ամիս</span>
                  </div>
                </div>

                {/* Տարեկան տոկոսադրույք */}
                <div>
                  <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-2">
                    <span className="text-sm text-gray-600">Տարեկան տոկոսադրույք</span>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        step="0.1"
                        className="text-right font-bold text-lg outline-none w-16"
                        value={formData.rate}
                        onChange={(e) => handleInputChange('rate', Number(e.target.value))}
                      />
                      <span className="text-sm">%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="36"
                    step="0.1"
                    value={formData.rate}
                    onChange={(e) => handleInputChange('rate', Number(e.target.value))}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1 %</span>
                    <span>36 %</span>
                  </div>
                </div>

                {/* Մարման ձև */}
                <div>
                  <span className="text-sm text-gray-400 block mb-3">Մարման ձև</span>
                  <div className="flex gap-6 items-center">
                    <label className="flex items-center gap-2 cursor-pointer font-bold">
                      <input
                        type="radio"
                        name="repaymentType"
                        value="spring"
                        checked={formData.repaymentType === 'spring'}
                        onChange={(e) => handleInputChange('repaymentType', e.target.value)}
                        className="w-5 h-5 accent-purple-600 cursor-pointer"
                      />
                      Զսպանակաձև
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer font-bold text-gray-700">
                      <input
                        type="radio"
                        name="repaymentType"
                        value="annuity"
                        checked={formData.repaymentType === 'annuity'}
                        onChange={(e) => handleInputChange('repaymentType', e.target.value)}
                        className="w-5 h-5 accent-purple-600 cursor-pointer"
                      />
                      Անուիտետ
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-8">
                <p className="text-xs text-gray-500 w-2/3">
                  Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ։
                </p>
                <button
                  onClick={calculateLoan}
                  className="bg-[#5B10D6] hover:bg-[#4a0cb3] text-white font-bold py-3 px-10 rounded-xl transition duration-200 cursor-pointer"
                >
                  Հաշվել
                </button>
              </div>
            </div>
          )}

          {/* ԵԹԵ ԸՆՏՐՎԱԾ Է ԱՎԱՆԴԸ */}
          {activeTab === 'deposit' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6 space-y-6">
                {/* Ներդրվող գումար */}
                <div>
                  <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-2">
                    <span className="text-sm text-gray-600">Ներդրվող գումար</span>
                    <input
                      type="text"
                      className="text-right font-bold text-lg outline-none w-1/2"
                      value={formatNumber(formData.depositAmount, 0)}
                      onChange={(e) => handleInputChange('depositAmount', parseFormattedNumber(e.target.value))}
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50000000"
                    value={formData.depositAmount}
                    onChange={(e) => handleInputChange('depositAmount', Number(e.target.value))}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                {/* Տարեկան տոկոսադրույք */}
                <div>
                  <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-2">
                    <span className="text-sm text-gray-600">Տարեկան տոկոսադրույք</span>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        step="0.1"
                        className="text-right font-bold text-lg outline-none w-16"
                        value={formData.depositRate}
                        onChange={(e) => handleInputChange('depositRate', Number(e.target.value))}
                      />
                      <span className="text-sm">%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="36"
                    step="0.1"
                    value={formData.depositRate}
                    onChange={(e) => handleInputChange('depositRate', Number(e.target.value))}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                {/* Ավանդի ժամկետ */}
                <div>
                  <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-2">
                    <span className="text-sm text-gray-600">Ավանդի ժամկետ</span>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        className="text-right font-bold text-lg outline-none w-20"
                        value={formData.depositTerm}
                        onChange={(e) => handleInputChange('depositTerm', Number(e.target.value))}
                      />
                      <span className="text-sm">օր</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="91"
                    max="1095"
                    value={formData.depositTerm}
                    onChange={(e) => handleInputChange('depositTerm', Number(e.target.value))}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>
              </div>

              {/* Ավանդի արդյունքներ (օգտագործված filter) */}
              <div className="lg:col-span-6 space-y-6 pt-2">
                {depositResultsList.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="text-sm text-gray-600 max-w-[260px]">{item.label}</span>
                    <span className="text-xl font-bold text-gray-900">{formatNumber(item.value)}</span>
                  </div>
                ))}
                <div className="text-xs text-gray-400 flex items-start gap-2 pt-2">
                  <span>ℹ️</span>
                  <span>Ներդրված ավանդի դիմաց ստացվող տոկոսագումարներն հարկվում են 10% եկամտային հարկի չափով:</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ԱՌԱՆՁԻՆ ՊԱՏՈՒՀԱՆ (MODAL) ՎԱՐԿԻ ՀԱՇՎԱՐԿԻ ՀԱՄԱՐ */}
      {isModalOpen && results && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 pr-10">Վարկային հաշվիչի արդյունքներ</h2>

            <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 mb-6 text-sm rounded-lg border border-gray-200">
              <div>
                <div className="text-gray-500 mb-1">Գումար</div>
                <div className="font-bold text-lg">{formatNumber(formData.amount, 0)}</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Տարեկան տոկոսադրույք</div>
                <div className="font-bold text-lg">{formData.rate}%</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Վարկի ժամկետը</div>
                <div className="font-bold text-lg">{formData.term} ամիս</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Ողջ վճարումը</div>
                <div className="font-bold text-lg">{formatNumber(results.totalPayment)}</div>
              </div>
            </div>

            <div className="overflow-x-auto bg-white border border-gray-200 shadow-sm rounded-lg">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-gray-200 text-gray-700 bg-gray-50">
                  <tr>
                    <th className="p-4 font-medium">Ամիս</th>
                    <th className="p-4 font-medium">Վճարվելիք տոկոսագումար</th>
                    <th className="p-4 font-medium">Վարկի մասնակի մարում</th>
                    <th className="p-4 font-medium">Վարկի ամսական վճար</th>
                  </tr>
                </thead>
                <tbody>
                  {results.schedule
                    .filter((row) => row.total > 0)
                    .map((row) => (
                      <tr key={row.month} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">{row.month}</td>
                        <td className="p-4 text-gray-700">{formatNumber(row.interest)}</td>
                        <td className="p-4 text-gray-700">{formatNumber(row.principal)}</td>
                        <td className="p-4 font-bold text-gray-900">{formatNumber(row.total)}</td>
                      </tr>
                    ))}
                </tbody>
                <tfoot className="border-t-2 border-gray-300 font-bold text-base bg-gray-50">
                  <tr>
                    <td className="p-4">Ընդամենը</td>
                    <td className="p-4">{formatNumber(results.totalInterest)}</td>
                    <td className="p-4">{formatNumber(results.totalPrincipal)}</td>
                    <td className="p-4">{formatNumber(results.totalPayment)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-xl transition duration-200 cursor-pointer"
              >
                Փակել
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
export default AvandiHashvich