import React, { useState } from 'react';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import './App.css';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
  };

  const resetGame = () => {
    resetBoard();
    setP1Score(0);
    setP2Score(0);
    setCurrentPlayer('X');
  };

  const handleClick = (index) => {
    if (board[index] || checkWin(board)) return;

    const newBoard = board;
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (checkWin(newBoard)) {
      currentPlayer === 'X' ? setP1Score(p1Score + 1) : setP2Score(p2Score + 1);
      setTimeout(resetBoard, 1000);
    } else if (newBoard.every(cell => cell !== null)) {
      setTimeout(resetBoard, 1000);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWin = (board) => {
    const winPatterns = [
      [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]
    ];

    return winPatterns.some(pattern => {
      return pattern.every(index => board[index] === currentPlayer);
    });
  };

  return (
    <div className="container">
      <ScoreBoard p1Score={p1Score} p2Score={p2Score} />
      <Board board={board} onClick={handleClick} />
      <div className="current-player">
        Current Player: {currentPlayer}
      </div>
      <button onClick={resetGame} id="reset-button">Reset Game</button>
    </div>
  );
};

export default App;