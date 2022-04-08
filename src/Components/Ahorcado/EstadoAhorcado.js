import { useState } from "react";
import styles from "./EstadoAhorcado.module.css"

function EstadoAhorcado({ intentosRestantes }) {
    // letrasAdivinadas --> ARRAY
    return (
        <div className={ styles.estadoAhorcadoContainer }>
            { `Intentos restantes: ${intentosRestantes}` }
        </div>
    )

}


export default EstadoAhorcado