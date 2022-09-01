import logo from './logo.svg';
import './App.css';
import AnimalKingdom from './header';
import AnimalFeet from './footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-sm">
          {" "}
          <a
            className="nav-brand"
            href="www.qa.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              alt="logo"
              src="https://i.imgur.com/smguoM3.png"
              width="100"
            />{" "}
          </a>{" "}
          <a
            href="https://qa-community.co.uk/~/_/learning"
            target="_blank"
            className="navbar-brand"
          >
            {" "}
            Shahmeen's Sanctuary{" "}
          </a>{" "}
        </nav>
        <AnimalKingdom />
      </header>
      <footer>
        <AnimalFeet />
      </footer>
    </div>
  );
}

export default App;

