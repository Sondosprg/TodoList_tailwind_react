import { useContext } from "react";
import { tasksContext } from "../contexts/tasks";
import { useState } from "react";


export default function Add() {
  let dataOfTasks = useContext(tasksContext);
  console.log(dataOfTasks);
  const [valueInput, setValueInput] = useState("");
  // const [dataOfTasks , setDataOfTasks] = useState(useContext(tasks));

  const addTask = (title) => {
    if (title != "") {
      
      console.log(dataOfTasks);
      console.log(dataOfTasks);
      // setDataOfTasks([...dataOfTasks , {id : Date.now() , title : title} ] ) ;
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
