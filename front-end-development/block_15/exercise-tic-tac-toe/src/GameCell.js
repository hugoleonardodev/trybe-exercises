import React from 'react';
import PropTypes from 'prop-types';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';

// Não mude a propriedade da div data-testid de cada casa
// ele será utilizado para o terceiro exercício!
// Use-o para selecionar uma casa especifica nas horas dos testes.

class GameCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      imageId: '',
    }
  }

  handleSelect(id) {
    const { imageId } = this.state;
    // console.log(id)
    const {handleActivePlayer, activePlayer} = this.props;
    if(imageId === '') {
      this.setState((state) => state.imageId = activePlayer)
      this.setState((state) => state.selected = true)      
      handleActivePlayer(id)
    }
    // activePlayer === ''
    //   && this.setState({selected: true, activePlayer: activePlayer})
  }

  render() {
    const { id, gameBoard } = this.props;
    const { selected, imageId } = this.state;
    console.log(gameBoard)
    return (
      <div data-testid={`cell_${id}`} value={id} className="game-cell" onClick={() => this.handleSelect(id)} >
        {
          gameBoard.every((e) => e === 0)
            ? <div /> :
            selected && imageId === 1
              ? <img src={xImage} alt={"X"} />
              : selected && imageId === 2 
                ? <img src={oImage} alt={"O"} />
                : <div />
        }

      </div>
    );
  }
}

export default GameCell;
