import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"
import FourUamGiftCardiMasin from "./4u.am-giftcard-imasin"
import FourUamGiftCardiMasin2 from "./4u.am-giftcard-imasin2"
import FourUamGiftCardiMasin3 from "./4u.am-giftcard-imasin3"
import FourUamGiftCardiMasin4 from "./4u.am-giftcard-imasin4"
import Slayder5 from "./slayder5"
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
            <FourUamGiftCardiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սպասարկման պայմանները' && (            
            <FourUamGiftCardiMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        <Slayder5></Slayder5>
        </>
    )
}
export default FourUamGiftCard