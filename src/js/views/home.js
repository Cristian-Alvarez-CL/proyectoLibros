import '../../styles/styles.css';
import Navbar from '../components/navbar';
import Masthead from '../components/masthead';
import Services from '../components/services';
import PortfolioGrid from '../components/portfoliogrid';
import Teams from '../components/team';
import Footer from '../components/footer';
import PortfolioModal from '../components/portfolioModals';


function Home() {
  return (
    <div>
      <Navbar />
      <Masthead />
      <Services />
      <PortfolioGrid />
      <Teams />
      <Footer />
      <PortfolioModal/>
    </div>
  );
}

export default Home;