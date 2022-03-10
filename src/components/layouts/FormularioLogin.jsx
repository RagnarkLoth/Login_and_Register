import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const FormularioLogin = () => {

    const[ruta, setRuta] = useState(true)

    const post = () => {
        axios.post('https://backend-edw.herokuapp.com/login',{
            "username": document.getElementById("usuario").value,
            "password": document.getElementById("password").value
        }).then((respuesta) => {
            console.log(respuesta)
            if(respuesta.data.length > 20){
                console.log("Logueo exitoso")
                setRuta(false)
            }else{
                console.log("error")
                setRuta(true)
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        window.addEventListener("keypress", function(event){
            if (event.keyCode == 13){
                event.preventDefault();
            }
        }, false);
    }, [])

    

    return(

        <main>
            <div className="formLogin">
                <h1>LOGIN</h1>
                <form method="post">
                    <div className="inputs">
                        <label>Usuario:</label>
                        <input type="text" className="usuario" id="usuario" />
                    </div>
                    <div className="inputs">
                        <label>Contraseña:</label>
                        <input type="password" className="password" id="password"/>
                    </div>
                    <div className="botones">
                        {ruta ? <NavLink to="/"><button className="botonIniciar" onClick={post}>iniciar</button></NavLink> : <NavLink to={"/inicio"}><button className="botonIniciar" onClick={post}>iniciar</button></NavLink>}
                        <NavLink to="/registro">Registrarse</NavLink>
                    </div>
                </form>
            </div>
        </main>


    )

}

export default FormularioLogin