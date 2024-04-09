import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Content from "../../components/content/Content";
import ImageList from "../../components/image-list/ImageList";
import Card from "../../components/card/Card";
import Arrow from "../../components/arrow/Arrow";


function Home() {
  return (
    <div>
      <Header />
      <Content />
      <ImageList />
      <Card />
      <Footer />
      <Arrow/>
    </div>
  );
}

export default Home;
