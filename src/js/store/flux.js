const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            libros: [],
            clientes: [],

        },
        actions: {

            getLibro: (libro) => {        //estoy a la espera del https para el fetch
                const store = getStore()
                // fetch('https:....', {
                //     method: 'POST',
                //     body: JSON.stringify(libro), // data can be `string` or {object}!
                //     headers: {
                //     'Content-Type': 'application/json'
                //     },
                // }).then(res => res.json())
                //     .then(response => {console.log('Success:', JSON.stringify(libro))
                //     setStore({
                //         libros: libro
                //     })})
                //     .catch(error => console.error('Error:', error));
                setStore(
                    store.libros.push(libro)
                )
            },

            setCliente: (cliente, history) => {
                const { clientes } = getStore()
                setStore({ clientes: clientes.concat(cliente) })
                history.push("/")
            },

            setPublicacion: (libro, history) => {
                const { libros } = getStore()
                setStore({ libros: libros.concat(libro) })
                history.push("/")
            },
            obtenerLibro: () => {
                const store = getStore();
                fetch("https://assets.breatheco.de/apis/fake/contact/agenda/DoIt", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(resp => resp.json())
                    .then(data => setStore({ libros: data }))
                    .catch(error => console.log(error));
            },
            obtenerCliente: () => {
                const store = getStore();
                fetch("https://assets.breatheco.de/apis/fake/contact/agenda/DoIt", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(resp => resp.json())
                    .then(data => setStore({ clientes: data }))
                    .catch(error => console.log(error));
            },

            modificarLibro: (libro) => {
                const store = getStore();
                fetch('https:example.com/users', {
                    method: 'PUT',
                    body: JSON.stringify(libro),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                    .then(response => console.log('Success:', JSON.stringify(libro)))
                    .catch(error => console.error('Error:', error));

            },
        },
    };
};

export default getState;