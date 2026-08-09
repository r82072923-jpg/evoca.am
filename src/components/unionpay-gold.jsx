import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import UnionPayGoldiMasin from "./unionpay-gold-imasin"
import UnionPayGoldiMasin2 from "./unionpay-gold-imasin2"
import UnionPayGoldiMasin3 from "./unionpay-gold-iamsin3"
import Slayder5 from "./slayder5";
import OnlineEvMobileBanking from "./onlineevmobilebanking"

function UnionPayGold(){
    const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <UnionPayGoldiMasin></UnionPayGoldiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <UnionPayGoldiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          n
          {activeTab === 'Սակագներ և դրույթներ' && (
            <UnionPayGoldiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder5></Slayder5>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        </>
    )
}
export default UnionPayGold