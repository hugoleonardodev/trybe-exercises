import { INPUT } from "../actions/inputTask";

const inputTodoInitialState = {
  textTodo: ''
}
export default function inputTodoReducer(state = inputTodoInitialState, action) {
  switch(action.type) {
    case INPUT:
      return {
        textTodo: action.textTodo
      }
    default:
      return state;
  }
}