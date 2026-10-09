// import { useState } from "react";
// import PopUp from "./popUp";

export default function CardHeader() {
  // const [isOpenMenu, setOpenMenu] = useState(false);
  // const [isOpenPopUp, setOpenPopUp] = useState(false);
  // const [operation, setOperation] = useState("");

  return (
    <>
      <div className="flex items-center ml-[1.01rem] w-fit pt-2 gap-2">
        {/* <button
        
          onClick={() => setOpenMenu(!isOpenMenu)}
          className="hover:cursor-pointer hover:bg-accent/90 rounded-md active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={"size-5"}
          >
            <path
              strokeLinecap="rounded"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </button> */}
        <h3 className="uppercase font-bold text-primary ">Today tasks</h3>
      </div>
      {/* <div
        className={
          isOpenMenu
            ? "size-25 bg-accent absolute  top-25 left-100 rounded-md transition shadow z-100"
            : "hidden"
        }
      >
        <ul className="flex flex-col items-center justify-center gap-2 w-full h-full">
          <li
            className="hover:bg-primary w-auto px-2 hover:cursor-pointer text-center transition rounded-md active:scale-95"
            onClick={() => {
              setOpenMenu(false);
              setOpenPopUp(true);
              setOperation("add");
            }}
          >
            add
          </li>
          <li
            className="hover:bg-primary w-auto px-2 hover:cursor-pointer text-center transition rounded-md active:scale-95"
            onClick={() => {
              setOpenMenu(false);
              setOpenPopUp(true);
              setOperation("edit");
            }}
          >
            edit
          </li>
          <li
            className="hover:bg-primary w-auto px-2 hover:cursor-pointer text-center transition rounded-md active:scale-95"
            onClick={() => {
              setOpenMenu(false);
              setOpenPopUp(true);
              setOperation("delete");
            }}
          >
            delete
          </li>
        </ul>
      </div> */}

      {/* {isOpenPopUp ? (
        <div
          onClick={(e) => {
            if (e.target.classList.contains("wrapper")) {
              setOpenPopUp(false);
            }
          }}
          className="wrapper bg-gray-800/60 z-200 absolute w-full h-full inset-0 flex items-center justify-center "
        >
          <PopUp operation={operation} />
        </div>
      ) : (
        <></>
      )} */}
    </>
  );
}
