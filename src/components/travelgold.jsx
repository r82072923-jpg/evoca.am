import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"
import TravelGoldiMasin from "./travelgold-imasin"
import TravelGoldiMasin2 from "./travelgold-imasin2"
import TravelGoldiMasin3 from "./travelgold-imasin3"
import Slayder5 from "./slayder5";
import OnlineEvMobileBanking from "./onlineevmobilebanking";
import Footer from "./footer";
function TravelGold(){
    const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <TravelGoldiMasin></TravelGoldiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <TravelGoldiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սակագներ և դրույթներ' && (
            <TravelGoldiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder5></Slayder5>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        </>
    )
}
export default TravelGold