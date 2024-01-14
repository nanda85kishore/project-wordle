import React from "react";

function GuessResults({ guessWords }) {
  return (
    <div className="guess-results">
      {
        guessWords.map(
          (guessWord,index)=> (
            <p key={index} className="guess">
              {guessWord.map(({letter,status}) => (<span key={Math.random()} className={`cell ${status}`}>{letter}</span>))}
            </p>
          )
        )
      }
    </div>
  );
}

export default GuessResults;
