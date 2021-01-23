
import '../../styles/styles.css';
import Navbar from '../component/navbar';
import Masthead from '../component/masthead';
import Services from '../component/services';
import PortfolioGrid from '../component/portfolioGrid';
import About from '../component/about';
import Teams from '../component/team';
import Clients from '../component/clients';
import Contact from '../component/contact';
import Footer from '../component/footer';
import PortfolioModal from '../component/portfolioModals';

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Masthead></Masthead>
      <Services></Services>
      <PortfolioGrid></PortfolioGrid>
      <About></About>
      <Teams></Teams>
      <Clients></Clients>
      <Contact></Contact>
      <Footer></Footer>
      <PortfolioModal></PortfolioModal>
    </div>
  );
}

export default Home;