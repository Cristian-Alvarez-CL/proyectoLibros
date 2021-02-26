import '../../styles/styles.css';
import Navbar from '../components/navbar';
import Masthead from '../components/masthead';
import Services from '../components/services';
import PortfolioGrid from '../components/portfoliogrid';
import Teams from '../components/team';
import Footer from '../components/footer';


function Home() {
  return (
    <div>
      <Navbar contacto='Contacto'/>
      <Masthead />
      <Services />
      <PortfolioGrid />
      <Teams />
      <Footer />
    </div>
  );
}

export default Home;