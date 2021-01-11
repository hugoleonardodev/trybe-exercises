import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['Introdução à React', 'Componentes com Estado', 'Ciclo de vida de Componentes',
      'Metodologias Ágeis', 'Testes automatizados', 'Gerenciamento de estado com Redux', 'Projetos'
      ]
    }
  }

  createListItem() {
    return this.state.tasks.map(e =>
      <li>{e}</li>
    )
  }

  render() { 
    return (
      <div>
        <ol>
          {this.createListItem()}
        </ol>
      </div>
    );
  }
}

export default List;