import './App.css';
import Weather from './Weather';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project is coded by{" "}
          <a
            href="https://www.linkedin.com/in/frontenddevviktoriiasandul/"
            target="_blank"
            rel="noreferrer"
          >
            Viktoriia Sandul
          </a>{" "}
          is {""}
          <a
            href="https://github.com/VicroriaS/react-weather-search"
            target="_blank"
            rel="noreferrer"
          >
            open-soursed on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
