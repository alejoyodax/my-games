import { Route } from 'react-router-dom';
import './App.css';

// IMPORTAMOS LOS COMPONENTES NECESARIOS
import Navbar from './Components/Navbar';

import Ahorcado from './Components/Ahorcado/Ahorcado';
import Triki from './Components/Triki/Triki';
import Sudoku from './Components/Sudoku/Sudoku';

function App() {
  return (

    <div className="App">
      <Navbar />
      <Route exact
        path='/'
        component={ Ahorcado }
      />

      <Route
        path='/ahorcado'
        component={ Ahorcado }
      />

      <Route
        path='/sudoku'
        component={ Sudoku }
      />

      <Route
        path='/triki'
        component={ Triki }
      />

    </div>

  );
}

export default App;
