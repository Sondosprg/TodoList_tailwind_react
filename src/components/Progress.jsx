import { useContext, useState } from "react";

import { progressContext } from "../contexts/progress";

export default function Progress() {
  const progressContx = useContext(progressContext);
  const w = progressContx.width;

  const [animate , setAnimate] = useState(`progress  ${w/3}s  ease-out 0.2s 1`);

  return (
    <>
      <style>
            {`
            @keyframes progress{
              0%{
               width: 0;
               } 
              100%{
               width: ${w};
              }
             }
            `}
          </style>
      <div className="py-4">
        <div className="bg-black/10 w-90 mx-auto h-3 rounded-full shadow ">
          <div

            style={{
              width: `${w}rem`,
              animation: animate,
            }}
            className="bg-linear-to-r from-accent to-primary h-3 rounded-full"
          ></div>
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
