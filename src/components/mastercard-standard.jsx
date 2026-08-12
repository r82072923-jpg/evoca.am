import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import MasterCardStandardiMasin from "./mastercard-standard-imasin"
import MasterCardStandardiMasin2 from "./mastercard-standard-imasin2"
import MasterCardStandardiMasin3 from "./mastercard-standard-imasin3"
import VisaClassiciMasin3 from "./visaclassic-imasin3"
import Slayder5 from "./slayder5"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
function MasterCardStandard(){
    const [activeTab,setActiveTab]=useState("Քարտի մասին")
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <MasterCardStandardiMasin></MasterCardStandardiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <MasterCardStandardiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սակագներ և դրույթներ' && (
            <VisaClassiciMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <MasterCardStandardiMasin3></MasterCardStandardiMasin3>
        <Slayder5></Slayder5>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        </>
    )
}
export default MasterCardStandard