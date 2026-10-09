import { useState } from "react";

export default function Task({  id , title }) {
  const [isCheck, setCheck] = useState(false);
  return (
    <>
      <div className="flex gap-4 hover:bg-primary/10  transition">
        <label for={`check-${id}`} className="px-2 rounded-md bg-primary">
          <input
          id={`check-${id}`}
          type="checkbox" 
          checked={isCheck}
          onChange={async ()=>{
            setCheck(!isCheck);
          }}
          className="checkbox-task checked:scale-110 transition hover:cursor-pointer" />
        </label>
        {/* <h6 className={isCompleted ?"line-through text-dark" :""}>{title}</h6> */}
        <h6>{title}</h6>
      </div>
    </>
  );

}
