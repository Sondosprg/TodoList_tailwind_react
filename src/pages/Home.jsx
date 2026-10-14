// components
import Card from "../components/Card.jsx";
import NavBar from "../components/NavBar.jsx";

// hooks
import { useState } from "react";
import { useRef } from "react";

// contexts
import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";
import { idContext } from "../contexts/id.js";

export default function Home() {
  // context of tasks
  const DEFAULT_TASKS = [
    { id: 1, title: "task 01", isComplete: false },
    { id: 2, title: "task 02", isComplete: false },
    { id: 3, title: "task 03", isComplete: false },
  ];
  const [tasks, setTask] = useState(DEFAULT_TASKS);

  // context of popUp
  const [popUpState, setPopUpState] = useState({ state: false, type: "" });

  const idTask = useRef('');

  return (
    <>
      <tasksContext.Provider value={{ value: tasks, set: setTask }}>

        <popUpContext.Provider
          value={{
            state: popUpState.state,
            type: popUpState.type,
            set: setPopUpState,
          }}
        >

          <idContext.Provider value = {idTask}>

            <main>
              <Card />
            </main>
            <NavBar />

          </idContext.Provider>

        </popUpContext.Provider>

      </tasksContext.Provider>
    </>
  );
}
