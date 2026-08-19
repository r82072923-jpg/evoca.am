import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan14iMasin from "./loan14-imasin"
import Loan14iMasin2 from "./loan14-imasin2"
import Loan14iMasin3 from "./loan14-imasin3"
import Slayder6 from "./slayder6"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
import Footer from "./footer"
import FooterBottom from "./footerBottom"
function Loan14(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan14iMasin></Loan14iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan14iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ և սակագներ' && (
            <Loan14iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder6></Slayder6>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        <FooterBottom></FooterBottom>
        </>
    )
}
export default Loan14