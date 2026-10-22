import Add from "./Add.jsx";
import Edit from "./Edit.jsx";
import Delete from "./Delete.jsx";

import { useContext } from "react";
import { popUpContext } from "../contexts/popUp.js";

export default function PopUp({ operation }) {
  const popUpState = useContext(popUpContext);

  return (
    <>
      <div
        onClick={(e) => {
          if (e.target.classList.contains("Wrapper-popup")) {
            popUpState.set({ ...popUpState, state: false });
          }
        }}
        className="Wrapper-popup wrapper-popup"
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="content-popup z-300"
        >
          {operation == "add" ? (
            <Add />
          ) : operation == "edit" ? (
            <Edit />
          ) : operation == "delete" ? (
            <Delete />
          ) : (
            <></>
          )}
        </form>
      </div>
    </>
  );
}
