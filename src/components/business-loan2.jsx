import { useState } from "react";
import Header from "./header"
import TopHeader2 from "./topHeader2"
import BusinessLoan2iMasin from "./business-loan2-imasin"
import BusinessLoan2iMasin2 from "./business-loan2-imasin2"
import BusinessLoan2iMasin3 from "./business-loan2-imasin3"
function BusinessLoan2(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader2></TopHeader2>
        <BusinessLoan2iMasin></BusinessLoan2iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <BusinessLoan2iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <BusinessLoan2iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default BusinessLoan2