import { useEffect, useState } from "react"
import Chat from "./Components/Chat"
import ComputerBoard from "./Components/ComputerBoard"
import InfoCard from "./Components/InfoCard"
import PlayerBoard from "./Components/PlayerBoard"


function App() {
  const [questions, setQuestions] = useState();
  const [styles, setStyles] = useState(Array(10).fill({backgroundColor: "blue"}));
  const [compChars, setCompChars] = useState();
  const [playerChars, setPlayerChars] = useState();
  


  useEffect( () => {
            fetch("http://localhost:8080/Test/questions")
            .then(res => res.json())
            .then((result) => {setQuestions(result)})
          }
  ,[])
  useEffect( () => {
    fetch("http://localhost:8080/Test/characters")
    .then(res => res.json())
    .then((result) => {setCompChars(result); setPlayerChars(result)})
    
  }
,[])


  return (
    <div className="game--container">
      <div className="left--bar">
      {compChars && <ComputerBoard compCharacters = {compChars} func = {setCompChars} styles = {styles} />}
      <InfoCard />
      </div>

      <div className="player--board">
      {playerChars && <PlayerBoard playerCharacters = {playerChars} func = {setPlayerChars}/>}
      </div>

      <div className="right--bar">
        {questions && compChars && <Chat questions = {questions} compCharacters = {compChars} func = {setCompChars} styles = {styles} compChoice = {compChars[1]}/>}
      </div>
    </div>
  )
}

export default App
