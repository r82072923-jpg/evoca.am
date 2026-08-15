import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan1iMasin from "./loan1-imasin"
import Loan1iMasin2 from "./loan1-imasin2"
import Loan1iMasin3 from "./loan1-imasin3"
import Loan1iMasin4 from "./loan1-imasin4"
import Loan1iMasin5 from "./loan1-imasin5"
import Slayder6 from "./slayder6"
function Loan1(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');

    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan1iMasin></Loan1iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan1iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Պայմաններ' && (
            <Loan1iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Պահանջվող փաստաթղթերի ցանկ' && (            
            <Loan1iMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Loan1iMasin5></Loan1iMasin5>
        <Slayder6></Slayder6>
        </>
    )
}
export default Loan1