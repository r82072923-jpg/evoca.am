import Header from "./header"
import TopHeader from "./topHeader"
import LoansiTopHeader from "./loans-itopHeader"
import Loan9iMasin from "./loan9-imasin"
import Loan9iMasin2 from "./loan9-imasin2"
function Loan9(){
    const [activeTab, setActiveTab] = useState('Վարկի մասին');
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <Loan9iMasin></Loan9iMasin>
        <div>
          {activeTab === 'Վարկի մասին' && (
            <Loan8iMasin2 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պայմաններ' && (
            <Loan8iMasin3 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'Պահանջվող փաստաթղթերի ցանկ' && (
            <Loan8iMasin4 activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
        </>
    )
}
export default Loan9