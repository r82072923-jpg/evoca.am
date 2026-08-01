import React from 'react';

const EvocaiMasin = () => {
  return (
    <div className="font-sans bg-white m-0 p-0">
      
      <div className="max-w-[1000px] mx-auto px-5 my-5">
        <h2 className="text-2xl text-[#1a1a1a] font-bold">
          Ընդհանուր տեղեկատվություն
        </h2>
      </div>

      <section className="bg-[#f8f6fb] py-12 px-5 rounded-tl-[40px]">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-10">
          
          <div className="flex-1 text-[#333] text-[15px] leading-relaxed space-y-5">
            <p>
              <span className="text-[#6a10c9] font-bold">Evocabank</span>-ը արագ, պարզ և նորարար 
              ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն 
              տեխնոլոգիաների ակտիվ կիրառմամբ։
            </p>
            
            <p>
              Մենք հատուկ ուշադրություն ենք դարձնում մոբայլ ծառայությունների զարգացմանը։
            </p>
            
            <p>
              Մենք աշխատում ենք mobile-first ֆորմատով՝ յուրաքանչյուր նոր ծառայություն 
              նախագծելիս նախևառաջ հաշվի ենք առնում դրա՝ հավելվածով օգտագործման հարմարավետությունը։
            </p>
            
            <p>
              Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան։
            </p>
          </div>

          <div className="flex-1 w-full">
            <img 
              src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png" 
              alt="Evoca" 
              className="w-full h-auto block shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default EvocaiMasin;