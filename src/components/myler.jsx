import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import MyLeriMasin from "./myler-imasin"
import MyLeriMasin2 from "./myler-imasin2"
import MyLeriMasin3 from "./myler-imasin3"
import FourUamGiftCardiMasin4 from "./4u.am-giftcard-imasin4"
import Slayder5 from "./slayder5"
import OnlineEvMobileBanking from "./onlineevmobilebanking"
import Footer from "./footer"
function MyLer(){
    const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <MyLeriMasin></MyLeriMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <MyLeriMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Տրամադրման պայմանները' && (
            <MyLeriMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սպասարկման պայմանները' && (            
            <FourUamGiftCardiMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder5></Slayder5>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        </>
    )
}
export default MyLer