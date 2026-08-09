import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import VisaPlatinumiMasin from "./visaplatinum-imasin"
import VisaPlatinumiMasin2 from "./visaplatinum-imasin2"
import VisaPlatinumiMasin3 from "./visaplatinum-imasin3"
import Slayder5 from "./slayder5"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
function VisaPlatinum(){
    const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <VisaPlatinumiMasin></VisaPlatinumiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <VisaPlatinumiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սակագներ և դրույթներ' && (
            <VisaPlatinumiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder5></Slayder5>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        </>
    )
}
export default VisaPlatinum