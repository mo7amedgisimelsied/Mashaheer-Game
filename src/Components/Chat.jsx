import { useState } from "react";


function Chat(props){
const [textArr, setArr] = useState([compText("Ask me any question from the list bellow and try to guess which character i'm thinking about")]);

const [playerQuestions, setQuestions] = useState(props.questions);
const [compQuestions, setCompQuestions] = useState(props.questions);
const [currentQuestion, setCurrent] =useState();




    const fetchAnswer = async (question_id, character_id) => {
        const response = await fetch(`http://localhost:8080/Test/questionAnswer/${question_id}/${character_id}`);
        const result = await response.json();
        
        return result;
    };
    



function PlayerQuestions() {
    

    const handleClick = (question, index, question_id) => {
        setArr(prev => {
            const newArr = [...prev];
            newArr.push(userText(question));
            return newArr;
        });
        answerToPlayer(question_id);

        setQuestions(prevQuestions => {
            const newQ = [...prevQuestions];
            newQ.splice(index, 1);
            return newQ;
        });
    };

    return (
        
        <div className="questions-container">
            {playerQuestions.map((question, index) => (
                <p key={index} onClick={() => handleClick(question.questionText, index, question.questionId)}>
                    {question.questionText}
                </p>
            ))}
        </div>
    );
}

async function answerToPlayer(question_id) {
    // Call the async function and wait for the result
    const result = await fetch(`http://localhost:8080/Test/questionAnswer/${question_id}/${props.compChoice.characterId}`);
    const answer = await result.json();

    // Check if the result array is not empty and update the state
    if (answer.length > 0) {
        setArr(prev => {
            const newArr = [...prev, compText(answer[0].answer? "Yes": "No")];
            return newArr;
        });
    }
    ask();
}



function ask(){
    setArr(prev => {
        const newArr = [...prev];
        const q = compQuestions[0];
        newArr.push(compText(q.questionText));
        setCurrent(q);
        return newArr;
    });
    setCompQuestions(prev => {
        
        if(prev.length <= 1)
            {
            const new_arr = [...prev];
             return new_arr
            }
        else {
            const new_arr = [...prev];
            new_arr.splice(0, 1);
             return new_arr;
            }
        
    });
}


function eliminate(question_id, value) {
    async function processCharacters() {
        let updatedCharacters = [...props.compCharacters];
        
        for (let index = updatedCharacters.length - 1; index >= 0; index--) {
            const character = updatedCharacters[index];
            
            // Fetch the answer for the current character
            const dataFetched = await fetchAnswer(question_id, character.characterId);
            
            // Introduce a delay for UI feedback (optional)
            await new Promise(resolve => setTimeout(resolve, 500)); 
            
            // Check if the answer matches the expected value
            if (dataFetched[0].answer !== value) {
                updatedCharacters.splice(index, 1);
                props.styles[index] = { backgroundColor: "#DA3055" };
                console.log(`${character.characterId} doesn't meet the criteria`);
            } else {
                console.log(`${character.characterId} meets the criteria`);
            }
            
            // Update the state with the filtered characters
            props.func(() => updatedCharacters);
        }

        // Check the length of updated characters after processing all characters
        if (updatedCharacters.length === 0) {
            console.log("Character was not found, try again and make sure to answer correctly");
        } else if (updatedCharacters.length === 1) {
            console.log(`You are thinking about: ${updatedCharacters[0].characterId}`);
        }
    }

    processCharacters();
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
            
            <button className="btn" onClick={() => setArr(prev =>{
                const newArr = [...prev];
                newArr.push(userText("Yes"));
               currentQuestion && eliminate(currentQuestion.questionId, true);
                return newArr;
            })}>Yes</button>

            <button className="btn" onClick={() => setArr(prev =>{
                const newArr = [...prev];
                newArr.push(userText("No"));
                currentQuestion && eliminate(currentQuestion.questionId, false)
                return newArr;
            })}>No</button>

            <button className="btn" onClick={() => {setArr(prev =>{
                const newArr = [...prev];
                newArr.push(userText("Your turn!"));
                return newArr;
            })
            ask();
            }}>Your turn!</button>

            </div>
        </div>
        <PlayerQuestions />
        </>
    )

}

export default Chat;