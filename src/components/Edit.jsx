import { useContext , useState } from "react";

import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";
import { taskContext } from "../contexts/task.js";

export default function Edit() {
  const tasks = useContext(tasksContext);
  const popUpState = useContext(popUpContext);

  const taskInfo = useContext(taskContext);

  const [taskValue, setTaskValue] = useState(taskInfo.current.title);

  const getIndex =(id)=>{
     const index = tasks.value.findIndex(task => task.id === id);
     return index ;
  };

  const editTask = () => {
    if(taskValue==""){
      return;
    }
    console.log("edit");
    const id = taskInfo.current.id; 
    const targetIndex = getIndex(id); // EXCEPTION : can become -1
    const updatedTasks = tasks.value.toSpliced(targetIndex , 1 , {...taskInfo.current , title :taskValue })
    console.log(updatedTasks);
    popUpState.set({...popUpState , state:false});
    tasks.set([...updatedTasks]);
  };

  return (
    <>
      <div className="space-x-2">
        {/* todo : infinite renender */}
        <input
          value={taskValue}
          onChange={(e)=>setTaskValue(e.target.value)}
          type="text"
          className="border-2 border-dark/20 focus:outline-none focus:ring-primary focus:ring-2 focus:border-transparent rounded-sm p-1"
        />
        <button type="submit" className="btn-primary" onClick={editTask}>
          edit
        </button>
      </div>
    </>
  );
}
