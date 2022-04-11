import React from "react";
import styles from "./Ahorcado.module.css"
import EstadoAhorcado from "./EstadoAhorcado";
import EstadoPalabra from "./EstadoPalabra";
import Teclado from "./Teclado";

import getGeneradoraPalabraAzar from './PALABRAS.js'
import Msg from "./Msg";

class Ahorcado extends React.Component {
    constructor(props) {
        super(props);
        this.getPalabraAlAzar = getGeneradoraPalabraAzar(); //getPalabraAlAzar --> FUNCION QUE RETORNA UNA PALABRA AL AZAR
        this.intentos = 6;
        this.state = {
            intentosRestantes: this.intentos,
            letrasPalabraActual: [],
            letrasAdivinadas: [],
            juegoTerminado: false,
            juegoGanado: false,
            racha: 0,
            letrasDesactivadas: {},
        };
        this.verificarEstadoJuego = this.verificarEstadoJuego.bind(this); // BINDEAMOS PARA DARLE ALCANCE AL THIS
        this.nuevoJuego = this.nuevoJuego.bind(this); // BINDEAMOS PARA DARLE ALCANCE AL THIS
    }

    // CARGA LA PALABRA A ADIVINAR AL ESTADO
    init(esPartidaSiguiente) {   // esPartidaSiguiente --> 1 SI EL JUGADOR GANÓ LA PARTIDA, 0 SI PERDIÓ
        this.setState({
            intentosRestantes: this.intentos,
            letrasPalabraActual: [],
            letrasAdivinadas: [],
            juegoTerminado: false,
            juegoGanado: false,
            racha: esPartidaSiguiente ? this.state.racha + 1 : 0,
            letrasDesactivadas: {},
        })

        const auxLetrasPalabraActual = this.getPalabraAlAzar().split('');  // DESCOMOPONE LA PALABRA EN ARRAY
        // const word = 'LEÓN MARINO'
        // const wordArr = word.split("");
        let auxLetrasAdivinadas = [];
        auxLetrasPalabraActual.forEach((c) => c === " " ? auxLetrasAdivinadas.push(" ") : auxLetrasAdivinadas.push(""))
        console.log(auxLetrasPalabraActual)
        console.log(auxLetrasAdivinadas)

        this.setState({
            letrasPalabraActual: auxLetrasPalabraActual,
            letrasAdivinadas: auxLetrasAdivinadas,  // EN FUNCION DE LA CANTIDAD DE LETRAS DE LA PALABRA ACTUAL CREA UN ARRAY DEL MISMO TAMAÑO PERO CON ESPACIOS VACIOS
        })
    }

    // RESTA UN INTENTO
    menosUnIntento() {
        this.setState({
            intentosRestantes: this.state.intentosRestantes - 1
        })
    }

    esGanador() {
        return JSON.stringify(this.state.letrasAdivinadas) === JSON.stringify(this.state.letrasPalabraActual)
    }

    setLetrasDesactivadas(letra) {
        this.setState({
            letrasDesactivadas: {
                ...this.state.letrasDesactivadas,
                [letra]: true
            }
        })
    }

    // VERIFICA SI LA LETRA SE ENCUENTRA EN LA PALABRA A ADIVINAR Y LA REEMPLAZA EN letrasAdivinadas
    verificarEstadoJuego(letra) {
        function qitarTildes(texto) {
            return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        }


        // AGREGAMOS LA LETRA A letrasDesactivadas DEL STATE PARA DESACTIVA EL BOTON CORRESPONDIENTE EN EL TECLADO
        this.setState({
            letrasDesactivadas: {
                ...this.state.letrasDesactivadas,
                [letra]: true,
            }
        })
        console.log("DESAC:", this.state.letrasDesactivadas)

        let auxAdivinadas = this.state.letrasAdivinadas;
        let auxPalabraActual = this.state.letrasPalabraActual;
        let isPresente = false;
        // BUSCA SI HAY UNA LETRA DE LA PALABRA QUE CONCIDA CON LA LETRA PULSADA Y LA REEMPLAZA
        auxPalabraActual.forEach((element, index) => {
            if (qitarTildes(element) === letra) {
                auxAdivinadas[index] = element;
                isPresente = true;
            }
        });

        if (!isPresente) {  // SI LA LETRA PULSADA NO SE ENCUENTRA EN LA PALABRA
            if (this.state.intentosRestantes === 0) {
                this.setState({ juegoTerminado: true });
                console.log("FIN DEL JUEGO");
                this.menosUnIntento()
            } else {
                this.menosUnIntento()
            }
        } else {// SI LETRA PULSADA SIII SE ENCUENTRA EN LA PALABRA
            const esGanador = JSON.stringify(this.state.letrasAdivinadas) === JSON.stringify(this.state.letrasPalabraActual)
            console.log(esGanador)
            if (esGanador) {
                this.init(1)
                return
            }

        }
        // 
        this.setState({ letrasAdivinadas: auxAdivinadas })
    }

    // SETEA UN JUEGO NUEVO
    nuevoJuego() {
        this.init(0)

    }



    // ------------------- CICLO DE VIDA ---------------------------//
    componentDidMount() {
        // const word = 'LEÓN MARINO'
        // const wordArr = word.split("");
        // let wordArr2 = [];
        // wordArr.forEach((c) => c === " " ? wordArr2.push(" ") : wordArr2.push(""))

        // this.setState({
        //     intentosRestantes: 6,
        //     letrasPalabraActual: wordArr,
        //     letrasAdivinadas: wordArr2,
        //     juegoTerminado: false,
        //     juegoGanado: false,
        //     racha: 0,
        //     letrasDesactivadas: {},
        // })
        this.init(0)
    }

    render() {
        console.log('intentosRestantes RESTANTES:', this.state.intentosRestantes)
        const letrasAdivinadas = this.state.letrasAdivinadas;
        const letrasPalabraActual = this.state.letrasPalabraActual;
        const intentosRestantes = this.state.intentosRestantes;
        const racha = this.state.racha;
        const letrasDesactivadas = this.state.letrasDesactivadas;
        const juegoPerdido = this.state.juegoTerminado === true && this.state.juegoGanado === false;

        return (
            <div className={ styles.container } >
                <EstadoAhorcado intentosRestantes={ intentosRestantes } racha={ racha } />
                <EstadoPalabra letrasAdivinadas={ letrasAdivinadas } />
                <Teclado verificarEstadoJuego={ this.verificarEstadoJuego } letrasDesactivadas={ letrasDesactivadas } />

                { juegoPerdido ? <Msg nuevoJuego={ this.nuevoJuego } letrasPalabraActual={ letrasPalabraActual } /> : null }
            </div >
        );
    }

}


export default Ahorcado