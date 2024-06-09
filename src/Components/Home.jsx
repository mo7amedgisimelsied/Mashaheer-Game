import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Home(props){

    let history = useHistory();
    function handleClick(p_choice){
        props.setPlayerChoice(p_choice);
        history.push(`/game`);
    }
    return(
       
        <div style={{textAlign: "center"}}>
            <br />
            <br />
        <h1>Welcome to Mashaheer Game</h1>
        <p style={{margin: "0 15rem"}}><strong>Select a celebrity</strong> and begin the guessing game! Outsmart the computer by asking strategic questions to uncover its secret star. Ready? Let's play Mashaheer!</p>
        <div style={{display: "flex", justifyContent: "center", margin: "5rem 15rem", flexWrap: "wrap"}}>
            
           {
                props.selectChar.map((char, index) => 
                <div style={{margin: "0.2rem", width: "8rem", height: "8rem", background: `url(${char.pic})`,borderRadius: "10px", backgroundSize: "cover", backgroundPosition: "center", 
                display: "flex", alignItems: "end", cursor: "pointer"}}
                onClick={() => handleClick(char)}
                >
                <p style={{backgroundColor: "black", width: "100%", marginBottom: "0"
                    , fontSize: "0.7rem"
                    , padding: " 0 0 0 0.5rem"
                    ,borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px"
                }}
                >{char.name}</p>
                </div>)
            }
        </div>

            </div>

       
          
    );
}

export default Home;