import React, {useState, useEffect} from "react";

const Cartas = ({nombre, usuario}) => {

    return(

        <div className="carta">
            <div className="texto">
                <h1>Nombre:</h1>
                <p>{nombre}</p>
            </div>
            <div className="texto">
                <h1>Usuario:</h1>
                <p>{usuario}</p>    
            </div>
        </div>

    )

}

export default Cartas