
import { useState } from "react";
import { useContext } from "react";

import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";


export default function Add() {

  const tasks = useContext(tasksContext);
  

  const popUpState = useContext(popUpContext);
  console.log(popUpState);

  const [valueInput, setValueInput] = useState("");

  const addTask = (title) => {
   
    if (title != "") {
       tasks.set([...tasks.value, { id: Date.now(), title: title , isComplete : false}]);
       // close popUp
       popUpState.set({...popUpState , state: false})
    }
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
