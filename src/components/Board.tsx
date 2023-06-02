import React from "react";
import Row from "@/components/Row";

interface BoardProps {
    currentGuess: string;
    formattedGuesses: formattedGuesses;
    turn: number;
}

const Board: React.FunctionComponent<BoardProps> = ({ currentGuess, formattedGuesses, turn }) => {
    console.table(formattedGuesses);
    return (
        <div className={`flex flex-col gap-1`}>
            {formattedGuesses.map((formattedGuess, i) => {
                if (turn === i) {
                    return <Row key={i} formattedGuess={formattedGuess} currentGuess={currentGuess} />;
                }
                return <Row formattedGuess={formattedGuess} key={i} />;
            })}
        </div>
    );
};

export default Board;
