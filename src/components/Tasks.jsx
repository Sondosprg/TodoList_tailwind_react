import Task from "./Task";
import PopUp from "./popUp.jsx";

import {  useState , useContext } from "react";

import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";
import { taskContext } from "../contexts/task.js";
import { getIndex} from "../utils/array.js";

export default function Tasks() {
  console.log("tasks");
  const ALL_OPERATIONS = ["edit", "delete"];
  const tasksContx = useContext(tasksContext);

  // const [isOpenMenu, setOpenMenu] = useState(false);
  // const [isOpenPopUp, setOpenPopUp] = useState(false);
  // const [operation, setOperation] = useState("");

  const popUpState = useContext(popUpContext);
  console.log(popUpState);

  let taskInfo = useContext(taskContext);

  const [operation, setOperation] = useState("");

  const updateId = (id) => {
    console.log(id);
    taskInfo.current.id = id;
    console.log(taskInfo);
  };

  const getTask =(id)=>{
      const task = tasksContx.value.find(task => task.id === id);
      return task; 
  }

  const updateTitle = (id)=>{
    const task = getTask(id);
    taskInfo.current.title = task.title;
  }
  const updateComplete=(id)=>{
    const task = getTask(id);
    taskInfo.current.isComplete = task.isComplete;
  }

  const handleTasks = (e) => {
    //  console.log(e.target.closest(".Completed"));
    if(e.target.closest(".Task")){

    const id = +e.target.closest(".Task").dataset.id;

    if (e.target.closest(".Delete")) {
      updateId(id);
      setOperation("delete");
      popUpState.set({ ...popUpState, state: true, type: "delete" });
    };

    
    if (e.target.closest(".Edit")) {
      updateId(id);
      updateTitle(id);
      updateComplete(id);
      
      setOperation("edit");
      popUpState.set({ ...popUpState, state: true, type: "edit" });
      console.log('task info ' , taskInfo);
    };

    // case specific (make as completed tasks)
    if (e.target.closest('.Completed')){
      console.log("Completed");
      updateId(id);
      updateTitle(id);
      updateComplete(id);

      // todo : fix 
      const targetIndex = getIndex(tasksContx.value , id); // EXCEPTION : can become -1
      const targetCurrentIndex = getIndex(tasksContx.currentValue , id); // EXCEPTION : can become -1

      const updatedTasks = tasksContx.value.toSpliced(targetIndex , 1 , {...taskInfo.current , isComplete :!taskInfo.current.isComplete});
      const updatedCurrentTasks = tasksContx.currentValue.toSpliced(targetCurrentIndex , 1 , {...taskInfo.current , isComplete :!taskInfo.current.isComplete});

      console.log(updatedTasks);

      tasksContx.set([...updatedTasks]);
      tasksContx.setCurrent([...updatedCurrentTasks]);
      // console.log("REVERSE" , !taskInfo.current.isComplete);
    };

    };
    



  };

  console.log(" ==============rerender task ========= \n " , tasksContx.currentValue);

  return (
    <>
      <div
        className="relative  px-4  overflow-y-scroll flex flex-col gap-2 h-70 scrollbar-none cursor-pointer"
        onClick={(e) => {
          handleTasks(e);
        }}
      >
        {tasksContx.currentValue.map((task) => (
          <Task id={task.id} title={task.title} key={task.id} isCompleted={task.isComplete} />
        ))}
      </div>

      {popUpState.state && ALL_OPERATIONS.includes(popUpState.type) ? (
        <PopUp operation={operation} />
      ) : (
        <></>
      )}
    </>
  );
}
