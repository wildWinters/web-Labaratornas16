import Header from "./(Main Page)/_Main/Header";
import Slider from "./(Main Page)/_Main/Slider";
import Footer from "./(Main Page)/_Main/Footer";
import Section from "./(Main Page)/_Main/Sections";
import Main from "./(Main Page)/_Main/Main";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Slider />
        <Section />
      </Main>
      <Footer />
    </>
  );
}

