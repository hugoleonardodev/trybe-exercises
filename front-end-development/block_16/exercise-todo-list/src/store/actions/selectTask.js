export const SELECT = 'SELECT';

export const selectTask = (task) => ({
  type: SELECT,
  task,
});
