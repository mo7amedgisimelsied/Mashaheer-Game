function PlayerQuestions(){
    const playerQuestions = Array(3).fill("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, debitis!")
    return(
        <div className="questions-container">
            {playerQuestions.map( question =>
                <p>{question}</p>
            )}
            
        </div>
    )
}

export default PlayerQuestions;