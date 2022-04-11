import { useState } from "react";
import styles from "./EstadoAhorcado.module.css"
import img6 from "../../img/secuenciaAhorcado/6.png"
import img5 from "../../img/secuenciaAhorcado/5.png"
import img4 from "../../img/secuenciaAhorcado/4.png"
import img3 from "../../img/secuenciaAhorcado/3.png"
import img2 from "../../img/secuenciaAhorcado/2.png"
import img1 from "../../img/secuenciaAhorcado/1.png"
import img0 from "../../img/secuenciaAhorcado/0.png"

function EstadoAhorcado({ intentosRestantes, racha }) {
    // letrasAdivinadas --> ARRAY
    const estados = [null, img0, img1, img2, img3, img4, img5, img6];
    // const estados = [img6, img5, img4, img3, img2, img1, img0, null];


    const estadoAhorcado = estados[6 - intentosRestantes]

    return (
        <div className={ styles.estadoAhorcadoContainer }>
            <div className={ styles.divImgEstadoAhorcado }>
                <img src={ estadoAhorcado } height="200px" alt="" ></img>
            </div>
            { `Intentos restantes: ${intentosRestantes} - Racha: ${racha}` }
            <div>
                <div>

                </div>
            </div>

        </div >
    )

}


export default EstadoAhorcado