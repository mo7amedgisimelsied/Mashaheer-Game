function ComputerBoard(){
    const chars =   Array(16).fill("?");
    return (
        <div>
            <div style={{display: "flex",alignItems: "center",gap: "0.5rem"}}>
            <img src="https://picsum.photos/30/30" className="computer-profile"/>
            <p>Computer</p>
            </div>

            <div className="board">
            {
                chars.map(char => <div className="char-card">
                    {char}
                </div>)
            }
            </div>
        </div>
    )
}

export default ComputerBoard;