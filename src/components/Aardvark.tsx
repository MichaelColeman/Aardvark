import React, { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import useGameLogic from "@/hooks/useGameLogic";
import Modal from "./EndGameModal";

const Aardvark = ({ solution }: solutionProps) => {
  const { currentGuess, handleKeyboardInput, usedKeys, isCorrect, formattedGuesses, turn } = useGameLogic({ solution });
  const [showEndGameModal, setShowEndGameModal] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyboardInput);
    if (isCorrect) {
      setTimeout(() => setShowEndGameModal(true), 2500);
      console.log("you've won!");
      window.removeEventListener("keyup", handleKeyboardInput);
    }

    if (turn > 8) {
      setTimeout(() => setShowEndGameModal(true), 2500);
      console.log("out of turns!");
      window.removeEventListener("keyup", handleKeyboardInput);
    }

    return () => window.removeEventListener("keyup", handleKeyboardInput);
  }, [handleKeyboardInput, isCorrect, turn]);

  return (
    <>
      <GameBoard currentGuess={currentGuess} formattedGuesses={formattedGuesses} turn={turn} />
      <Keyboard usedKeys={usedKeys} />
      {showEndGameModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </>
  );
};

export default Aardvark;
