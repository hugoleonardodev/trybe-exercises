import React from 'react';
// import PropTypes from 'prop-types'
import { inputTask } from './store/actions/inputTask';
import { connect } from 'react-redux';
import { addTask } from './store/actions/addTask';

function InputTodo({ textTodo, inputTask }) {
// class InputTodo extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     textTodo: '',
  //   };

  //   this.changeTextTodo = this.changeTextTodo.bind(this);
  // }

  // changeTextTodo(value) {
  //   this.setState({ textTodo: value })
  // }

  // addItem(value, callback) {
  //   this.setState({ textTodo: '' })
  //   callback(value)
  // }

  // render() {
    // const { addTodo } = this.props;
    // const { textTodo } = this.state;
    let input = '';
    const handleInput = (e) => {
      input = e.target.value
      inputTask(input);
    }

    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input
          id="inputTodo"
          type="text"
          // value={textTodo}
          onChange={(e) => handleInput(e)}
        />
        <input id="btnAdd" type="button" value="Adicionar" onClick={() => addTask(input)} />
      </div>
    );
  // }
}
// export default InputTodo;

// InputTodo.propTypes = {
//   addTodo: PropTypes.func.isRequired,
// }

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
export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);
