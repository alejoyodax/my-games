import styles from "./EstadoPalabra.module.css"
import { useState } from "react";

function ContenedorLetra(props) {
    const letra = props.letra;
    const containerLetra = styles.contenedorLetra
    const containerLetraOculto = styles.contenedorLetraOculto

    return (
        <div className={ letra === " " ? containerLetraOculto : containerLetra }
        >
            { letra ? letra : "" }
        </div>
    )




}


function EstadoPalabra({ letrasAdivinadas }) {
    // letrasAdivinadas --> ARRAY
    return (
        <div className={ styles.estadoPalabra }>
            { letrasAdivinadas.map((letra, index) =>
                (<ContenedorLetra letra={ letra } key={ letra + index } />)
            ) }
        </div>
    )

}


export default EstadoPalabra
