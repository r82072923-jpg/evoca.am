export default function VisaGoldiMasin4() {
  return (
    <>
      <section 
        className="relative w-full min-h-[400px] md:min-h-[527px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('https://www.evoca.am/images-cache/cards/1/16137183034294/1920x527.jpg')" }}
      >
        
        {/* Կենտրոնական տեքստ */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed md:leading-snug drop-shadow-md">
            Պատվիրիր քո Mastercard Gold քարտն <br className="hidden md:block" />
            EvocaTOUCH հավելվածի օգնությամբ և <br className="hidden md:block" />
            ստացիր այն քո ցանկացած վայրում՝ <br className="hidden md:block" />
            անվճար առաքման միջոցով
          </h2>
        </div>

        {/* Ներքևի աջ անկյունի մանուշակագույն զանգի կոճակը */}
        <a 
          href="tel:*0000" 
          className="absolute bottom-6 right-6 w-12 h-12 md:w-14 md:h-14 bg-[#c8b4f4] rounded-full flex items-center justify-center shadow-lg hover:bg-[#b59cf0] transition-colors z-20"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-[#5b21b6]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>

      </section>
    </>
  );
}