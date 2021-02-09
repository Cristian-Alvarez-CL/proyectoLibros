import { Link } from "react-router-dom";
import logo from "../../img/navbar-logo.svg";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={logo} alt="" /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Servicios</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Publicaciones</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">Acerca de</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Equipo</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contacto</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="..."><Link to="/login">Login</Link></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;