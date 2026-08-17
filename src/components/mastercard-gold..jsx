import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import MasterCardGoldiMasin from "./mastercard-gold-imasin"
import MasterCardGoldiMasin2 from "./mastercard-gold-imasin2"
import MasterCardGoldiMasin3 from "./mastercard-gold-imasin3"
import MasterCardGoldiMasin4 from "./mastercard-gold-imasin4"
import Slayder5 from "./slayder5"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
import Footer from "./footer"
import FooterBottom from "./footerBottom"
function MasterCardGold(){
    const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <MasterCardGoldiMasin></MasterCardGoldiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <MasterCardGoldiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սակագներ և դրույթներ' && (
            <MasterCardGoldiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <MasterCardGoldiMasin4></MasterCardGoldiMasin4>
        <Slayder5></Slayder5>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        <FooterBottom></FooterBottom>
        </>
    )
}
export default MasterCardGold