import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import WorldDigitaliMasin from "./world-digital-imasin"
import WorldDigitaliMasin2 from "./world-digital-imasin2"
import WorldDigitaliMasin3 from "./world-digital-imasin3"
function WorldDigital(){
    const [activeTab,setActiveTab]=useState("Քարտի մասին")
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <WorldDigitaliMasin></WorldDigitaliMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <WorldDigitaliMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Mastercard World քարտի մասին' && (
            <WorldDigitaliMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default WorldDigital