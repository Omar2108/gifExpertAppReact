import React, { useState } from "react";
import { PropTypes } from "prop-types";



export function AddCategorias({ setCategorias }) {

    const [inputValor, setInputValor] = useState("");

    const handlerInputChange = (e) => {
        setInputValor(e.target.value);
    }

    const handlerSubmit = (e) => {
        e.preventDefault();

        if (inputValor.trim().length > 2) {
            setCategorias( cats => [inputValor, ...cats]);
            setInputValor("");
        }
        
    }


    return (

        <form onSubmit={ handlerSubmit }>
            <div>

                <input type="text" value={inputValor} onChange={handlerInputChange}></input>
            </div>
        </form>



    );
}

AddCategorias.prototype = {
    setCategorias : PropTypes.func.isRequired
}
