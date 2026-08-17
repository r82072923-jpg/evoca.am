import React from 'react';
import VisaDigitaliMasin2 from './visadigital-imasin2';

const VisaDigitaliMasin3 = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto border border-[#ebdff2] font-sans text-[13px] md:text-[14px] text-[#333333] bg-white">
      
      <div className="border-t-[4px] border-[#7b2cbf] py-4 text-center font-bold text-[15px]">
        Visa Digital քարտեր
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտի տեսակ
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          Visa Digital
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտի արժույթ
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          ՀՀ դրամ, ԱՄՆ դոլար, Եվրո
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտի սպասարկման վճար
        </div>
        <div className="md:col-span-9 flex flex-col">
          <div className="p-4 border-b border-[#ebdff2]">
            Միանվագ 1,000 ՀՀ դրամ
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
            <div className="sm:col-span-9 p-4 border-b sm:border-b-0 sm:border-r border-[#ebdff2] flex items-center">
              24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար:
            </div>
            <div className="sm:col-span-3 p-4 flex items-center">
              Միանվագ 50,000 ՀՀ դրամ
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտային հաշվի չնվազող մնացորդ
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          չի սահմանվում
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք<sup className="text-[10px] ml-0.5">[1]</sup>
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          ՀՀ դրամ՝ 4%, ԱՄՆ դոլար՝ 1%, Եվրո՝ 0.5%
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտով կատարվող գործարքների դիմաց տրամադրվող cash back<sup className="text-[10px] ml-0.5">[2]</sup>
        </div>
        <div className="md:col-span-9 flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-12 border-b border-[#ebdff2] h-full">
            <div className="sm:col-span-9 p-4 border-b sm:border-b-0 sm:border-r border-[#ebdff2] flex items-center leading-relaxed">
              ԱրՔա համակարգի բանկերի POS և vPOS տերմինալներով կատարված գործարքների դեպքում
            </div>
            <div className="sm:col-span-3 p-4 flex flex-col justify-center gap-1">
              <span>0.25 %,</span>
              <span>առավելագույնը՝ 5,000 ՀՀ դրամ</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
            <div className="sm:col-span-9 p-4 border-b sm:border-b-0 sm:border-r border-[#ebdff2] flex items-center leading-relaxed">
              Ոչ ԱրՔա համակարգի բանկերի (արտերկրյա) POS և vPOS տերմինալներով կատարված գործարքների դեպքում
            </div>
            <div className="sm:col-span-3 p-4 flex flex-col justify-center gap-1">
              <span>0.5 %,</span>
              <span>առավելագույնը՝ 5,000 ՀՀ դրամ</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          PIN ծածկագրի թողարկում, վերաթողարկում
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          2,000 ՀՀ դրամ
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Կանխիկացում<sup className="text-[10px] ml-0.5">[3]</sup>
        </div>
        <div className="md:col-span-9 flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-12 border-b border-[#ebdff2] h-full">
            <div className="sm:col-span-6 p-4 border-b sm:border-b-0 sm:border-r border-[#ebdff2] flex items-center">
              Բանկի բանկոմատներից, Բանկի POS տերմինալների միջոցով
            </div>
            <div className="sm:col-span-6 flex flex-col">
              <div className="p-4 border-b border-[#ebdff2] h-full flex items-center">ՀՀ դրամ՝ 2 %</div>
              <div className="p-4 border-b border-[#ebdff2] h-full flex items-center">ԱՄՆ դոլար՝ 2 %</div>
              <div className="p-4 h-full flex items-center">Եվրո՝ 2 %</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 border-b border-[#ebdff2] h-full">
            <div className="sm:col-span-6 p-4 border-b sm:border-b-0 sm:border-r border-[#ebdff2] flex items-center">
              ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով
            </div>
            <div className="sm:col-span-6 p-4 flex items-center">
              2.5 %
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
            <div className="sm:col-span-6 p-4 border-b sm:border-b-0 sm:border-r border-[#ebdff2] flex items-center">
              Այլ բանկերի բանկոմատներից և POS-տերմինալների միջոցով
            </div>
            <div className="sm:col-span-6 p-4 flex items-center">
              2.5 %, min 1,500 ՀՀ դրամ
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Կանխիկացման օրական առավելագույն սահմանաչափեր
        </div>
        <div className="md:col-span-9 flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-12 border-b border-[#ebdff2] h-full">
            <div className="sm:col-span-4 p-4 border-b sm:border-b-0 sm:border-r border-[#ebdff2] flex items-center">
              Գումարային
            </div>
            <div className="sm:col-span-8 p-4 flex items-center">
              1,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 border-b border-[#ebdff2] h-full">
            <div className="sm:col-span-4 p-4 border-b sm:border-b-0 sm:border-r border-[#ebdff2] flex items-center">
              Քանակային
            </div>
            <div className="sm:col-span-8 p-4 flex items-center">
              10 հատ
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
            <div className="sm:col-span-4 p-4 border-b sm:border-b-0 sm:border-r border-[#ebdff2] flex items-center">
              Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ
            </div>
            <div className="sm:col-span-8 p-4 flex items-center">
              Նվազագույնը 300,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Կանխիկի մուտքագրում Բանկի վճարային տերմինալներով
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          0
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Բանկի վճարային տերմինալներով կանխիկի մուտքագրման մեկ գործարքի առավելագույն սահմանաչափ
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          100,000 ՀՀ դրամ
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Կանխիկի մուտքագրում Բանկի և ԱրՔա անդամ այլ բանկերի բանկոմատներով (ATM CASH-IN)
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          0.6 %
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտային հաշվի համալրում անկանխիկ փոխանցմամբ
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          0
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          0
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգի միջոցով Բանկի ներսում
        </div>
        <div className="md:col-span-9 flex flex-col">
          <div className="p-4 border-b border-[#ebdff2] flex items-center">
            Նույն արժույթով քարտին՝ 0%
          </div>
          <div className="p-4 flex items-center">
            Տարբեր արժույթով քարտին՝ 0.3%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով ԱրՔա անդամ հանդիսացող և ԱրՔա համակարգի հետ H2H կապով աշխատող բանկերի վճարային քարտերին
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          0.5%
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտի գործողության կասեցում
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          0
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          500 ՀՀ դրամ
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          0
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտի վերաթողարկում այլ պատճառներով
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          2,000 ՀՀ դրամ
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտային հաշվի ամսական քաղվածքի տրամադրում
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          0
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար<sup className="text-[10px] ml-0.5">[4]</sup>
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          0
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում<sup className="text-[10px] ml-0.5">[5]</sup>
        </div>
        <div className="md:col-span-9 flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-12 border-b border-[#ebdff2] h-full">
            <div className="sm:col-span-9 p-4 border-b sm:border-b-0 sm:border-r border-[#ebdff2] flex items-center">
              Մինչև 5,000 ՀՀ դրամ գործարքներ
            </div>
            <div className="sm:col-span-3 p-4 flex items-center">
              20 ՀՀ դրամ
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
            <div className="sm:col-span-9 p-4 border-b sm:border-b-0 sm:border-r border-[#ebdff2] flex items-center">
              5,000 ՀՀ դրամը գերազանցող գործարքներ
            </div>
            <div className="sm:col-span-3 p-4 flex items-center">
              0
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Կանխիկացման գործարքների քանակի կամ սահմանաչափերի ավելացման միջնորդավճար
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          0
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Քարտով կատարված գործարքների բողոքարկման հայտ<sup className="text-[10px] ml-0.5">[6]</sup>
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          5,000 ՀՀ դրամ
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Գերածախսի գծով տույժեր
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          20% տարեկան
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#ebdff2]">
        <div className="md:col-span-3 p-4 font-medium border-b md:border-b-0 md:border-r border-[#ebdff2] flex items-center">
          Վարկային սահմանաչափի հնարավորություն
        </div>
        <div className="md:col-span-9 p-4 flex items-center">
          Առկա է՝ Համաձայն Վարկավորման պայմանների և սակագների
        </div>
      </div>

      {/* Footnotes Section */}
      <div className="border-t border-[#ebdff2] p-4 text-[12px] text-[#666666] flex flex-col gap-2 bg-[#faf7fc]">
        <div>[1] Տոկոսագումարները տրամադրվում են եռամսյակային:</div>
        <div>[2] Cash back-ը տրամադրվում է մինչև յուրաքանչյուր ամսվա 10-րդ աշխատանքային օրը ներառյալ: Եթե կուտակված Cash back-ի գումարը չի գերազանցում 100 ՀՀ դրամը կամ դրան համարժեք արտարժույթը ապա այն չի վճարվում: Cash back չի տրամադրվում կոմունալ և դրանց հավասարեցված վճարումների, betting/gambling կայքերում, էլեկտրոնային դրամապանակների համալրման և ֆինանսական հաստատություններում կատարված վճարումների գործարքների դիմաց:</div>
        <div>[3] Digital քարտից կանխիկացումը կամ կանխիկի մուտքագրումը Բանկի և ԱրՔա անդամ այլ բանկերի բանկոմատներով (ATM CASH-IN) հնարավոր է միայն PIN ծածկագրի առկայության դեպքում:</div>
        <div>[4] Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:</div>
        <div>Նվազագույն մնացորդ, որի վրա իրականացվում է %-ների հաշվեգրում՝ 0 ՀՀ դրամ</div>
        <div>[5] Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար՝ անկախ գործարքի գումարի չափից:</div>
        <div>[6] Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:</div>
      </div>

    </div>
  );
};

export default VisaDigitaliMasin3;