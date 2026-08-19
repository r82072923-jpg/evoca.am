import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan11iMasin from "./loan11-imasin"
import Loan11iMasin2 from "./loan11-imasin2"
import Loan11iMasin3 from "./loan11-imasin3"
function Loan11(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan11iMasin></Loan11iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan11iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan11iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default Loan11