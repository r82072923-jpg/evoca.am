import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import MasterCardStandardiMasin from "./mastercard-standard-imasin"
import MasterCardStandardiMasin2 from "./mastercard-standard-imasin2"
import VisaClassiciMasin3 from "./visaclassic-imasin3"
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
        </>
    )
}
export default MasterCardStandard