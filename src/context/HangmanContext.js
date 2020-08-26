import React from "react";

export const HangmanContext = React.createContext({
  score: {
    wins: 0,
    losses: 0
  },
  guesses: {
    correct: [],
    incorrect: []
  },
  word: ""
});

export const HangmanProvider = HangmanContext.Provider;
