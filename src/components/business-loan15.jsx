import { useState } from "react"
import Header from "./header"
import TopHeader2 from "./topHeader2"
import BusinessLoan15iMasin from "./business-loan15-imasin"
import BusinessLoan15iMasin2 from "./business-loan15-imasin2"
import BusinessLoan15iMasin3 from "./business-loan15-imasin3"
import BusinessLoan15iMasin4 from "./business-loan15-imasin4"
import Slayder4 from "./slayder4"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
import Footer from "./footer"
function BusinessLoan15(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader2></TopHeader2>
        <BusinessLoan15iMasin></BusinessLoan15iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <BusinessLoan15iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ և սակագներ' && (
            <BusinessLoan15iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պահանջվող փաստաթղթեր' && (
            <BusinessLoan15iMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder4></Slayder4>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        </>
    )
}
export default BusinessLoan15