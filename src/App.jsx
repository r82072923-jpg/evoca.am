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
    </Routes>
    </>
  )
}

export default App