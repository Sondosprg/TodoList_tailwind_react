export const getTask = (tasks, id) => {
  const task = tasks.find((task) => task.id === id);
  return task;
};

export const getIndex = (tasks, id) => {
  const index = tasks.findIndex((task) => task.id === id);
  return index;
};

export const getCompletedTasks = (tasks) => {
  const completedTasks = tasks.filter((taskC) => taskC.isComplete === true);
  return completedTasks;
};

export const getNoCompletedTasks = (tasks) => {
  const noCompletedTasks = tasks.filter((taskC) => taskC.isComplete === false);
  return noCompletedTasks;
};
