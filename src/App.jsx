import './App.css'
import Navbar from './components/Navbar/Navbar';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import { Suspense } from 'react';

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

function App() {
  
  const playerPromise = fetchPlayers();

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <AvailablePlayers playerPromise={playerPromise}>
        
        </AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>

    </>
  )
}

export default App
