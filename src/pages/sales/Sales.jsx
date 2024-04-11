import Header from "../../components/header/Header"
import SalesManager from "../../components/sales-manager/SalesManager";
import Footer from "../../components/footer/Footer";import Arrow from "../../components/arrow/Arrow";
;

function Sales(){
    return(
        <div>
            <Header />
            <SalesManager />
            <Footer />
            <Arrow />
        </div>
    )
}

export default Sales;