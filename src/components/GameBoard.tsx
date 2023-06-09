import BoardRow from "@/components/BoardRow";

type GameBoardProps = {
  currentGuess: string;
  formattedGuesses: formattedGuesses;
  turn: number;
};

const GameBoard = ({ currentGuess, formattedGuesses, turn }: GameBoardProps) => {
  console.table(formattedGuesses);
  return (
    <div className="flex flex-col gap-1 mb-6">
      {formattedGuesses.map((formattedGuess, i) => {
        if (turn === i) {
          return <BoardRow key={i} formattedGuess={formattedGuess} currentGuess={currentGuess} />;
        }
        return <BoardRow formattedGuess={formattedGuess} key={i} />;
      })}
    </div>
  );
};

export default GameBoard;
