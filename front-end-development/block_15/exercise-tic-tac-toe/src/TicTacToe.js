import React from 'react';
import GameBoard from './GameBoard';
import EndGame from './EndGame';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: null,
    };
    this.baseState = this.state;
  }

  calculateWinner(squares) {
    // console.log(squares)
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        // console.log(squares[a])
        return squares[a];
      }
    }
    return null;
  }

  handleGameEnd() {
    const {gameBoard} = this.state;
    const winner = this.calculateWinner(gameBoard);
    // winner !== null &&
    this.setState((state) => state.winner = winner);
  }

  handleGameBoard(id) {
    const {activePlayer, gameBoard} = this.state;
    this.setState({
      gameBoard: [...gameBoard.slice(0, id), activePlayer, ...gameBoard.slice(id + 1, gameBoard.length)],
    });
    this.handleGameEnd();
  }

  handleActivePlayer(id) {
    // console.log(id);
    this.handleGameBoard(id);
    const {activePlayer} = this.state;
    activePlayer === 1 ? this.setState((state) => state.activePlayer = 2) : this.setState((state) => state.activePlayer = 1);
    // this.handleGameEnd();
  }

  reload() {
    // event.preventDefault();
    this.setState(this.baseState);
  }

  render() {
    const {gameBoard, activePlayer} = this.state;
    const winner = this.calculateWinner(gameBoard);
    return (
      <div>
        <GameBoard
          gameState={gameBoard}
          activePlayer={activePlayer}
          handleActivePlayer={(id) => this.handleActivePlayer(id)}
        />
        {
          winner === null
            ? <p>Empate</p>
            : winner === 1 
              ? <EndGame winner={winner} reload={() => this.reload()}/> 
                : winner === 2  && <EndGame winner={winner} reload={() => this.reload()}/>
                // ? <img src={xImage} alt="X" /> : winner === 2 && <img src={oImage} alt="O" />
        }
      </div>
    )
  }
}

export default TicTacToe;
