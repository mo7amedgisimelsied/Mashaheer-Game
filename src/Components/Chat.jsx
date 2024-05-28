import { useState } from "react";

function Chat(){
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
    const [textArr, setArr] = useState([userText("lorem20"), compText("Lorem ipsum dolor sit amet consectetur, adipisicing elit.")]);
    
    
    
    
    return (
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
        
    )
}

export default Chat;