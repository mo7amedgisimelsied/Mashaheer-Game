import { useState } from "react";

function ComputerBoard(props){
    // const [chars, setChars] = useState(props.compCharacters);
    return (
        <div>
            <div style={{display: "flex",alignItems: "center",gap: "0.5rem"}}>
            <img src="https://picsum.photos/30/30" className="computer-profile"/>
            <p>Computer</p>
            </div>

            <div className="board">
            {
                props.compCharacters.map(char => <div className="char-card">
                    ?
                </div>)
            }
            </div>
        </div>
    )
}

export default ComputerBoard;