import React from "react";
import styles from "./Ahorcado.module.css"
import EstadoAhorcado from "./EstadoAhorcado";
import EstadoPalabra from "./EstadoPalabra";
import Teclado from "./Teclado";

const listaDePalabras = ['ELEFANTE', 'JIRAFA', 'CABALLO', 'KOALA']

class Ahorcado extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intentos: 6,
            letrasPalabraActual: ['E', 'L', 'E', 'F', 'A', 'N', 'T', 'E'],
            letrasAdivinadas: ['', '', '', '', '', '', '', ''],
            juegoTerminado: false,
            partidasSeguidasGanadas: 0,
        };
        this.verificarLetraPulsada = this.verificarLetraPulsada.bind(this);
    }

    // RESTA UN INTENTO
    menosUnIntento() {
        this.setState({ intentos: this.state.intentos - 1 })
    }

    // VERIFICA SI LA LETRA SE ENCUENTRA EN LA PALABRA A ADIVINAR Y LA REEMPLAZA EN letrasAdivinadas
    verificarLetraPulsada(letra) {
        // console.log(this.state)
        let auxAdivinadas = this.state.letrasAdivinadas;
        let auxPalabraActual = this.state.letrasPalabraActual;
        let isPresent = false;
        // BUSCA SI HAY UNA LETRA DE LA PALABRA QUE CONCIDA CON LA LETRA PULSADA Y LA REEMPLAZA
        auxPalabraActual.forEach((element, index) => {
            if (element === letra) {
                auxAdivinadas[index] = letra;
                isPresent = true;
            }
        });

        if (!isPresent) {  // SI LA LETRA PULSADA NO SE ENCUENTRA EN LA PALABRA
            if (this.state.intentos === 0) {
                this.setState({ juegoTerminado: true });
                console.log("FIN DEL JUEGO");

            } else {
                this.menosUnIntento()
            }

        }
        this.setState({ letrasAdivinadas: auxAdivinadas })
    }

    render() {
        console.log('INTENTOS RESTANTES:', this.state.intentos)
        const letrasAdivinadas = this.state.letrasAdivinadas
        const intentosRestantes = this.state.intentos

        // const pulsarLetra = () => {
        //     this.menosUnIntento()
        // }

        return (
            <div className={ styles.container } >
                <EstadoAhorcado intentosRestantes={ intentosRestantes } />
                <EstadoPalabra letrasAdivinadas={ letrasAdivinadas } />
                <Teclado verificarLetraPulsada={ this.verificarLetraPulsada } />
            </div >
        );
    }

}


export default Ahorcado