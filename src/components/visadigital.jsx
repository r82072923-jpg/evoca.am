import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import VisaDigitaliMasin from "./visadigital-imasin"
import VisaDigitaliMasin2 from "./visadigital-imasin2"
import VisaDigitaliMasin3 from "./visadigital-imasin3"
function VisaDigital(){
    const [activeTab,setActiveTab]=useState("Քարտի մասին")
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <VisaDigitaliMasin></VisaDigitaliMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <VisaDigitaliMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Visa Digital քարտի սակագներ' && (
            <VisaDigitaliMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default VisaDigital