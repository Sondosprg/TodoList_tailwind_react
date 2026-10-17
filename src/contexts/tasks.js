import { createContext } from "react";

export const tasksContext = createContext({
  state: "all",
  value: [],
  currentValue: [],
  set: null,
  setCurrent: null,
  setState: null,
});
