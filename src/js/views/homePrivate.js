import "../../styles/styles.css";
import Navbar from "../components/navbar";
import Masthead from "../components/masthead";
import PortfolioGrid from "../components/portfoliogrid";
import Contact from "../components/contact";
import Footer from "../components/footer";
import PortfolioModal from "../components/portfolioModals";
import Busqueda from "../components/busqueda";
import TablaInformacion from "../components/tablaInfo";

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
