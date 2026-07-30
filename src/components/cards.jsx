import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Ներմուծում ենք Link-ը

const cardsData = [
  {
    id: "card_1",
    name: "Evoca Travel Card",
    image: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg", 
    title: "Evoca Travel Card",
    buttonText: "Մանրամասն",
    link: "/travel-gold"
  },
  {
    id: "card_2",
    name: "Evoca Visa Platinum",
    image: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png", 
    title: "Evoca Visa Platinum",
    buttonText: "Մանրամասն",
    link: "/visa-platinum"
  },
  {
    id: "card_3",
    name: "Wilco Visa Infinite",
    image: "https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png",
    title: "Wilco Visa Infinite",
    buttonText: "Մանրամասն",
    link: "/wilco-visa-infinite" // Ավելացրել ենք հղումը
  },
  {
    id: "card_4",
    name: "Evoca Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png",
    title: "Evoca Gift Card",
    description: "Evoca Gift Card-ը երբեք չի հիասթափեցնի. այն իդեալական նվեր է:Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:",
    highlightText: "Evoca Gift Card-ով կարող ես վճարել ցանկացած POS և V-POS տերմինալով խանութներում, սրճարաններում, զվարճանքի կենտրոններում, սուպերմարկետներում, օնլայն խանութներում:",
    buttonText: "Մանրամասն",
    link: "/gift-card" // Ավելացրել ենք հղումը
  },
  {
    id: "card_5",
    name: "Digital Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png",
    title: "Digital Gift Card",
    buttonText: "Մանրամասն",
    link: "/digital-gift-card" // Ավելացրել ենք հղումը
  },
  {
    id: "card_6",
    name: "Visa Infinite",
    image: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png",
    title: "Visa Infinite",
    description: "Ձեր բանալին՝ դեպի արտոնությունների մեծ աշխարհ:",
    highlightText: "Քարտը կնվիրի Ձեզ բացառիկ հնարավորությունների փաթեթ՝ անվտանգ գնումների, ապահովագրված ճամփորդությունների, VIP կարգավիճակի ձեռքբերման համար և ոչ միայն: Այն կգոհացնի անգամ ամենաքմահաճ ու պահանջկոտ հաճախորդին",
    buttonText: "Մանրամասն",
    link: "/visa-infinite" // Ավելացրել ենք հղումը
  },
  {
    id: "card_7",
    name: "Visa Vision",
    image: "https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png",
    title: "Visa Vision",
    description: "Evocabank-ը ներկայացնում է իր նոր՝ Visa Vision քարտը, որի հետ դու կստանաս՝",
    highlightText: ".0% կանխիկացում Evoca-ի բոլոր բանկոմատներից.Cashback բոլոր անկանխիկ վճարումներից.Դրական մնացորդի վրա գումարի կուտակում.Վարկային սահմանաչափ` քո ցանկությամբ",
    buttonText: "Մանրամասն",
    link: "/visa-vision" // Ավելացրել ենք հղումը
  },
  {
    id: "card_8",
    name: "Mastercard World Digital",
    image: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png",
    title: "Mastercard World Digital",
    description: "Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում։",
    buttonText: "Մանրամասն",
    link: "/world-digital" // Ավելացրել ենք հղումը
  },
  {
    id: "card_9",
    name: "UnionPay Business Platinum",
    image: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png",
    title: "UnionPay Business Platinum",
    buttonText: "Մանրամասն",
    link: "/business-platinum" // Ավելացրել ենք հղումը
  },
  {
    id: "card_10",
    name: "MyLer Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png",
    title: "MyLer Gift Card",
    buttonText: "Մանրամասն",
    link: "/myler-gift-card" // Ավելացրել ենք հղումը
  },
  {
    id: "card_11",
    name: "UnionPay Gold",
    image: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png",
    title: "UnionPay Gold",
    buttonText: "Մանրամասն",
    link: "/unionpay-gold" // Ավելացրել ենք հղումը
  },
  {
    id: "card_12",
    name: "4U.am Gift card",
    image: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png",
    title: "4U.am Gift card",
    buttonText: "Մանրամասն",
    link: "/4u.am-gift-card" // Ավելացրել ենք հղումը
  },
  {
    id: "card_13",
    name: "Mastercard Gold",
    image: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png ",
    title: "Mastercard Gold",
    description: "Քարտը կընդգծի քո կարգավիճակը և անմոռանալի կդարձնի քո բոլոր ճանապարհորդությունները:",
    highlightText: "Հաշված րոպեների ընթացքում դու կկարողանաս նախապես գնել քո ավիատոմսը, ամրագրել հյուրանոցային համար կամ վարձել ավտոմեքենա՝ վճարելով Mastercard Gold քարտով:",
    buttonText: "Մանրամասն",
    link: "/mastercard-gold" // Ավելացրել ենք հղումը
  },
  {
    id: "card_14",
    name: "Mastercard Standard",
    image: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png",
    title: "Mastercard Standard",
    description: "Ամենօրյա գնումներից մինչև անմոռանալի ճանապարհորդություն՝ քո Mastercard Standard քարտով:",
    highlightText: "Ամենօրյա գնումներից մինչև անմոռանալի ճանապարհորդություն՝ քո Mastercard Standard քարտով:",
    buttonText: "Մանրամասն",
    link: "/mastercard-standard" // Ավելացրել ենք հղումը
  },
  {
    id: "card_15",
    name: "Visa Digital",
    image: "https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png",
    title: "Visa Digital",
    buttonText: "Մանրամասն",
    link: "/visa-digital" // Ավելացրել ենք հղումը
  },
  {
    id: "card_16",
    name: "Visa Classic",
    image: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png",
    title: "Visa Classic",
    description: "Ունիվերսալ վճարային քարտ, որը հասանելի կլինի աշխարհի ցանկացած կետում` 24/7 սկզբունքով:",
    highlightText: "Կատարիր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով պարզ և արագ` առանց PIN կոդի մուտքագրման:",
    buttonText: "Մանրամասն",
    link: "/visa-classic" // Ավելացրել ենք հղումը
  },
  {
    id: "card_17",
    name: "Arca Classic",
    image: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png",
    title: "Arca Classic",
    description: "Ձեռք բեր ArCa Classic քարտը և կատարիր քո գործարքները մեր նորաոճ քարտի օգնությամբ:",
    highlightText: "Ընդամենը մեկ հպում EvocaTOUCH հավելվածում և վերջ: Քարտը կարող ես ստանալ նույնիսկ առանց Բանկ այցելելու՝ հավելվածում նշելով առաքման տարբերակը: Evocabank-ը մշտապես հոգում է քո հարմարավետության մասին:",
    buttonText: "Մանրամասն",
    link: "/arca-classic" // Ավելացրել ենք հղումը
  },
  {
    id: "card_18",
    name: "Visa Business",
    image: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png",
    title: "Visa Business",
    description: "Մեկնեք գործուղման Evocabank-ի Visa Business քարտով։ Նախապես գնեք Ձեր ավիատոմսը, ամրագրեք հյուրանոցային համար կամ վարձեք ավտոմեքենա։",
    highlightText: "Ձեր կազմակերպության դրամական միջոցները հասանելի են աշխարհի բոլոր կետերում:",
    buttonText: "Մանրամասն",
    link: "/visa-business" // Ավելացրել ենք հղումը
  },
  {
    id: "card_19",
    name: "Dalma Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png",
    title: "Dalma Gift Card",
    description: "Նվեր ընտրելն այլևս դժվար չէ: 21-րդ դարում տոներին Gift քարտ նվիրելը նորաձև է դարձել։ Դու որոշում ես՝ որքան գումար տալ, նրանք որոշում են՝ որտեղ ծախսեն:",
    highlightText: "<strong>Visa Platinum</strong> քարտը ձեզ տալիս է անսահմանափակ հնարավորություններ աշխարհի ցանկացած կետում:",
    buttonText: "Մանրամասն",
    link: "/dalma-gift-card" // Ավելացրել ենք հղումը
  },
  {
    id: "card_20",
    name: "Rio Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png",
    title: "Rio Gift Card",
    description: "Մեզ հետ դու կարող ես խնայել ամենաթանկը՝ ժամանակը, բայց նույն պահին ունենալ նվերի լավագույն տարբերակը։",
    buttonText: "Մանրամասն",
    link: "/rio-gift-card" // Ավելացրել ենք հղումը
  },
  {
    id: "card_21",
    name: "EVisa Gold",
    image: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png",
    title: "Visa Gold",
    description: "Քարտն ապահովում է Ձեր հարմարավետությունն ու հաճելի դարձնում ցանկացած գնում:",
    highlightText: "Visa Gold քարտը ճամփորդության ողջ ընթացքում կլինի Ձեր հուսալի ուղեկիցն ու կընդգծի Ձեր յուրահատուկ կարգավիճակը:",
    buttonText: "Մանրամասն",
    link: "/evisa-gold" // Ավելացրել ենք հղումը
  },
];

