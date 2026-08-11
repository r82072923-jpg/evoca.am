import { useState } from "react"
import Header from "./header"
import TopHeader from "./topHeader"
import MyLeriMasin from "./myler-imasin"
import MyLeriMasin2 from "./myler-imasin2"
function MyLer(){
    const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <MyLeriMasin></MyLeriMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <MyLeriMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
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
export default MyLer