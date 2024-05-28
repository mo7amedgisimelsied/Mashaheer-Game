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
                chars.map(char => <div style={{margin: "0.2rem", width: "8rem", height: "8rem", background: `url("https://picsum.photos/300/300")`,borderRadius: "10px", backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "end"}}>
                <p style={{backgroundColor: "black", width: "100%", marginBottom: "0"
                    , fontSize: "0.7rem"
                    , padding: " 0 0 0 0.5rem"
                    ,borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px"
                }}>Walter White</p>
                </div>)
            }
            </div>
        </>
    )
}

export default PlayerBoard;