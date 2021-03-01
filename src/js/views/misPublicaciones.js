import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import { useContext } from "react";
import { Context } from "../store/appContext";

const MisPublicaciones = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <Navbar />
      <div classNameName="container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4 mt-5">Listado de Mis Publicaciones</h1>
          <p className="lead">
            Aca encontrara un listado de los libros que tiene asociados a su perfil...
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Autor</th>
                <th scope="col">Nivel</th>
                <th scope="col">Tipo</th>
                <th scope="col">Mas Información</th>
              </tr>
            </thead>
            {!!store.publicacionesId &&
              store.publicacionesId.map((publicacionesId, id) => {
                return (
                  <tbody key={publicacionesId.id}>
                    <tr>
                      <td className="text-capitalize">
                        <span className="mr-4 font-weight-bold">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="book"
                            class="svg-inline--fa fa-book fa-w-14"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
                            ></path>
                          </svg>
                        </span>
                        {publicacionesId.titulo}
                      </td>
                      <td className="text-capitalize">
                        {publicacionesId.nombreAutor}
                      </td>
                      <td className="text-capitalize">
                        {publicacionesId.nivel}
                      </td>
                      <td className="text-capitalize">
                        {publicacionesId.tipoIntercambio}
                      </td>
                      <td className="text-capitalize">
                        <Link
                          className="btn btn-primary"
                          to={`/publicacionId/${publicacionesId.id}`}
                        >
                          Ver mas
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MisPublicaciones;
