import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"
import Loan18iMasin from "./loan18-imasin"
import Loan18iMasin2 from "./loan18-imasin2"
import Loan18iMasin3 from "./loan18-imasin3"
function Loan18(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <Loan18iMasin></Loan18iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan18iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan18iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default Loan18