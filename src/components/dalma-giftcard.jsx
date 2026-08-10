import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import DalmaGiftCardiMasin from "./dalma-giftcard-imasin"
import DalmaGiftCardiMasin2 from "./dalma-giftcard-imasin2"
function DalmaGiftCard(){
    const [activeTab,setActiveTab]=useState("Քարտի մասին")
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <DalmaGiftCardiMasin></DalmaGiftCardiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <DalmaGiftCardiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Տրամադրման պայմանները' && (
            <FourUamGiftCardiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սպասարկման պայմանները' && (            
            <FourUamGiftCardiMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default DalmaGiftCard