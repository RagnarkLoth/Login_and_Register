import React, {useState, useEffect} from "react";

const Cartas = ({nombre, usuario}) => {

    return(

        <div className="carta">
            <div className="texto">
                <p>{nombre}</p>
                <p>{usuario}</p>
            </div>
            <img src="" alt="imagenPrueba" />
        </div>

    )

}

export default Cartas