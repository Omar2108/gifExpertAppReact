import React, { useState } from "react";
import { AddCategorias } from "./component/AddCategorias";
import { GifGrid } from "./component/GifGrid";
//import { GifGrid } from "./component/GifGrid";

export const GifExpertApp = () =>{

    const [categorias, setCategorias] = useState(['Dragon ball']);

    return (
        <React.StrictMode>
            <div>
                <h2>GifExpertApp</h2>
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