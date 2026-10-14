// components
import Card from "../components/Card.jsx";
import NavBar from "../components/NavBar.jsx";

// hooks
import { useState } from "react";

// contexts
import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";

export default function Home() {
  // context of tasks
  const DEFAULT_TASKS = [
    { id: 1, title: "task 01", isComplete: false },
    { id: 2, title: "task 02", isComplete: false },
    { id: 3, title: "task 03", isComplete: false },
  ];
  const [tasks, setTask] = useState(DEFAULT_TASKS);

  // context of popUp
  const [popUpState, setPopUpState] = useState(false);

  return (
    <>
      <tasksContext.Provider value={{ value: tasks, set: setTask }}>
        <popUpContext.Provider
          value={{ state: popUpState, set: setPopUpState }}
        >
          <main>
            <Card />
          </main>
          <NavBar />
        </popUpContext.Provider>
      </tasksContext.Provider>
    </>
  );
}