function Cards() {
const [currentIndex, setCurrentIndex] = useState(0); // Գլխավոր քարտի ինդեքսը
  const [visibleStartIndex, setVisibleStartIndex] = useState(0); // Ձախ ցանկի սկզբի ինդեքսը
  
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  const imageRef = useRef(null);

  const currentCard = cardsData[currentIndex];

  // Քլիք անելիս փոխում ենք գլխավոր քարտը
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

  // ----------------------------------------------------
  // Սլաքների տրամաբանությունը
  // ----------------------------------------------------
  const handleUpClick = () => {
    if (visibleStartIndex > 0) {
      setVisibleStartIndex(prev => prev - 1);
    }
  };

  const handleDownClick = () => {
    // Թույլ ենք տալիս իջնել ներքև միայն այն դեպքում, եթե տակը դեռ քարտեր կան (քանակից հանում ենք 3 (տեսանելի քանակը))
    if (visibleStartIndex < cardsData.length - 3) {
      setVisibleStartIndex(prev => prev + 1);
    }
  };

  // ----------------------------------------------------
  // Անիմացիայի տրամաբանությունը
  // ----------------------------------------------------
  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    const rotateY = ((x - width / 2) / (width / 2)) * 15;
    const rotateX = ((y - height / 2) / (height / 2)) * -15;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

  // Կտրում ենք զանգվածը՝ վերցնելով միայն 3 հատ քարտ ընթացիկ տեսանելի սկզբնակետից
  const visibleCards = cardsData.slice(visibleStartIndex, visibleStartIndex + 3);

  return (
 <div className="min-h-screen bg-[#F0F8FF] flex justify-center items-center font-sans p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-[1100px] w-full p-8">
        
        {/* Ձախ մաս (Սլայդեր / Ցանկ) */}
        <div className="flex flex-col items-center gap-3">
          <button 
            onClick={handleUpClick}
            disabled={visibleStartIndex === 0}
            className={`text-[#5b00e5] text-2xl font-bold transition-all ${
              visibleStartIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-110'
            }`}
          >
            ︿
          </button>
          
          <div className="flex flex-col gap-3 min-h-[240px] justify-center">
            {visibleCards.map((card, idx) => {
              const actualIndex = visibleStartIndex + idx; 
              
              return (
                <div
                  key={card.id}
                  onClick={() => handleThumbnailClick(actualIndex)}
                  className={`text-center cursor-pointer transition-all duration-300 p-1 rounded-xl ${
                    currentIndex === actualIndex ? 'opacity-100 scale-105' : 'opacity-40 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={card.image} 
                    alt={card.name} 
                    className="w-[95px] h-[60px] object-cover rounded-md mb-1 shadow-sm" 
                  />
                  <span className="block text-[10px] text-gray-800 font-medium">{card.name}</span>
                </div>
              )
            })}
          </div>

          <button 
            onClick={handleDownClick}
            disabled={visibleStartIndex >= cardsData.length - 3}
            className={`text-[#5b00e5] text-2xl font-bold transition-all ${
              visibleStartIndex >= cardsData.length - 3 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-110'
            }`}
          >
            ﹀
          </button>
        </div>

        {/* Կենտրոնական մաս (Փոքրացված չափս և սահուն՝ դանդաղ անիմացիա) */}
        <div className="relative flex justify-center items-center py-6">
          <img
            ref={imageRef}
            src={currentCard.image}
            alt={currentCard.title}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              transform: transformStyle, 
              transformStyle: 'preserve-3d' 
            }}
            className="w-[360px] h-[220px] object-contain cursor-pointer transition-all duration-500 ease-out"
          />
        </div>

        {/* Աջ մաս (Տեքստեր և Link) */}
        <div className="max-w-[320px]">
          <h2 className="text-[24px] text-gray-900 mb-3 font-bold">{currentCard.title}</h2>
          <p className="text-[13px] text-gray-600 leading-[1.6] mb-3">
            {currentCard.description}
          </p>
          <p 
            className="text-[13px] leading-[1.6] mb-4 text-[#5b00e5]"
            dangerouslySetInnerHTML={{ __html: currentCard.highlightText }}
          />
          
          <Link 
            to={currentCard.link}
            className="inline-block bg-[#5b00e5] hover:bg-[#4a00b8] text-white px-[26px] py-[10px] rounded-full text-[14px] font-medium transition-colors duration-300 text-center shadow-md"
          >
            {currentCard.buttonText}
          </Link>
        </div>

      </div>
    </div>
  ); 
}
export default Cards