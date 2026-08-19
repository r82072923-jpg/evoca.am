import React from 'react';

function Careers2() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 font-sans">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A24] mb-4">
       Ինչու՞ աշխատել Evoca-ում
      </h2>
      
      <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed mb-6">
       «Բացահայտի՛ր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ: Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին»
      </p>
      
      <div className="w-full overflow-hidden rounded-2xl shadow-sm">
        <img 
          src="https://www.evoca.am/file_manager/Career/evoca-girl.jpg" 
          alt="Why work at Evoca" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
export default Careers2