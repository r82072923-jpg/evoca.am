import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import RioGiftCardiMasin from "./rio-giftcard-imasin"
import RioGiftCardiMasin2 from "./rio-giftcard-masin2"
import RioGiftCardiMasin3 from "./rio-giftcard-imasin3"
import FourUamGiftCardiMasin4 from "./4u.am-giftcard-imasin4"
import Slayder5 from "./slayder5"
import OnlineEvMobileBanking from"./onlineevmobilebanking"
import Footer from "./footer"
import FooterBottom from "./footerBottom"
function RioGiftCard(){
    const [activeTab,setActiveTab]=useState("Քարտի մասին")
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <RioGiftCardiMasin></RioGiftCardiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <RioGiftCardiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Տրամադրման պայմանները' && (
            <RioGiftCardiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սպասարկման պայմանները' && (            
            <FourUamGiftCardiMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder5></Slayder5>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        <FooterBottom></FooterBottom>
        </>
    )
}
export default RioGiftCard