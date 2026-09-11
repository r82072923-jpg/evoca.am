import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"
import Loan20iMasin from "./loan20-imasin"
import Loan20iMasin2 from "./loan20-imasin2"
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
            <Loan19iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default Loan20