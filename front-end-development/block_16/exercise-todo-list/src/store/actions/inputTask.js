export const INPUT = 'INPUT';
export const ADD = 'ADD';

export const addTask = (textTodo) => ({
  type: ADD,
  textTodo,
});

export const inputTask = (textTodo) => ({
  type: INPUT,
  textTodo,
});
