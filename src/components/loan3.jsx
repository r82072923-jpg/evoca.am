import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan3iMasin from "./loan3-imasin"
import Loan3iMasin2 from "./loan3-imasin2"
import Loan3iMasin3 from "./loan3-imasin3"
function Loan3(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan3iMasin></Loan3iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan3iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Պայմաններ' && (
            <Loan3iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պահանջվող փաստաթղթերի ցանկ' && (            
            <Loan2iMasin5 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default Loan3