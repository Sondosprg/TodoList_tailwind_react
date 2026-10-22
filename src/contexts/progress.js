import { createContext } from "react";

export let progressContext = createContext({
  total: 3,
  numberCompleted: 0,
  percentCompleted: 0,
  width: 0,
});
