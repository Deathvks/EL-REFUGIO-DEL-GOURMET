import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Content from "../../components/content/Content";
import ImageList from "../../components/image-list/ImageList";

function Home() {
  return (
    <div>
      <Header />
      <Content />
      <ImageList/>
      <Footer />
    </div>
  );
}

export default Home;
