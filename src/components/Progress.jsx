import { useContext } from "react";

import { progressContext } from "../contexts/progress";

export default function Progress() {
  const progressContx = useContext(progressContext);

  const progressStyle = `bg-linear-to-r from-accent to-primary w-[${String(progressContx.width)}rem] h-3 rounded-full`;

  return (
    <>
      <div className="py-4">
        <div className="bg-black/10 w-90 mx-auto h-3 rounded-full shadow ">
          <div className={progressStyle}></div>
        </div>
        <div className="flex justify-between mx-5 text-sm">
          <p>
            <span>{progressContx.numberCompleted}</span>/
            <span>{progressContx.total}</span>
          </p>
          <p>{progressContx.percentCompleted}%</p>
        </div>
      </div>
    </>
  );
}
