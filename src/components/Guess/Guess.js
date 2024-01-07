import React from 'react';

function Guess({handleGuessWord}) {

  const [word,setWord] = React.useState("");

  return <form class="guess-input-wrapper" onSubmit={(event)=> {
    event.preventDefault();
    handleGuessWord(word);
    setWord("");
  }}>
  <label for="guess-input">Enter guess:</label>
  <input id="guess-input" type="text" style={{"text-transform": "uppercase"}} onChange={event => {
              setWord(event.target.value);
            }} minlength="5" maxlength="5" required/>
</form>;
}

export default Guess;
