export const INPUT = 'INPUT';
// export const ADD = 'ADD';

// export const addTask = (textTodo, listTodo) => ({
//   type: ADD,
//   listTodo: [...listTodo, textTodo]
// });

export const inputTask = (textTodo) => ({
  type: INPUT,
  textTodo,
});
