import Add from "./Add.jsx";
import Edit from "./Edit.jsx";
import Delete from "./Delete.jsx";

import { useContext } from "react";

import { popUpContext } from "../contexts/popUp.js";

export default function PopUp({ operation }) {

  console.log('operation : '  ,  operation);
  const popUpState = useContext(popUpContext);
  console.log('popUpState value : ' , popUpState);

  // let content = <></>;
  // if (operation === "add") {
  //   content = <Add />;
  // } else if (operation === "edit") {
  //   content = <Edit />;
  // } else if (operation === "delete") {
  //   console.log("========================");
  //   content = <Delete />;
  // }

  // console.log(content);
  return (
    <>
      <div
        onClick={(e) => {
          if (e.target.classList.contains("wrapper")) {
            console.log("wrapper");
            popUpState.set({...popUpState , state: false})
          }
        }}
        className="wrapper bg-gray-800/60 z-200 absolute w-full h-full inset-0 flex items-center justify-center "
      >
        <form 
        onSubmit={(e)=> e.preventDefault()}
        className="z-300  bg-light rounded-md w-md h-25 text-sm  shadow flex flex-col gap-2 items-center justify-center ">
          {
            operation == "add"?
            <Add /> :
            operation == "edit"?
            <Edit />:
            operation == "delete"?
            <Delete />:
            <></>
          }
        </form>
      </div>
    </>
  );
}
