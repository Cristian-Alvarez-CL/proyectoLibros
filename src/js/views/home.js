
import '../../styles/styles.css';
import Navbar from '../components/Navbar';
import Masthead from '../components/Masthead';
import Services from '../components/Services';
import PortfolioGrid from '../components/Portfoliogrid';
import About from '../components/About';
import Teams from '../components/Team';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PortfolioModals from '../components/PortfolioModals';


function Home() {
  return (
    <div>
      <Navbar contacto='Contacto'/>
      <Masthead />
      <Services />
      <PortfolioGrid />
      <About />
      <Teams />
      <Clients />
      <Contact />
      <Footer />
      <PortfolioModals />
    </div>
  );
}

export default Home;