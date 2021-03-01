import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Publicacion = ({ match }, props) => {
  const { store, actions } = useContext(Context);

  const id = match.params.id;

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mt-5">PERMUTA / VENTA</h2>
        <hr />
        <div className="row align-items-center">
          <div className="col-md-4 pr-lg-4 mb-5 mb-md-0">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                <img
                    src="https://image.freepik.com/free-photo/front-view-composition-with-different-books_23-2148851051.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                <img
                    src="https://image.freepik.com/vector-gratis/concepto-cursos-idiomas-online-estudiar-idiomas-extranjeros-escuela-o-universidad-leccion-ingles-ilustracion-isometrica-vector_277904-1170.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://image.freepik.com/free-photo/creative-assortment-with-different-books_23-2148851023.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="col-md-8 col-lg-8 ml-auto">
            <div className="pubboder">
              <h5 className="m-0 p-0">
                Título: 
                <p className="text-capitalize m-0 p-0">
                  {store.publicaciones[id - 1].titulo}
                </p>
              </h5>
              <hr className="mt-0"/>
              <h5 className="m-0 p-0">
                Autor:{" "}
                <p className="text-capitalize m-0 p-0">
                  {store.publicaciones[id - 1].nombreAutor}
                </p>
              </h5>
              <hr className="mt-0"/>
              <h5 className="m-0 p-0">
                Editorial:{" "}
                <p className="text-capitalize m-0 p-0">
                  {store.publicaciones[id - 1].editorial}
                </p>
              </h5>
              <hr className="mt-0"/>
              <h5 className="m-0 p-0">
                Nivel:{" "}
                <p className="text-capitalize m-0 p-0">
                  {store.publicaciones[id - 1].nivel}
                </p>
              </h5>
              <hr className="mt-0"/>
              <h5 className="m-0 p-0">
                Asignatura:{" "}
                <p className="text-capitalize m-0 p-0">
                  {store.publicaciones[id - 1].asignatura}
                </p>
              </h5>
              <hr className="mt-0"/>
              <h5 className="m-0 p-0">
                Estado:{" "}
                <p className="text-capitalize m-0 p-0">
                  {store.publicaciones[id - 1].estadoNuevoUsado}
                </p>
              </h5>
              <hr className="mt-0"/>
              <h5 className="m-0 p-0">
                Condición:{" "}
                <p className="text-capitalize m-0 p-0">
                  {store.publicaciones[id - 1].condicionOriginalCopia}
                </p>
              </h5>
              <hr className="mt-0"/>
              <h5 className="m-0 p-0">
                Tipo:{" "}
                <p className="text-capitalize m-0 p-0">
                  {store.publicaciones[id - 1].tipoIntercambio}
                </p>
              </h5>
              <hr className="mt-0"/>
              <h5 className="m-0 p-0">
                Precio / Permuta:
                <p className="text-capitalize m-0 p-0">
                  $ {store.publicaciones[id - 1].precio}
                </p>
              </h5>
              <hr className="mt-0"/>
              <h5 className="m-0 p-0">
                Comentarios:
                <p className="text-capitalize m-0 p-0">
                  {store.publicaciones[id - 1].comentarios}
                </p>
              </h5>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
          <Link 
            to={`/usuarios/${store.publicaciones[id -1].cliente_id}`}
            className="btn btn-primary btn-block font-weight-bold"
          >
            Contáctame
          </Link>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Publicacion;
