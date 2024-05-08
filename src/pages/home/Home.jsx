import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Content from "../../components/content/Content";
import ImageList from "../../components/image-list/ImageList";
import Card from "../../components/card/Card";
import Arrow from "../../components/arrow/Arrow";
import Form from "../../components/form/Form";
import Birthday from "../../components/birthday/Birthday";


function Home() {
  return (
    <div>
      <Header />
      <Content />
      <ImageList />
      <Card />
      <Form />
      <Birthday />
      <Footer />
      <Arrow/>
    </div>
  );
}

export default Home;
