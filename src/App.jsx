import './App.css'
import Navbar from './components/Navbar/Navbar';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import { Suspense, useState } from 'react';
  import { ToastContainer} from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}
  const playerPromise = fetchPlayers();
function App() {

  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState('99999999');
  const [purchasedPlayers, setPurchasedPlayers] = useState([])

  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(ply => ply.player_name !== p.player_name)
    setPurchasedPlayers(filteredData)
    setAvailableBalance(availableBalance + parseInt(p.price.split(',').join('')))
  }
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center mt-4'>
        <h1 className='text-2xl font-bold'>
          {toggle ? "Available Players" : `Selected Players (${purchasedPlayers.length}/6)`}
        </h1>

        <div className='font-bold'>
          <button onClick={()=> {
            setToggle(true)
          }} className={`py-2 px-4 border-1 border-gray-400 rounded-l-2xl border-l-0 ${toggle=== true? "bg-[#E7FE29]": " "}`}>Available
          </button>
          <button onClick={()=> {
            setToggle(false)
          }} className={`py-2 px-4 border-1 border-gray-400 rounded-r-2xl border-r-0 ${toggle===false? "bg-[#E7FE29]": " "}`}>
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {
        toggle ? <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                    <AvailablePlayers 
                        purchasedPlayers={purchasedPlayers} 
                        setPurchasedPlayers={setPurchasedPlayers}
                        availableBalance={availableBalance} 
                        setAvailableBalance={setAvailableBalance} 
                        playerPromise={playerPromise}>     
                    </AvailablePlayers>
                </Suspense> : <SelectedPlayers 
                        purchasedPlayers={purchasedPlayers} 
                        removePlayer={removePlayer}
                        setPurchasedPlayers={setPurchasedPlayers}></SelectedPlayers>
      }
      <ToastContainer/>
    </>
  )
}

export default App
