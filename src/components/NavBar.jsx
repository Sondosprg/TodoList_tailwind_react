import PopUp from "./popUp";

import { useContext } from "react";

import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";

import { getCompletedTasks, getNoCompletedTasks } from "../utils/array.js";

export default function NavBar() {
  const tasksContx = useContext(tasksContext);
  const popUpState = useContext(popUpContext);

  const showAllTasks = () => {
    tasksContx.setState("all");
    const allTasks = [...tasksContx.value];
    tasksContx.setCurrent([...allTasks]);
  };

  const showCompletedTasks = () => {
    tasksContx.setState("completed");
    const completedTasks = getCompletedTasks(tasksContx.value);
    tasksContx.setCurrent([...completedTasks]);
  };

  const showNoCompletedTasks = () => {
    tasksContx.setState("no_completed");
    const noCompletedTasks = getNoCompletedTasks(tasksContx.value);
    tasksContx.setCurrent([...noCompletedTasks]);
  };

  return (
    <>
      <header className="header">
        <nav>
          <ul className="flex gap-6">
            {/* add btn */}
            <li
              onClick={() => {
                popUpState.set({
                  ...popUpState,
                  state: true,
                  type: "add",
                });
              }}
              className="navbar-btn-active"
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

            {/* btns */}
            <li onClick={showAllTasks} className="navBar-btn">
              all
            </li>
            <li onClick={showCompletedTasks} className="navBar-btn">
              completed
            </li>
            <li onClick={showNoCompletedTasks} className="navBar-btn">
              pending
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
