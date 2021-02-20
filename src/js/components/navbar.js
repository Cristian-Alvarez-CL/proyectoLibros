import { Link } from "react-router-dom";
import logo from "../../img/navbar-logo.svg";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ml-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">
                Publicaciones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#team">
                Equipo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="...">
                <Link to="/login">Login</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="...">
                <Link to="/create">Registrate</Link>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Perfil
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Mi cuenta
                </a>
                <a className="dropdown-item" href="#">
                  Mis Publicaciones
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Otra cosa mas...
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
