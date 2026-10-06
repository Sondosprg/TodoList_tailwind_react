import CardHeader from "./CradHeader";
import Task from "./Task";
import Progress from "./Progress";

export default function Card() {
  return (
    <>
      <div className="main-card z-1">
        <CardHeader />

        <div className=" container overflow-y-scroll flex flex-col gap-2 h-70 scrollbar-none">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task /> <Task />
          <Task />
          <Task />
          <Task />
        </div>

        <Progress />
      </div>
    </>
  );
}
