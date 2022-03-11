import React, {useState, useEffect} from "react";
import Cartas from "../ui/Cartas";
import axios from 'axios';
import jwtDecode from "jwt-decode"; 

const Listado = () => {
    
    const[datosApi, setDatosApi] = useState([])

    const token = localStorage.getItem('token')
    const infoToken = jwtDecode(token)

    useState(() => {
        axios.get("https://backend-edw.herokuapp.com/usuario/"+infoToken.id).then(respuesta =>{
            setDatosApi(respuesta.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [setDatosApi])
    
    return(
        <>
            <Cartas nombre={datosApi[1]} usuario={datosApi[2]}/>     
        </>

    )

}

export default Listado