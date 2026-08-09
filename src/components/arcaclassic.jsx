import Header from "./header"
import TopHeader from "./topHeader"
import ArcaClassiciMasin from "./arcaclassic-imasin"
import ArcaClassiciMasin2 from "./arcaclassic-imasin2"
import ArcaClassiciMasin3 from "./arcaclassic-imasin3"
import ArcaClassiciMasin4 from "./arcaclassic-imasin4"
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
            <ArcaClassiciMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <ArcaClassiciMasin4></ArcaClassiciMasin4>
        </>
    )
}
export default ArcaClassic