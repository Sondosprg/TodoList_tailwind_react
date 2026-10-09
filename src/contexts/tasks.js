import { createContext } from "react";

export let tasksContext = createContext([
  { id: 1, title: "task 01" },
  { id: 2, title: "task 02" },
  { id: 3, title: "task 03" },
]);
