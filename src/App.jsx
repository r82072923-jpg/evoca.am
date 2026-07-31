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
import { useState } from "react"
function App() {
const [activeTab, setActiveTab] = useState('Կանխիկ');
  return (
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
      {/* Ընտրում ենք, թե որ բաղադրիչը ցույց տանք՝ կախված activeTab-ից */}
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
    </>
  )
}

export default App