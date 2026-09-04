import Header from "./components/header"
import TopHeader from "./components/topHeader"
import Slayder1 from "./components/slayder1"
import Biometrik from "./components/biometrik"
import Bajinner from "./components/bajinner"
import Cards from "./components/cards"
import VarkiHashvich from "./components/varkihashvich"
import AvandiHashvich from "./components/avandihashvich"
import OnlineEvMobileBanking from "./components/onlineevmobilebanking"
import Gortynkerner from "./components/gortynkerner"
import VerjinNorutyunner from "./components/verjinnorutyunner"
import Kanxik from "./components/kanxik"
import Ankanxik from "./components/ankanxik"
import VoskuPoxarjeq from "./components/voskupoxarjeq"
import RubluKanxikMutq from "./components/rublukanxikmutq"
import Kartiqner from "./components/kartiqner"
import Footer from "./components/footer"
import FooterBottom from "./components/footerBottom"
import Business from "./components/business"
import AkntartayinVjarumner from "./components/akntartayinvjarumner"
import MerMasin from "./components/mermasin"
import News from "./components/news"
import Blog from "./components/blog"
import Career from "./components/career"
import BusinessLoan6 from "./components/business-loan6"
import VisaInfiniteCard from "./components/visa-infinite-card"
import MasterCardGold from "./components/mastercard-gold."
import Salary from "./components/salary"
import VisaGold from "./components/visa-gold"
import TravelGold from "./components/travelgold"
import VisaVision from "./components/visavision"
import UnionPayGold from "./components/unionpay-gold"
import BiometricNuynakanacum from "./components/biometrik-nuynakanacum"
import VisaPlatinum from "./components/visaplatinum"
import FourUamGiftCard from "./components/4u.am-giftcard"
import GiftCard from "./components/giftcard"
import ArcaClassic from "./components/arcaclassic"
import DalmaGiftCard from "./components/dalma-giftcard"
import RioGiftCard from "./components/rio-giftcard"
import WorldDigital from "./components/world-digital"
import DigitalGiftCard from "./components/digital-giftcard"
import UnionPayBusinessPlatinum from "./components/unionpay-businessplatinum"
import MyLer from "./components/myler"
import WilcoVisaInfinite from "./components/wilco-visainfinite"
import VisaBusiness from "./components/visabusiness"
import VisaDigital from "./components/visadigital"
import VisaClassic from "./components/visaclassic"
import MasterCardStandard from "./components/mastercard-standard"
import Customer from "./components/customer"
import Loans from "./components/loans.jsx"
import VarkayinPatmutyun from "./components/varkayinpatmutyun.jsx"
import KarevorTexakatvutyun from "./components/karevortexekatvutyun.jsx"
import Loan1 from "./components/loan1.jsx"
import Loan2 from "./components/loan2.jsx"
import Loan3 from "./components/loan3.jsx"
import Loan4 from "./components/loan4.jsx"
import Loan5 from "./components/loan5.jsx"
import Loan6 from "./components/loan6.jsx"
import Loan7 from "./components/loan7.jsx"
import Loan8 from "./components/loan8.jsx"
import Loan9 from "./components/loan9.jsx"
import Loan10 from "./components/loan10.jsx"
import Loan11 from "./components/loan11.jsx"
import Loan12 from "./components/loan12.jsx"
import Loan13 from "./components/loan13.jsx"
import Loan14 from "./components/loan14.jsx"
import Loan15 from "./components/loan15.jsx"
import Loan16 from "./components/loan16.jsx"
import Cards2 from "./components/cards2.jsx"
import Avandner from "./components/avandner.jsx"
import DasakanAvand from "./components/dasakanavand.jsx"
import MankakanAvand from "./components/mankakanavand.jsx"
import KarjHeraxosahamar from "./components/karjheraxosahamar.jsx"
import OnlineAvand from "./components/onlineavand.jsx"
import Mutq from "./components/mutq.jsx"
import LiveQartez from "./components/qartez.jsx"
import Hashivner from "./components/hashivner.jsx"
import Poxancumner from "./components/poxancumner.jsx"
import Arjetxter from "./components/arjetxter.jsx"
import BusinessLoan13 from "./components/business-loan13.jsx"
import BusinessLoan12 from "./components/business-loan12.jsx"
import BusinessLoan8 from "./components/business-loan8.jsx"
import BusinessLoan3 from "./components/business-loan3.jsx"
import BusinessLoan4 from "./components/business-loan4.jsx"
import BusinessLoan2 from "./components/business-loan2.jsx"
import BusinessLoan15 from "./components/business-loan15.jsx"
import { useState } from "react"
import { Routes, Route } from "react-router-dom";

