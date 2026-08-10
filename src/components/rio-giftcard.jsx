import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import RioGiftCardiMasin from "./rio-giftcard-imasin"
import RioGiftCardiMasin2 from "./rio-giftcard-masin2"
function RioGiftCard(){
    const [activeTab,setActiveTab]=useState("Քարտի մասին")
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <RioGiftCardiMasin></RioGiftCardiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <RioGiftCardiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Տրամադրման պայմանները' && (
            <DalmaGiftCardiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սպասարկման պայմանները' && (            
            <FourUamGiftCardiMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default RioGiftCard