import logo from './logo.svg';
import './App.css';
import AnimalKingdom from './header';
import AnimalFeet from './footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnimalKingdom/>
      
      </header>
      <footer>
        <AnimalFeet/>
      </footer>
    </div>
  );
}

export default App;

