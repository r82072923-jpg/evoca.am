import { useState } from "react";
import Header from "./header"
import TopHeader from "./topHeader"
import VisaInfiniteCardiMasin from "./visa-infinite-card-imasin"
import VisaInfiniteCardiMasin2 from "./visa-infinite-card-imasin2";
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
          
          {activeTab === 'Պայմաններ և սակագներ' && (
            <BusinessLoan6iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
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