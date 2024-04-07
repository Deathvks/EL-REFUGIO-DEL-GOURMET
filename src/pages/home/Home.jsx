import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Content from "../../components/content/Content";
import ImageList from "../../components/image-list/ImageList";
import Card from "../../components/card/Card";

function Home() {
  return (
    <div>
      <Header />
      <Content />
      <ImageList />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
