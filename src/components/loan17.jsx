import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import Loan17iMasin from "./loan17-imasin"
import Loan17iMasin2 from "./loan17-imasin2"
function Loan17(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <Loan17iMasin></Loan17iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan17iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan16iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default Loan17