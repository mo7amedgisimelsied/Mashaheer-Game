

function ComputerBoard(props){

    
    return (
        <div>
            <div style={{display: "flex",alignItems: "center",gap: "0.5rem"}}>
            <img src="https://img.freepik.com/free-psd/cute-3d-robot-waving-hand-cartoon-vector-icon-illustration-people-technology-isolated-flat-vector_138676-10649.jpg?t=st=1717553745~exp=1717557345~hmac=65bd506591e08a16a3980a612ef4aa823a446947ae0ade89f7090781cfa762d8&w=740" className="computer-profile"/>
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