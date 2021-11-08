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
      </body>
      <hr className="solid"></hr>
      <footer className="App-footer">
        <p className="credits">Copyright 2020 - Holbertonschool</p>
      </footer>
    </div>
  );
}

export default App;
