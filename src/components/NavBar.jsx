import PopUp from "./popUp";

import { useContext } from "react";

import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";

export default function NavBar() {
  const tasksContx = useContext(tasksContext);

  const popUpState = useContext(popUpContext);

  console.log("navbar", popUpState);
  // const addTask = () => {
  //   tasks.set([...tasks.value, { id: 4, title: "sondos" }]);
  // };


  const showAllTasks = ()=>{
    console.log("ALL");
    tasksContx.setState("all");
    const allTasks = [...tasksContx.value];
    tasksContx.setCurrent([...allTasks]);
  };

  const showCompletedTasks = ()=>{
    tasksContx.setState("completed");
    console.log("COMPLETED");
    const completedTasks = tasksContx.value.filter(taskC => taskC.isComplete === true);
    tasksContx.setCurrent([...completedTasks]);
  };


  const showNoCompletedTasks = ()=>{
    tasksContx.setState("no_completed");
    console.log("NO COMPLETED");
    const noCompletedTasks = tasksContx.value.filter(taskC => taskC.isComplete === false);
    tasksContx.setCurrent([...noCompletedTasks]);
  };



  return (
    <>
      <header className="flex items-center  h-10  pl-5 shadow  rounded-xl   bg-secondary mt-5 ">
        <nav>
          <ul className="flex gap-6">
            {/* add btn */}
            <li
              onClick={() => {
                // addTask();
                popUpState.set({
                  ...popUpState,
                  state: true,
                  type: "add",
                });
              }}
              className="transition  text-sm font-semibold text-gray-800  rounded-md text-center hover:opacity-90 w-auto p-1   hover:cursor-pointer hover:shadow active:scale-95 bg-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>

            <li
            onClick={showAllTasks} 
            className="transition  text-sm font-semibold text-gray-800  rounded-md text-center hover:bg-primary w-auto p-1   hover:cursor-pointer hover:shadow active:scale-95">
              all
            </li>
            <li 
             onClick={showCompletedTasks} 
            className="transition  text-sm font-semibold text-gray-800 rounded-md text-center hover:bg-primary w-auto p-1  hover:cursor-pointer hover:shadow active:scale-95">
              completed
            </li>
            <li 
             onClick={showNoCompletedTasks} 
            className="transition text-sm font-semibold text-gray-800 rounded-md text-center hover:bg-primary w-auto p-1  hover:cursor-pointer hover:shadow active:scale-95">
              no completed
            </li>
          </ul>
        </nav>
      </header>
   
      {popUpState.state && popUpState.type == "add" ? (
        <PopUp operation={"add"} />
      ) : (
        <></>
      )}
    </>
  );
}
