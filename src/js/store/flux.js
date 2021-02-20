const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            libros: [],
            clientes: [], 
        },
        actions: {
            getLibro: (libro) => {        //estoy a la espera del https para el fetch
                const store= getStore()
                // fetch('https:....', {
                //     method: 'POST',
                //     body: JSON.stringify(libro), // data can be `string` or {object}!
                //     headers: {
                //         'Content-Type': 'application/json'
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
                
            }
        },
    };
};
export default getState;