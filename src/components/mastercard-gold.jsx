import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import MasterCardGoldiMasin from "./mastercard-gold-imasin"
import MasterCardGoldiMasin2 from "./mastercard-gold-imasin2"
import MasterCardGoldiMasin3 from "./mastercard-gold-imasin3"
function MasterCardGold(){
    const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <MasterCardGoldiMasin></MasterCardGoldiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <MasterCardGoldiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սակագներ և դրույթներ' && (
            <MasterCardGoldiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default MasterCardGold