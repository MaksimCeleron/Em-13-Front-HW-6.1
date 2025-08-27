import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
          <h1>PROJECT<br><b>Lorum</b></h1>
        </main>
        <footer className="container footer">
          MaksimCeleron 2025
        </footer>
      </div>
    </>
  )
}

export default App
