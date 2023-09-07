import Cards from "./assets/Pages/Cards";
import Content from "./assets/Pages/Content";
import Footer from "./assets/Pages/Footer";
import Landing from "./assets/Pages/Landing";
import Navbar from "./assets/Pages/Navbar";
import NewsLEtter from "./assets/Pages/NewsLEtter";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Content />
      <NewsLEtter />
      <Cards />
      <Footer/>
    </>
  );
}

export default App;
