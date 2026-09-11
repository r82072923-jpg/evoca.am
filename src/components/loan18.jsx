import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"
import Loan18iMasin from "./loan18-imasin"
import Loan18iMasin2 from "./loan18-imasin2"
import Loan18iMasin3 from "./loan18-imasin3"
import Loan18iMasin4 from "./loan18-imasin4"
import Loan18iMasin5 from "./loan18-imasin5"
import Slayder6 from "./slayder6";
import Footer from "./footer";
import FooterBottom from "./footerBottom";
function Loan18(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <Loan18iMasin></Loan18iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan18iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan18iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պահանջվող փաստաթղթերի ցանկ' && (
            <Loan18iMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Loan18iMasin5></Loan18iMasin5>
        <Slayder6></Slayder6>
        <Footer></Footer>
        <FooterBottom></FooterBottom>
        </>
    )
}
export default Loan18