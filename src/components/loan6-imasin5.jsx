import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from './firebaseConfog';

const tabs = [
    'Վարկի մասին',
    'Պայմաններ',
    'Ապառիկ համագործակցության հայտ',
    'Գործընկերների ցանկ',
];

const partnersDataArray = [
  { id: 1, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Reebook.png', link: 'https://reeboksportsclub.com/' },
  { id: 2, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Allegro.png', link: '/' },
  { id: 3, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/InSport.png', link: 'https://insport.am/' },
  { id: 4, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Hills-Sport-Complex.png', link: 'http://www.hillssportcomplex.am/' },
  { id: 5, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Golds-Gym.png', link: 'https://goldsgym.am/' },
  { id: 6, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Olimpavan.png', link: 'http://armnoc.am/arm/' },
  { id: 7, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Multi-Wellness.png', link: 'https://mwc.am/' },
  { id: 8, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Energym.png', link: '/olympic' },
  { id: 9, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Orion-Sports-Club.png', link: '/olympic' },
  { id: 10, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Nor-Tun.png', link: 'https://nortun.am/' },
  { id: 11, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Exterior-Group.png', link: 'https://exterior.am/' },
  { id: 12, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Avanta.png', link: 'https://avanta.am/' },
  { id: 13, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Maletti-Medical-Center.png', link: '/olympic' },
  { id: 14, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Designo-Furniture.png', link: 'http://designo.am/' },
  { id: 15, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Comodo-Redefining-Quality.png', link: '/olympic' },
  { id: 16, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Ecox.png', link: '/olympic' },
  { id: 17, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/VLV-Electronics.png', link: 'https://vlv.am/' },
  { id: 18, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Ideal-System-Logo.png', link: 'https://www.idealsystem.am/' },
  { id: 19, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Beko.png', link: 'https://beko.am/' },
  { id: 20, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Vega.png', link: 'https://vega.am/' },
  { id: 21, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Shtigen.png', link: 'https://shtigen.com/hy/' },
  { id: 22, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Time-Pandora.png', link: 'https://www.time.am/' },
  { id: 23, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Pixel.png', link: 'https://pixels.am/' },
  { id: 24, src: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Ibolit.png', link: 'http://www.imobi.am/cgi-sys/defaultwebpage.cgi' },
];

function Loan6iMasin5({ activeTab, setActiveTab }) {
  const [partnersData, setPartnersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchPartners = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'loans6iMasin4'));
      const partners = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      partners.sort((a, b) => Number(a.id) - Number(b.id));
      setPartnersData(partners);
    } catch (error) {
      console.error("Error fetching partners: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const handleUploadToFirebase = async () => {
    try {
      setUploading(true);
      setMessage('Ուղարկվում է...');

      for (const partner of partnersDataArray) {
        await setDoc(doc(db, 'loans6iMasin4', partner.id.toString()), {
          src: partner.src,
          link: partner.link,
        });
      }

      setMessage('Հաջողությամբ ուղարկվեց Firebase!');
      fetchPartners();
    } catch (error) {
      console.error('Error uploading:', error);
      setMessage('Սխալ տեղի ունեցավ ուղարկելիս:');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-4">
      <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
        <nav className="flex space-x-10 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#6b11cb]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-18px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
              )}
            </button>
          ))}
        </nav>
      </div> 

      {loading ? (
        <div className="text-center py-12 text-gray-500">Բեռնվում է...</div>
      ) : (
        <div className="grid grid-cols-3 border-l border-t border-purple-100">
          {partnersData.map((partner) => (
            <Link
              key={partner.id}
              to={partner.link}
              className="border-r border-b border-purple-100 flex items-center justify-center p-6 h-32 hover:bg-gray-50 transition-colors"
            >
              <img
                src={partner.src}
                alt={`Partner ${partner.id}`}
                className="max-h-full max-w-full object-contain"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Loan6iMasin5;