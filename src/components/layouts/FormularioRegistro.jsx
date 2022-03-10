import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const FormularioRegistro = () => {

    const[ruta, setRuta] = useState(false)

    const post = () => {
        let username = document.getElementById("inputUsuario").value
        let password = document.getElementById("inputPassword").value
        let name = document.getElementById("inputNombreCompleto").value
        axios.post('https://backend-edw.herokuapp.com/usuario',{
            "username":username,
            "password":password,
            "name":name
        }).then((respuesta) => {
            console.log(respuesta)
            if(respuesta.data.Message === "Usuario con ese username ya esta registrado"){
                console.log(respuesta.data.Message)
                setRuta(false)
            }else{
                console.log("Registro realizado correctamente")
                setRuta(true)
            }
        }).catch((error) => {
            console.log(error)
            setRuta(false)
        })
    }

    return(
        <main>
            <div className="formRegistro">
                <h1>REGISTRO</h1>
                <form method="post">
                    <div className="inputs">
                        <label>Nombre Completo:</label>
                        <input type="text" id="inputNombreCompleto"/>
                    </div>
                    <div className="inputs">
                        <label>Nombre Usuario:</label>
                        <input type="text" id="inputUsuario"/>
                    </div>
                    <div className="inputs">
                        <label>Contraseña:</label>
                        <input type="password" id="inputPassword"/>
                    </div>
                    <div className="botones">
                        { ruta ? <NavLink to="/inicio" onClick={post}><button>Iniciar</button></NavLink> : <NavLink to="/registro" onClick={post}><button>Iniciar</button></NavLink>}
                        <NavLink to="/"><button>Cancelar</button></NavLink>
                    </div>
                </form>

            </div>
        </main>

    )

}

export default FormularioRegistro;