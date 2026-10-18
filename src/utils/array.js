export const getIndex = (tasks, id) => {
  const index = tasks.findIndex((task) => task.id === id);
  return index;
};
