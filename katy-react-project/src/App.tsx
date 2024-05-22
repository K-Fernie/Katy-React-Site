import { useState } from 'react'
import reactLogo from './assets/react.svg'
import staticImage from './assets/katy-static.svg'
import gifImage from './assets/katy-running.gif'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentImage, setCurrentImage] = useState(staticImage);
  const handleMouseOver = () => {
      console.log('mouse over')
      setCurrentImage(gifImage);
  }

  const handleMouseLeave = () => {
      setCurrentImage(staticImage);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <div className="image-container">
              <img
                  src={currentImage}
                  alt="Hover to play GIF"
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
              />
          </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
