import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog'; // Քո ֆայլի ճանապարհը

function FooterBottom() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'footerPartners'));
        const partnersList = querySnapshot.docs.map(doc => doc.data());
        setPartners(partnersList);
      } catch (error) {
        console.error('Սխալ լոգոները բեռնելիս:', error);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div className="w-full bg-[#f4f4f4] pt-8 pb-16 border-t border-gray-200 font-sans relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Ձախ մասի տեքստային հայտարարությունը */}
        <div className="text-[11.5px] text-gray-500 leading-relaxed max-w-4xl text-justify">
          <p>
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲՓԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության եւ արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
        </div>

        {/* Աջ մասի գործընկերների լոգոներ Firebase-ից */}
        <div className="flex flex-wrap items-center justify-end gap-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
          {partners.map((partner, index) => (
            <a 
              key={index} 
              href={partner.link || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer inline-block"
            >
              <img src={partner.image} alt={partner.name || 'Partner logo'} className="h-8 object-contain" />
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}

export default FooterBottom;