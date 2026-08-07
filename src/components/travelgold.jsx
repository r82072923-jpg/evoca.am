import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"
import TravelGoldiMasin from "./travelgold-imasin"
import TravelGoldiMasin2 from "./travelgold-imasin2"
function TravelGold(){
    const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <TravelGoldiMasin></TravelGoldiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <TravelGoldiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {/* {activeTab === 'Սակագներ և դրույթներ' && (
            <VisaGoldiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )} */}
        </div>
        </>
    )
}
export default TravelGold