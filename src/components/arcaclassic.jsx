import Header from "./header"
import TopHeader from "./topHeader"
import ArcaClassiciMasin from "./arcaclassic-imasin"
import ArcaClassiciMasin2 from "./arcaclassic-imasin2"
import { useState } from "react"
function ArcaClassic(){
    const [activeTab,setActiveTab]=useState("Քարտի մասին")
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <ArcaClassiciMasin></ArcaClassiciMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <ArcaClassiciMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սակագներ և դրույթներ' && (
            <FourUamGiftCardiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default ArcaClassic