import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import VisaClassiciMasin from "./visaclassic-imasin"
import VisaClassiciMasin2 from "./visaclassic-imasin2"
import VisaClassiciMasin3 from "./visaclassic-imasin3"
import VisaClassiciMasin4 from "./visaclassic-imasin4"
import Slayder5 from "./slayder5"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
function VisaClassic(){
    const [activeTab,setActiveTab]=useState("Քարտի մասին")
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <VisaClassiciMasin></VisaClassiciMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <VisaClassiciMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սակագներ և դրույթներ' && (
            <VisaClassiciMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <VisaClassiciMasin4></VisaClassiciMasin4>
        <Slayder5></Slayder5>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        </>
    )
}
export default VisaClassic