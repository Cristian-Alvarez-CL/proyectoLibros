import React from "react";
import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function Publicacion() {

  const [mensaje, setMensaje] = useState({

    
  })

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="margentop mt-5">Nombre de la publicacion</h2>
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
                    src="https://image.freepik.com/vector-gratis/concepto-cursos-idiomas-online-estudiar-idiomas-extranjeros-escuela-o-universidad-leccion-ingles-ilustracion-isometrica-vector_277904-1170.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://image.freepik.com/free-photo/front-view-composition-with-different-books_23-2148851051.jpg"
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
          <div className="col-md-8 col-lg-8 mt-5 ml-auto">
            <div className="pubboder">
              <h5 className="m-0 p-0">
                Titulo: <p className="m-0 p-0">Tic en la Educación</p>
              </h5>
              <h5 className="m-0 p-0">
                Autor: <p className="m-0 p-0">Chirinos armas</p>
              </h5>
              <h5 className="m-0 p-0">
                Editorial: <p className="m-0 p-0">Marcombo</p>
              </h5>
              <h5 className="m-0 p-0">
                Categoria: <p className="m-0 p-0">Informatica</p>
              </h5>
              <h5 className="m-0 p-0">
                Nivel: <p className="m-0 p-0">2do basico</p>
              </h5>
              <h5 className="m-0 p-0">
                Colegio: <p className="m-0 p-0">Arturo Prat</p>
              </h5>
              <h5 className="m-0 p-0">
                Estado: <p className="m-0 p-0">Nuevo</p>
              </h5>
              <h5 className="m-0 p-0">
                Precio / Permuta:<p className="m-0 p-0">25.000$</p>
              </h5>
              <h5 className="m-0 p-0">
                Comentarios:
                <p className="m-0 p-0">
                  Esto es una prueba para ver como se ve el comentario del libro
                  no hacer caso literal a lo que dice el mismo
                </p>
              </h5>
              <div className="form-group col-lg-12 mt-2">
                <a href="#" className="btn btn-primary btn-block py-2">
                  <span className="font-weight-bold">Comprar / Permuta</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <form className="mt-5 border">
          <div className="form-group container-fluid">
            <h3 className="mt-2 text-center">Comunicate conmigo</h3>
            <label for="nombreCompleto">Nombre completo</label>
            <input
              type="text"
              className="form-control"
              id="nombreCompleto"
              placeholder="Ana Diaz"
            />
            <label className="mt-1" for="correo">
              Direccion de Correo Electroníco
            </label>
            <input
              type="email"
              className="form-control"
              id="correo"
              placeholder="name@example.com"
            />
            <label className="mt-1" for="telefono">
              Teléfono
            </label>
            <input
              type="tel"
              className="form-control"
              id="telefono"
              placeholder="+56900000000"
            />
            <label for="comentario">Comentarios</label>
            <textarea
              className="form-control"
              id="comentario"
              rows="3"
            ></textarea>
            <input
              className="btn btn-primary btn-block"
              type="button"
              value="Enviar"
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Publicacion;
