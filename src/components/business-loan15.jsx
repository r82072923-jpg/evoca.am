import { useState } from "react"
import Header from "./header"
import TopHeader2 from "./topHeader2"
import BusinessLoan15iMasin from "./business-loan15-imasin"
import BusinessLoan15iMasin2 from "./business-loan15-imasin2"
function BusinessLoan15(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader2></TopHeader2>
        <BusinessLoan15iMasin></BusinessLoan15iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <BusinessLoan15iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <BusinessLoan2iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default BusinessLoan15