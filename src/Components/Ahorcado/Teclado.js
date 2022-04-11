import styles from "./Teclado.module.css"
import { useState } from "react";

function qitarTildes(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function Teclado(props) {
    const verificarEstadoJuego = props.verificarEstadoJuego;
    const letrasDesactivadas = props.letrasDesactivadas;

    function Tecla({ letra, onClick }) {
        return (
            <button
                disabled={ letrasDesactivadas[qitarTildes(letra)] }
                onClick={ () => onClick(letra) }
            >
                { letra }
            </button>
        )
    }


    // OBJETO CON LAS FILAS DE LAS TECLAS DEL JUEGO
    const letrasTeclado = {
        fila1: ["A", "B", "C", "D", "E", "F", "G"],
        fila2: ["H", "I", "J", "K", "L", "M", "N"],
        fila3: ["Ñ", "O", "P", "Q", "R", "S", "T"],
        fila4: ["U", "V", "W", "X", "Y", "Z"]
    }
    // FILAS DE BOTONES QUE REPRESENTAN LAS TECLAS
    const f1 = letrasTeclado.fila1.map((l, index) => <Tecla key={ index + l } letra={ l } onClick={ verificarEstadoJuego } />)
    const f2 = letrasTeclado.fila2.map((l, index) => <Tecla key={ index + l } letra={ l } onClick={ verificarEstadoJuego } />)
    const f3 = letrasTeclado.fila3.map((l, index) => <Tecla key={ index + l } letra={ l } onClick={ verificarEstadoJuego } />)
    const f4 = letrasTeclado.fila4.map((l, index) => <Tecla key={ index + l } letra={ l } onClick={ verificarEstadoJuego } />)

    return (
        <div className={ styles.Teclado }  >
            <div className={ styles.filaDeLetras }>{ f1 }</div>
            <div className={ styles.filaDeLetras }>{ f2 }</div>
            <div className={ styles.filaDeLetras }>{ f3 }</div>
            <div className={ styles.filaDeLetras4 }>{ f4 }</div>
        </div>

    )



}

export default Teclado