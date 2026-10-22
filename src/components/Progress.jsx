import { useContext } from "react";

import { progressContext } from "../contexts/progress";

export default function Progress() {
  const progressContx = useContext(progressContext);
  const w = progressContx.width;

  const progressAnimation = `
        @keyframes progress{
              0%{
               width: 0;
               } 
              100%{
               width: ${w};
              }
        }
  
  `;

  return (
    <>
      <style>{progressAnimation}</style>
      <div className="py-4">
        <div className="wrapper-progress ">
          <div
            style={{
              width: `${w}rem`,
              animation: `progress  ${w / 3}s  ease-out 0.2s 1`,
            }}
            className="progress"
          ></div>
        </div>
        <div className="data-progress">
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
