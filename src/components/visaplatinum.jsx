import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import VisaPlatinumiMasin from "./visaplatinum-imasin"
import VisaPlatinumiMasin2 from "./visaplatinum-imasin2"
function VisaPlatinum(){
    const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <VisaPlatinumiMasin></VisaPlatinumiMasin>
        <div>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <VisaPlatinumiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սակագներ և դրույթներ' && (
            <VisaInfiniteCardiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </div>
        </>
    )
}
export default VisaPlatinum