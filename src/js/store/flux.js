const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "http://localhost:5000",
      usuarioId: null,
      usuarios: [],
      nombreCompleto: null,
      correo: null,
      contrasenia: null,
      confirmContrasenia: null,
      telefono: null,
      direccion: null,
      numero: null,
      comuna: null,
      tipoVivienda: null,
      numDepto: null,
      currentUser: null,
      isAuth: null,
      estaAut: null,
      publicaciones: [],
      cliente_id: null,
      titulo: null,
      nombreAutor: null,
      editorial: null,
      nivel: null,
      asignatura: null,
      estadoNuevoUsado: null,
      condicionOriginalCopia: null,
      tipoIntercambio: null,
      precio: null,
      comentarios: null,
      msgUsuario: null,
      msgPublicacion: null,
      error: null,
      tokenLogin: null,
    },
    actions: {
      getUsuarios: (url, options = {}) => {
        fetch(url, options)
          .then((resp) => resp.json())
          .then((data) => setStore({ usuarios: data }))
          .catch((error) => console.warn(error));
      },

      getPublicaciones: (url, options = {}) => {
        fetch(url, options)
          .then((resp) => resp.json())
          .then((data) => setStore({ publicaciones: data }))
          .catch((error) => console.warn(error));
      },

      handleChange: (e) => {
        const { name, value } = e.target;
        setStore({
          [name]: value,
        });
      },

      handleRegistroUsuario: async (e, history) => {
        e.preventDefault();
        const store = getStore();
        const options = {
          method: "POST",
          body: JSON.stringify({
            nombreCompleto: store.nombreCompleto,
            correo: store.correo,
            contrasenia: store.contrasenia,
            telefono: store.telefono,
            direccion: store.direccion,
            numero: store.numero,
            comuna: store.comuna,
            tipoVivienda: store.tipoVivienda,
            numDepto: store.numDepto,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const resp = await fetch(store.apiUrl + "/api/crearusuario", options);
        const datos = await resp.json();
        console.log(datos);
        setStore({
          currentUser: datos.usuario,
          cliente_id: datos.usuario.id,
          nombreCompleto: null,
          correo: null,
          contrasenia: null,
          confirmContrasenia: null,
          telefono: null,
          direccion: null,
          numero: null,
          comuna: null,
          tipoVivienda: null,
          numDepto: null,
          msg: datos.msg,
        });
        alert(store.msgUsuario);
        history.push("/");
      },

      handleRegistroPublicacion: async (e, history) => {
        e.preventDefault();

        const store = getStore();
        const options = {
          method: "POST",
          body: JSON.stringify({
            cliente_id: store.cliente_id,
            titulo: store.titulo,
            nombreAutor: store.nombreAutor,
            editorial: store.editorial,
            nivel: store.nivel,
            asignatura: store.asignatura,
            estadoNuevoUsado: store.estadoNuevoUsado,
            condicionOriginalCopia: store.condicionOriginalCopia,
            tipoIntercambio: store.tipoIntercambio,
            precio: store.precio,
            comentarios: store.comentarios,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const resp = await fetch(store.apiUrl + "/api/crearlibro", options);
        const datos = await resp.json();
        console.log(datos);
        setStore({
          titulo: null,
          nombreAutor: null,
          editorial: null,
          nivel: null,
          asignatura: null,
          estadoNuevoUsado: null,
          condicionOriginalCopia: null,
          tipoIntercambio: null,
          precio: null,
          comentarios: null,
          msgPublicacion: datos.msg,
        });
        alert(store.msgPublicacion);
        history.push("/");
      },

      handleLogin: async (e, history) => {
        e.preventDefault();

        const actions = getActions();
        const store = getStore();

        const options = {
          method: "POST",
          body: JSON.stringify({
            correo: store.correo,
            contrasenia: store.contrasenia,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const resp = await fetch(store.apiUrl + "/api/login", options);
        const datos = await resp.json();
        /*  */
        const optionsPerfil = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + datos.tokenLogin,
          },
        };
        const respPerfil = await fetch(store.apiUrl + "/api/perfil", optionsPerfil);
        const datosPerfil = await respPerfil.json();
        /*  */
        console.log(datos);
        setStore({
          currentUser: datos,
          contrasenia: null,
          error: datosPerfil,
          estaAut: true,
        });
        localStorage.setItem("currentUser", JSON.stringify(datos));
        localStorage.setItem("estaAut", true);
        history.push("/");
        alert(store.currentUser.tokenLogin);
        //actions.handleLocal();
      },

      estaAutenticado: () => {
        if (localStorage.getItem("estaAut")) {
          setStore({
            currentUser: JSON.parse(localStorage.getItem("currentUser")),
            estaAut: JSON.parse(localStorage.getItem("estaAut")),
          });
        }
      },
      
    },
  };
};

export default getState;
