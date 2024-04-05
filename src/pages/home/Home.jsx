import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Content from "../../components/content/Content";
import photos from "../../services/photos/photos";
import ImageDisplayer from "../../components/image-displayer/ImageDisplayer";
import ImageList from "../../components/image-list/ImageList";

function Home() {
  return (
    <div>
      <Header />
      <Content />
      <ImageDisplayer fileName={`/img/${photos[0].fileName}`} alternativeText="array" />
      <ImageList/>
      <Footer />
    </div>
  );
}

export default Home;
