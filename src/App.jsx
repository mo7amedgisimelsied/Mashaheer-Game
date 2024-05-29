import { useEffect, useState } from "react"
import Chat from "./Components/Chat"
import ComputerBoard from "./Components/ComputerBoard"
import InfoCard from "./Components/InfoCard"
import PlayerBoard from "./Components/PlayerBoard"


function App() {
  const [questions, setQuestions] = useState();
  const [characters, setCharacters] = useState();
  useEffect( () => {
            fetch("http://localhost:8080/Test/questions")
            .then(res => res.json())
            .then((result) => {setQuestions(result)})
          }
  ,[])
  useEffect( () => {
    fetch("http://localhost:8080/Test/characters")
    .then(res => res.json())
    .then((result) => {setCharacters(result)})
  }
,[])

  return (
    <div className="game--container">
      <div className="left--bar">
      <ComputerBoard />
      <InfoCard />
      </div>

      <div className="player--board">
      {characters && <PlayerBoard characters = {characters}/>}
      </div>

      <div className="right--bar">
        {questions && <Chat questions = {questions}/>}
      </div>
    </div>
  )
}

export default App
