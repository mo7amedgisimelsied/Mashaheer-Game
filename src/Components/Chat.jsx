import { useState } from "react";


function Chat(){
const [textArr, setArr] = useState([userText("lorem20"), compText("Lorem ipsum dolor sit amet consectetur, adipisicing elit.")]);
const [playerQuestions, setQuestions] = useState(Array(3).fill("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, debitis!"));


function PlayerQuestions() {
    

    const handleClick = (question, index) => {
        setArr(prev => {
            const newArr = [...prev];
            newArr.push(userText(question));
            return newArr;
        });

        setQuestions(prevQuestions => {
            const newQ = [...prevQuestions];
            newQ.splice(index, 1);
            return newQ;
        });
    };

    return (
        <div className="questions-container">
            {playerQuestions.map((question, index) => (
                <p key={index} onClick={() => handleClick(question, index)}>
                    {question}
                </p>
            ))}
        </div>
    );
}



function userText(text){
    return(
        <div className="user-chat">
        <p>{text}</p>
        </div>
    )
}

function compText(text){
    return(
        <div className="computer-chat">
        <p>{text}</p>
        </div>
    )
} 
    
    
    return (
        <>
        <div className="chat">
        <div className="chat-container">
           
            {textArr}

           
            </div>
            <div style={{display: "flex", justifyContent: "center", gap: "1rem"}}>
            
            <button onClick={() => setArr(prev =>{
                const newArr = [...prev];
                newArr.push(userText("Yes"));
                return newArr;
            })}>Yes</button>

            <button onClick={() => setArr(prev =>{
                const newArr = [...prev];
                newArr.push(userText("No"));
                return newArr;
            })}>No</button>
            </div>
        </div>
        <PlayerQuestions />
        </>
    )

}

export default Chat;