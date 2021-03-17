import { combineReducers } from 'redux'
// import dos reducers que vão compor o estado global da aplicação
import appReducer from './appReducer';
import inputTodoReducer from './inputTodoReducer';
// criando um estado global a partir dos dois reducers, usando a função combineReducers
const rootreducer = combineReducers({appReducer, inputTodoReducer});
export default rootreducer;
