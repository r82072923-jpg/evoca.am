import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import Loan17iMasin from "./loan17-imasin"
import Loan17iMasin2 from "./loan17-imasin2"
import Loan17iMasin3 from "./loan17-imasin3"
import Slayder6 from "./slayder6"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
import Footer from "./footer"
import FooterBottom from "./footerBottom"
function Loan17(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <Loan17iMasin></Loan17iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan17iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan17iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder6></Slayder6>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        <FooterBottom></FooterBottom>
        </>
    )
}
export default Loan17