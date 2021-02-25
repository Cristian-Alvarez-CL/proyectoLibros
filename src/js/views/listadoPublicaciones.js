import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ListadoPublicaciones = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div classNameName="container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Listado de Libros</h1>
          <p className="lead">
            Aca encontrara un listado de los libros disponibles para la venta o
            permuta de los mismos...
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
            {!!store.publicaciones &&
              store.publicaciones.map((publicacion, id) => {
                return (
                  <tbody key={publicacion.id}>
                    <tr>
                      <td>{publicacion.titulo}</td>
                      <td>{publicacion.nombreAutor}</td>
                      <td>{publicacion.nivel}</td>
                      <td>{publicacion.tipoIntercambio}</td>
                      <td>
                          <Link className="btn btn-primary" to={`/publicacion/${publicacion.id}`}>Ver mas</Link>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </>
  );
};

export default ListadoPublicaciones;
