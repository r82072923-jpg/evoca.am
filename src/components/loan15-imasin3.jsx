import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfog';
import { doc, getDoc } from 'firebase/firestore';

const tabs = ['Վարկի մասին', 'Պայմաններ'];

const Loan15iMasin3 = ({ activeTab, setActiveTab }) => {
  const [loanData, setLoanData] = useState(null);
  const [footnotes, setFootnotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const docRef = doc(db, 'loans15iMasin2', 'mainLoanDoc');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const { footnotes: fetchedFootnotes, createdAt, ...restData } = data;
          setLoanData(restData);
          setFootnotes(fetchedFootnotes || []);
        } else {
          console.error('Տվյալները չեն գտնվել Firebase-ում:');
        }
      } catch (error) {
        console.error('Սխալ տվյալները բեռնելիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoanData();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-base">Բեռնվում է...</div>;
  }

  if (!loanData) {
    return <div className="text-center py-10 text-base text-red-500">Տվյալներ չեն գտնվել:</div>;
  }

  return (
    <div className="max-w-6xl mx-auto my-8 bg-white text-[14px] text-[#333333]">
      <div className="border-b border-gray-200 mb-8 pb-4 overflow-x-auto">
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

      <div className="border border-purple-200 rounded-lg overflow-hidden">
        
        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.purpose.title}
          </div>
          <div className="w-2/3 p-5">
            <p className="mb-3 font-medium">{loanData.purpose.subtitle}</p>
            <ul className="space-y-2 list-none">
              {loanData.purpose.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1 text-lg leading-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.eligibility.title}
          </div>
          <div className="w-2/3 p-5">{loanData.eligibility.content}</div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.currencies.title}
          </div>
          <div className="w-2/3 p-5">
            <ul className="space-y-2 list-none">
              {loanData.currencies.items.map((curr, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-purple-600 mr-2 text-lg leading-none">•</span>
                  {curr}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.amounts.title}
          </div>
          <div className="w-2/3 flex flex-col">
            {loanData.amounts.rows.map((row, idx) => (
              <div key={idx} className={`p-5 ${idx !== loanData.amounts.rows.length - 1 ? 'border-b border-purple-200' : ''}`}>
                {row}
              </div>
            ))}
          </div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.limitType.title}
          </div>
          <div className="w-2/3 flex">
            <div className="w-1/2 p-5 border-r border-purple-200">{loanData.limitType.cols[0]}</div>
            <div className="w-1/2 p-5">{loanData.limitType.cols[1]}</div>
          </div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.repaymentMethod.title}
          </div>
          <div className="w-2/3 flex flex-col">
            {loanData.repaymentMethod.rows.map((row, idx) => (
              <div key={idx} className={`flex ${idx !== loanData.repaymentMethod.rows.length - 1 ? 'border-b border-purple-200' : ''}`}>
                <div className="w-1/2 p-5 border-r border-purple-200">{row.left}</div>
                <div className="w-1/2 p-5">{row.right}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.repaymentTerm.title}
          </div>
          <div className="w-2/3 flex flex-col">
            {loanData.repaymentTerm.rows.map((row, idx) => (
              <div key={idx} className={`flex ${idx !== loanData.repaymentTerm.rows.length - 1 ? 'border-b border-purple-200' : ''}`}>
                <div className="w-1/2 p-5 border-r border-purple-200">{row.left}</div>
                <div className="w-1/2 p-5">{row.right}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center whitespace-pre-line">
            {loanData.fixedRates.title}
          </div>
          <div className="w-2/3 flex flex-col">
            <div className="flex border-b border-purple-200 font-semibold">
              <div className="w-1/4 p-5 border-r border-purple-200"></div>
              <div className="w-3/8 flex-1 p-5 border-r border-purple-200">Անվանական</div>
              <div className="w-3/8 flex-1 p-5">Առավելագույն փաստացի<sup className="text-purple-600 font-semibold">[3]</sup></div>
            </div>
            {loanData.fixedRates.rows.map((r, idx) => (
              <div key={idx} className={`flex ${idx !== loanData.fixedRates.rows.length - 1 ? 'border-b border-purple-200' : ''}`}>
                <div className="w-1/4 p-5 border-r border-purple-200">{r.currency}</div>
                <div className="w-3/8 flex-1 p-5 border-r border-purple-200">{r.nominal}</div>
                <div className="w-3/8 flex-1 p-5">{r.effective}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center whitespace-pre-line">
            {loanData.floatingRates.title}
          </div>
          <div className="w-2/3 flex flex-col">
            <div className="flex border-b border-purple-200 font-semibold">
              <div className="w-1/4 p-5 border-r border-purple-200"></div>
              <div className="w-1/2 p-5 border-r border-purple-200">Անվանական</div>
              <div className="w-1/4 p-5">Առավելագույն փաստացի</div>
            </div>
            {loanData.floatingRates.rows.map((r, idx) => (
              <div key={idx} className="flex border-b border-purple-200">
                <div className="w-1/4 p-5 border-r border-purple-200 flex items-center">{r.currency}</div>
                <div className="w-1/2 p-5 border-r border-purple-200">{r.nominal}</div>
                <div className="w-1/4 p-5 flex items-center">{r.effective}</div>
              </div>
            ))}
            <div className="flex border-b border-purple-200">
              <div className="w-3/4 p-5 border-r border-purple-200 flex items-center">
                Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ
              </div>
              <div className="w-1/4 p-5 flex items-center">{loanData.floatingRates.threshold}</div>
            </div>
            <div className="p-5 flex flex-col">
              <p className="mb-4">{loanData.floatingRates.note}</p>
              <a href="#" className="text-[#6C12A5] font-bold underline decoration-[#6C12A5] underline-offset-2">
                Լողացող տոկոսադրույքի հաշվարկման կարգ
              </a>
            </div>
          </div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.otherRateConditions.title}
          </div>
          <div className="w-2/3 p-5">{loanData.otherRateConditions.content}</div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.earlyRepaymentPenalty.title}
          </div>
          <div className="w-2/3 p-5 leading-relaxed">{loanData.earlyRepaymentPenalty.content}</div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.latePenalties.title}
          </div>
          <div className="w-2/3 p-5 flex flex-col justify-center space-y-4">
            {loanData.latePenalties.items.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.disbursementMethod.title}
          </div>
          <div className="w-2/3 p-5 flex flex-col justify-center space-y-4">
            {loanData.disbursementMethod.items.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.collateral.title}
          </div>
          <div className="w-2/3 p-5 leading-relaxed">{loanData.collateral.content}</div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center whitespace-pre-line">
            {loanData.ltv.title}
          </div>
          <div className="w-2/3 p-5 space-y-4 text-[14px]">
            <p>{loanData.ltv.intro}</p>
            {loanData.ltv.items.map((item, idx) => (
              <p key={idx} className="leading-relaxed">{item}</p>
            ))}
          </div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.creditworthiness.title}
          </div>
          <div className="w-2/3 p-5">{loanData.creditworthiness.content}</div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.insurance.title}
          </div>
          <div className="w-2/3 flex">
            <div className="w-1/2 p-5 border-r border-purple-200 flex items-center">{loanData.insurance.left}</div>
            <div className="w-1/2 p-5 flex items-center">{loanData.insurance.right}</div>
          </div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.fees.title}
          </div>
          <div className="w-2/3 p-5">
            <ul className="space-y-3 list-none">
              {loanData.fees.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1 text-lg leading-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex border-b border-purple-200">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center whitespace-pre-line">
            {loanData.decisions.title}
          </div>
          <div className="w-2/3 p-5">
            <ul className="space-y-4 list-none">
              {loanData.decisions.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1 text-lg leading-none">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 p-5 font-semibold border-r border-purple-200 flex items-center">
            {loanData.otherConditions.title}
          </div>
          <div className="w-2/3 p-5">
            <ul className="space-y-4 list-none text-[14px] leading-relaxed">
              {loanData.otherConditions.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1 text-lg leading-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      <div className="mt-8 space-y-5 text-[13px] text-[#333333] leading-relaxed">
        {footnotes.map((fn, idx) => (
          <p key={idx}>{fn}</p>
        ))}
      </div>
    </div>
  );
};

export default Loan15iMasin3;