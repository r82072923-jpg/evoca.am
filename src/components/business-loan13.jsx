import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import BusinessLoan13iMasin from "./business-loan13-imasin"
import BusinessLoan13iMasin2 from "./business-loan13-imasin2"
import BusinessLoan13iMasin3 from "./business-loan13-imasin3"
import Slayder4 from "./slayder4"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
import Footer from "./footer"
import FooterBottom from "./footerBottom"
function BusinessLoan13(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <BusinessLoan13iMasin></BusinessLoan13iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <BusinessLoan13iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Պայմաններ և սակագներ' && (
            <BusinessLoan13iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder4></Slayder4>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        <FooterBottom></FooterBottom>
        </>
    )
}
export default BusinessLoan13