import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom';

function Navbar() {
    // const { header } = styles

    return (
        <nav className={ styles.header }>
            {/* <span className={ styles.logo } >LOGO</span> */ }
            <div className={ styles.headerGameList }>

                <Link to="/ahorcado" style={ { textDecoration: 'none' } }>
                    <span className={ styles.linkGame } >Ahorcado - by alejoyodax</span>
                </Link>

                {/* <Link to="/triki" style={ { textDecoration: 'none' } }>
                    <span className={ styles.linkGame }>triki</span>
                </Link>

                <Link to="/sudoku" style={ { textDecoration: 'none' } }>
                    <span className={ styles.linkGame }>sudoku</span>
                </Link> */}

            </div>
            {/* <div>
                <span className={ styles.loginButton } >alejoyodax</span>
            </div> */}
        </nav >

    )

}

export default Navbar