import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"     
import LoansiTopHeader from "./loans-itopHeader";
import Loan4iMasin from "./loan4-imasin"
import Loan4iMasin2 from "./loan4-imasin2"
import Loan4iMasin3 from "./loan4-imasin3"
import Slayder6 from "./slayder6";
import OnlineEvMobileBanking from "./onlineevmobilebanking";
import Footer from "./footer";
import FooterBottom from "./footerBottom";
function Loan4(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return( 
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan4iMasin></Loan4iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan4iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Պայմաններ' && (
            <Loan4iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder6></Slayder6>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        <FooterBottom></FooterBottom>
        </>
    )
}
export default Loan4