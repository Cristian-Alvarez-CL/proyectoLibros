import fotoPortfolioGrid1  from "../../img/portfolio/01-thumbnail.jpg";
import fotoPortfolioGrid2  from "../../img/portfolio/02-thumbnail.jpg";
import fotoPortfolioGrid3  from "../../img/portfolio/03-thumbnail.jpg";
import fotoPortfolioGrid4  from "../../img/portfolio/04-thumbnail.jpg";
import fotoPortfolioGrid5  from "../../img/portfolio/05-thumbnail.jpg";
import fotoPortfolioGrid6  from "../../img/portfolio/06-thumbnail.jpg";

function PortfolioGrid() {
    return(
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Libros Publicados</h2>
                    <h3 className="section-subheading text-muted">Aqui encontraras los libros que están siendo publicados ya sea para realizar una venta o permuta.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={fotoPortfolioGrid1} alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Papelucho y El Marciano</div>
                                <div className="portfolio-caption-subheading text-muted">Autor: Marcela Paz</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={fotoPortfolioGrid2} alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Papelucho y El Marciano</div>
                                <div className="portfolio-caption-subheading text-muted">Autor: Marcela Paz</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={fotoPortfolioGrid3} alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Papelucho y El Marciano</div>
                                <div className="portfolio-caption-subheading text-muted">Autor: Marcela Paz</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={fotoPortfolioGrid4} alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Papelucho y El Marciano</div>
                                <div className="portfolio-caption-subheading text-muted">Autor: Marcela Paz</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={fotoPortfolioGrid5} alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Papelucho y El Marciano</div>
                                <div className="portfolio-caption-subheading text-muted">Autor: Marcela Paz</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={fotoPortfolioGrid6} alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Papelucho y El Marciano</div>
                                <div className="portfolio-caption-subheading text-muted">Autor: Marcela Paz</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioGrid;