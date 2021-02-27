import React, {useState, useEffect} from 'react';
import Board from './Board/Board';
import calculateWinner from "./helpers.js";
import './App.css';

function Game() {
    const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
    const [stepNumber, setStepNumber] = useState(0);
    const current = history[stepNumber];
    const [currSquares, setCurrSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(currSquares);

    const moves = history.map((step, move)=>{
      const desc = move ? 'Go to move #'+move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={()=>jumpTo(move)}>{desc}</button>
        </li>
      )
    });

    let status = 'Next player:'+ (xIsNext ? 'X' : 'O');

    if(winner){
        status = 'Winner: ' + winner;
    }
    let handleClick = (i)=>{
        if(calculateWinner(currSquares) || currSquares[i]){
            return
        }
        currSquares[i] = xIsNext ? 'X' : 'O';
        setXIsNext(!xIsNext);
        setStepNumber(history.length);
        console.log("history", history, currSquares);
        setCurrSquares([...currSquares]);
        setHistory(history.concat([{squares: currSquares}]));
    }

    let jumpTo = (step)=>{
      setStepNumber(step);
      setHistory(history.splice(0, step+1));
      setXIsNext(step % 2 === 0);
    }

  return (
    <div className="game">
      <div className="game-board">
        <Board  currSquares = {current.squares} handleClick={(i)=>handleClick(i)}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}


export default Game;
