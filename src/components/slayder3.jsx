import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore";

function Slayder3() {
  const [playing, setPlaying] = useState({});
  const [currentIndex, setCurrentIndex] = useState(1);
  const [firebaseData, setFirebaseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "slayder3"));
        
        if (!querySnapshot.empty) {
          // Վերցնում ենք առաջին փաստաթղթի տվյալները
          const docData = querySnapshot.docs[0].data();
          setFirebaseData(docData);
        } else {
          console.log("Տվյալներ չեն գտնվել slayder3 հավաքածուում:");
        }
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#6200EA] flex items-center justify-center text-white text-xl font-bold">
        Բեռնվում է տվյալները Firebase-ից...
      </div>
    );
  }
  if (!firebaseData || !firebaseData.cultureVideos) {
    return (
      <div className="w-full min-h-screen bg-[#6200EA] flex items-center justify-center text-white text-xl font-bold">
        Տվյալներ չեն գտնվել կամ հավաքածուն դատարկ է:
      </div>
    );
  }

  const videos = firebaseData.cultureVideos.videos;

  const handlePlay = (id) => {
    setPlaying(prev => ({ ...prev, [id]: true }));
  };

  const handleNext = () => {
    setPlaying({});
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setPlaying({});
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const leftIndex = (currentIndex - 1 + videos.length) % videos.length;
  const centerIndex = currentIndex;
  const rightIndex = (currentIndex + 1) % videos.length;

  const leftVideo = videos[leftIndex];
  const centerVideo = videos[centerIndex];
  const rightVideo = videos[rightIndex];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full min-h-screen bg-[#6200EA] flex flex-col justify-center items-center py-16 px-4 relative overflow-hidden font-sans">
        
        <div className="max-w-[1300px] w-full text-white mb-10 z-10 px-10">
          <h2 className="text-3xl font-bold mb-4">{firebaseData.cultureVideos.title}</h2>
          <p className="text-sm md:text-base leading-relaxed max-w-4xl">
            {firebaseData.cultureVideos.description}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-8 z-10 w-full max-w-[1400px]">
          
          <button onClick={handlePrev} className="text-white hover:opacity-75 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>

          <div className="hidden lg:flex w-[300px] bg-white rounded-xl p-3 shadow-lg flex-col transition-all duration-500">
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-3">
              {!playing[leftVideo.id] ? (
                <>
                  <img src={leftVideo.url} alt="thumbnail" className="w-full h-full object-cover opacity-80" />
                  <button onClick={() => handlePlay(leftVideo.id)} className="absolute inset-0 m-auto w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all">
                    <svg className="w-6 h-6 text-cyan-400 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </button>
                </>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: leftVideo.iframe }} className="w-full h-full" />
              )}
            </div>
            <h3 className="text-[#1A1A24] font-bold text-sm line-clamp-2">{leftVideo.title}</h3>
          </div>

          <div className="w-full max-w-[700px] bg-white rounded-xl p-4 md:p-6 shadow-2xl flex flex-col z-20 transition-all duration-500">
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
              {!playing[centerVideo.id] ? (
                <>
                  <img src={centerVideo.url} alt="thumbnail" className="w-full h-full object-cover opacity-80" />
                  <button onClick={() => handlePlay(centerVideo.id)} className="absolute inset-0 m-auto w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all">
                     <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </button>
                </>
              ) : (
                 <div dangerouslySetInnerHTML={{ __html: centerVideo.iframe }} className="w-full h-full" />
              )}
            </div>
            <h3 className="text-[#1A1A24] font-bold text-lg md:text-xl">{centerVideo.title}</h3>
          </div>

          <div className="hidden lg:flex w-[300px] bg-white rounded-xl p-3 shadow-lg flex-col transition-all duration-500">
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-3">
              {!playing[rightVideo.id] ? (
                <>
                  <img src={rightVideo.url} alt="thumbnail" className="w-full h-full object-cover opacity-80" />
                  <button onClick={() => handlePlay(rightVideo.id)} className="absolute inset-0 m-auto w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all">
                     <svg className="w-6 h-6 text-cyan-400 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </button>
                </>
              ) : (
                 <div dangerouslySetInnerHTML={{ __html: rightVideo.iframe }} className="w-full h-full" />
              )}
            </div>
            <h3 className="text-[#1A1A24] font-bold text-sm line-clamp-2">{rightVideo.title}</h3>
          </div>

          <button onClick={handleNext} className="text-white hover:opacity-75 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
}

export default Slayder3;