import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="wrapper">
        <header className="container header">
          <div className="nav">
            <ul>
              <div className="nav-item current-page">
                <li><a href="/">MAIN</a></li>
              </div>
              <div className="nav-item">
                <li><a href="/gallery">GALLERY</a></li>
              </div>
              <div className="nav-item">
                <li><a href="/projects">PROJECTS</a></li>
              </div>
              <div className="nav-item">
                <li><a href="/certifications">CERTIFICATIONS</a></li
              </div>
              <div className="nav-item">
                <li><a href="/contacts">CONTACTS</a></li>
              </div>
            </ul>
          </div>
        </header>
        <main className="container content">
          <h1>
            <div className="light">PROJECT</div>
            <div className="bold">Lorum</div>
          </h1>
        </main>
        <footer className="container footer">MaksimCeleron 2025</footer>
      </div>
    </>
  );
}

export default App;
