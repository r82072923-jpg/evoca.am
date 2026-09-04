import { useState } from "react"
import Header from "./header"
import TopHeader2 from "./topHeader2"
import BusinessLoan4iMasin from "./business-loan4-imasin"
import BusinessLoan4iMasin2 from "./business-loan4-imasin2"
import Slayder4 from "./slayder4"
function BusinessLoan4(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader2></TopHeader2>
        <BusinessLoan4iMasin></BusinessLoan4iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <BusinessLoan4iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder4></Slayder4>
        </>
    )
}
export default BusinessLoan4