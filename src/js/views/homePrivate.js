
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
      <Navbar/>
      <Masthead/>
      <Busqueda/>
      <PortfolioGrid/>
      <TablaInformacion/>
      <Contact/>
      <Footer/>
      <PortfolioModal/>
    </div>
  );
}

export default HomePrivate;