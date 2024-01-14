import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({handleGuessWord,userGuessWords}) {

  const [word,setWord] = React.useState("");
  const [disableInput,setDisableInput] = React.useState(false);

  return <form className="guess-input-wrapper" onSubmit={(event)=> {
    event.preventDefault();
    handleGuessWord(word);
    setWord("");
  }}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input" value ={word} type="text" style={{textTransform: "uppercase"}} disabled={disableInput} onChange={event => {
              setWord(event.target.value);
            }} minLength="5" maxLength="5" required/>
</form>;
}

export default Guess;
