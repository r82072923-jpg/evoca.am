import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"
import Loan19iMasin from "./loan19-imasin"
import Loan19iMasin2 from "./loan19-imasin2";
import Loan19iMasin3 from "./loan19-imasin3";
import Slayder6 from "./slayder6";
import OnlineEvMobileBanking from "./onlineevmobilebanking";
import Footer from "./footer";
function Loan19(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <Loan19iMasin></Loan19iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan19iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan19iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder6></Slayder6>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        <Footer></Footer>
        </>
    )
}
export default Loan19