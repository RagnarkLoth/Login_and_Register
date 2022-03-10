import React, {useState, useEffect} from "react";
import Cartas from "../ui/Cartas";
import axios from 'axios';




const Listado = () => {
    /*
    const[datosApi, setDatosApi] = useState([])

    useState(() => {
        axios.get("https://backend-edw.herokuapp.com/usuarios").then(respuesta =>{
            setDatosApi(respuesta.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [setDatosApi])
    */
    return(
        /*
        datosApi.map(datoApi => (
            <Cartas nombre={datoApi[1]} usuario={datoApi[2]} key={datoApi[0]}/>
        ))
        */
       <h1>Hola</h1>

    )

}

export default Listado