import { useState } from "react";

export default function Task({ title }) {
  const [isCompleted, setCompleted] = useState(false);
  return (
    <>
      <div className="flex gap-4 ">
        <div className="px-2 rounded-md bg-primary">
          <input type="checkbox" 
          checked={isCompleted}
          onChange={()=>{setCompleted(!isCompleted)}}
          className="checkbox-task checked:scale-110 transition hover:cursor-pointer" />
        </div>
        <h6 className={isCompleted ?"line-through text-dark" :""}>title</h6>
      </div>
    </>
  );
}
