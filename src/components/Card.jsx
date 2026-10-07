import CardHeader from "./CradHeader";
import Task from "./Task";
import Progress from "./Progress";
import { tasks } from "../contexts/tasks";
import { useContext } from "react";

export default function Card() {
  const dataOfTasks = useContext(tasks);
  console.log(dataOfTasks);
  return (
    <>
      <div className="main-card z-1">
        <CardHeader />

        <div className=" container overflow-y-scroll flex flex-col gap-2 h-70 scrollbar-none">
          {
            dataOfTasks.map(task =>(
              <Task id={task.id} title = {task.title} key={task.id} />
            ))
          }
        </div>

        <Progress />
      </div>
    </>
  );
}
