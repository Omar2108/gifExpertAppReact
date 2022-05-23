import React, { useState } from "react";
import { AddCategorias } from "./component/AddCategorias";
import { GifGrid } from "./component/GifGrid";
//import { GifGrid } from "./component/GifGrid";

export const GifExpertApp = () =>{

    const [categorias, setCategorias] = useState(['Dragon ball']);

    return (
        <React.StrictMode>
            <div>
                <h1>APP CON REACT VERSION 18</h1>
                <h2>Ingrese un palabra para buscar una lista de imagenes</h2>
                <AddCategorias setCategorias = { setCategorias }></AddCategorias>

                <hr></hr>

                <ol>
                    {
                        categorias.map(cat =>{
                            return <GifGrid key={cat} cat={cat}></GifGrid>;
                        })
                    }
                </ol>
            </div>
        </React.StrictMode>
    );
}