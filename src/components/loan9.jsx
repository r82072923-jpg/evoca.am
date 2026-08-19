import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan9iMasin from "./loan9-imasin"
import Loan9iMasin2 from "./loan9-imasin2"
import Loan9iMasin3 from "./loan9-imasin3"
function Loan9(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan9iMasin></Loan9iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan9iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan9iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default Loan9