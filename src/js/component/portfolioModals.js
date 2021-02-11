import iconClose  from "../../img/close-icon.svg";
import fotoPortfolioModals1  from "../../img/portfolio/01-full.jpg";
import fotoPortfolioModals2  from "../../img/portfolio/02-full.jpg";
import fotoPortfolioModals3  from "../../img/portfolio/03-full.jpg";
import fotoPortfolioModals4  from "../../img/portfolio/04-full.jpg";
import fotoPortfolioModals5  from "../../img/portfolio/05-full.jpg";
import fotoPortfolioModals6  from "../../img/portfolio/06-full.jpg";

function PortfolioModal() {
    return(
        <section>
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <img src={iconClose} alt="Close modal" />
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <div className="col-8 d-flex mw-100">
                                            <img className="col-4 ml-5 img-fluid d-flex justify-content-start" src={fotoPortfolioModals1} alt="" />
                                            <div className="col-6 d-flex justify-content-center">
                                                <ul className="list-inline text-center mt-3 ml-3">
                                                    <li>Autor: Un autor</li>
                                                    <li className="mt-3">Editorial: Una Editorial</li>
                                                    <li className="mt-3">Categoria: Una Categoria</li>
                                                    <li className="mt-3">Nivel: Un nivel</li>
                                                    <li className="mt-3">Estado: Un estado</li>
                                                    <li className="mt-3">Precio / Permuta: Un Precio y Permuta</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fas fa-times mr-1"></i>
                                                Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <img src={iconClose} alt="Close modal" />
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <div className="col-8 d-flex mw-100">
                                            <img className="col-4 ml-5 img-fluid d-flex justify-content-start" src={fotoPortfolioModals2} alt="" />
                                            <div className="col-6 d-flex justify-content-center">
                                                <ul className="list-inline text-center mt-3 ml-3">
                                                    <li>Autor: Un autor</li>
                                                    <li className="mt-3">Editorial: Una Editorial</li>
                                                    <li className="mt-3">Categoria: Una Categoria</li>
                                                    <li className="mt-3">Nivel: Un nivel</li>
                                                    <li className="mt-3">Estado: Un estado</li>
                                                    <li className="mt-3">Precio / Permuta: Un Precio y Permuta</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fas fa-times mr-1"></i>
                                                Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <img src={iconClose} alt="Close modal" />
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <div className="col-8 d-flex mw-100">
                                            <img className="col-4 ml-5 img-fluid d-flex justify-content-start" src={fotoPortfolioModals3} alt="" />
                                            <div className="col-6 d-flex justify-content-center">
                                                <ul className="list-inline text-center mt-3 ml-3">
                                                    <li>Autor: Un autor</li>
                                                    <li className="mt-3">Editorial: Una Editorial</li>
                                                    <li className="mt-3">Categoria: Una Categoria</li>
                                                    <li className="mt-3">Nivel: Un nivel</li>
                                                    <li className="mt-3">Estado: Un estado</li>
                                                    <li className="mt-3">Precio / Permuta: Un Precio y Permuta</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fas fa-times mr-1"></i>
                                                Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <img src={iconClose} alt="Close modal" />
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <div className="col-8 d-flex mw-100">
                                            <img className="col-4 ml-5 img-fluid d-flex justify-content-start" src={fotoPortfolioModals4} alt="" />
                                            <div className="col-6 d-flex justify-content-center">
                                                <ul className="list-inline text-center mt-3 ml-3">
                                                    <li>Autor: Un autor</li>
                                                    <li className="mt-3">Editorial: Una Editorial</li>
                                                    <li className="mt-3">Categoria: Una Categoria</li>
                                                    <li className="mt-3">Nivel: Un nivel</li>
                                                    <li className="mt-3">Estado: Un estado</li>
                                                    <li className="mt-3">Precio / Permuta: Un Precio y Permuta</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fas fa-times mr-1"></i>
                                                Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <img src={iconClose} alt="Close modal" />
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <div className="col-8 d-flex mw-100">
                                            <img className="col-4 ml-5 img-fluid d-flex justify-content-start" src={fotoPortfolioModals5} alt="" />
                                            <div className="col-6 d-flex justify-content-center">
                                                <ul className="list-inline text-center mt-3 ml-3">
                                                    <li>Autor: Un autor</li>
                                                    <li className="mt-3">Editorial: Una Editorial</li>
                                                    <li className="mt-3">Categoria: Una Categoria</li>
                                                    <li className="mt-3">Nivel: Un nivel</li>
                                                    <li className="mt-3">Estado: Un estado</li>
                                                    <li className="mt-3">Precio / Permuta: Un Precio y Permuta</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fas fa-times mr-1"></i>
                                                Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <img src={iconClose} alt="Close modal" />
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <div className="col-8 d-flex mw-100">
                                            <img className="col-4 ml-5 img-fluid d-flex justify-content-start" src={fotoPortfolioModals6} alt="" />
                                            <div className="col-6 d-flex justify-content-center">
                                                <ul className="list-inline text-center mt-3 ml-3">
                                                    <li>Autor: Un autor</li>
                                                    <li className="mt-3">Editorial: Una Editorial</li>
                                                    <li className="mt-3">Categoria: Una Categoria</li>
                                                    <li className="mt-3">Nivel: Un nivel</li>
                                                    <li className="mt-3">Estado: Un estado</li>
                                                    <li className="mt-3">Precio / Permuta: Un Precio y Permuta</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fas fa-times mr-1"></i>
                                                Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioModal;