import Add from "./Add.jsx";
import Edit from "./Edit.jsx";
import Delete from "./Delete.jsx";

export default function PopUp({ operation }) {
  let content = <></>;
  if (operation === "add") {
    content = <Add />;
  } else if (operation === "edit") {
    content = <Edit />;
  } else if (operation === "delete") {
    content = <Delete />;
  }

  return (
    <>
      <form className="z-300  bg-light rounded-md w-md h-20 text-sm  shadow flex flex-col gap-2 items-center justify-center ">
        <div className=" w-full ml-2 -mt-4">
          {/* <button
             className="text-xl hover:text-primary hover:cursor-pointer transition">
              &times;
            </button> */}
        </div>
        {content}
      </form>
    </>
  );
}
