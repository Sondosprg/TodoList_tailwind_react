import { createContext } from "react";

export const popUpContext = createContext({
  state_: false,
  type: "",
  set: null,
});
