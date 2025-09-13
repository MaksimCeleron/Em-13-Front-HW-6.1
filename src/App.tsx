import { useState } from "react";
import "./App.css";
import house from "./assets/house.jpg";

function App() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="wrapper">
        <header className="container header">
          <nav>
            <ul>
              <li className="current-page">
                <a href="/">MAIN</a>
              </li>
              <li>
                <a href="/gallery">GALLERY</a>
              </li>
              <li>
                <a href="/projects">PROJECTS</a>
              </li>
              <li>
                <a href="/certifications">CERTIFICATIONS</a>
              </li>
              <li>
                <a href="/contacts">CONTACTS</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container content">
          <h1>
            <div className="light">PROJECT</div>
            <div className="bold">Lorum</div>
          </h1>
          <img src={house} alt="House" />
        </main>
        <footer className="container footer">MaksimCeleron 2025</footer>
      </div>
    </>
  );
}

export default App;
