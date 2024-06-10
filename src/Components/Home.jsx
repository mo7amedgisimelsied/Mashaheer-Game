import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Home(props) {
  let history = useHistory();
  function handleClick(p_choice) {
    props.setPlayerChoice(p_choice);
    history.push(`/game`);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <br />
      <h1>Welcome to Mashaheer Game</h1>
      <p style={{ margin: "0 15rem" }}>
        <strong>Select a celebrity</strong> and begin the guessing game!
        Outsmart the computer by asking strategic questions to uncover its
        secret star. Ready? Let's play Mashaheer!
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "5rem 15rem",
          flexWrap: "wrap",
        }}
      >
        {props.selectChar.map((char, index) => (
          <div
            className="home-char"
            style={{
              background: `url(${char.pic}) no-repeat center/cover`,
            }}
            onClick={() => handleClick(char)}
          >
            <p>{char.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
