import logo from './logo.svg';
import './App.css';
// micro-app-react/src/App.jsx
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/sub-react" : "";

function App() {
  return (
    <div className="App" basename={BASE_NAME}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
