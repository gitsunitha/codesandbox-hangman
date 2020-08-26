import React, { useContext } from "react";
import { HangmanContext } from "../../context";

const Hangman = () => {
  const { word } = useContext(HangmanContext);
  return <div>{word}</div>;
};

export default Hangman;
