import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess/Guess";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import {checkGuess}  from "/src/game-helpers.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const emptyGuessLetter = { letter: '', status: '' };
  const NUM_OF_GUESSE_WORD_LETTERS = 5;
  let emptyGuessWord = [];
  let emptyGuessWords = [];

  for (let step = 0; step < NUM_OF_GUESSE_WORD_LETTERS; step++) {
    emptyGuessWord.push(emptyGuessLetter);
  }

  for (let step = 0; step < NUM_OF_GUESSES_ALLOWED; step++) {
    emptyGuessWords.push(emptyGuessWord);
  }

  //const [guessWords, setGuessWords] = React.useState([["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]]);
  const [guessWords, setGuessWords] = React.useState(emptyGuessWords);
  const [userGuessWords, setUserGuessWords] = React.useState([]);

  function handleGuessWord(word) {
    const upperCaseWord = word.toUpperCase();

    let newUserGuessWords = [...userGuessWords, checkGuess(upperCaseWord,answer)];
    setUserGuessWords(newUserGuessWords);

    let newGuessWords = [...newUserGuessWords];
    console.log({newGuessWords});
    for(let index=0;index<(NUM_OF_GUESSES_ALLOWED - newUserGuessWords.length);index++){
      newGuessWords.push(emptyGuessWord);
    }
    (newUserGuessWords.length <= NUM_OF_GUESSES_ALLOWED) && setGuessWords(newGuessWords);
    console.log(userGuessWords);
  }

  return (
    <>
      <GuessResults guessWords={guessWords} />
      <Guess handleGuessWord={handleGuessWord} userGuessWords={userGuessWords}/>
    </>
  );
}

export default Game;
