import React from "react";
import { MDBDataTable } from "mdbreact";

const DatatablePage = () => {
    const data = {
        columns: [
            {
                label: "Nombres",
                field: "nombres",
                sort: "asc",
                width: 150,
            },
            {
                label: "Email",
                field: "email",
                sort: "asc",
                width: 150,
            },
            {
                label: "Teléfono",
                field: "teléfono",
                sort: "asc",
                width: 150,
            },
            {
                label: "Dirección",
                field: "dirección",
                sort: "asc",
                width: 100,
            },
            {
                label: "Contraseña",
                field: "contraseña",
                sort: "asc",
                width: 150,
            },
            {
                label: "Perfil",
                field: "perfil",
                sort: "asc",
                width: 100,
            },
            {
                label: "Seleccion",
                field: "selección",
                sort: "asc",
                width: 100,
            },
        ],
        rows: [
            {
                nombres: "Tiger Nixon",
                email: "system.architect@gmail.com",
                teléfono: "562 22 22 22",
                dirección: "El Peral 61",
                contraseña: "2011/04/25",
                perfil: "user",
                selección: "",
            },
            {
                nombre: "Tiger Nixon",
                email: "system.architect@gmail.com",
                teléfono: "562 22 22 22",
                dirección: "El Peral 61",
                contraseña: "2011/04/25",
                perfil: "user",
                selección: "",
            },
            
        ],
    };

    return (
        <section className="page-section" id="tabla">
            <div className="container">
                {/* <div className="text-center">
                    <h2 className="section-heading text-uppercase">ELIMINAR USUARIO</h2>
                    <h3 className="section-subheading text-muted">Estas a punto de eliminar el siguiente usuario</h3>
                </div> */}
                <MDBDataTable
                    scrollY
                    maxHeight="500px"
                    striped
                    bordered
                    small
                    data={data} />
            </div>
        </section>
    );
};

export default DatatablePage;