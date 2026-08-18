import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan8iMasin from "./loan8-imasin"
import Loan8iMasin2 from "./loan8-imasin2"
import Loan8iMasin3 from "./loan8-imasin3"
import Loan8iMasin4 from "./loan8-imasin4"
import Loan8iMasin5 from "./loan8-imasin5"
function Loan8(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan8iMasin></Loan8iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan8iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan8iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պահանջվող փաստաթղթերի ցանկ' && (
            <Loan8iMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Loan8iMasin5></Loan8iMasin5>
        </>
    )
}
export default Loan8