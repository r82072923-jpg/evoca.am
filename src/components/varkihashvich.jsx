import React, { useState } from 'react';
function VarkiHashvich() {
  const [formData, setFormData] = useState({
    amount: 14520000,
    term: 256,
    rate: 10,
    repaymentType: 'spring',
  });

  const [results, setResults] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatNumber = (num) => {
    if (isNaN(num)) return '0';
    return Number(num).toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
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
    
    // Բացում ենք մոդալ պատուհանը
    setIsModalOpen(true);
  };

  return (
    <div className="p-8 font-sans text-gray-800 bg-gray-50 min-h-screen relative">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Հաշվիչներ</h1>

        {/* ՄՈՒՏՔԱԳՐՄԱՆ ԲԼՈԿ */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex gap-4 border-b border-gray-200 mb-6 pb-2">
            <button className="font-bold text-gray-900 border-b-2 border-purple-600 pb-2 px-2">
              Վարկ
            </button>
            <button className="text-gray-400 font-medium pb-2 px-2">
              Ավանդ
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Վարկի գումար */}
            <div>
              <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-2">
                <span className="text-sm text-gray-600">Վարկի գումար</span>
                <input
                  type="text"
                  className="text-right font-bold text-lg outline-none w-1/2"
                  value={formData.amount ? formatNumber(formData.amount) : ''}
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
              className="bg-[#5B10D6] hover:bg-[#4a0cb3] text-white font-bold py-3 px-10 rounded-xl transition duration-200"
            >
              Հաշվել
            </button>
          </div>
        </div>
      </div>

      {/* ԱՌԱՆՁԻՆ ՊԱՏՈՒՀԱՆ (MODAL) */}
      {isModalOpen && results && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            
            {/* Փակելու կոճակ (X) */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 pr-10">Վարկային հաշվիչի արդյունքներ</h2>

            {/* Ամփոփում */}
            <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 mb-6 text-sm rounded-lg border border-gray-200">
              <div>
                <div className="text-gray-500 mb-1">Գումար</div>
                <div className="font-bold text-lg">{formatNumber(formData.amount)}</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Տարեկան տոկոսադրույք</div>
                <div className="font-bold text-lg">{formData.rate}%</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Վարկի ժամկետը</div>
                <div className="font-bold text-lg">{formData.term}</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">
                  Ողջ վճարումը(Ողջ գումար + տոկոսագումարը)
                </div>
                <div className="font-bold text-lg">{formatNumber(results.totalPayment)}</div>
              </div>
            </div>

            {/* Աղյուսակ */}
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

            {/* Ներքևի փակելու կոճակ */}
            <div className="mt-6 text-right">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-xl transition duration-200"
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
export default VarkiHashvich