import { useState } from "react";



function PlayerBoard(props){
console.log(props.compChoice.name);

    function Header(){


        return(
            <div style={{display: "flex", gap: "3rem",textAlign: "center", padding: "2rem 1rem", borderBottom: "1px #5B5B5B solid"}}>
                <div>
                <img src={props.playerChoice.pic} style={{width: "10rem"}}/>
                <p style={{margin: "0"}}>{props.playerChoice.name}</p>
                </div>
                <p>Guess which person the computer is thinking about before he guesses your person first!</p>
            </div>
        )
    }
    
    
    const [playerAnswer, setPlayerAnswer] = useState([...props.playerCharacters]);
    var [switcher, setSwitcher] = useState(Array(10).fill(true));
    const [feedback, setFeedback] = useState(<span></span>);
    
    function remove(id) {
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
            console.log(`Your answer is ${updatedAnswer[0].name}`);
            updatedAnswer[0].characterId == props.compChoice.characterId? setFeedback(<span>You Won!!</span>) : setFeedback(<span>You lost, i was thinking about {props.compChoice.name}</span>);

        } else {
            setFeedback(<span>You eliminated <span style={{color: "red"}}>{removedCharacter.name}</span></span>);
            props.setSelectedChar(removedCharacter);
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
                    props.setSelectedChar(char);
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
                <div style={{margin: "0.2rem", width: "8rem", height: "8rem", background: `url(${char.pic})`,borderRadius: "10px", backgroundSize: "cover", backgroundPosition: "center", 
                display: "flex", alignItems: "end", opacity: `${switcher[index] ? "1" : "0.5"}` }}
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