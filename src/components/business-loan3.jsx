import { useState } from "react"
import Header from "./header"
import TopHeader2 from "./topHeader2"
import BusinessLoan3iMasin from "./business-loan3-imasin"
import BusinessLoan3iMasin2 from "./business-loan3-imasin2"
import BusinessLoan3iMasin3 from "./business-loan3-imasin3"
import Slayder4 from "./slayder4"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
function BusinessLoan3(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader2></TopHeader2>
        <BusinessLoan3iMasin></BusinessLoan3iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <BusinessLoan3iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Պայմաններ' && (
            <BusinessLoan3iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder4></Slayder4>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        </>
    )
}
export default BusinessLoan3