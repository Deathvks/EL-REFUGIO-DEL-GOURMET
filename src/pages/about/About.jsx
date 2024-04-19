import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Arrow from "../../components/arrow/Arrow";
import AbouContent from "../../components/about-content/AboutContent";
import Route from "../../components/route/Route";
function About(){
    return(
        <div>
            <Header />
            <AbouContent/>
            <Route />
            <Footer />
            <Arrow />
        </div>
    )
}

export default About;