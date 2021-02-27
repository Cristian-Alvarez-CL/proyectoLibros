import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Usuario = ({ match }, props) => {
  const { store, actions } = useContext(Context);

  const id = match.params.id;

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mt-5">Contactame</h2>
        <hr />
        <div className="row align-items-center">
          <div className="col-md-8 col-lg-8">
            <div className="pubboder">
              <h5 className="m-0 p-0">
                Nombre:
                <p className="text-capitalize m-0 p-0 font-weight-bold">
                  {store.usuarios[id - 1].nombreCompleto}
                </p>
              </h5>
              <hr className="mt-0"/>
              <h5 className="m-0 p-0">
                Correo:
                <p className="text-capitalize m-0 p-0 font-weight-bold">
                  {store.usuarios[id - 1].correo}
                </p>
              </h5>
              <hr className="mt-0"/>
              <h5 className="m-0 p-0">
                Telefono:
                <p className="text-capitalize m-0 p-0 font-weight-bold">
                  {store.usuarios[id - 1].telefono}
                </p>
              </h5>
              <hr className="mt-0"/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Usuario;
