import { useContext } from "react";
import { tasksContext } from "../contexts/tasks";

export default function Delete() {
  const dataOfTasks = useContext(tasksContext);
  console.log(dataOfTasks);

  return (
    <>
      <div className="space-x-2 flex justify-center items-center">
        <p>are you sure delete ? </p>
        <button type="submit" className="btn-primary">
          delete
        </button>
      </div>
    </>
  );
}
