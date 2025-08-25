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
              <li><a href="/">MAIN</a></li>
              <li><a href="/gallery">GALLERY</a></li>
              <li><a href="/projects">PROJECTS</a></li>
              <li><a href="/certifications">CERTIFICATIONS</a></li>
              <li><a href="/contacts">CONTACTS</a></li>
            </ul>
          </div>
        </header>
        <main className="container content">
          <h1>PROJECT<br>Lorum</br></h1>
        </main>
        <footer className="container footer">
          MaksimCeleron 2025
        </footer>
      </div>
    </>
  )
}

export default App
