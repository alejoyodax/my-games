import styles from "./Teclado.module.css"



function Tecla({ letra }) {
    return (
        <button>{ letra }</button>
    )
}

function Teclado() {
    // OBJETO CON LAS FILAS DE LAS TECLAS DEL JUEGO
    const letrasTeclado = {
        fila1: ["A", "B", "C", "D", "E", "F", "G"],
        fila2: ["H", "I", "J", "K", "L", "M", "N"],
        fila3: ["Ñ", "O", "P", "Q", "R", "S", "T"],
        fila4: ["U", "V", "W", "X", "Y", "Z"]
    }
    // FILAS DE BOTONES QUE REPRESENTAN LAS TECLAS
    const f1 = letrasTeclado.fila1.map((l, index) => <Tecla key={ index } letra={ l } />)
    const f2 = letrasTeclado.fila2.map((l) => <Tecla letra={ l } />)
    const f3 = letrasTeclado.fila3.map((l) => <Tecla letra={ l } />)
    const f4 = letrasTeclado.fila4.map((l) => <Tecla letra={ l } />)

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