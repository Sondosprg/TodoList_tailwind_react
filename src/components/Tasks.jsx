import Task from "./Task";
import PopUp from "./popUp.jsx";

import {  useState , useContext } from "react";

import { tasksContext } from "../contexts/tasks";
import { popUpContext } from "../contexts/popUp.js";
import { taskContext } from "../contexts/task.js";

export default function Tasks() {
  console.log("tasks");
  const ALL_OPERATIONS = ["edit", "delete"];
  const tasks = useContext(tasksContext);

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
      const task = tasks.value.find(task => task.id === id);
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
    const id = +e.target.closest(".Task").dataset.id;

    if (e.target.closest(".Delete")) {
      updateId(id);
      setOperation("delete");
      popUpState.set({ ...popUpState, state: true, type: "delete" });
    }

    if (e.target.closest(".Edit")) {
      updateId(id);
      updateTitle(id);
      updateComplete(id);
      
      setOperation("edit");
      popUpState.set({ ...popUpState, state: true, type: "edit" });
      console.log('task info ' , taskInfo);
    }

  };

  console.log(ALL_OPERATIONS.includes(popUpState.type), popUpState);

  return (
    <>
      <div
        className="relative  px-4  overflow-y-scroll flex flex-col gap-2 h-70 scrollbar-none cursor-pointer"
        onClick={(e) => {
          handleTasks(e);
          // if (e.target.classList.contains("checkbox-task")) {
          //   console.log("===========OPEN=============");
          //   setOpenMenu(!isOpenMenu);
          // }
        }}
      >
        {tasks.value.map((task) => (
          <Task id={task.id} title={task.title} key={task.id} />
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
