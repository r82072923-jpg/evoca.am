import React from 'react';

const businessLoanData = {
  currencies: [
    { id: 'amd', symbol: '֏', isActive: true },
    { id: 'usd', symbol: '$', isActive: false },
    { id: 'eur', symbol: '€', isActive: false },
  ],
  metrics: [
    {
      id: 1,
      prefix: 'մինչև',
      value: '4 մլրդ ֏',
      text: 'կամ համարժեք արտարժույթ',
    },
    {
      id: 2,
      prefix: 'մինչև',
      value: '180',
      text: 'ամիս',
    },
    {
      id: 3,
      prefix: 'սկսած',
      value: '8.2%-ից',
      text: 'տոկոսադրույք',
    },
  ],
  infoParagraphs: [
    {
      id: 1,
      content: (
        <>
          <strong className="text-gray-900 font-medium">Evocabank</strong>-ը առաջարկում է{' '}
          <strong className="text-gray-900 font-medium">Բիզնես վարկեր</strong> Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձանց և անհատ ձեռնարկատերերի համար՝ բիզնեսի զարգացման, կապիտալ ներդրումների իրականացման, շրջանառու կապիտալի համալրման և այլ նպատակներով:
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <a href="#" className="text-[#6F11B7] font-semibold underline underline-offset-2 hover:opacity-80">
            Վարկի
          </a>{' '}
          համար կարող են դիմել արդյունաբերության, շինարարության, առևտրի, տրանսպորտի և կապի, գյուղատնտեսության և այլ ոլորտներում գործունեություն ծավալող կազմակերպությունները: Վարկերը կարող են տրամադրվել միանվագ կամ փուլային եղանակով, ինչպես նաև, կախված գործունեության ոլորտից, կարող են ունենալ մարման արտոնյալ ժամանակաշրջան:
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          Վարկերը/վարկային գծերը կարող եք ձևակերպել մեր Գլխամասային գրասենյակում և ցանկացած մասնաճյուղում (բացառությամբ՝ «Երևան Մոլ», «Հանրապետության» «Էրեբունի» մասնաճյուղերի):
        </>
      ),
    },
  ],
};

function BusinessLoan15iMasin2() {
  return (
    <section className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white font-sans text-gray-800">
      <div className="md:col-span-7 space-y-5 text-sm leading-relaxed text-gray-700">
        {businessLoanData.infoParagraphs.map((item) => (
          <p key={item.id}>{item.content}</p>
        ))}
      </div>

      <div className="md:col-span-5 bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_10px_30px_rgba(111,17,183,0.06)]">
        <div className="flex items-center gap-3 mb-6">
          {businessLoanData.currencies.map((curr) => (
            <div
              key={curr.id}
              className={`w-10 h-10 rounded-full font-bold text-lg flex items-center justify-center select-none cursor-pointer ${
                curr.isActive
                  ? 'bg-[#6F11B7] text-white shadow-md'
                  : 'bg-[#6F11B7] text-[#6F11B7]'
              }`}
            >
              {curr.symbol}
            </div>
          ))}
        </div>

        <div className="divide-y divide-gray-200">
          {businessLoanData.metrics.map((metric) => (
            <div key={metric.id} className="py-4 grid grid-cols-2 items-center gap-2">
              <div>
                <span className="block text-[11px] text-gray-400 font-medium">
                  {metric.prefix}
                </span>
                <span className="text-2xl font-black text-[#6F11B7]">
                  {metric.value}
                </span>
              </div>
              <div className="text-xs md:text-sm font-semibold text-gray-800">
                {metric.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default BusinessLoan15iMasin2