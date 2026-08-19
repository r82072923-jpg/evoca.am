import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"
import MankakanAvandiMasin from "./mankakanavand-imasin"
import MankakanAvandiMasin2 from "./mankakanavand-imasin2"
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
            <DasakanAvandiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default MankakanAvand