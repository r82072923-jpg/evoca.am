import { useState } from "react"
import Header from "./header"
import TopHeader2 from "./topHeader2"
import BusinessLoan6iMasin from "./business-loan6-imasin"
import BusinessLoan6iMasin2 from "./business-loan6-imasin2"
import BusinessLoan6iMasin3 from "./business-loan6-imasin3"
import BusinessLoan6iMasin4 from "./business-loan6-imasin4"
function BusinessLoan6(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    const [loanData, setLoanData] = useState(null);
    return(
        <>
        <Header></Header>
        <TopHeader2></TopHeader2>
        <BusinessLoan6iMasin></BusinessLoan6iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <BusinessLoan6iMasin2 loanData={loanData} activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Պայմաններ և սակագներ' && (
            <BusinessLoan6iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}

          {activeTab === 'ՓՄՁ վարկի օնլայն հայտ' && (
            <BusinessLoan6iMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}

          {activeTab === 'Պահանջվող փաստաթղթեր' && (
            <div className="py-10 text-center text-gray-500">Փաստաթղթերի ցանկը...</div>
          )}
        </div>
        </>
    )
}
export default BusinessLoan6