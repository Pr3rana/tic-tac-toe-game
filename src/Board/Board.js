import React from 'react';
import Square from '../Square/Square';

const Board = ({currSquares, handleClick}) => {

    let renderSquare = (i)=>{
        return (
            <Square value={currSquares[i]}
                click = {()=>handleClick(i)}
            />
        );
    }

    return (
        <div>
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
        </div>
    );
}
 
export default Board;
