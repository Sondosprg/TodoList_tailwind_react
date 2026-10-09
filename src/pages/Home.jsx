import Card from "../components/Card.jsx";
import NavBar from "../components/NavBar.jsx";
import { tasksContext } from "../contexts/tasks.js";
// import { useState } from "react";

export default function Home() {
  

  const DEFAULT_TASKS = [
      { id: 1, title: "task 01" },
      { id: 2, title: "task 02" },
      { id: 3, title: "task 03" },
  ];

  // const [tasks , setTask] = useState(tasksContext.data);

  return (
    <>
      <tasksContext.Provider value={DEFAULT_TASKS}>
        <main>
          <Card />
        </main>
        <NavBar />
      </tasksContext.Provider>
    </>
  );
}
