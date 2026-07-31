import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog'; // Քո ֆայլի ճանապարհը

function Footer() {
  const [sections, setSections] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);
  const [apps, setApps] = useState([]);
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const sectionsSnapshot = await getDocs(collection(db, 'footerSections'));
        let sectionsList = sectionsSnapshot.docs.map(doc => doc.data());
        
        // Փոխում ենք սյունակների հերթականությունը, որպեսզի առաջինը լինի վերջինը, վերջինն էլ՝ առաջինը
        if (sectionsList.length >= 3) {
          sectionsList = [sectionsList[2], sectionsList[1], sectionsList[0]];
        }

        setSections(sectionsList);

        const socialsSnapshot = await getDocs(collection(db, 'footerSocials'));
        setSocialLinks(socialsSnapshot.docs.map(doc => doc.data()));

        const appsSnapshot = await getDocs(collection(db, 'footerApps'));
        setApps(appsSnapshot.docs.map(doc => doc.data()));

        const contactsSnapshot = await getDocs(collection(db, 'footerContacts'));
        if (!contactsSnapshot.empty) {
          setContacts(contactsSnapshot.docs[0].data());
        }

      } catch (error) {
        console.error('Սխալ Firebase-ից տվյալներ ստանալիս:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  if (loading) {
    return <footer className="w-full bg-white py-8 text-center text-gray-400">Բեռնվում է...</footer>;
  }

  return (
    <footer className="w-full bg-white pt-12 pb-8 border-t border-gray-100 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Սյունակ 1: Լոգո և Հիմնական Ինֆորմացիա */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="text-gray-500">evoca</span>BANK
            </Link>
            
            <div className="text-[13px] text-gray-700 leading-relaxed">
              <p>ք. Երևան, 0010,</p>
              <p>Հանրապետության 44/2</p>
            </div>
            
            <div className="text-[13px] text-gray-700 leading-relaxed font-medium">
              <p>Evocabank-ը վերահսկվում է</p>
              <p>Հայաստանի Հանրապետության</p>
              <p>Կենտրոնական բանկի կողմից</p>
            </div>
            
            <div className="text-[11px] text-gray-400 uppercase leading-relaxed mt-4">
              <p>1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵԸ</p>
              <p>ՊԱՀՊԱՆՎԱԾ ԵՆ</p>
            </div>
          </div>

          {/* Տեղափոխված բաժիններ (Այլ հղումներ -> Օգտակար -> Բանկի մասին) */}
          {sections.map((section, sIndex) => (
            <div key={sIndex}>
              <h3 className="font-bold text-gray-900 text-[15px] mb-6">{section.title}</h3>
              <ul className="flex flex-col space-y-4 text-[13.5px] text-gray-700">
                {section.links && section.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <Link to={link.to} className={`hover:text-[#8b5cf6] transition-colors ${link.className || ''}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Սյունակ 5: Սոց. ցանցեր, Հավելվածներ և Կոնտակտներ */}
          <div className="flex flex-col space-y-8">
            
            <div className="flex gap-4 text-gray-400 text-lg font-bold">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
                  {social.label}
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              {apps.map((app, index) => (
                <a key={index} href={app.url} target="_blank" rel="noopener noreferrer" className="w-28 cursor-pointer">
                  <img src={app.imgSrc} alt={app.name} className="w-full" />
                </a>
              ))}
            </div>

            <div className="flex flex-col space-y-4 text-[14px]">
              <Link to="/branches" className="text-[#8b5cf6] hover:underline font-medium whitespace-pre-line">
                {contacts?.branches?.label || 'Բանկի հասցեները և\nաշխատաժամերը'}
              </Link>
              <Link to="/contact" className="text-[#8b5cf6] hover:underline font-medium">
                {contacts?.support?.label || 'Կապ մեզ հետ'}
              </Link>
              
              <div className="mt-2 text-[#8b5cf6] flex flex-col space-y-2">
                <a href="tel:+37410605555" className="hover:underline">+374 10 605555</a>
                <a href="tel:8444" className="hover:underline">8444</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;