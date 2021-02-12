import React from 'react';
import GameCell from './GameCell';
import PropTypes from 'prop-types';
import './GameBoard.css';

class GameBoard extends React.Component {
  render() {
    const {handleActivePlayer, activePlayer, gameState} = this.props;
    // console.log(handleActivePlayer)
    return (
      <div className="game-board">
        {gameState.map((playerId, i) => (
          <GameCell 
            id={i} 
            key={i*10}
            gameBoard={gameState}
            activePlayer={activePlayer}
            handleActivePlayer={handleActivePlayer}
          />
        ))}
      </div>
    );
  }
}

export default GameBoard;
