import React from 'react';
const KarjHeraxosahamariMasin2 = () => {
  const otherNews = [
    {
      id: 1,
      title: "Ba3 վարկանիշ Moody’s-ից Evocabank-ին",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17870544210976/439x320.png", // Փոխարինիր իրական նկարի հասցեով
    },
    {
      id: 2,
      title: "Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17864472573391/439x320.png", // Փոխարինիր իրական նկարի հասցեով
    },
    {
      id: 3,
      title: "Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր գլխամասի նախագիծը",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17854167235525/439x320.png", // Փոխարինիր իրական նկարի հասցեով
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-sans bg-white">
      
      {/* Վերին կենտրոնացված տեքստեր */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-[28px] font-extrabold text-[#6b11cb]">
          8444
        </h2>
        <p className="text-[#6b11cb] italic font-medium text-lg">
          Բարի գալուստ, Evocabank
        </p>
        <p className="text-[#6b11cb] italic font-medium text-lg">
          Մենք սպասում էինք Ձեր զանգին...
        </p>
      </div>

      {/* Տեղեկատվական պարբերություններ */}
      <div className="space-y-6 text-gray-800 text-base md:text-[17px] leading-relaxed mb-20">
        <p>
          Այսուհետ <span className="text-[#6b11cb] font-bold">Evocabank</span>-ի հաճախորդներն ավելի հեշտ ու արագ կարող են կապ հաստատել Բանկի հետ՝ պարզապես հավաքելով <span className="text-[#6b11cb] font-bold">8444</span> քաղաքային կամ բջջային հեռախոսներից:
        </p>
        <p>
          Հիշեցնենք նաև, որ <span className="text-[#6b11cb] font-bold">Evocabank</span>-ի հետ կարող եք նաև կապ հաստատել <span className="text-[#6b11cb] font-bold">+37410605555</span> հեռախոսահամարով: Իսկ արտասահմանից զանգահարելիս գործում է միայն <span className="text-[#6b11cb] font-bold">+37410605555</span> հեռախոսահամարը:
        </p>
      </div>

      {/* Այլ նորություններ բաժին */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Այլ նորություններ
        </h3>
        
        {/* Նորությունների քարտերի grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherNews.map((news) => (
            <div key={news.id} className="flex flex-col group cursor-pointer">
              {/* Նկարի կոնտեյներ */}
              <div className="w-full aspect-[4/3] overflow-hidden mb-4 bg-gray-100">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Վերնագիր */}
              <h4 className="font-bold text-[15px] text-gray-900 group-hover:text-[#6b11cb] transition-colors leading-snug">
                {news.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default KarjHeraxosahamariMasin2;