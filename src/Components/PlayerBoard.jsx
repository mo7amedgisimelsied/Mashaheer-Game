import { useState } from "react";

function PlayerBoard(props) {
  const [playerAnswer, setPlayerAnswer] = useState([...props.playerCharacters]);
  var [switcher, setSwitcher] = useState(Array(10).fill(true));
  const [feedback, setFeedback] = useState(<span></span>);

  function Header() {
    return (
      <div className="header-container">
        <div>
          <img
            src={props.playerChoice.pic}
            style={{ width: "8rem", height: "8rem", objectFit: "cover" }}
          />
          <p style={{ margin: "0" }}>{props.playerChoice.name}</p>
        </div>
        <p>
          Guess which person the computer is thinking about before he guesses
          your person first!
        </p>
      </div>
    );
  }

  function remove(id) {
    console.log(props.compChoice.name);
    // Find the character to remove
    const removedCharacter = playerAnswer.find(
      (item) => item.characterId === id
    );

    if (!removedCharacter) {
      console.log("Character not found!");
      return;
    }

    // Create a new array without the removed character
    const updatedAnswer = playerAnswer.filter(
      (item) => item.characterId !== id
    );

    if (updatedAnswer.length === 0) {
      console.log("That was your best shot? You lost...");
    } else if (updatedAnswer.length === 1) {
      console.log(
        `Checking characterId: ${updatedAnswer[0].characterId} against ${props.compChoice.characterId}`
      );
      updatedAnswer[0].characterId === props.compChoice.characterId
        ? setFeedback(
            <span
              style={{
                color: "rgb(0, 255, 0)",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              You Won!!{" "}
              <span role="img" aria-label="trophy">
                🏆
              </span>
            </span>
          )
        : setFeedback(
            <span style={{ color: "red", fontWeight: "bold" }}>
              You lost, I was thinking about {props.compChoice.name}{" "}
              <span role="img" aria-label="disappointed face">
                😞
              </span>
            </span>
          );
    } else {
      setFeedback(
        <span>
          You eliminated{" "}
          <span style={{ color: "red" }}>{removedCharacter.name}</span>
        </span>
      );
    }

    // Update the state with the new array
    setPlayerAnswer(updatedAnswer);
  }

  function add(char) {
    setPlayerAnswer((prev) => {
      const newArr = [...prev];
      console.log(char);
      setFeedback(
        <span>
          You uneliminated <span style={{ color: "green" }}>{char.name}</span>
        </span>
      );
      newArr.push(char);
      return newArr;
    });
  }

  return (
    <>
      <Header />
      <p style={{ margin: "0 0 0 1rem" }}>{feedback}</p>

      <div className="board2">
        {props.playerCharacters.map((char, index) => (
          <div
            className="playerBoard-char"
            onMouseEnter={() => props.setSelectedChar(char)}
            style={{
              background: `url(${char.pic}) no-repeat center/cover`,
              opacity: `${switcher[index] ? "1" : "0.5"}`,
            }}
            onClick={() => {
              if (switcher[index]) {
                remove(char.characterId);
                setSwitcher((prev) => {
                  const new_arr = [...prev];
                  new_arr[index] = false;
                  return new_arr;
                });
              } else {
                add(char);
                setSwitcher((prev) => {
                  const new_arr = [...prev];
                  new_arr[index] = true;
                  return new_arr;
                });
              }
            }}
          >
            <p>{char.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PlayerBoard;
