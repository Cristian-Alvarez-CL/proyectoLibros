
import '../../styles/styles.css';
import Navbar from '../components/navbar';
import Masthead from '../components/masthead';
import Services from '../components/services';
import PortfolioGrid from '../components/portfoliogrid';
import About from '../components/about';
import Teams from '../components/team';
import Clients from '../components/clients';
import Contact from '../components/contact';
import Footer from '../components/footer';
import PortfolioModals from '../components/portfolioModals';


function Home() {
  return (
    <div>
      <Navbar contacto='Contacto'/>
      <Masthead />
      <Services />
      <PortfolioGrid />
      <Teams />
      <Footer />
      <PortfolioModals />
    </div>
  );
}

export default Home;