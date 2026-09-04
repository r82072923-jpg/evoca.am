import { useState } from "react"
import Header from "./header"
import TopHeader2 from "./topHeader2"
import BusinessLoan8iMasin from "./business-loan8-imasin"
import BusinessLoan8iMasin2 from "./business-loan8-imasin2"
function BusinessLoan8(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader2></TopHeader2>
        <BusinessLoan8iMasin></BusinessLoan8iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <BusinessLoan8iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Պայմաններ և սակագներ' && (
            <BusinessLoan13iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default BusinessLoan8