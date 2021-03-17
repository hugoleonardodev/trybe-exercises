export const REMOVE = 'REMOVE';

export const removeTask = (task, position) => ({
  type: REMOVE,
  task,
  position,
});
