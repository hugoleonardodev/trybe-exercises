export const ADD = 'ADD';

export const addTask = (textTodo) => ({
  type: ADD,
  textTodo,
});
