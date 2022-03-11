import React, {useState, useEffect} from "react";
import BarraNavegacion from "../layouts/BarraNav";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listado from "../layouts/Listado";



const Inicio = () => {

    return(
        <>
            <header>
                <BarraNavegacion/>
            </header>
            <div className="listados">
                <Routes>
                    <Route path="" element={
                        <Listado/>
                    }/>
                    <Route path="/buscar" element={
                        <Listado/>
                    }/>
                </Routes>
            </div>
        </>            
    )


}

export default Inicio