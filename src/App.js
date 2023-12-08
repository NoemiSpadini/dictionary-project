import React from "react";
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
        <footer className="App-footer">Coded by Noemi Spadini</footer>
      </div>
    </div>
  );
}
