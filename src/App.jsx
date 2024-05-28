import Chat from "./Components/Chat"
import ComputerBoard from "./Components/ComputerBoard"
import InfoCard from "./Components/InfoCard"
import PlayerBoard from "./Components/PlayerBoard"


function App() {
  

  return (
    <div className="game--container">
      <div className="left--bar">
      <ComputerBoard />
      <InfoCard />
      </div>

      <div className="player--board">
      <PlayerBoard />
      </div>

      <div className="right--bar">
        <Chat />
      </div>
    </div>
  )
}

export default App
