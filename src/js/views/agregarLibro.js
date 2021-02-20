import React, { useState } from "react";
import "../../styles/agregarLibro.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function AgregarLibro() {

  const [publicacion, setPublicacion] = useState([])

  const [libro, setLibro] = useState({
    titulo: "",
    autor: "",
    editorial: "",
    nivel: "",
    asignatura: "",
    estado: "",
    condicion: "",
    tipo: "",
    precio: "",
    comentario: "",
  });

  const handleChange = (e) => {
    setLibro({
      ...libro, //clona la info del state
      [e.target.name]: e.target.value, //agrega el nuevo valor al state
    });
  };

  const { titulo, autor, editorial, nivel, asignatura, estado, condicion, tipo, precio, comentario } = libro;
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setPublicacion([...publicacion, libro])

    setLibro({
      titulo: "",
      autor: "",
      editorial: "",
      nivel: "",
      asignatura: "",
      estado: "",
      condicion: "",
      tipo: "",
      precio: "",
      comentario: "",
    })
  };

  return (
    <>
      <Navbar />
      <div className="container mg-100 mt-5">
        <div className="py-5 text-center ">
          <div className="col-md-12 pr-lg-5 mb-5 mb-md-0">
            <h1>AGREGAR UN LIBRO</h1>
          </div>
          <div className="jumbotron">
            <h3> Información de tu libro </h3>
            <div className="col-md-12 col-lg-10 mx-auto d-flex align-items-center my-4">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row ">
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Título del Libro
                  </label>
                  <div className="input-group col-lg-9 mb-4 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <input
                      id="titulo"
                      type="text"
                      name="titulo"
                      placeholder="Título del Libro"
                      className="form-control bg-white border-left-0 border-md"
                      onChange={(e) => handleChange(e)}
                      value={titulo}
                    />
                  </div>
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Autor
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                      </span>
                    </div>
                    <input
                      id="autor"
                      type="text"
                      name="autor"
                      placeholder="Autor"
                      className="form-control bg-white border-left-0 border-md"
                      onChange={(e) => handleChange(e)}
                      value={autor}
                    />
                  </div>
                  <label htmlFor="editorial" class="col-sm-2 col-form-label">
                    Editorial
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <input
                      id="editorial"
                      type="text"
                      name="editorial"
                      placeholder="Editorial"
                      className="form-control bg-white border-left-0 border-md"
                      onChange={(e) => handleChange(e)}
                      value={editorial}
                    />
                  </div>
                  <label htmlFor="nivel" class="col-sm-2 col-form-label">
                    Nivel
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <select
                      id="nivel"
                      name="nivel"
                      className="form-control custom-select bg-white border-left-0 border-md"
                      onChange={(e) => handleChange(e)}
                      value={nivel}
                    >
                      <option selected>Selecciona el Nivel</option>
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
                  <label htmlFor="asignatura" class="col-sm-2 col-form-label">
                    Asignatura
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <select
                      id="asignatura"
                      name="asignatura"
                      className="form-control custom-select bg-white border-left-0 border-md"
                      onChange={(e) => handleChange(e)}
                      value={asignatura}
                    >
                      <option selected>Asignatura</option>
                      <option value="Lectura Complementaria">Lectura Complementaria</option>
                      <option value="Lenguaje">Lenguaje</option>
                      <option value="Ciencias">Ciencias</option>
                      <option value="Matematicas">Matemáticas</option>
                      <option value="Historia">Historia</option>
                      <option value="Religion">Religión</option>
                      <option value="Ingles">Inglés</option>
                      <option value="Arte y Tecnologia">Arte y Tecnología</option>
                      <option value="Musica">Música</option>
                      <option value="Pack Completo de Asignaturas">Pack Completo de Asignaturas</option>
                      <option value="Otra">Otra</option>
                    </select>
                  </div>
                  <label htmlFor="estado" class="col-sm-2 col-form-label">
                    Estado del Libro
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <select
                      id="estado"
                      name="estado"
                      className="form-control custom-select bg-white border-left-0 border-md"
                      onChange={(e) => handleChange(e)}
                      value={estado}
                    >
                      <option selected>Estado del Libro</option>
                      <option value="nuevo">Nuevo</option>
                      <option value="usado">Usado</option>
                    </select>
                  </div>
                  <label htmlmFor="condicion" class="col-sm-2 col-form-label">
                    Condición del Libro
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <select
                      id="condicion"
                      name="condicion"
                      className="form-control custom-select bg-white border-left-0 border-md"
                      onChange={(e) => handleChange(e)}
                      value={condicion}
                    >
                      <option selected>Condicion del Libro</option>
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
                      name="foto"
                      type="file"
                      className="custom-file-input"
                      id="foto"
                      onChange={(e) => handleChange(e)}
                    />
                    <label className="custom-file-label" for="customFile">
                      Seleccionar Imagen
                    </label>
                  </div>
                  <label htmlFor="tipo" class="col-sm-2 col-form-label">
                    Tipo de Publicación
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0"></span>
                    </div>
                    <select
                      id="tipo"
                      name="tipo"
                      className="form-control custom-select bg-white border-left-0 border-md"
                      onChange={(e) => handleChange(e)}
                      value={tipo}
                    >
                      <option value="tipo de publicacion">
                        Tipo de Publicación
                      </option>
                      <option value="venta">Venta</option>
                      <option value="permuta">Permuta</option>
                      <option value="venta y permuta">Venta y Permuta</option>
                    </select>
                  </div>
                  <label htmlFor="precio" class="col-sm-2 col-form-label">
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
                      onChange={(e) => handleChange(e)}
                      value={precio}
                    />
                  </div>
                  <label htmlFor="comentario" class="col-sm-2 col-form-label">
                    Comentarios
                  </label>
                  <div className="input-group col-lg-9 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        Comentarios
                      </span>
                    </div>
                    <textarea
                      id="comentario"
                      name="comentario"
                      className="form-control"
                      aria-label="With textarea"
                      onChange={(e) => handleChange(e)}
                      value={comentario}
                    ></textarea>
                  </div>
                </div>
                <div className="form-group col-lg-5 mx-auto">
                  <input type="submit" className="btn btn-primary btn-block" value="Publicar Libro" />
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

export default AgregarLibro;
