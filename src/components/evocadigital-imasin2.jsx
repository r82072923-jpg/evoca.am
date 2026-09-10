import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebaseConfog';
import { doc, getDoc, setDoc } from 'firebase/firestore';


function EvocaDigitaliMasin2() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "evocaDigitaliMasin", "evocaDigitalInfo");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPageData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      } finally {
        setFetching(false);
      }
    }
    fetchData();
  }, []);

  const handleSaveToFirebase = async () => {
    if (!pageData) return;
    setLoading(true);
    setMessage("");
    try {
      await setDoc(doc(db, "evocaDigitaliMasin", "evocaDigitalInfo"), pageData);
      setMessage("Տվյալները հաջողությամբ ուղարկվեցին Firebase!");
    } catch (error) {
      console.error("Error saving data to Firebase:", error);
      setMessage("Սխալ տվյալները ուղարկելիս։");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="w-full max-w-[900px] mx-auto px-4 md:px-8 py-20 text-center text-[#2b2b2b] font-sans">
        <p className="text-lg">Բեռնվում է տվյալները Firebase-ից...</p>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="w-full max-w-[900px] mx-auto px-4 md:px-8 py-20 text-center text-red-600 font-sans">
        <p className="text-lg">Տվյալներ չհաջողվեց գտնել Firebase-ում։</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[900px] mx-auto px-4 md:px-8 py-10 font-sans text-[#2b2b2b] text-[15px] leading-relaxed">
      {message && (
        <p className={`mb-6 text-sm font-medium ${message.includes("հաջողությամբ") ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}

      <div className="space-y-6">
        {pageData.introParagraphs && pageData.introParagraphs.map((paragraph, index) => (
          <p key={index}>
            {index === 0 ? (
              <>
                Այսուհետ «Քարտուս թողեցի տանը», «Քարտուս մնաց մյուս պայուսակիս մեջ», «Քարտուս մոռացա բանկոմատի մեջ» և նմանատիպ շատ այլ արտահայտություններ ակտուալ չեն մեզ մոտ: <strong className="text-[#6c11d0]">Evoca Digital քարտը</strong> Visa միջազգային վճարային համակարգի թվային քարտ է, որի միջոցով կարող ես իրականացնել քարտային բոլոր տեսակի գործարքներ՝ միայն այն տարբերությամբ, որ քարտը քեզ մոտ կլինի ոչ թե ֆիզիկապես, այլ քո <strong className="text-[#6c11d0]">EvocaTOUCH</strong> հավելվածում:
              </>
            ) : index === 2 ? (
              <>
                <strong className="text-[#6c11d0]">Evoca Digital քարտը</strong> կարող ես պատվիրել <strong className="text-[#6c11d0]">EvocaTOUCH</strong> հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում: Ի դեպ, քարտը մինչև <strong className="text-[#6c11d0]">դեկտեմբերի 31</strong>-ը պատվիրելու դեպքում՝ այն կստանաս ամբողջովին <strong className="text-[#6c11d0]">ԱՆՎՃԱՐ</strong>: Թվային քարտը քոնը կլինի քո իսկ նախընտրած արժույթով և դիզայնով:
              </>
            ) : index === 3 ? (
              <>
                Ի դեպ, հավելվածում դու կգտնես <strong className="text-[#6c11d0]">Evoca Digital քարտի</strong> 5 դիզայն: Կարող ես ընտրել քո սիրելի դիզայնը և փոխել այն երբ ցանկանաս: Իսկ շուտով քեզ սպասվում են թվային քարտի դիզայնի շատ շատ հետաքրքիր տարբերակներ:
              </>
            ) : (
              paragraph
            )}
          </p>
        ))}
      </div>

      {pageData.cardImage && (
        <div className="my-10 flex justify-center">
          <img 
            src={pageData.cardImage.src} 
            alt={pageData.cardImage.alt} 
            className="max-w-[400px] w-full object-contain drop-shadow-xl rounded-lg"
          />
        </div>
      )}

      <div className="mt-8">
        <p>
          <strong className="text-[#6c11d0]">Evoca Digital քարտերի</strong> պայմաններին ավելի մանրամասն կարող ես ծանոթանալ{' '}
          <Link to="/visa-digital" className="text-[#6c11d0] font-bold underline underline-offset-4 hover:text-[#580cb0] transition-colors">
            այստեղ
          </Link>։
        </p>
      </div>

      <div className="mt-12 space-y-6">
        <p className="font-medium text-[#6c11d0] text-lg">
          {pageData.secondSectionTitle}
        </p>
        {pageData.secondSectionParagraphs && pageData.secondSectionParagraphs.map((par, index) => (
          <p key={index}>{par}</p>
        ))}
      </div>

      <div className="mt-10">
        <p className="font-medium mb-6">
          {pageData.summaryTitle}
        </p>
        <ul className="list-disc list-inside space-y-4 marker:text-[#6c11d0] pl-2 md:pl-4">
          {pageData.features && pageData.features.map((feat, index) => (
            <li key={index}>
              <strong className="text-[#6c11d0]">{feat.title}</strong> {feat.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <p className="font-medium">
          <strong className="text-[#6c11d0]">Evoca</strong>-ն պատրաստ է թվային ապագային իր նոր թվային լուծումներով, իսկ դու՞:
        </p>
      </div>

    </div>
  );
}

export default EvocaDigitaliMasin2;