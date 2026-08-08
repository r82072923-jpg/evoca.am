import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import VisaVisioniMasin from "./visavision-imasin"
import VisaVisioniMasin2 from "./visavision-imasin2"
import VisaVisioniMasin3 from "./visavision-imasin3"
import Slayder5 from "./slayder5"
import OnlineEvMobileBanking from "./onlineevmobilebanking";
import Footer from "./footer"
function VisaVision(){
    const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <VisaVisioniMasin></VisaVisioniMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <VisaVisioniMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Visa Vision քարտի սակագներ' && (
            <VisaVisioniMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder5></Slayder5>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        </>
    )
}
export default  VisaVision