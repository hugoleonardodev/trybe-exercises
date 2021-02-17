export const REMOVE = 'REMOVE';

export const removeTask = (task) => ({
  type: REMOVE,
  task,
});
