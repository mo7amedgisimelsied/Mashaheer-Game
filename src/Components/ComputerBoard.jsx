

function ComputerBoard(props){

    
    return (
        <div>
            <div style={{display: "flex",alignItems: "center",gap: "0.5rem"}}>
            <img src="https://picsum.photos/30/30" className="computer-profile"/>
            <p>Computer</p>
            </div>

            <div className="board">
            {
                props.styles.map(char => <div className="char-card" style={char}>
                    ?
                </div>)
            }
            </div>
        </div>
    )
}

export default ComputerBoard;