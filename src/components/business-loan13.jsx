import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import BusinessLoan13iMasin from "./business-loan13-imasin"
import BusinessLoan13iMasin2 from "./business-loan13-imasin2"
function BusinessLoan13(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <BusinessLoan13iMasin></BusinessLoan13iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <BusinessLoan13iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Պայմաններ և սակագներ' && (
            <BusinessLoan6iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default BusinessLoan13