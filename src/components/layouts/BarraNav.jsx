import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

const BarraNavegacion = () => {

    return(

        <nav>

            <ul>
                <NavLink to=""><li>INICIO</li></NavLink>
                <NavLink to="/"><li>SALIR</li></NavLink>
            </ul>

        </nav>

    )

}

export default BarraNavegacion