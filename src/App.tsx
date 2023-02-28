import { useState } from 'react'
import './App.css'
import artistsFromSorted from './assets/artistsFromSorted.json'
import artistsManual from './assets/artistsManual.json'

const artists = [...artistsFromSorted, ...artistsManual];

function getRandomArtist() {
  const randomArtist = artists[Math.floor(Math.random() * artists.length)]
  return randomArtist
}

function formatArtistNameForUrl(artistName: string) {
  return artistName.toLowerCase().replace(/ /g, '%20');
}

function App() {
  const [randomArtist, setRandomArtist] = useState(getRandomArtist())

  return (
    <div className="App">
      <h1><a href={`spotify:search:${formatArtistNameForUrl(randomArtist)}`} target="_blank">{randomArtist}</a></h1>
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
