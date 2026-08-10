import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import DalmaGiftCardiMasin from "./dalma-giftcard-imasin"
import DalmaGiftCardiMasin2 from "./dalma-giftcard-imasin2"
import DalmaGiftCardiMasin3 from "./dalma-giftcard-imasin3"
import DalmaGiftCardiMasin4 from "./dalma-giftcard-imasin4"
import FourUamGiftCardiMasin4 from "./4u.am-giftcard-imasin4"
import Slayder5 from "./slayder5"
function DalmaGiftCard(){
    const [activeTab,setActiveTab]=useState("Քարտի մասին")
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <DalmaGiftCardiMasin></DalmaGiftCardiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <DalmaGiftCardiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Տրամադրման պայմանները' && (
            <DalmaGiftCardiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սպասարկման պայմանները' && (            
            <FourUamGiftCardiMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <DalmaGiftCardiMasin4></DalmaGiftCardiMasin4>
        <Slayder5></Slayder5>
        </>
    )
}
export default DalmaGiftCard