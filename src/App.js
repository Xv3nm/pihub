import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Starting <code>very</code> slowly.
        </p>
        <a
          className="App-link"
          href="https://github.com/Xv3nm/pihub"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my GitHub repository
        </a>
        <a
	  className="App-link"
	  href="https://github.com/Xv3nm/pihub/issues"
	  target="_blank"
	  rel="noopener noreferrer"
  	 >
	  Report issues here
	</a>
      </header>
    </div>
  );
}

export default App;
