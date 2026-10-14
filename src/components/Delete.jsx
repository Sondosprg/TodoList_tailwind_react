import PopUp from "./popUp";

import { useContext } from "react";

import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";
import { idContext } from "../contexts/id.js";

export default function Delete() {
  // const dataOfTasks = useContext(tasksContext);
  // console.log('popUp delete');

  const tasks = useContext(tasksContext);
  const popUpState = useContext(popUpContext);

  const idC = useContext(idContext);

  const deleteTask = () => {
    console.log("# contextId", idC);
  };

  return (
    <>
      <div className="space-x-2 flex justify-center items-center">
        <p>are you sure delete ? </p>
        <button type="submit" className="btn-primary" onClick={deleteTask}>
          delete
        </button>
      </div>
      {/* 
      {popUpState.state_ && popUpState.type == "delete" ? (
              <PopUp operation={"delete"} />
            ) : (
              <></>
      )} */}
    </>
  );
}
