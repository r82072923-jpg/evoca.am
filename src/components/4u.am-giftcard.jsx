import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"
import FourUamGiftCardiMasin from "./4u.am-giftcard-imasin"
import FourUamGiftCardiMasin2 from "./4u.am-giftcard-imasin2"
function FourUamGiftCard(){
        const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <FourUamGiftCardiMasin></FourUamGiftCardiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <FourUamGiftCardiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Տրամադրման պայմանները' && (
            <MasterCardGoldiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սպասարկման պայմանները' && (
            <MasterCardGoldiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default FourUamGiftCard