import { ADD } from '../actions/addTask';
import { REMOVE } from '../actions/removeTask';
import { SELECT } from '../actions/selectTask';
// estado inicial dos carros que vai junto com o outro estado no objeto do estado global
const appInitialState = {
  listTodo: ['Realizar CR', 'Ler Post no Medium', 'Beber água', 'Estudar', 'Dormir', 'Banho'],
  selected: false,
  position: '',
};
// reducer que executa a action e alter de fato o estado inicial dos carros
export default function appReducer(state = appInitialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        listTodo: [...state.listTodo, action.task],
      };
    case REMOVE:
      return {
        ...state,
        listTodo: [...state.listTodo.slice(0, state.position), ...state.listTodo.slice(state.position + 1, state.listTodo.length)]
      }
    case SELECT:
      return {
        ...state,
        selected: !state.selected,
        position: action
      }
    default:
      return state;
  }
}
