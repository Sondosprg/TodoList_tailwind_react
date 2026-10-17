import CardHeader from "./CardHeader.jsx";
import Tasks from "./Tasks.jsx";
import Progress from "./Progress.jsx";

export default function Card() {
  return (
    <>
      <div className="main-card z-1">
        <CardHeader />
        <Tasks />
        <Progress />
      </div>
    </>
  );
}
