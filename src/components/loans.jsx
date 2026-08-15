import Header from "./header"
import TopHeader from "./topHeader"
import LoansiMasin from "./loans-imasin"
import LoansiTopHeader from "./loans-itopHeader"
import Footer from "./footer"
import FooterBottom from "./footerBottom"
function Loans(){
    return(
        <>
        <Header></Header>
        <TopHeader></TopHeader>
        <LoansiTopHeader></LoansiTopHeader>
        <LoansiMasin></LoansiMasin>
        <Footer></Footer>
        <FooterBottom></FooterBottom>
        </>
    )
}
export default Loans