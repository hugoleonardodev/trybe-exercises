export const SELECT = 'SELECT';

export const selectTask = (task, position) => ({
  type: SELECT,
  task,
  position,
});
