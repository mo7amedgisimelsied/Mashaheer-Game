function Header(){
    return(
        <div style={{display: "flex", gap: "3rem",textAlign: "center", padding: "2rem 1rem", borderBottom: "1px white solid"}}>
            <img src="https://picsum.photos/300/300" style={{width: "20%"}}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque necessitatibus nihil aut.</p>
        </div>
    )
}

function PlayerBoard(){
    const chars =   Array(16).fill("?");
    return (
        <>
        <Header />
        <div className="board2">
            {
                chars.map(char => <div style={{margin: "0.2rem", width: "8rem", height: "8rem"}}>
                    <img src="https://picsum.photos/300/300" style={{width: "100%", borderRadius: "10px"}} />
                </div>)
            }
            </div>
        </>
    )
}

export default PlayerBoard;