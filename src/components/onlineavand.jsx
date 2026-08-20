import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import OnlineAvandiMasin from "./onlineavand-imasin"
import OnlineAvandiMasin2 from "./onlineavand-imasin2"
import DasakanAvandiMasin3 from "./dasakanavand-imasin3"
import Slayder7 from "./slayder7"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
import Footer from "./footer"
function OnlineAvand(){
    const [activeTab, setActiveTab] = useState('Ավանդի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <OnlineAvandiMasin></OnlineAvandiMasin>
        <div>
          {activeTab === 'Ավանդի մասին' && (
            <OnlineAvandiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ և սակագներ' && (
            <DasakanAvandiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder7></Slayder7>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        </>
    )
}
export default OnlineAvand