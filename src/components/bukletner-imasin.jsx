import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfog";
import { collection, getDocs } from "firebase/firestore";

function BukletneriMasin() {
  const [booklets, setBooklets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooklets = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bukletneriMasin"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        data.sort((a, b) => Number(a.id) - Number(b.id));

        setBooklets(data);
      } catch (error) {
        console.error("Սխալ՝ Firebase-ից տվյալները վերցնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooklets();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px", fontSize: "18px", color: "#666" }}>
        Տվյալները բեռնվում են...
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
        Բուկլետներ
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {booklets.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#f8f9fa",
              borderRadius: "16px",
              padding: "20px 40px",
              textDecoration: "none",
              transition: "box-shadow 0.2s ease, transform 0.2s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
              <img
                src={item.image}
                alt={item.title || "Booklet"}
                style={{
                  maxWidth: "800px",
                  maxHeight: "160px",
                  objectFit: "contain"
                }}
              />
            </div>

            <div style={{ flex: "1", paddingLeft: "20px" }}>
              <h3
                style={{
                  color: "#6b21a8",
                  fontSize: "22px",
                  fontWeight: "700",
                  lineHeight: "1.3",
                  margin: 0
                }}
              >
                {item.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default BukletneriMasin;