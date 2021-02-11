
import '../../styles/styles.css';
import Navbar from '../component/navbar';
import PortfolioGrid from '../component/portfoliogrid';
import Footer from '../component/footer';
import PortfolioModal from '../component/portfolioModals';
import Busqueda from '../component/busqueda';
import TablaInformacion from '../component/tablaInfo';

function HomePrivate() {
  return (
    <div>
      <Navbar></Navbar>
      <Busqueda></Busqueda>
      <PortfolioGrid></PortfolioGrid>
      <TablaInformacion></TablaInformacion>
      <Footer></Footer>
      <PortfolioModal></PortfolioModal>
    </div>
  );
}

export default HomePrivate;