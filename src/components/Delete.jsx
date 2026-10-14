import PopUp from "./popUp";


import { useContext } from "react";

import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";

export default function Delete() {
  const dataOfTasks = useContext(tasksContext);
  console.log('popUp delete');

  return (
    <>
      <div className="space-x-2 flex justify-center items-center">
        <p>are you sure delete ? </p>
        <button type="submit" className="btn-primary">
          delete
        </button>
      </div>
    </>
  );
}
