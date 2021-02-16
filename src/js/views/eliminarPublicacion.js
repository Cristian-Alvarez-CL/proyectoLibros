import React from "react";
import "../../styles/login.css";
import TablaInformacion from "../component/tablaInfo";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

const eliminarPublicacion = () => {
  return (
    <>
    <Navbar/>
      <div className="content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="form-block">
                  <div className="mb-4">
                    <h3>
                      <strong>ELIMINAR PUBLICACION</strong>
                    </h3>
                    <p className="mb-4">
                      Estás a punto de eliminar la siguiente publicación
                    </p>
                    <TablaInformacion></TablaInformacion>
                  </div>
                  <p className="mb-4">
                      Ingresa tu E-mail y contraseña:
                    </p>
                  <form action="#" method="post" onChange={() => {}}>
                  <div className="form-group last mb-4">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                      />
                    </div>
                    <div className="form-group last mb-4">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                      />
                    </div>
                    <input
                      type="submit"
                      value="Eliminar Definitivamente"
                      href= "#homePrivate"
                      className="btn btn-pill text-white btn-block btn-primary"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default eliminarPublicacion;