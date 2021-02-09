
import '../../styles/styles.css';
import Navbar from '../component/navbar';
import Masthead from '../component/masthead';
import PortfolioGrid from '../component/portfolioGrid';
import Contact from '../component/contact';
import Footer from '../component/footer';
import PortfolioModal from '../component/portfolioModals';
import Busqueda from '../component/busqueda';
import TablaInformacion from '../component/tablaInfo';

function HomePrivate() {
  return (
    <div>
      <Navbar></Navbar>
      <Masthead></Masthead>
      <Busqueda></Busqueda>
      <PortfolioGrid></PortfolioGrid>
      <TablaInformacion></TablaInformacion>
      <Contact></Contact>
      <Footer></Footer>
      <PortfolioModal></PortfolioModal>
    </div>
  );
}

export default HomePrivate;