import { useState } from "react";
import { useContext } from "react";

import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";
import { progressContext } from "../contexts/progress";

export default function Add() {
  const tasksContx = useContext(tasksContext);
  const popUpState = useContext(popUpContext);
  const progressContx = useContext(progressContext);

  console.log("progressContx", progressContx);

  const [valueInput, setValueInput] = useState("");

  const addTask = (title) => {
    if (title == "") {
      return;
    }

    let isCurrentComplete = false;
    if (tasksContx.state == "completed") {
      isCurrentComplete = true;
    }

    tasksContx.set([
      ...tasksContx.value,
      { id: Date.now(), title: title, isComplete: isCurrentComplete },
    ]);
    tasksContx.setCurrent([
      ...tasksContx.currentValue,
      { id: Date.now(), title: title, isComplete: isCurrentComplete },
    ]);
    // close popUp
    popUpState.set({ ...popUpState, state: false });

    // const percentCompleted = Number( (progressContx.numberCompleted*100/progressContx.total).toFixed(2));
    // const WIDTH_100 = 22.5;
    // const width = (progressContx.percentCompleted*WIDTH_100)/100;

    // // update progress  ( repeat calculate width )
    // progressContx.set({ ...progressContx, total: tasksContx.value.length + 1  ,percentCompleted:percentCompleted ,  width:width});
  };

  return (
    <>
      <div className="space-x-2">
        <input
          type="text"
          value={valueInput}
          onChange={(e) => {
            setValueInput(e.target.value);
          }}
          className="border-2 border-dark/20 focus:outline-none focus:ring-primary focus:ring-2 focus:border-transparent rounded-sm p-1"
        />
        <button
          value={valueInput}
          onClick={(e) => {
            const VALUE = e.target.value;
            e.preventDefault();
            addTask(VALUE);
          }}
          type="submit"
          className="btn-primary"
        >
          add
        </button>
      </div>
    </>
  );
}
