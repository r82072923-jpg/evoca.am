import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import BusinessLoan12iMasin from "./business-loan12-imasin"
import BusinessLoan12iMasin2 from "./business-loan12-imasin2"
import BusinessLoan13iMasin3 from "./business-loan13-imasin3"
import Slayder4 from "./slayder4"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
import Footer from "./footer"
function BusinessLoan12(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <BusinessLoan12iMasin></BusinessLoan12iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <BusinessLoan12iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Պայմաններ և սակագներ' && (
            <BusinessLoan13iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder4></Slayder4>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        </>
    )
}
export default BusinessLoan12