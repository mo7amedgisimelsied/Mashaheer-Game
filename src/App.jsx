import { useEffect, useState } from "react";
import Chat from "./Components/Chat";
import ComputerBoard from "./Components/ComputerBoard";
import InfoCard from "./Components/InfoCard";
import PlayerBoard from "./Components/PlayerBoard";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import questionsData from "./DataMock/questions";
import charactersData from "./DataMock/characters";

function App() {
  const [questions, setQuestions] = useState();
  const [styles, setStyles] = useState(
    Array(10).fill({ backgroundColor: "#0070E0" })
  );
  const [compChars, setCompChars] = useState();
  const [playerChars, setPlayerChars] = useState();
  const [playerChoice, setPlayerChoice] = useState({});
  const [selectedChar, setSelectedChar] = useState({});
  const [compChoice, setCompChoice] = useState({});

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  useEffect(() => {
    setCompChars(charactersData);
    setPlayerChars(charactersData);
    setSelectedChar(charactersData[0]);
    setCompChoice(charactersData[Math.floor(Math.random() * 10)]);
  }, []);

  return (
    <Router>
      <Route exact path="/game">
        <div className="game--container">
          <div className="left--bar">
            {compChars && (
              <ComputerBoard
                compCharacters={compChars}
                func={setCompChars}
                styles={styles}
              />
            )}
            <InfoCard selected={selectedChar} />
          </div>

          <div className="player--board">
            {playerChars && compChars && (
              <PlayerBoard
                playerCharacters={playerChars}
                func={setPlayerChars}
                playerChoice={playerChoice}
                selected={selectedChar}
                setSelectedChar={setSelectedChar}
                compChoice={compChoice}
              />
            )}
          </div>

          <div className="right--bar">
            {questions && compChars && (
              <Chat
                questions={questions}
                compCharacters={compChars}
                func={setCompChars}
                styles={styles}
                compChoice={compChoice}
              />
            )}
          </div>
        </div>
      </Route>

      <Route exact path="/">
        {playerChars && (
          <Home
            selectChar={[...playerChars]}
            playerChoice={playerChoice}
            setPlayerChoice={setPlayerChoice}
          />
        )}
      </Route>
    </Router>
  );
}

export default App;
