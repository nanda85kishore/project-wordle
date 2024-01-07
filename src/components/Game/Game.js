import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessWords,setGuessWords] = React.useState([]);

  function handleGuessWord(word){
    const upperCaseWord = word.toUpperCase();
    console.log(upperCaseWord);
    const newGuessWords = [...guessWords,upperCaseWord];
    console.log(newGuessWords);
    setGuessWords(newGuessWords);
    console.log(guessWords);
  }

  return <>Put a game here!
  <Guess handleGuessWord={handleGuessWord}></Guess>
  </>;
}

export default Game;
