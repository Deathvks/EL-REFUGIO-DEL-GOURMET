import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MenuBody from "../../components/menu-body/MenuBody";
import Arrow from "../../components/arrow/Arrow";
import MenuImage from "../../components/menu-image/MenuImage";

function Menu(){
    return (
        <div>
            <Header />
            <MenuBody />
            <MenuImage />
            <Footer />
            <Arrow />
        </div>
    )
}

export default Menu;