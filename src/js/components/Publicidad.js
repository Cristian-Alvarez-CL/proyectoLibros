import React from "react";
import libreria1 from "../../img/Publicidad/libreria-1.png";
import libreria2 from "../../img/Publicidad/libreria-2.png";
import ropa from "../../img/Publicidad/ropa.png";
import transporte from "../../img/Publicidad/transporte.png";
import mentoria from "../../img/Publicidad/mentoria.gif";
import futbol from "../../img/Publicidad/futbol.png";

const Publicidad = () => {
  return (
    <>
      <section className="page-section bg-light pt-0">
        <div class="container p-0">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Publicidad</h2>
            <h3 className="section-subheading text-muted">
              Publica con nosotros
            </h3>
          </div>
          <div class="row no-gutters">
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src={libreria1} alt="" />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src={ropa} alt="" />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src={transporte} alt="" />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src={libreria2} alt="" />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src={mentoria} alt="" />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src={futbol} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Publicidad;
