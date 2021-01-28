import React from "react";
import '../../styles/agregarLibro.css';
import Navbar from "../component/navbar";
import Footer from "../component/footer";



function AgregarLibro() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container ">
                <div className="py-5 text-center ">
                    {/* <!-- For Demo Purpose -->  */}
                    <div className="col-md-12 pr-lg-5 mb-5 mb-md-0">
                        {/* <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" className="img-fluid mb-3 d-none d-md-block" /> */}
                        <h1>Editar Publicación</h1>
                        <br />
                        <h3> Información de tu libro </h3>
                        <br />
                        <br />
                    </div>

                    {/* <!-- Divider Text --> */}
                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div className="border-bottom w-100 ml-5"></div>
                        {/* <span className="px-2 small text-muted font-weight-bold text-muted"></span> */}
                        <div className="border-bottom w-100 mr-5"></div>
                    </div>

                    {/* <!-- Registeration Form --> */}
                    <div className="col-md-12 col-lg-10 mx-auto d-flex align-items-center my-4">
                        <form action="# ">
                            <div className="row ">

                                {/* <!-- Título del Libro --> */}
                                <label for="staticEmail" class="col-sm-2 col-form-label">Título del Libro</label>
                                <div className="input-group col-lg-9 mb-4 ">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            {/* <i className="fa fa-user text-muted"></i> */}
                                        </span>

                                    </div>
                                    <input id="firstName" type="text" name="firstname" placeholder="Título del Libro" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                {/* <!-- Autor --> */}
                                <label for="staticEmail" class="col-sm-2 col-form-label">Autor</label>
                                <div className="input-group col-lg-9 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            {/* <i className="fa fa-user text-muted"></i> */}
                                        </span>
                                    </div>
                                    <input id="lastName" type="text" name="lastname" placeholder="Autor" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                {/* <!-- Editorial --> */}
                                <label for="staticEmail" class="col-sm-2 col-form-label">Editorial</label>
                                <div className="input-group col-lg-9 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            {/* <i className="fa fa-user text-muted"></i> */}
                                        </span>
                                    </div>
                                    <input id="lastName" type="text" name="lastname" placeholder="Editorial" className="form-control bg-white border-left-0 border-md" />
                                </div>


                                {/* <!-- Nivel --> */}
                                <label for="staticEmail" class="col-sm-2 col-form-label">Nivel</label>
                                <div className="input-group col-lg-9 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            {/* <i className="fa fa-black-tie text-muted"></i> */}
                                        </span>
                                    </div>
                                    <select id="job" name="nivel" className="form-control custom-select bg-white border-left-0 border-md">
                                        <option value="">Nivel</option>
                                        <option value="">1° Básico</option>
                                        <option value="">2° Básico</option>
                                        <option value="">3° Básico</option>
                                        <option value="">4° Básico</option>
                                        <option value="">5° Básico</option>
                                        <option value="">6° Básico</option>
                                        <option value="">7° Básico</option>
                                        <option value="">8° Básico</option>
                                        <option value="">1° Medio</option>
                                        <option value="">2° Medio</option>
                                        <option value="">3° Medio</option>
                                        <option value="">4° Medio</option>


                                    </select>
                                </div>

                                {/* <!-- Asignatura --> */}
                                <label for="staticEmail" class="col-sm-2 col-form-label">Asignatura</label>
                                <div className="input-group col-lg-9 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            {/* <i className="fa fa-black-tie text-muted"></i> */}
                                        </span>
                                    </div>
                                    <select id="job" name="asignatura" className="form-control custom-select bg-white border-left-0 border-md">
                                        <option value="">Asignatura</option>
                                        <option value="">Lectura Complementaria</option>
                                        <option value="">Lenguaje</option>
                                        <option value="">Ciencias</option>
                                        <option value="">Matemáticas</option>
                                        <option value="">Historia</option>
                                        <option value="">Religión</option>
                                        <option value="">Inglés</option>
                                        <option value="">Arte y Tecnología</option>
                                        <option value="">Música</option>
                                        <option value="">Pack Completo de Asignaturas</option>


                                    </select>
                                </div>

                                {/* <!-- Estado del Libro --> */}
                                {/* <hr class="mb-4" />
                                <div className="custom-control custom-checkbox ">
                                    <input type="checkbox" className="custom-control-input" id="same-address" />
                                    <label className="custom-control-label" for="same-address">Nuevo</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="save-info" />
                                    <label className="custom-control-label" for="save-info">Usado</label>
                                </div>
                                <hr className="mb-4" />
                                <hr className="mb-4" />
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="same-address" />
                                    <label className="custom-control-label" for="same-address">Original</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="save-info" />
                                    <label className="custom-control-label" for="save-info">Alternativo (Fotocopia)</label>
                                </div>
                                <hr className="mb-4" /> */}
                                <label for="staticEmail" class="col-sm-2 col-form-label">Estado del Libro</label>

                                <div className="input-group col-lg-10 mb-4">
                                    <div className="d-block my-10">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" />
                                            <label className="custom-control-label" for="credit">Nuevo</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input"  />
                                            <label className="custom-control-label" for="debit">Usado</label>
                                        </div>

                                        {/* <div className="input-group col-lg-9 mb-4">
                                            <div className="d-block my-10"> */}
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" />
                                                    <label className="custom-control-label" for="credit">Original</label>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input"  />
                                                    <label className="custom-control-label" for="debit">Alternativo (Fotocopia)</label>
                                                </div>
                                            </div>
                                        </div>
                                    {/* </div>
                                </div> */}


                                {/* <!-- Fotos / Imágenes --> */}
                                <label for="staticEmail" class="col-sm-2 col-form-label">Fotos / Imágenes</label>
                                <div className="input-group col-lg-9 mb-4">
                                <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            {/* <i className="fa fa-user text-muted"></i> */}
                                        </span>
                                    </div>
                                {/* <div className="custom-file mx-auto d-flex align-items-center my-4"> */}
                                    <input type="file" className="custom-file-input" id="customFile" lang="es" />
                                    <label className="custom-file-label" for="customFile">Seleccionar Imágenes</label>
                                </div>

                                {/* <!-- Tipo de Publicación --> */}
                                <label for="staticEmail" class="col-sm-2 col-form-label">Tipo de Publicación</label>
                                <div className="input-group col-lg-9 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            {/* <i className="fa fa-black-tie text-muted"></i> */}
                                        </span>
                                    </div>
                                    <select id="publi" name="tipo_de_publicación" className="form-control custom-select bg-white border-left-0 border-md">
                                        <option value="">Tipo de Publicación</option>
                                        <option value="">Venta</option>
                                        <option value="">Permuta</option>
                                        <option value="">Venta y Permuta</option>
                                    </select>
                                </div>

                                {/* <!-- Precio --> */}
                                <label for="staticEmail" class="col-sm-2 col-form-label">Precio</label>
                                <div className="input-group col-lg-9 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            {/* <i className="fa fa-user text-muted"></i> */}
                                        </span>
                                    </div>
                                    <input id="precio" type="text" name="precio" placeholder="Precio" className="form-control bg-white border-left-0 border-md" />
                                </div>


                                {/* <!-- Comentario --> */}
                                <label for="staticEmail" class="col-sm-2 col-form-label">Comentarios</label>
                                <div className="input-group col-lg-9 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            Comentarios
                            </span>
                                    </div>
                                    <textarea className="form-control" aria-label="With textarea"></textarea>
                                    {/* <!-- <input id="precio" type="text" name="precio" placeholder="Título del Libro" className="form-control bg-white border-left-0 border-md"> --> */}
                                </div>

                                {/* <!-- Aceptación--> */}
                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                {/* <div className="form-check"> */}
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                    </div>
                                    <label className="form-check-label" for="invalidCheck2">
                                        Acepto los Términos y Condiciones y autorizo el uso de mis
                                        datos de acuerdo a la Declaración de Privacidad
                                        </label>
                                </div>
                            </div>
                            
                            



                            {/* <!--  Button Publicar--> */}
                            <div className="form-group col-lg-5 mx-auto mb-0">
                                <a href="#" className="btn btn-primary btn-block py-2">
                                    <span className="font-weight-bold">Modificar</span>
                                </a>
                            </div>

                            {/* <!-- Divider Text --> */}
                            <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                <div className="border-bottom w-100 ml-5"></div>
                                {/* <span className="px-2 small text-muted font-weight-bold text-muted"></span> */}
                                <div className="border-bottom w-100 mr-5"></div>
                            </div>






                        </form>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </>
    )
}

export default AgregarLibro;