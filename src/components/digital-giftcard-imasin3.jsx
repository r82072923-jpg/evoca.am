import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfog'; 
const tabs = ['Քարտի մասին', 'Սակագներ և դրույթներ'];
function DigitalGiftCardiMasin3({activeTab,setActiveTab}) {
  const [tariffs, setTariffs] = useState([]);
  const [footnotes, setFootnotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFirebaseData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'digitalGiftCardiMasin'));
        
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          
          if (docData.tariffs) {
            setTariffs(docData.tariffs);
          }
          if (docData.footnotes) {
            setFootnotes(docData.footnotes);
          }
        } else {
          console.log("Firebase-ում տվյալներ չեն գտնվել:");
        }
      } catch (err) {
        console.error('Սխալ տվյալները բեռնելիս:', err);
        setError('Առաջացավ սխալ տվյալները բեռնելիս');
      } finally {
        setLoading(false);
      }
    };

    fetchFirebaseData();
  }, []);

  const renderFootnote = (text) => {
    const match = text.match(/^(\[\d+\])(.*)/);
    if (match) {
      return (
        <>
          <span className="text-[#6b11cb] font-bold">{match[1]}</span>
          {match[2]}
        </>
      );
    }
    return text;
  };

  if (loading) {
    return (
      <div className="w-full max-w-5xl mx-auto py-10 text-center text-[#6b11cb] font-bold text-lg">
        Տվյալները բեռնվում են...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-5xl mx-auto py-10 text-center text-red-500 font-bold text-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto text-[#333333] font-sans pb-10 mt-8">
        <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
          <nav className="flex space-x-10 min-w-max">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                  activeTab === tab ? 'text-[#6b11cb]' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
                {activeTab === tab && <span className="absolute bottom-[-18px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />}
              </button>
            ))}
          </nav>
        </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse text-base border-t-[3px] border-t-[#6b11cb]">
          <tbody>
            {tariffs.map((row, index) => (
              <tr 
                key={index} 
                className="border-b border-[#e5d4f5] hover:bg-gray-50 transition-colors"
              >
                <td className="w-1/2 py-5 pr-4 align-top">
                  {row.label}
                </td>
                <td className="w-1/2 py-5 pl-4 align-top font-medium">
                  <div className="space-y-4">
                    {row.value.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {footnotes.length > 0 && (
        <div className="mt-8 space-y-4 text-sm sm:text-base leading-relaxed">
          {footnotes.map((note, index) => (
            <p key={index}>
              {renderFootnote(note)}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default DigitalGiftCardiMasin3;