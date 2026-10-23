import { useContext } from "react";

import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";
import { taskContext } from "../contexts/task.js";

export default function Delete() {
  const tasksContx = useContext(tasksContext);
  const popUpState = useContext(popUpContext);
  const taskInfo = useContext(taskContext);


  const getUpdateTasks=(tasks)=>{
    const tasksUpdated = tasks.filter(
      (task) => task.id != taskInfo.current.id,
    );
    return tasksUpdated;
  };

  const deleteTask = () => {

    const tasksUpdated = getUpdateTasks(tasksContx.value);
    const currentTasksUpdated = getUpdateTasks(tasksContx.currentValue);

    tasksContx.set([...tasksUpdated]);
    tasksContx.setCurrent([...currentTasksUpdated]);

    popUpState.set({ ...popUpState, state: false });
  };

  return (
    <>
      <div className="space-x-2 flex justify-center items-center">
        <p>are you sure delete ? </p>
        <button type="submit" className="btn-primary" onClick={deleteTask}>
          delete
        </button>
      </div>
    </>
  );
}
