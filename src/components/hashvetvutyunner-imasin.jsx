import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfog";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function HashvetvutyunneriMasin() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const q = query(collection(db, "hashvetvutyunneriMasin"), orderBy("year", "desc"));
        const querySnapshot = await getDocs(q);
        
        const reportsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setReports(reportsData);
      } catch (error) {
        console.error("Սխալ տվյալները բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-[#f7f8fc] py-16 flex justify-center items-center font-sans">
        <p className="text-gray-500 font-medium">Բեռնվում է...</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f7f8fc] py-16 px-4 md:px-10 flex justify-center font-sans">
      <div className="max-w-[1000px] w-full flex flex-col">
        
        <h2 className="text-xl md:text-2xl font-bold text-[#2b2b2b] mb-10">
          Աուդիտորական եզրակացություն
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {reports.map((report) => (
            <div key={report.id} className="flex flex-col">
              <h3 className="text-sm font-bold text-[#2b2b2b] mb-2">
                {report.year}
              </h3>
              <a 
                href={report.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#f3f0f9] hover:bg-[#eae3f5] transition-colors rounded-lg py-2.5 px-4 group"
              >
                <span className="text-xs md:text-[13px] font-semibold text-[#8b3dff] group-hover:underline">
                  {report.title}
                </span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default HashvetvutyunneriMasin;