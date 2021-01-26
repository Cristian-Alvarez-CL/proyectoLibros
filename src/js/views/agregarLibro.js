
import '../../styles/agregarLibro.css';


function AgregarLibro() {
    return (
        <>
            <div className="container">
                <div className="row py-5 mt-4 align-items-center">
                    {/* <!-- For Demo Purpose -->  */}
                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" className="img-fluid mb-3 d-none d-md-block" />
                        <h1>Agregar un Libro</h1>
                        <br />
                        <h3> Información de tu libro </h3>
                    </div>

                    {/* <!-- Registeration Form --> */}
                    <div className="col-md-7 col-lg-6 ml-auto">
                        <form action="#">
                            <div className="row">

                                {/* <!-- Título del Libro --> */}
                                <div className="input-group col-lg-6 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <i className="fa fa-user text-muted"></i>
                                        </span>
                                    </div>
                                    <input id="firstName" type="text" name="firstname" placeholder="Título del Libro" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                                    {/* <!-- Autor --> */}
                                    <div className="input-group col-lg-6 mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                <i className="fa fa-user text-muted"></i>
                                            </span>
                                        </div>
                                        <input id="lastName" type="text" name="lastname" placeholder="Autor" className="form-control bg-white border-left-0 border-md" />
                                    </div>

                                    {/* <!-- Editorial --> */}
                                    <div className="input-group col-lg-6 mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                <i className="fa fa-user text-muted"></i>
                                            </span>
                                        </div>
                                        <input id="lastName" type="text" name="lastname" placeholder="Editorial" className="form-control bg-white border-left-0 border-md" />
                                    </div>


                                    {/* <!-- Nivel --> */}
                                    <div className="input-group col-lg-12 mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                <i className="fa fa-black-tie text-muted"></i>
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
                                    <div className="input-group col-lg-12 mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                <i className="fa fa-black-tie text-muted"></i>
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
                                    <hr class="mb-4"/>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="same-address"/>
                                                <label className="custom-control-label" for="same-address">Nuevo</label>
        </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="save-info"/>
                                                    <label className="custom-control-label" for="save-info">Usado</label>
        </div>
                                                <hr className="mb-4"/>
                                                    <hr className="mb-4"/>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="same-address"/>
                                                                <label className="custom-control-label" for="same-address">Original</label>
        </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="save-info"/>
                                                                    <label className="custom-control-label" for="save-info">Alternativo (Fotocopia)</label>
        </div>
                                                                <hr className="mb-4"/>

                                                                    {/* <!-- Fotos / Imágenes --> */}
                                                                    <div className="custom-file">
                                                                        <input type="file" class="custom-file-input" id="customFileLang" lang="es"/>
                                                                            <label className="custom-file-label" for="customFileLang">Seleccionar Imágenes</label>
</div>

                                                                        {/* <!-- Tipo de Publicación --> */}
                                                                        <div className="input-group col-lg-12 mb-4">
                                                                            <div className="input-group-prepend">
                                                                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                                                    <i className="fa fa-black-tie text-muted"></i>
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
                                                                        <div className="input-group col-lg-6 mb-4">
                                                                            <div className="input-group-prepend">
                                                                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                                                    <i className="fa fa-user text-muted"></i>
                                                                                </span>
                                                                            </div>
                                                                            <input id="precio" type="text" name="precio" placeholder="Título del Libro" className="form-control bg-white border-left-0 border-md"/>
                    </div>


                                                                            {/* <!-- Comentario --> */}
                                                                            <div className="input-group col-lg-6 mb-4">
                                                                                <div className="input-group-prepend">
                                                                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                                                        Comentarios
                            </span>
                                                                                </div>
                                                                                <textarea class="form-control" aria-label="With textarea"></textarea>
                                                                                {/* <!-- <input id="precio" type="text" name="precio" placeholder="Título del Libro" className="form-control bg-white border-left-0 border-md"> --> */}
                                                                            </div>

                                                                            {/* <!-- Aceptación--> */}
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="same-address"/>
                                                                                    <label className="custom-control-label" for="same-address">Acepto los Términos y Condiciones y autorizo el uso de mis
                                                                                    datos de acuerdo a la Declaración de Privacidad
          </label>
        </div>

                                                                                {/* <!--  Button Publicar--> */}
                                                                                <div className="form-group col-lg-12 mx-auto mb-0">
                                                                                    <a href="#" className="btn btn-primary btn-block py-2">
                                                                                        <span className="font-weight-bold">Publicar Ahora</span>
                                                                                    </a>
                                                                                </div>

                                                                                {/* <!-- Divider Text --> */}
                                                                                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                                                                    <div className="border-bottom w-100 ml-5"></div>
                                                                                    <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                                                                                    <div className="border-bottom w-100 mr-5"></div>
                                                                                </div>





                                                                            </div>
            </form>
                                                                    </div>
    </div>
                                                            </div>

</>
)
}
    
export default AgregarLibro;