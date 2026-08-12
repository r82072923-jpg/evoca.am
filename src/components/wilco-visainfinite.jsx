import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import WilcoVisaInfiniteiMasin from "./wilco-visainfinite-imasin"
import WilcoVisaInfiniteiMasin2 from "./wilco-visainfinite-imasin2"
function WilcoVisaInfinite(){
    const [activeTab,setActiveTab]=useState("Քարտի մասին")
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <WilcoVisaInfiniteiMasin></WilcoVisaInfiniteiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <WilcoVisaInfiniteiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սակագներ և դրույթներ' && (
            <MyLeriMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default WilcoVisaInfinite