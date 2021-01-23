import React from "react";

const createAccount = () => {
  return (
    <div className="container">
      <div className="row py-5 mt-4 align-items-center">
        {/* <!-- For Demo Purpose --> */}
        <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
          <img
            src="https://image.freepik.com/vector-gratis/concepto-cursos-idiomas-online-estudiar-idiomas-extranjeros-escuela-o-universidad-leccion-ingles-ilustracion-isometrica-vector_277904-1170.jpg"
            alt="hola"
            className="img-fluid mb-3 d-none d-md-block"
          />
          <h1>Crea tu cuenta</h1>
          <p className="font-italic text-muted mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non.
          </p>
        </div>
        {/*    <!-- Registeration Form --> */}
        <div className="col-md-7 col-lg-6 ml-auto">
          <form action="#">
            <div className="row">
              {/* <!-- Last Name --> */}
              <div className="input-group col-lg-12 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-user text-muted"></i>
                  </span>
                </div>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Nombre Completo"
                  className="form-control bg-white border-left-0 border-md"
                />
              </div>
              {/* <!-- Email Address --> */}
              <div className="input-group col-lg-12 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-envelope text-muted"></i>
                  </span>
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Correo Electronico"
                  className="form-control bg-white border-left-0 border-md"
                />
              </div>
              {/* <!-- Phone Number --> */}
              <div className="input-group col-lg-12 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-phone-square text-muted"></i>
                  </span>
                </div>
                <input
                  id="phoneNumber"
                  type="tel"
                  name="phone"
                  placeholder="Numero de Teléfono "
                  className="form-control bg-white border-md border-left-0 pl-3"
                />
              </div>
              {/* <!-- Password --> */}
              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-lock text-muted"></i>
                  </span>
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className="form-control bg-white border-left-0 border-md"
                />
              </div>
              {/*   <!-- Password Confirmation --> */}
              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-lock text-muted"></i>
                  </span>
                </div>
                <input
                  id="passwordConfirmation"
                  type="text"
                  name="passwordConfirmation"
                  placeholder="Confirmar Contraseña"
                  className="form-control bg-white border-left-0 border-md"
                />
              </div>
               {/* <!-- Direction --> */}
               <div className="input-group col-lg-12 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fas fa-map-marked-alt text-muted"></i>
                  </span>
                </div>
                <input
                  id="direction"
                  type="text"
                  name="direction"
                  placeholder="Dirección"
                  className="form-control bg-white border-left-0 border-md"
                />
              </div>
              {/* <!-- Submit Button --> */}
              <div className="form-group col-lg-12 mx-auto mb-0">
                <a href="..." className="btn btn-primary btn-block py-2">
                  <span className="font-weight-bold">Crear Cuenta</span>
                </a>
              </div>
              {/* <!-- Divider Text --> */}
              <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                <div className="border-bottom w-100 ml-5"></div>
                <span className="px-2 small text-muted font-weight-bold text-muted">
                  O
                </span>
                <div className="border-bottom w-100 mr-5"></div>
              </div>
              {/* <!-- Already Registered --> */}
              <div className="text-center w-100">
                <p className="text-muted font-weight-bold">
                  Ya estas registrado?
                  <a href="..." className="text-primary ml-2">
                    Accede
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default createAccount;
