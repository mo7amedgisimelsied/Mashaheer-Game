import { useState } from "react";



function PlayerBoard(props){


    function Header(){


        return(
            <div style={{display: "flex", gap: "3rem",textAlign: "center", padding: "2rem 1rem", borderBottom: "1px #5B5B5B solid"}}>
                <div>
                <img src={props.playerChoice.pic} style={{width: "8rem", height: "8rem", objectFit: "cover"}}/>
                <p style={{margin: "0"}}>{props.playerChoice.name}</p>
                </div>
                <p>Guess which person the computer is thinking about before he guesses your person first!</p>
            </div>
        )
    }
    
    
    const [playerAnswer, setPlayerAnswer] = useState([...props.playerCharacters]);
    var [switcher, setSwitcher] = useState(Array(10).fill(true));
    const [feedback, setFeedback] = useState(<span>{props.compChoice.name}</span>);
    
    function remove(id) {
        console.log(props.compChoice.name)
        // Find the character to remove
        const removedCharacter = playerAnswer.find(item => item.characterId === id);
        
        if (!removedCharacter) {
            console.log("Character not found!");
            return;
        }

        // Create a new array without the removed character
        const updatedAnswer = playerAnswer.filter(item => item.characterId !== id);

        if (updatedAnswer.length === 0) {
            console.log("That was your best shot? You lost...");
        } else if (updatedAnswer.length === 1) {
            // console.log(`Your answer is ${updatedAnswer[0].name}`);
            console.log(`Checking characterId: ${updatedAnswer[0].characterId} against ${props.compChoice.characterId}`);
            // updatedAnswer[0].characterId === props.compChoice.characterId? setFeedback(<span>You Won!!</span>) : setFeedback(<span>You lost, i was thinking about {props.compChoice.name}</span>);
            updatedAnswer[0].characterId === props.compChoice.characterId ? setFeedback(
              <span style={{ color: "rgb(0, 255, 0)", fontWeight: "bold", fontSize: "2rem" }}>You Won!! <span role="img" aria-label="trophy">🏆</span></span>
            ) : setFeedback(
              <span style={{ color: "red", fontWeight: "bold" }}>You lost, I was thinking about {props.compChoice.name} <span role="img" aria-label="disappointed face">😞</span></span>
            );
        } else {
            setFeedback(<span>You eliminated <span style={{color: "red"}}>{removedCharacter.name}</span></span>);
            // props.setSelectedChar(removedCharacter);
            // console.log(`${removedCharacter.name} was removed`);
        }

        // Update the state with the new array
        setPlayerAnswer(updatedAnswer);
    }


    function add(char){

                setPlayerAnswer(prev => {
                    const newArr = [...prev];
                    console.log(char);
                    setFeedback(<span>You uneliminated <span style={{color: "green"}}>{char.name}</span></span>);
                    // props.setSelectedChar(char);
                    newArr.push(char);
                    return newArr;
                })
                
            
    }

    return (
        <>
        <Header />
        <p style={{margin: "0 0 0 1rem"}}>{feedback}</p>

        <div className="board2">
            {
                props.playerCharacters.map((char, index) => 
                <div className="playerBoard-char" onMouseEnter={() => props.setSelectedChar(char)} 
                style={{background: `url(${char.pic}) no-repeat center/cover`,
                opacity: `${switcher[index] ? "1" : "0.5"}`}}
                onClick={()=> {
                    
                     if (switcher[index]){
                        remove(char.characterId);
                        setSwitcher(prev => {
                            const new_arr = [...prev];
                            new_arr[index] = false;
                            return new_arr 
                        });
                    }
                    else {
                        add(char);
                        setSwitcher(prev => {
                            const new_arr = [...prev];
                            new_arr[index] = true;
                            return new_arr 
                        });
                    }
                    
                    
                        
                }}
                >
                <p style={{backgroundColor: "rgba(0, 0, 0, 0.7)", width: "100%", marginBottom: "0"
                    , fontSize: "0.7rem"
                    , padding: " 0 0 0 0.5rem"
                    ,borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px"
                }}
                >{char.name}</p>
                </div>)
            }
            </div>
        </>
    )
}

export default PlayerBoard;