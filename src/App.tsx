import { useState } from 'react'
import './App.css'
import artists from './assets/artists.json'

function getRandomArtist() {
  const randomArtist = artists[Math.floor(Math.random() * artists.length)]
  return randomArtist
}

function App() {
  const [randomArtist, setRandomArtist] = useState(getRandomArtist())

  return (
    <div className="App">
      <h1>{randomArtist}</h1>
      <div className="card">
        <button onClick={() => setRandomArtist(getRandomArtist())}>
          Next artist
        </button>
      </div>
      <p className="read-the-docs">
        This page does nothing more than displaying a random artist from a list.
      </p>
    </div>
  )
}

export default App