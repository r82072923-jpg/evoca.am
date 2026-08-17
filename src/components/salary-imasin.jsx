function SalaryiMasin() {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-[#f8f7fb] rounded-3xl md:rounded-l-[80px] md:rounded-r-md flex flex-col md:flex-row items-stretch overflow-hidden">
        
        <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="mb-8">
            <span className="block text-xl md:text-2xl text-[#2b2b2b] font-medium mb-2 uppercase">
              EVOCA
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2b2b2b] leading-[1.2] uppercase tracking-wide">
              Աշխատավարձային <br /> Նախագիծ
            </h2>
          </div>
          
          <p className="text-[#333333] text-base md:text-lg leading-relaxed max-w-md font-medium">
            Քո աշխատավարձը կարող է քեզ տալ շատ ավելին:<br />
            Պարզապես պետք է ընտրել Evocabank-ը:
          </p>
        </div>

        <div className="w-full md:w-1/2 flex">
          <img 
            src="https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png" 
            alt="Evoca Աշխատավարձային Նախագիծ" 
            className="w-full h-full object-cover object-center min-h-[300px] md:min-h-full"
          />
        </div>

      </div>
    </section>
  );
}
export default SalaryiMasin