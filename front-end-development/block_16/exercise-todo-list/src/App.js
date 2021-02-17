import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';
import BtnRemove from './BtnRemove'
import { inputTask } from './store/actions/inputTask';
import { addTask } from './store/actions/addTask';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: ['Realizar CR', 'Ler Post no Medium', 'Beber água', 'Estudar', 'Dormir', 'Banho'],
      selected: false,
      position: '',
    };

    this.addTodo = this.addTodo.bind(this);
    // this.selectTask = this.selectTask.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTask(event) {
    // const selected = "selected"
    // Object.assign(event.target, selected)  
    // console.log(event)
    // console.log(event.value)
    // console.log(event.target.parentNode)
    console.log(event.target)
    // console.log(Object.values(event.target))
    // console.log(Object.values(event.target)[1].value)
    const taskPosition = Object.values(event.target)[1].value;
    // console.log(this.state)
    this.setState((state) => state.selected = true)
    this.setState((state) => state.position = taskPosition)
  }

  handleRemoveTasks(event) {
    const {listTodo, position} = this.state;
    console.log(this.state)
    this.setState({
      selected: false,
      listTodo: 
      [...listTodo.slice(0, position), ...listTodo.slice(position + 1, listTodo.length)]
    })
  }

  render() {
    const { listTodo, selected } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        <BtnRemove selected={selected} handleRemoveTasks={(event) => this.handleRemoveTasks(event)} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1} >
                  <Item
                    content={todo}
                    value={index}
                    selectTask={(event) => this.selectTask(event)}
                  />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
// export default App;
// mapeia o state global e passa através de props
const mapStateToProps = (state) => ({
  textTodo: state.inputTodoReducer.textTodo,
});
// mapeia a função que altera o state global e qual propriedade alterar
const mapDispatchToProps = (dispatch) => ({
  inputTask: (textTodo) => dispatch(inputTask(textTodo)),
  addTask: (textTodo) => dispatch(addTask(textTodo)),
});
// conecta map e dispatch
export default connect(mapStateToProps, mapDispatchToProps)(App);
