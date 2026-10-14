import { createContext } from "react";

export const popUpContext = createContext({
  state: false,
  type: "",
  set: null,
});
