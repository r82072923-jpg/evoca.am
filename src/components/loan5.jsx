import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan5iMasin from "./loan5-imasin"
import Loan5iMasin2 from "./loan5-imasin2"
import Loan5iMasin3 from "./loan5-imasin3"
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
          {activeTab === 'Պահանջող փաստաթղթերի ցանկ' && (
            <Loan4iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default Loan5