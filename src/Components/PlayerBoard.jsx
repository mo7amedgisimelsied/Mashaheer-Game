import { useState } from "react";

function Header(){
    return(
        <div style={{display: "flex", gap: "3rem",textAlign: "center", padding: "2rem 1rem", borderBottom: "1px #5B5B5B solid"}}>
            <img src="https://picsum.photos/300/300" style={{width: "20%"}}/>
            <p>Guess which person the computer is thinking about before he guesses your person first!</p>
        </div>
    )
}

function PlayerBoard(props){
    
    const [playerAnswer, setPlayerAnswer] = useState([...props.playerCharacters]);
    var [switcher, setSwitcher] = useState(Array(10).fill(true));
    

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
        } else {
            console.log(`${removedCharacter.name} was removed`);
        }

        // Update the state with the new array
        setPlayerAnswer(updatedAnswer);
    }


    function add(char){

                setPlayerAnswer(prev => {
                    const newArr = [...prev];
                    console.log(char);
                    newArr.push(char);
                    return newArr;
                })
                
            
    }


    return (
        <>
        <Header />
        <div className="board2">
            {
                props.playerCharacters.map((char, index) => 
                <div style={{margin: "0.2rem", width: "8rem", height: "8rem", background: `url("https://picsum.photos/300/300")`,borderRadius: "10px", backgroundSize: "cover", backgroundPosition: "center", 
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
                <p style={{backgroundColor: "black", width: "100%", marginBottom: "0"
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