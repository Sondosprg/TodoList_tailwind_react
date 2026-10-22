// components
import Card from "../components/Card.jsx";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/footer.jsx";

// hooks
import { useState } from "react";
import { useRef } from "react";

// contexts
import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";
import { taskContext } from "../contexts/task.js";
import { progressContext } from "../contexts/progress.js";

// utils
import { getCompletedTasks } from "../utils/array.js";

export default function Home() {
  // context of tasks
  const DEFAULT_TASKS = [
    { id: 1, title: "task 01", isComplete: false },
    { id: 2, title: "task 02", isComplete: false },
    { id: 3, title: "task 03", isComplete: false },
  ];

  const [tasks, setTasks] = useState(DEFAULT_TASKS);
  const [currentTasks, setCurrentTasks] = useState(DEFAULT_TASKS);
  const [state, setState] = useState("all");

  // context of popUp
  const [popUpState, setPopUpState] = useState({ state: false, type: "" });

  // context of task
  const task = useRef({ id: "", title: "", isComplete: false });

  // **  progress **
  const WIDTH_100 = 22.5;
  const NbTasks = tasks.length;
  const NbCompleted = getCompletedTasks(tasks).length;
  const PercentCompleted = Number(((NbCompleted * 100) / NbTasks).toFixed(2));
  const Width = (PercentCompleted * WIDTH_100) / 100;

  return (
    <>
      <tasksContext.Provider
        value={{
          state: state,
          value: tasks,
          currentValue: currentTasks,
          set: setTasks,
          setCurrent: setCurrentTasks,
          setState: setState,
        }}
      >
        <popUpContext.Provider
          value={{
            state: popUpState.state,
            type: popUpState.type,
            set: setPopUpState,
          }}
        >
          <taskContext.Provider value={task}>
            <progressContext.Provider
              value={{
                total: NbTasks,
                numberCompleted: NbCompleted,
                percentCompleted: PercentCompleted,
                width: Width,
              }}
            >
              <main>
                <Card />
              </main>
              <NavBar />
              <Footer/>
            </progressContext.Provider>
          </taskContext.Provider>
        </popUpContext.Provider>
      </tasksContext.Provider>
    </>
  );
}
