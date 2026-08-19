import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan16iMasin from "./loan16-imasin"
import Loan16iMasin2 from "./loan16-imasin2"
import Loan16iMasin3 from "./loan16-imasin3"
function Loan16(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');

    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan16iMasin></Loan16iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan16iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan16iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default Loan16