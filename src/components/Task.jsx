import { useState } from "react";

export default function Task({  id , title }) {
  const [isCompleted, setCompleted] = useState(false);
  return (
    <>
      <div className="flex gap-4 ">
        <label for={`check-${id}`} className="px-2 rounded-md bg-primary">
          <input
          id={`check-${id}`}
          type="checkbox" 
          checked={isCompleted}
          onChange={()=>{setCompleted(!isCompleted)}}
          className="checkbox-task checked:scale-110 transition hover:cursor-pointer" />
        </label>
        <h6 className={isCompleted ?"line-through text-dark" :""}>{title}</h6>
      </div>
    </>
  );
}
