import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"
import VisaInfiniteCardiMasin from "./visa-infinite-card-imasin"
import VisaInfiniteCardiMasin2 from "./visa-infinite-card-imasin2";
import VisaInfiniteCardiMasin3 from "./visa-infinite-card-imasin3";
import VisaInfiniteCardiMasin4 from "./visa-infinite-card-imasin4";
import VisaInfiniteCardiMasin5 from "./visa-infinite-card-imasin5";
import Slayder5 from "./slayder5";
import OnlineEvMobileBanking from "./onlineevmobilebanking";
import Footer from "./footer";
import FooterBottom from "./footerBottom";
function VisaInfiniteCard(){
    const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <VisaInfiniteCardiMasin></VisaInfiniteCardiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <VisaInfiniteCardiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սահմանաչափի տրամադրման պայմանները' && (
            <VisaInfiniteCardiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}

          {activeTab === 'Զգուշացում' && (
            <VisaInfiniteCardiMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <VisaInfiniteCardiMasin5></VisaInfiniteCardiMasin5>
        <Slayder5></Slayder5>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        <FooterBottom></FooterBottom>
        </>
    )
}
export default VisaInfiniteCard