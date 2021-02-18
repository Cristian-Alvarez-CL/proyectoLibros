import "../../styles/styles.css";
import Navbar from "../components/Navbar";
import Masthead from "../components/Masthead";
import PortfolioGrid from "../components/Portfoliogrid";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PortfolioModal from "../components/PortfolioModals";
import Busqueda from "../components/Busqueda";
import TablaInformacion from "../components/TablaInfo";

function HomePrivate() {
  return (
    <>
      <Navbar />
      <Masthead />
      <Busqueda />
      <PortfolioGrid />
      <TablaInformacion />
      <Contact />
      <Footer />
      <PortfolioModal />
    </>
  );
}

export default HomePrivate;
