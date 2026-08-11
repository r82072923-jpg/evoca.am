import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import UnionPayBusinessPlatinumiMasin from "./unionpay-businessplatinum-imasin"
import UnionPayBusinessPlatinumiMasin2 from "./unionpay-businessplatinum-imasin2"
import UnionPayBusinessPlatinumiMasin3 from "./unionpay-businessplatinum-imasin3"
import Slayder5 from "./slayder5"
function UnionPayBusinessPlatinum(){
    const [activeTab,setActiveTab]=useState("Քարտի մասին")
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <UnionPayBusinessPlatinumiMasin></UnionPayBusinessPlatinumiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <UnionPayBusinessPlatinumiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սակագներ և դրույթներ' && (
            <UnionPayBusinessPlatinumiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder5></Slayder5>
        </>
    )
}
export default UnionPayBusinessPlatinum