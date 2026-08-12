import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import VisaBusinessiMasin from "./visabusiness-imasin"
import VisaBusinessiMasin2 from "./visabusiness-imasin2"
import VisaBusinessiMasin3 from "./visabusiness-imasin3"
import VisaBusinessiMasin4 from "./visabusiness-imasin4"
import VisaBusinessiMasin5 from "./visabusiness-imasin5"
import VisaBusinessiMasin6 from "./visabusiness-imasin6"
function VisaBusiness(){
    const [activeTab,setActiveTab]=useState("Քարտի մասին")
    return(
        <>
        <Header></Header>
        <TopHeader> </TopHeader>
        <VisaBusinessiMasin></VisaBusinessiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <VisaBusinessiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սակագներ և դրույթներ' && (
            <VisaBusinessiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Օգտակար խորհուրդներ' && (
            <VisaBusinessiMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Զգուշացում' && (
            <VisaBusinessiMasin5 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <VisaBusinessiMasin6></VisaBusinessiMasin6>
        </>
    )
}
export default VisaBusiness