import { useState } from "react";

export const useHangman = () => {
  const [word, setWord] = useState("Test");

  return { word, setWord };
};
