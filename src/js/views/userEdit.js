import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext"


const UserEdit = (props) => {
  const { store, actions } = useContext(Context)

  const [usuario, setUsuario] = useState({
    nombreCompleto: "",
    correo: "",
    telefono: "",
    contrasenia: "",
    confirmContrasenia: "",
    comuna: "",
    direccion: "",
    direccionNumero: ""
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUsuario({
      ...usuario, 
      [e.target.name]: e.target.value,
    });
  };

  const { nombreCompleto, correo, telefono, contrasenia, confirmContrasenia, comuna, direccion, direccionNumero } = usuario;

  const submitUsuario = (e) => {
    e.preventDefault();

    if (
      nombreCompleto.trim() === "" ||
      correo.trim() === "" ||
      telefono.trim() === "" ||
      contrasenia.trim() === "" ||
      confirmContrasenia.trim() === "" ||
      comuna.trim() === "" ||
      direccion.trim() === "" ||
      direccionNumero.trim() === ""
      ) {
      setError(true);
      return;
    }
    setError(false);

    actions.setCliente( usuario, props.history )

    setUsuario({
      nombreCompleto: "",
      correo: "",
      telefono: "",
      contrasenia: "",
      confirmContrasenia: "",
      comuna: "",
      direccion: "",
      direccionNumero: ""
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row py-5 mt-4 align-items-center">
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img
              src="https://image.freepik.com/vector-gratis/concepto-cursos-idiomas-online-estudiar-idiomas-extranjeros-escuela-o-universidad-leccion-ingles-ilustracion-isometrica-vector_277904-1170.jpg"
              alt="hola"
              className="img-fluid mb-3 d-none d-md-block"
            />
            <h1>Modifica tu perfil</h1>
            <p className="font-italic text-muted mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              non.
            </p>
          </div>
          <div className="col-md-7 col-lg-6 ml-auto">
          <form onSubmit={(e) => submitUsuario(e)} action="# ">
              <div className="row">
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="nombreCompleto"
                    type="text"
                    name="nombreCompleto"
                    placeholder="Nombre Completo"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={handleChange}
                    value={nombreCompleto}
                  />
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="correo"
                    type="email"
                    name="correo"
                    placeholder="Correo Electronico"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={handleChange}
                    value={correo}
                  />
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-phone-square text-muted"></i>
                    </span>
                  </div>
                  <input
                     id="telefono"
                    type="tel"
                    name="telefono"
                    placeholder="Numero de Teléfono +56900000000"
                    className="form-control bg-white border-md border-left-0 pl-3"
                    onChange={handleChange}
                    value={telefono}
                  />
                </div>
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="contrasenia"
                    type="password"
                    name="contrasenia"
                    placeholder="Contraseña"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={handleChange}
                    value={contrasenia}
                  />
                </div>
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="confirmContrasenia"
                    type="password"
                    name="confirmContrasenia"
                    placeholder="Confirmar Contraseña"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fas fa-map-marked-alt text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="direccion"
                    type="text"
                    name="direccion"
                    placeholder="Calle Arturo Prat 1234"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={handleChange}
                    value={direccion}
                  />
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fas fa-map-marked-alt text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="direccionNumero"
                    type="text"
                    name="direccionNumero"
                    placeholder="Casa 1234 / Depto 1507"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={handleChange}
                    value={direccionNumero}
                  />
                </div>
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <input type="submit" className="btn btn-primary btn-block font-weight-bold" value="Confirmar datos" onSubmit={submitUsuario}/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserEdit;
