import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Content from "../../components/content/Content";
import ImageList from "../../components/image-list/ImageList";
import Card from "../../components/card/Card";
import Arrow from "../../components/arrow/Arrow";
import Form from "../../components/form/Form";


function Home() {
  return (
    <div>
      <Header />
      <Content />
      <ImageList />
      <Card />
      <Form />
      <Footer />
      <Arrow/>
    </div>
  );
}

export default Home;
