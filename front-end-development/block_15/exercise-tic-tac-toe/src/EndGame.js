import React from 'react'

class EndGame extends React.Component {
  componentDidMount() {
    const {winner} = this.props;
    alert(`Jogador ${winner} venceu!`)
  }

  render() { 
    const {winner, reload} = this.props;
    return (
      <div>
        <p>Fim de Jogo</p>
        {
          <p>Jogador {winner} venceu</p>
        }
        {
          <button onClick={() => reload()}>Voltar</button>
        }
      </div>
    );
  }
}

export default EndGame;
