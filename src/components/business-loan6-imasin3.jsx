import React from 'react';

const BusinessLoan6iMasin3 = ({activeTab,setActiveTab}) => {
  const tabs = [
    'Վարկի մասին',
    'Պայմաններ և սակագներ',
    'ՓՄՁ վարկի օնլայն հայտ',
    'Պահանջվող փաստաթղթեր',
  ];
  return (
    <div className="w-full font-sans text-[#1a1a1a]">
        <div className="border-b border-gray-200 mb-12 overflow-x-auto">
          <nav className="flex space-x-10 min-w-max">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                  activeTab === tab
                    ? 'text-[#6b11cb]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
                )}
              </button>
            ))}
          </nav>
        </div>
      <div className="border border-purple-200 rounded-lg overflow-hidden flex flex-col w-full mb-10 shadow-sm">
        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white ">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Արժույթ
          </div>
          <div className="md:w-2/3 p-4">
            ՀՀ դրամ, ԱՄՆ դոլար, Եվրո
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Վարկառուներ
          </div>
          <div className="md:w-2/3 p-4">
            ՀՀ ռեզիդենտ իրավաբանական անձինք և անհատ ձեռնարկատերեր
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white ">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Վարկի տրամադրման նպատակ
          </div>
          <div className="md:w-2/3 p-4 leading-relaxed">
            Շրջանառու միջոցների համալրում, հիմնական միջոցների ձեռքբերում, կապիտալ ներդրումների իրականացում, ընթացիկ գործունեության ֆինանսավորում և այլ նպատակներով
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white ">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Սահմանաչափերը
          </div>
          <div className="md:w-2/3 p-4">
            5,000,000 - 750,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Տրամադրման եղանակ
          </div>
          <div className="md:w-2/3 p-4">
            Անկանխիկ
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white ">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Մարման ժամկետ
          </div>
          <div className="md:w-2/3 p-4">
            Մինչև 84 ամիս (հաստատված գրաֆիկի համաձայն և հաճախորդի հետ համաձայնեցմամբ)
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Վարկի մարման եղանակ
          </div>
          <div className="md:w-2/3 p-4">
            <ul className="list-disc pl-5 space-y-1">
              <li>Անուիտետային,</li>
              <li>Մայր գումարի հավասարաչափ մարումներով</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-b border-purple-200 bg-white">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Տոկոսադրույք (տարեկան)
          </div>
          <div className="md:w-2/3 p-4">
            <div className="grid grid-cols-2 gap-2 mb-4 max-w-sm">
              <div className="font-bold border-b border-gray-200 pb-1">ՀՀ դրամ</div>
              <div className="border-b border-gray-200 pb-1">12% - 14%</div>
              
              <div className="font-bold border-b border-gray-200 pb-1">ԱՄՆ դոլար</div>
              <div className="border-b border-gray-200 pb-1">8% - 10%</div>
              
              <div className="font-bold pb-1">Եվրո</div>
              <div className="pb-1">7% - 9%</div>
            </div>
            <p className="text-sm text-gray-500 italic mt-2">
              Տոկոսադրույքների վերանայման/փոփոխման իրավունքը վերապահված է բանկին՝ կախված շուկայական պայմաններից և ՀՀ ԿԲ վերաֆինանսավորման տոկոսադրույքից:
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white ">
          <div className="md:w-1/3 p-4 bg-purple-50/30 font-bold border-r border-purple-200">
            Վարկի ապահովվածության միջոց
          </div>
          <div className="md:w-2/3 p-4">
            <ul className="list-disc pl-5 space-y-1">
              <li>Անշարժ և շարժական գույք,</li>
              <li>Ավանդային կամ ընթացիկ հաշիվների դրամական միջոցներ,</li>
              <li>Շրջանառու միջոցներ, պատրաստի արտադրանք,</li>
              <li>Ոսկու ստանդարտացված ձուլակտորներ կամ ջարդոն, թանկարժեք մետաղներ,</li>
              <li>Պետական կարճաժամկետ պարտատոմսեր կամ այլ արժեթղթեր,</li>
              <li>Իրավաբանական կամ ֆիզիկական անձանց երաշխավորություններ:</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-lg font-extrabold text-[#6b11cb] mb-4">Անհրաժեշտ տեղեկատվություն</h3>
        <h4 className="text-md font-bold text-gray-900 mb-3">Վարկ/գրավ ընդունելի սահմանաչափերը՝ ըստ գրավի տեսակների</h4>
        
        <ul className="list-disc pl-6 space-y-2 text-[#1a1a1a]">
          <li>
            Անշարժ գույքի և այլ հիմնական միջոցների դեպքում՝ գնահատված շուկայական արժեքի <strong>մինչև 70%-ի չափով</strong>
          </li>
          <li>
            Հատուկ նշանակության տրանսպորտային միջոցների դեպքում՝ գնահատված արժեքի <strong>մինչև 50%-ի չափով</strong>
          </li>
          <li>
            Այլ տրանսպորտային միջոցների դեպքում՝ գնահատված արժեքի <strong>մինչև 60%-ի չափով</strong>
          </li>
          <li>
            Դրամական միջոցների գրավադրման դեպքում՝ գրավադրվող գումարի <strong>մինչև 90%-ի չափով</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BusinessLoan6iMasin3;