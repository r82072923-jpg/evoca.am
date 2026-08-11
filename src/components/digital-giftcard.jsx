import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import DigitalGiftCardiMasin from "./digital-giftcard-imasin"
import DigitalGiftCardiMasin2 from "./digital-giftcard-imasin2"
import DigitalGiftCardiMasin3 from "./digital-giftcard-imasin3"
import Slayder5 from "./slayder5"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
import Footer from "./footer"
function DigitalGiftCard(){
const [activeTab,setActiveTab]=useState("Քարտի մասին")
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <DigitalGiftCardiMasin></DigitalGiftCardiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <DigitalGiftCardiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սակագներ և դրույթներ' && (
            <DigitalGiftCardiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder5></Slayder5>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        </>
    )
}
export default DigitalGiftCard