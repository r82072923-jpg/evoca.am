import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import WorldDigitaliMasin from "./world-digital-imasin"
import WorldDigitaliMasin2 from "./world-digital-imasin2"
import WorldDigitaliMasin3 from "./world-digital-imasin3"
import Slayder5 from "./slayder5"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
import Footer from "./footer"
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
        <Slayder5></Slayder5>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        </>
    )
}
export default WorldDigital