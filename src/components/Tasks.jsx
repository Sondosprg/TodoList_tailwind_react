import Task from "./Task";
import PopUp from "./popUp.jsx";

import { use, useState } from "react";
import { useContext } from "react";

import { tasksContext } from "../contexts/tasks";
import { popUpContext } from "../contexts/popUp.js";
import { idContext } from "../contexts/id.js";

export default function Tasks() {
  console.log("tasks");
  const ALL_OPERATIONS = ["edit", "delete"];
  const contextTasks = useContext(tasksContext);

  // const [isOpenMenu, setOpenMenu] = useState(false);
  // const [isOpenPopUp, setOpenPopUp] = useState(false);
  // const [operation, setOperation] = useState("");

  const popUpState = useContext(popUpContext);
  console.log(popUpState);

  let contextId = useContext(idContext);

  const [operation, setOperation] = useState("");

  const handleTasks = (e) => {
    //  console.log(e.target.closest(".Completed"));
    if (e.target.closest(".Delete")) {
      console.log("# contextId", contextId);
      
      console.log("ID ===>", e.target.closest(".Task").dataset.id);
      console.log("class Delete clicked");
      setOperation("delete");
      popUpState.set({ ...popUpState, state: true, type: "delete" });
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
        {contextTasks.value.map((task) => (
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
