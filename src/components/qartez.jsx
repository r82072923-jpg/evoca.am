import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "./firebaseConfog";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const createUserIcon = (avatarUrl) => {
  return new L.Icon({
    iconUrl: avatarUrl || "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
    className: "rounded-full border-2 border-blue-500 bg-white object-cover"
  });
};

function LiveQartez() {
  const [loggedUsers, setLoggedUsers] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    let watchId = null;
    let unsubscribeSnapshot = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.warn("Օգտատերը մուտք չի գործել համակարգ։");
        setLoggedUsers([]);
        return;
      }
      unsubscribeSnapshot = onSnapshot(
        collection(db, "users1"),
        (querySnapshot) => {
          const usersData = [];
          querySnapshot.forEach((document) => {
            const data = document.data();
            usersData.push({
              id: document.id,
              name: data.name,
              lat: data.lat,
              lng: data.lng,
              avatar: data.avatar
            });
          });
          setLoggedUsers(usersData);
        },
        (error) => {
          console.error("Սխալ տվյալները լայվ բեռնելիս:", error);
        }
      );

      if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const userId = currentUser.uid;

            try {
              await setDoc(
                doc(db, "users1", userId),
                {
                  name: currentUser.displayName || "Անհայտ Օգտատեր",
                  lat: lat,
                  lng: lng,
                  avatar:
                    currentUser.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                },
                { merge: true }
              );
            } catch (error) {
              console.error("Սխալ տեղորոշումը թարմացնելիս:", error);
            }
          },
          (error) => {
            console.error("Չհաջողվեց հետևել տեղորոշմանը:", error);
          },
          {
            enableHighAccuracy: true,
            maximumAge: 10000,
            timeout: 10000
          }
        );
      }
    });

    return () => {
      if (unsubscribeAuth) unsubscribeAuth();
      if (unsubscribeSnapshot) unsubscribeSnapshot();
      if (watchId !== null && navigator.geolocation) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);
return (
    <div className="flex flex-col font-[Arial,sans-serif] gap-[20px] w-full px-6 py-4">
      <h2 className="text-xl font-bold">Օգտատերերի Լայվ Քարտեզ</h2>

      <div style={{ height: "70vh", width: "100%", position: "relative", zIndex: 0 }} className="rounded-xl overflow-hidden shadow-md border border-gray-300">
        <MapContainer
          center={[40.1784, 44.508]}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {loggedUsers.map((user) =>
            user.lat && user.lng ? (
              <Marker
                key={user.id}
                position={[user.lat, user.lng]}
                icon={createUserIcon(user.avatar)}
              >
                <Popup>
                  <strong>{user.name}</strong>
                </Popup>
              </Marker>
            ) : null
          )}
        </MapContainer>
      </div>
    </div>
  );
}

export default LiveQartez;