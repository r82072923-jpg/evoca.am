import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan6iMasin from "./loan6-imasin"
import Loan6iMasin2 from "./loan6-imasin2"
import Loan6iMasin3 from "./loan6-imasin3"
import Loan6iMasin4 from "./loan6-imasin4"
import Loan6iMasin5 from "./loan6-imasin5"
function Loan6(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan6iMasin></Loan6iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan6iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan6iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Ապառիկ համագործակցության հայտ' && (
            <Loan6iMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Գործընկերների ցանկ' && (
            <Loan6iMasin5 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default Loan6