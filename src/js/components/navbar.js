import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Navbar = (props) => {
  const { store, actions } = useContext(Context);
  const { history } = props;

  const location = useLocation();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark"
      id="mainNav"
    >
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger " to="/">
          PASA TU LIBRO <i class="fas fa-swatchbook"></i>
        </Link>
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
              {location.pathname === "/" ? (
                <a className="nav-link js-scroll-trigger" href="#services">
                  Servicios
                </a>
              ) : null}
            </li>
            <li className="nav-item">
              {location.pathname === "/" ? (
                <a className="nav-link js-scroll-trigger" href="#team">
                  Equipo
                </a>
              ) : null}
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/publicaciones">
                PUBLICACIONES
              </Link>
            </li>
            <li className="nav-item">
              {!store.isAuth ? (
                <Link
                  className={
                    "nav-link " +
                    (location.pathname === "/login" ? "active" : "")
                  }
                  to="/login"
                >
                  Login
                </Link>
              ) : null}
            </li>
            <li className="nav-item">
              {!store.isAuth ? (
                <Link
                  className={
                    "nav-link " +
                    (location.pathname === "/create" ? "active" : "")
                  }
                  to="/create"
                >
                  Registrate
                </Link>
              ) : null}
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
                Mi cuenta
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {store.datosPerfil ? (
                  <a className="dropdown-item font-weight-bold m-1 p-1">
                    Bienvenido: {store.datosPerfil.nombreCompleto}
                  </a>
                ) : (
                  <Link
                    className={
                      "dropdown-item" +
                      (location.pathname === "/login" ? "active" : "")
                    }
                    to="/login"
                  >
                    Login
                  </Link>
                )}
                {store.isAuth ? (
                  <Link className="dropdown-item" to="/misPublicaciones">
                      Mis Publicaciones
                  </Link>
                ) : null}
                {store.isAuth ? (
                  <Link className="dropdown-item" to="/agregarlibro">
                    Agregar Publicación
                  </Link>
                ) : null}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
