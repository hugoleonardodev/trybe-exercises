export const ADD = 'ADD';

export const addTask = ( textTodo, listTodo) => ({
  type: ADD,
  // listTodo,
  textTodo,
});
