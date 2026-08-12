import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import VisaClassiciMasin from "./visaclassic-imasin"
import VisaClassiciMasin2 from "./visaclassic-imasin2"
import VisaClassiciMasin3 from "./visaclassic-imasin3"
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
        </>
    )
}
export default VisaClassic