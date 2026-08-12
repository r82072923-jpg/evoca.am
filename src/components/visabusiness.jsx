import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import VisaBusinessiMasin from "./visabusiness-imasin"
import VisaBusinessiMasin2 from "./visabusiness-imasin2"
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
            <WilcoVisaInfiniteiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Օգտակար խորհուդներ' && (
            <WilcoVisaInfiniteiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Զգուշացում' && (
            <WilcoVisaInfiniteiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default VisaBusiness