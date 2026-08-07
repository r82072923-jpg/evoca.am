import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import VisaGoldiMasin from "./visa-gold-imasin"
import VisaGoldiMasin2 from "./visa-gold-imasin2"
import VisaGoldiMasin3 from "./visa-gold-imasin3"
import VisaGoldiMasin4 from "./visa-gold-imasin4"
import Slayder5 from "./slayder5"
function VisaGold(){
    const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <VisaGoldiMasin></VisaGoldiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <VisaGoldiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սակագներ և դրույթներ' && (
            <VisaGoldiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <VisaGoldiMasin4></VisaGoldiMasin4>
        <Slayder5></Slayder5>
        </>
    )
}
export default VisaGold