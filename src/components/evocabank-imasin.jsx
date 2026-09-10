import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebaseConfog';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';

const staticOrganizations = [
  {
    id: "1",
    name: "Վարկի մարում",
    logo: "https://resource.evoca.am/images/webPayment/Account-Replenishment.png",
    link: "/services/evocabank/1",
    isActive: true,
  },
  {
    id: "2",
    name: "Հաշվի համալրում",
    logo: "https://resource.evoca.am/images/webPayment/Account-Replenishment.png",
    link: "/services/evocabank/2",
    isActive: false,
  },
  {
    id: "3",
    name: "Քարտի համալրում",
    logo: "https://resource.evoca.am/images/webPayment/cardtocard.png",
    link: "/services/evocabank/3",
    isActive: false,
  },
];

const EvocaBankiMasin = () => {
  const [organizations, setOrganizations] = useState([]);
  const [fetching, setFetching] = useState(true);

  const uploadToFirebase = async () => {
    try {
      for (const org of staticOrganizations) {
        await setDoc(doc(db, "evocaBankiMasin", org.id), org);
      }
      fetchOrganizations();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOrganizations = async () => {
    setFetching(true);
    try {
      const querySnapshot = await getDocs(collection(db, "evocaBankiMasin"));
      const data = [];
      querySnapshot.forEach((docSnap) => {
        data.push({ id: docSnap.id, ...docSnap.data() });
      });

      if (data.length > 0) {
        data.sort((a, b) => Number(a.id) - Number(b.id));
        setOrganizations(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchOrganizations();
  }, []);

  if (fetching) {
    return (
      <div className="w-full max-w-5xl mx-auto px-5 py-20 text-center font-sans">
        <p className="text-lg text-violet-700 font-semibold">Բեռնվում են տվյալները Firebase-ից...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-5 bg-slate-50 min-h-screen font-sans">
      <h2 className="text-center text-3xl font-bold text-slate-800 mb-10">
        EVOCABANK
      </h2>

      {organizations.length === 0 && (
        <div className="text-center mb-6">
          <button
            onClick={uploadToFirebase}
            className="bg-violet-600 text-white px-5 py-2 rounded-xl hover:bg-violet-700 transition"
          >
            Ուղարկել տվյալները Firebase (evocaBankiMasin)
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {organizations.map((org) => (
          <Link
            key={org.id}
            to={org.link}
            className={`flex flex-col items-center justify-between min-h-[230px] p-8 rounded-3xl border-2 transition-all duration-300 ease-in-out cursor-pointer
              hover:bg-violet-100 hover:border-violet-500 hover:shadow-md hover:-translate-y-1
              ${
                org.isActive
                  ? "bg-violet-100 border-violet-500 shadow-sm"
                  : "bg-white border-transparent shadow-sm"
              }
            `}
          >
            <div className="h-20 w-full flex items-center justify-center">
              <img
                src={org.logo}
                alt={org.name ? org.name.replace("\n", " ") : "logo"}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <span className="text-base font-semibold text-center leading-snug mt-4 text-slate-800 whitespace-pre-line">
              {org.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EvocaBankiMasin;