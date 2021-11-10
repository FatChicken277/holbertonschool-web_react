import { getFullYear, getFooterCopy } from './utils';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School Dashboard</h1>
      </header>
      <hr className="solid"></hr>
      <body className="App-body">
        <p>Login to access to the full dashboard</p>
        <div className="login">
          <label htmlFor="username">
            Email:
            <input></input>
          </label>
          <label htmlFor="password">
            Password:
            <input></input>
          </label>
          <button>Ok</button>
        </div>
      </body>
      <hr className="solid"></hr>
      <footer className="App-footer">
        <p className="credits">Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
