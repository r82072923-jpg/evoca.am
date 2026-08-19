import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan13iMasin from "./loan13-imasin"
import Loan13iMasin2 from "./loan13-imasin2"
import Loan13iMasin3 from "./loan13-imasin3"
import Loan13iMasin4 from "./loan13-imasin4"
function Loan13(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan13iMasin></Loan13iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan13iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan13iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պահանջվող փաստաթղթերի ցանկ' && (
            <Loan13iMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default Loan13