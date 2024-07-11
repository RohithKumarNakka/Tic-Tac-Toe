const ScoreBoard = ({ p1Score, p2Score }) => {
    return (
      <div className="scoreboard">
        <div className="player-score">P1-X: {p1Score}</div>
        <div className="player-score">P2-O: {p2Score}</div>
      </div>
    );
  };
  
  export default ScoreBoard;