import Title from "./Title";
import Tasks from "./Tasks";
import Progress from "./Progress";


export default function Card() {

  return (
    <>
      <div className="main-card z-1">

        <Title />

        <Tasks />

        {/* <div
          className={
            isOpenMenu
              ? " bg-accent absolute w-100 h-50  rounded-t-md transition shadow z-100"
              : "hidden"
          }
        >
          <ul className="flex flex-col items-center justify-center gap-2 w-full h-full">
            <li
              className="hover:bg-primary w-auto px-2 hover:cursor-pointer text-center transition rounded-md active:scale-95"
              onClick={() => {
                setOpenMenu(false);
                // setOpenPopUp(true);
                // setOperation("add");
              }}
            >
              add
            </li>
            <li
              className="hover:bg-primary w-auto px-2 hover:cursor-pointer text-center transition rounded-md active:scale-95"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              edit
            </li>
            <li
              className="hover:bg-primary w-auto px-2 hover:cursor-pointer text-center transition rounded-md active:scale-95"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              delete
            </li>
          </ul>
        </div> */}

        <Progress />

      </div>
    </>
  );
}
