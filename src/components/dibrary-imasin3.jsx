import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfog";
import { collection, getDocs } from "firebase/firestore";

function DibraryiMasin3() {
  const [resourcesData, setResourcesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "dibraryiMasin"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        data.sort((a, b) => Number(a.id) - Number(b.id));

        setResourcesData(data);
      } catch (error) {
        console.error("Սխալ՝ տվյալները ստանալիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromFirebase();
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", padding: "40px" }}>Բեռնվում է...</div>;
  }

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "20px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "15px",
          alignItems: "center"
        }}
      >
        {resourcesData.map((item) => (
          <a
            key={item.id}
            href={item.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
              border: "1px solid #eef",
              borderRadius: "8px",
              backgroundColor: "#fff",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              textDecoration: "none"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={item.logo}
              alt={item.name || "Resource Logo"}
              style={{
                width: "100%",
                height: "80px",
                objectFit: "contain"
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default DibraryiMasin3;