function Home(){
  const [activeTab, setActiveTab] = useState('Կանխիկ');
  return(
    <>
      <Header></Header>
      <TopHeader></TopHeader>
      <Slayder1></Slayder1>
      <Biometrik></Biometrik>
      <Bajinner></Bajinner>
      <Cards></Cards>
      <AvandiHashvich></AvandiHashvich>
      <OnlineEvMobileBanking></OnlineEvMobileBanking>
      <Gortynkerner></Gortynkerner>
      <VerjinNorutyunner></VerjinNorutyunner>
      <div>
        {activeTab === 'Կանխիկ' && (
          <Kanxik activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
        {activeTab === 'Անկանխիկ' && (
          <Ankanxik activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
        {activeTab === 'Ոսկու փոխարժեք' && (
          <VoskuPoxarjeq activeTab={activeTab} setActiveTab={setActiveTab}/>
        )}
        {activeTab === 'Ռուբլու կանխիկ մուտք' && (
          <RubluKanxikMutq activeTab={activeTab} setActiveTab={setActiveTab}/>
        )}
      </div>
      <Kartiqner></Kartiqner>
      <Footer></Footer>
      <FooterBottom></FooterBottom>
    </>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/business" element={<Business/>}></Route>
        <Route path="/payments" element={<AkntartayinVjarumner/>}></Route>
        <Route path="/about" element={<MerMasin/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/career" element={<Career/>}></Route>
        <Route path="/business-loan6" element={<BusinessLoan6/>}></Route>
        <Route path="/visa-infinite" element={<VisaInfiniteCard/>}></Route>
        <Route path="/mastercard-gold" element={<MasterCardGold/>}></Route>
        <Route path="/visa-gold" element={<VisaGold/>}></Route>
        <Route path="/salary" element={<Salary/>}></Route>
        <Route path="/travel-gold" element={<TravelGold/>}></Route>
        <Route path="/visa-vision" element={<VisaVision/>}></Route>
        <Route path="/unionpay-gold" element={<UnionPayGold/>}></Route>
        <Route path="/biometrik-nuynakanacum" element={<BiometricNuynakanacum/>}></Route>
        <Route path="/visa-platinum" element={<VisaPlatinum/>}></Route>
        <Route path="/4u.am-gift-card" element={<FourUamGiftCard/>}></Route>
        <Route path="/gift-card" element={<GiftCard/>}></Route>
        <Route path="/arca-classic" element={<ArcaClassic/>}></Route>
        <Route path="/dalma-gift-card" element={<DalmaGiftCard/>}></Route>
        <Route path="/rio-gift-card" element={<RioGiftCard/>}></Route>
        <Route path="/world-digital" element={<WorldDigital/>}></Route>
        <Route path="/digital-gift-card" element={<DigitalGiftCard/>}></Route>
        <Route path="/business-platinum" element={<UnionPayBusinessPlatinum/>}></Route>
        <Route path="/myler-gift-card" element={<MyLer/>}></Route>
        <Route path="/wilco-visa-infinite" element={<WilcoVisaInfinite/>}></Route>
        <Route path="/visa-business" element={<VisaBusiness/>}></Route>
        <Route path="/visa-digital" element={<VisaDigital/>}></Route>
        <Route path="/visa-classic" element={<VisaClassic/>}></Route>
        <Route path="/mastercard-standard" element={<MasterCardStandard/>}></Route>
        <Route path="/customer" element={<Customer/>}></Route>
        <Route path="/loans" element={<Loans/>}></Route>
        <Route path="/credit-history" element={<VarkayinPatmutyun/>}></Route>
        <Route path="/important-information" element={<KarevorTexakatvutyun />}></Route>
        <Route path="/loan1" element={<Loan1/>}></Route>
        <Route path="/loan2" element={<Loan2/>}></Route>
        <Route path="/loan3" element={<Loan3/>}></Route>
        <Route path="/loan4" element={<Loan4/>}></Route>
        <Route path="/loan5" element={<Loan5/>}></Route>
        <Route path="/loan6" element={<Loan6/>}></Route>
        <Route path="/loan7" element={<Loan7/>}></Route>
        <Route path="/loan8" element={<Loan8/>}></Route>
        <Route path="/loan9" element={<Loan9/>}></Route>
        <Route path="/loan10" element={<Loan10/>}></Route>
        <Route path="/loan11" element={<Loan11/>}></Route>
        <Route path="/loan12" element={<Loan12/>}></Route>
        <Route path="/loan13" element={<Loan13/>}></Route>
        <Route path="/loan14" element={<Loan14/>}></Route>
        <Route path="/loan15" element={<Loan15/>}></Route>
        <Route path="/loan16" element={<Loan16/>}></Route>
        <Route path="/cards" element={<Cards2/>}></Route>
        <Route path="/deposits" element={<Avandner/>}></Route>
        <Route path="/deposits/classic" element={<DasakanAvand/>}></Route>
        <Route path="/deposits/kids" element={<MankakanAvand/>}></Route>
        <Route path="/deposits/online" element={<OnlineAvand/>}></Route>
        <Route path="/news/banking/short-phone-number" element={<KarjHeraxosahamar/>}></Route>
        <Route path="/mutq" element={<Mutq/>}></Route>
        <Route path="/qartez" element={<LiveQartez/>}></Route>
        <Route path="/acounts" element={<Hashivner/>}></Route>
        <Route path="/transfers" element={<Poxancumner/>}></Route>
        <Route path="/securuties" element={<Arjetxter/>}></Route>
        <Route path="/business-loan13" element={<BusinessLoan13/>}></Route>
        <Route path="/business-loan12" element={<BusinessLoan12/>}></Route>
        <Route path="/business-loan8" element={<BusinessLoan8/>}></Route>
        <Route path="/business-loan3" element={<BusinessLoan3/>}></Route>
        <Route path="/business-loan4" element={<BusinessLoan4/>}></Route>
        <Route path="/business-loan2" element={<BusinessLoan2/>}></Route>
        <Route path="/business-loan15" element={<BusinessLoan15/>}></Route>
      </Routes>
    </>
  )
}

export default App