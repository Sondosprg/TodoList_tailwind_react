import { useContext } from "react";

import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";
import { taskContext } from "../contexts/task.js";

export default function Delete() {
  const tasksContx = useContext(tasksContext);
  const popUpState = useContext(popUpContext);
  const taskInfo = useContext(taskContext);

  const deleteTask = () => {
    const updatedTasks = tasksContx.value.filter(
      (task) => task.id != taskInfo.current.id,
    );
    const updatedCurrentTasks = tasksContx.currentValue.filter(
      (task) => task.id != taskInfo.current.id,
    );

    tasksContx.set([...updatedTasks]);
    tasksContx.setCurrent([...updatedCurrentTasks]);

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
