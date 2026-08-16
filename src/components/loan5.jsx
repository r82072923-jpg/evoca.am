import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan5iMasin from "./loan5-imasin"
import Loan5iMasin2 from "./loan5-imasin2"
import Loan5iMasin3 from "./loan5-imasin3"
import Loan5iMasin4 from "./loan5-imasin4"
import Loan5iMasin5 from "./loan5-imasin5"
import Slayder6 from "./slayder6"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
function Loan5(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan5iMasin></Loan5iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan5iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan5iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պահանջվող փաստաթղթերի ցանկ' && (
            <Loan5iMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Loan5iMasin5></Loan5iMasin5>
        <Slayder6></Slayder6>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        </>
    )
}
export default Loan5