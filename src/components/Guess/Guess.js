import React from 'react';

function Guess({handleGuessWord}) {

  const [word,setWord] = React.useState("");

  return <form className="guess-input-wrapper" onSubmit={(event)=> {
    event.preventDefault();
    handleGuessWord(word);
    setWord("");
  }}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input" value ={word} type="text" style={{textTransform: "uppercase"}} onChange={event => {
              setWord(event.target.value);
            }} minLength="5" maxLength="5" required/>
</form>;
}

export default Guess;
