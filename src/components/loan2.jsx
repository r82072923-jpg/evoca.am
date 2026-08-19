import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan2iMasin from "./loan2-imasin"
import Loan2iMasin2 from "./loan2-imasin2"
import Loan2iMasin3 from "./loan2-imasin3"
import Loan2iMasin4 from "./loan2-imasin4"
import Loan2iMasin5 from "./loan2-imasin5"
import Loan2iMasin6 from "./loan2-imasin6"
import Slayder6 from "./slayder6"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
import Footer from "./footer"
import FooterBottom from "./footerBottom"
function Loan2(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan2iMasin></Loan2iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan2iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Պայմաններ' && (
            <Loan2iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Գործընկեր ավտոսրահներ' && (
            <Loan2iMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պահանջվող փաստաթղթերի ցանկ' && (            
            <Loan2iMasin5 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Loan2iMasin6></Loan2iMasin6>
        <Slayder6></Slayder6>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        <FooterBottom></FooterBottom>
        </>
    )
}
export default Loan2