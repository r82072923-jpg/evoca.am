import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import OnlineAvandiMasin from "./onlineavand-imasin"
import OnlineAvandiMasin2 from "./onlineavand-imasin2"
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
            <MankakanAvandiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default OnlineAvand