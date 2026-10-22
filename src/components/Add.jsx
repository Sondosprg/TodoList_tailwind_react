import { useState } from "react";
import { useContext } from "react";

import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";

export default function Add() {
  const tasksContx = useContext(tasksContext);
  const popUpState = useContext(popUpContext);

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
  };

  return (
    <>
      <div className="space-x-2">
        <input
          autoFocus={popUpState.state}
          type="text"
          value={valueInput}
          onChange={(e) => {
            setValueInput(e.target.value);
          }}
          className="input-popup"
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
