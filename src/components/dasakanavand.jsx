import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import DasakanAvandiMasin from "./dasakanavand-imasin"
import DasakanAvandiMasin2 from "./dasakanavand-imasin2"
import DasakanAvandiMasin3 from "./dasakanavand-imasin3"
function DasakanAvand(){
    const [activeTab, setActiveTab] = useState('Ավանդի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <DasakanAvandiMasin></DasakanAvandiMasin>
        <div>
          {activeTab === 'Ավանդի մասին' && (
            <DasakanAvandiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ և սակագներ' && (
            <DasakanAvandiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default DasakanAvand