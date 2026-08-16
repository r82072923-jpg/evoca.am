import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"     
import LoansiTopHeader from "./loans-itopHeader";
import Loan4iMasin from "./loan4-imasin"
import Loan4iMasin2 from "./loan4-imasin2"
import Loan4iMasin3 from "./loan4-imasin3"
function Loan4(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return( 
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan4iMasin></Loan4iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan4iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Պայմաններ' && (
            <Loan4iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default Loan4