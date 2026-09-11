import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfog"; 
import { collection, doc, writeBatch, getDocs, query, orderBy } from "firebase/firestore";

export default function QaxaqakanutyuniMasin() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPrivacyPolicy = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "qaxaqakanutyuniMasin"), orderBy("sectionNumber", "asc"));
      const querySnapshot = await getDocs(q);
      
      const loadedDocs = [];
      querySnapshot.forEach((docSnap) => {
        loadedDocs.push({ id: docSnap.id, ...docSnap.data() });
      });

      if (loadedDocs.length > 0) {
        setSections(loadedDocs);
      } else {
        setSections(privacyPolicyData);
      }
    } catch (error) {
      console.error("❌ Firestore-ից տվյալները բեռնելիս սխալ տեղի ունեցավ:", error);
      setSections(privacyPolicyData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrivacyPolicy();
  }, []);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#1a252f" }}>
        Գաղտնիության քաղաքականություն
      </h1>
      {loading ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>⏳ Տվյալները բեռնվում են Firestore-ից...</p>
      ) : (
        sections.map((sec) => (
          <div key={sec.id} style={{ marginBottom: "25px", lineHeight: "1.6", color: "#333" }}>
            <h2 style={{ color: "#2c3e50", borderBottom: "2px solid #ecf0f1", paddingBottom: "8px" }}>
              {sec.title}
            </h2>
            {sec.paragraphs && sec.paragraphs.map((p, index) => (
              <p key={index} style={{ marginBottom: "10px" }}>{p}</p>
            ))}
            {sec.list1 && (
              <ul style={{ paddingLeft: "25px", marginBottom: "15px" }}>
                {sec.list1.map((item, index) => (
                  <li key={index} style={{ marginBottom: "5px" }}>{item}</li>
                ))}
              </ul>
            )}
            {sec.subHeader2 && (
              <p style={{ fontWeight: "bold", marginTop: "15px", marginBottom: "10px" }}>
                {sec.subHeader2}
              </p>
            )}
            {sec.list2 && (
              <ul style={{ paddingLeft: "25px", marginBottom: "15px" }}>
                {sec.list2.map((item, index) => (
                  <li key={index} style={{ marginBottom: "5px" }}>{item}</li>
                ))}
              </ul>
            )}
            {sec.subList && (
              <ul style={{ paddingLeft: "25px", listStyleType: "none", marginBottom: "15px" }}>
                {sec.subList.map((item, index) => (
                  <li key={index} style={{ marginBottom: "5px" }}>{item}</li>
                ))}
              </ul>
            )}
            {sec.footerParagraph && (
              <p style={{ marginTop: "10px" }}>{sec.footerParagraph}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
}