import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan3iMasin from "./loan3-imasin"
import Loan3iMasin2 from "./loan3-imasin2"
import Loan3iMasin3 from "./loan3-imasin3"
import Loan3iMasin4 from "./loan3-imasin4"
import Loan3iMasin5 from "./loan3-imasin5"
import Slayder6 from "./slayder6"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
import Footer from "./footer"
import FooterBottom from "./footerBottom"
function Loan3(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan3iMasin></Loan3iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan3iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Պայմաններ' && (
            <Loan3iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պահանջվող փաստաթղթերի ցանկ' && (            
            <Loan3iMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Loan3iMasin5></Loan3iMasin5>
        <Slayder6></Slayder6>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        <FooterBottom></FooterBottom>
        </>
    )
}
export default Loan3