import Task from "./Task";
import { tasksContext } from "../contexts/tasks";
import { useContext } from "react";
import { useState } from "react";
import PopUp from "./popUp.jsx";


export default function Tasks() {
  const contextTasks = useContext(tasksContext);
  console.log("Card.jsx");
  console.log("contextTasks : ", contextTasks);

  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenPopUp, setOpenPopUp] = useState(false);
  const [operation, setOperation] = useState("");


  return (
    <>
      <div
        className="relative  px-4  overflow-y-scroll flex flex-col gap-2 h-70 scrollbar-none cursor-pointer"
        onClick={(e) => {
          if (e.target.classList.contains("checkbox-task")) {
            console.log("===========OPEN=============");
            setOpenMenu(!isOpenMenu);
          }
        }}
      >
        {contextTasks.value.map((task) => (
          <Task id={task.id} title={task.title} key={task.id} />
        ))}
      </div>

      <div
        className={
          isOpenMenu
            ? " bg-accent absolute w-100 h-50  rounded-t-md transition shadow z-100"
            : "hidden"
        }
      >
           <div class="size-6 cursor-pointer rounded-full flex items-center justify-center m-2 bg-primary text-center">
                <span class="align-middle inline-block">x</span>
                {/* <span class="inline-block align-middle">The quick brown fox...</span> */}

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
      </div>

      {isOpenPopUp ? (
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
      )}
    </>
  );
}
