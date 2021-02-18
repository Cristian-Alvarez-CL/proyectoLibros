import React from "react";
import "../../styles/agregarLibro.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ModificarLibro() {
  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="py-5 text-center ">
          <div className="col-md-12 pr-lg-5 mb-5 mb-md-0">
            <h1>Editar Publicación</h1>
          </div>
          <div className="jumbotron">
            <h3> Información de tu libro </h3>
            <div className="col-md-12 col-lg-10 mx-auto d-flex align-items-center my-4">
              <form action="# ">
                <div className="row ">
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Título del Libro
                  </label>
                  <div className="input-group col-lg-9 mb-4 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <input
                      id="firstName"
                      type="text"
                      name="firstname"
                      placeholder="Título del Libro"
                      className="form-control bg-white border-left-0 border-md"
                    />
                  </div>
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Autor
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <input
                      id="lastName"
                      type="text"
                      name="lastname"
                      placeholder="Autor"
                      className="form-control bg-white border-left-0 border-md"
                    />
                  </div>
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Editorial
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <input
                      id="lastName"
                      type="text"
                      name="lastname"
                      placeholder="Editorial"
                      className="form-control bg-white border-left-0 border-md"
                    />
                  </div>
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Nivel
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <select
                      id="job"
                      name="nivel"
                      className="form-control custom-select bg-white border-left-0 border-md"
                    >
                      <option value="Nivel">Nivel</option>
                      <option value="1° Basico">1° Básico</option>
                      <option value="2° Basico">2° Básico</option>
                      <option value="3° Basico">3° Básico</option>
                      <option value="4° Basico">4° Básico</option>
                      <option value="5° Basico">5° Básico</option>
                      <option value="6° Basico">6° Básico</option>
                      <option value="7° Basico">7° Básico</option>
                      <option value="8° Basico">8° Básico</option>
                      <option value="1° Medio">1° Medio</option>
                      <option value="2° Medio">2° Medio</option>
                      <option value="3° Medio">3° Medio</option>
                      <option value="4° Medio">4° Medio</option>
                    </select>
                  </div>
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Asignatura
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <select
                      id="job"
                      name="asignatura"
                      className="form-control custom-select bg-white border-left-0 border-md"
                    >
                      <option value="asignatura">Asignatura</option>
                      <option value="lectura complementaria">
                        Lectura Complementaria
                      </option>
                      <option value="lenguaje">Lenguaje</option>
                      <option value="ciencias">Ciencias</option>
                      <option value="matematicas">Matemáticas</option>
                      <option value="historia">Historia</option>
                      <option value="religion">Religión</option>
                      <option value="ingles">Inglés</option>
                      <option value="arte y tecnologia">
                        Arte y Tecnología
                      </option>
                      <option value="musica">Música</option>
                      <option value="pack completo de asignaturas">
                        Pack Completo de Asignaturas
                      </option>
                    </select>
                  </div>
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Estado del Libro
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <select
                      id="job"
                      name="estado"
                      className="form-control custom-select bg-white border-left-0 border-md"
                    >
                      <option value="nuevo">Nuevo</option>
                      <option value="usado">Usado</option>
                    </select>
                  </div>
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Condición del Libro
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <select
                      id="job"
                      name="condicion"
                      className="form-control custom-select bg-white border-left-0 border-md"
                    >
                      <option value="original">Original</option>
                      <option value="copia">Copia</option>
                    </select>
                  </div>
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Fotos / Imágenes
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                      lang="es"
                    />
                    <label className="custom-file-label" for="customFile">
                      Seleccionar Imágenes
                    </label>
                  </div>
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Tipo de Publicación
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <select
                      id="publi"
                      name="tipo_de_publicación"
                      className="form-control custom-select bg-white border-left-0 border-md"
                    >
                      <option value="tipo de publicacion">
                        Tipo de Publicación
                      </option>
                      <option value="venta">Venta</option>
                      <option value="permuta">Permuta</option>
                      <option value="venta y permuta">Venta y Permuta</option>
                    </select>
                  </div>
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Precio
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <input
                      id="precio"
                      type="text"
                      name="precio"
                      placeholder="Precio"
                      className="form-control bg-white border-left-0 border-md"
                    />
                  </div>
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Comentarios
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        Comentarios
                      </span>
                    </div>
                    <textarea
                      className="form-control"
                      aria-label="With textarea"
                    ></textarea>
                    {/* <!-- <input id="precio" type="text" name="precio" placeholder="Título del Libro" className="form-control bg-white border-left-0 border-md"> --> */}
                  </div>
                </div>
                <div className="form-group col-lg-5 mx-auto mb-0">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block py-2"
                  >
                    <span className="font-weight-bold">Modificar</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ModificarLibro;
