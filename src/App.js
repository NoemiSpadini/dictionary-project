import logo from "./colored_logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="cat" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/noemi-spadini/" target="blank">
            Noemi Spadini{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/NoemiSpadini/dictionary-project"
            target="blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://dictionary-noemispadini.netlify.app/" target="blank">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
