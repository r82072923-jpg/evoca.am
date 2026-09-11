import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"
import Loan20iMasin from "./loan20-imasin"
import Loan20iMasin2 from "./loan20-imasin2"
import Loan20iMasin3 from "./loan20-imasin3"
import Loan20iMasin4 from "./loan20-imasin4"
import Slayder6 from "./slayder6";
import OnlineEvMobileBanking from "./onlineevmobilebanking";
function Loan20(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <Loan20iMasin></Loan20iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan20iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan20iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Loan20iMasin4></Loan20iMasin4>
        <Slayder6></Slayder6>
        <OnlineEvMobileBanking></OnlineEvMobileBanking>
        </>
    )
}
export default Loan20