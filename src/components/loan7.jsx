import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan7iMasin from "./loan7-imasin"
import Loan7iMasin2 from "./loan7-imasin2"
import Loan7iMasin3 from "./loan7-imasin3"
import Loan7iMasin4 from "./loan7-imasin4"
function Loan7(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan7iMasin></Loan7iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan7iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan7iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Loan7iMasin4></Loan7iMasin4>
        </>
    )
}
export default Loan7