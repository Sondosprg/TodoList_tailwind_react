import Task from "./Task";
import PopUp from "./popUp.jsx";

import { useState } from "react";
import { useContext } from "react";

import { tasksContext } from "../contexts/tasks";
import { popUpContext } from "../contexts/popUp.js";

export default function Tasks() {
  const contextTasks = useContext(tasksContext);

  // const [isOpenMenu, setOpenMenu] = useState(false);
  // const [isOpenPopUp, setOpenPopUp] = useState(false);
  // const [operation, setOperation] = useState("");

  const popUpState = useContext(popUpContext);
  console.log(popUpState);

  const [operation, setOperation] = useState("");

  const handleTasks = (e) => {
    //  console.log(e.target.closest(".Completed"));
    if (e.target.closest(".Delete")) {
      console.log("class Delete clicked");
      setOperation("delete");
      popUpState.set((prev) => ({ ...prev, state_: true, type: "delete" }));
    }
  };

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

      {/* <div
        className={
          isOpenMenu
            ? " bg-accent absolute w-100 h-50  rounded-t-md transition shadow z-100"
            : "hidden"
        }
      >
           <div class="size-6 cursor-pointer rounded-full flex items-center justify-center m-2 bg-primary text-center">
                <span class="align-middle inline-block">x</span>

            </div>
        <ul className="flex flex-col items-center justify-center gap-2 w-full h-full">
         
          <li
            className="hover:bg-primary w-auto px-2 hover:cursor-pointer text-center transition rounded-md active:scale-95"
            onClick={() => {
              setOpenMenu(false);
              setOpenPopUp(true);
              setOperation("add");
            }}
          >
            add
          </li>
          <li
            className="hover:bg-primary w-auto px-2 hover:cursor-pointer text-center transition rounded-md active:scale-95"
            onClick={() => {
              setOpenMenu(false);
             setOpenPopUp(true);
              setOperation("edit");
            }}
          >
            edit
          </li>
          <li
            className="hover:bg-primary w-auto px-2 hover:cursor-pointer text-center transition rounded-md active:scale-95"
            onClick={() => {
              setOpenMenu(false);
              setOpenPopUp(true);
              setOperation("delete");
            }}
          >
            delete
          </li>
          
        </ul>
      </div> */}

      {popUpState.state_ ? <PopUp operation={operation} /> : <></>}

      {/* {isOpenPopUp ? (
        <div
          onClick={(e) => {
            if (e.target.classList.contains("wrapper")) {
              setOpenPopUp(false);
            }
          }}
          className="wrapper bg-gray-800/60 z-200 absolute w-full h-full inset-0 flex items-center justify-center "
        >
          <PopUp operation={operation} />
        </div>
      ) : (
        <></>
      )} */}
    </>
  );
}
