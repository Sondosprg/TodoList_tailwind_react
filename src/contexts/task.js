import { createContext } from "react";

export let taskContext = createContext({
  id: "",
  title: "",
  isComplete: false,
});
