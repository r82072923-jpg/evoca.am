import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"
import MankakanAvandiMasin from "./mankakanavand-imasin"
import MankakanAvandiMasin2 from "./mankakanavand-imasin2"
import MankakanAvandiMasin3 from "./mankakanavand-imasin3"
import Slayder7 from "./slayder7";
function MankakanAvand(){
    const [activeTab, setActiveTab] = useState('Ավանդի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <MankakanAvandiMasin></MankakanAvandiMasin>
        <div>
          {activeTab === 'Ավանդի մասին' && (
            <MankakanAvandiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ և սակագներ' && (
            <MankakanAvandiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder7></Slayder7>
        </>
    )
}
export default MankakanAvand