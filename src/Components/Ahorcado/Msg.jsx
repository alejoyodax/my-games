import styles from "./Msg.module.css"

export default function Msg({ nuevoJuego, letrasPalabraActual }) {
    const palabraActual = letrasPalabraActual.join("")

    return (
        <div className={ styles.msgContainer }>
            <h1>!HAS PERDIDO¡</h1>
            <h3>{ `La palabra era : ${palabraActual}` }</h3>
            <button button className={ styles.newGame } onClick={ nuevoJuego } > JUEGAR DE NUEVO </button>
        </div>
    )


}