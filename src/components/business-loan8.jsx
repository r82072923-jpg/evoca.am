import { useState } from "react"
import Header from "./header"
import TopHeader2 from "./topHeader2"
import BusinessLoan8iMasin from "./business-loan8-imasin"
import BusinessLoan8iMasin2 from "./business-loan8-imasin2"
import BusinessLoan8iMasin3 from "./business-loan8-imasin3"
import Slayder4 from "./slayder4"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
import Footer from "./footer"
import FooterBottom from "./footerBottom"
function BusinessLoan8(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader2></TopHeader2>
        <BusinessLoan8iMasin></BusinessLoan8iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <BusinessLoan8iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Պայմաններ և սակագներ' && (
            <BusinessLoan8iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder4></Slayder4>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        <FooterBottom></FooterBottom>
        </>
    )
}
export default BusinessLoan8