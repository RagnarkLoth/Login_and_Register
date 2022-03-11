import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";


const FormularioLogin = () => {

    useEffect(() => {
        localStorage.clear()
    },[])

    const post = () => {
        axios.post('https://backend-edw.herokuapp.com/login',{
            "username": document.getElementById("usuario").value,
            "password": document.getElementById("password").value
        }).then((respuesta) => {
            let token = respuesta.data
            let validacion = false
            console.log(token)
            if(token.length > 50){
                localStorage.setItem('token', token)
                validacion = true
            }  
            if(validacion){
                window.location = "/inicio"
            }else{
                console.log("error")
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
                        <NavLink to="/"><button className="botonIniciar" onClick={post}>iniciar</button></NavLink>
                        <NavLink to="/registro">Registrarse</NavLink>
                    </div>
                </form>
            </div>
        </main>


    )

}

export default FormularioLogin