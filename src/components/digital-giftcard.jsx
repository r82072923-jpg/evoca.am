import Header from "./header"
import TopHeader from "./topHeader"
import DigitalGiftCardiMasin from "./digital-giftcard-imasin"
import DigitalGiftCardiMasin2 from "./digital-giftcard-imasin2"
import { useState } from "react"
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
            <WorldDigitaliMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default DigitalGiftCard