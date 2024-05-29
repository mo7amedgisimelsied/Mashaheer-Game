import { useEffect, useState } from "react";


function Chat(props){
const [textArr, setArr] = useState([userText("lorem20"), compText("Lorem ipsum dolor sit amet consectetur, adipisicing elit.")]);

const [playerQuestions, setQuestions] = useState(props.questions);
const [compQuestions, setCompQuestions] = useState(props.questions);
const [currentQuestion, setCurrent] =useState();


const [findAnswer, setAnswer] = useState([1, true]);
useEffect( () => {
    
     fetch(`http://localhost:8080/Test/questionAnswer/${findAnswer[0]}/${findAnswer[1]}`)
    .then(res => res.json())
    .then(result => {console.log(result)})}
    ,[findAnswer])



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
                <p key={index} onClick={() => handleClick(question.questionText, index)}>
                    {question.questionText}
                </p>
            ))}
        </div>
    );
}

function ask(){
    setArr(prev => {
        const newArr = [...prev];
        // const q = compQuestions[Math.floor(Math.random() * compQuestions.length)];
        const q = compQuestions[0];
        newArr.push(compText(q.questionText));
        setCurrent(q);
        return newArr;
    });
}

function eliminate(question_id, value){
    
    setAnswer([question_id, value]);
    // useEffect( () => {
    
    //  fetch(`http://localhost:8080/Test/questionask/${question_id}/${value}`)
    // .then(res => res.json())
    // .then(result => {console.log(result)})}
    // ,[])
    // console.log(question_id)

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
               currentQuestion && eliminate(currentQuestion.questionId, true);
                return newArr;
            })}>Yes</button>

            <button onClick={() => setArr(prev =>{
                const newArr = [...prev];
                newArr.push(userText("No"));
                return newArr;
            })}>No</button>

            <button onClick={() => setArr(prev =>{
                const newArr = [...prev];
                newArr.push(userText("Your turn!"));
                ask();
                return newArr;
            })}>Your turn!</button>

            </div>
        </div>
        <PlayerQuestions />
        </>
    )

}

export default Chat;