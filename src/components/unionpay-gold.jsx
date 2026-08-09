import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import UnionPayGoldiMasin from "./unionpay-gold-imasin"
import UnionPayGoldiMasin2 from "./unionpay-gold-imasin2"
import UnionPayGoldiMasin3 from "./unionpay-gold-iamsin3"
function UnionPayGold(){
    const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <UnionPayGoldiMasin></UnionPayGoldiMasin>
        <div>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <UnionPayGoldiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          n
          {activeTab === 'Սակագներ և դրույթներ' && (
            <UnionPayGoldiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </div>
        </>
    )
}
export default UnionPayGold