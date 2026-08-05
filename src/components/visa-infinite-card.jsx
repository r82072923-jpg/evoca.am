import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"
import VisaInfiniteCardiMasin from "./visa-infinite-card-imasin"
import VisaInfiniteCardiMasin2 from "./visa-infinite-card-imasin2";
import VisaInfiniteCardiMasin3 from "./visa-infinite-card-imasin3";
function VisaInfiniteCard(){
    const [activeTab, setActiveTab] = useState('Քարտի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <VisaInfiniteCardiMasin></VisaInfiniteCardiMasin>
        <div>
          {activeTab === 'Քարտի մասին' && (
            <VisaInfiniteCardiMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'Սահմանաչափի տրամադրման պայմանները' && (
            <VisaInfiniteCardiMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}

          {activeTab === 'ՓՄՁ վարկի օնլայն հայտ' && (
            <BusinessLoan6iMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}

          {activeTab === 'Պահանջվող փաստաթղթեր' && (
            <BusinessLoan6iMasin5 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default VisaInfiniteCard