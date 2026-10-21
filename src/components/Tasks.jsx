import Task from "./Task";
import PopUp from "./popUp.jsx";

import { useState, useContext } from "react";

import { tasksContext } from "../contexts/tasks.js";
import { popUpContext } from "../contexts/popUp.js";
import { taskContext } from "../contexts/task.js";
import { progressContext } from "../contexts/progress";

import { getTask, getIndex } from "../utils/array.js";

export default function Tasks() {
  console.log("show tasks");

  const ALL_OPERATIONS = ["edit", "delete"];
  const tasksContx = useContext(tasksContext);
  const popUpState = useContext(popUpContext);
  const progressContx = useContext(progressContext);

  let taskInfo = useContext(taskContext);
  const [operation, setOperation] = useState("");

  const updateId = (id) => {
    taskInfo.current.id = id;
  };

  const updateTitle = (id) => {
    const task = getTask(tasksContx.currentValue, id);
    taskInfo.current.title = task.title;
  };
  const updateComplete = (id) => {
    const task = getTask(tasksContx.currentValue, id);
    taskInfo.current.isComplete = task.isComplete;
  };

  const toCompleted=(id) => {
        
        const targetIndex = getIndex(tasksContx.value, id); // EXCEPTION : can become -1
        const targetCurrentIndex = getIndex(tasksContx.currentValue, id); // EXCEPTION : can become -1

        const isCurrentCompleted = !taskInfo.current.isComplete;

        const updatedTasks = tasksContx.value.toSpliced(targetIndex, 1, {
          ...taskInfo.current,
          isComplete: isCurrentCompleted,
        });
        
        tasksContx.set([...updatedTasks]);

        let updatedCurrentTasks = null;

        if(tasksContx.state === "all"){
          updatedCurrentTasks = tasksContx.currentValue.toSpliced(
          targetCurrentIndex,
          1,
          { ...taskInfo.current, isComplete: isCurrentCompleted },
        );
        };


        // remove item from completed status if user click on complete btn
        //(complete task convert to pending task)
        if (tasksContx.state === "completed") {
          if (isCurrentCompleted === false) {
            updatedCurrentTasks = tasksContx.currentValue.toSpliced(
              targetCurrentIndex,
              1,
            );
            // tasksContx.setCurrent([...updatedCurrentTasks]);
          }
        }


        // remove item from pending status if user click on complete btn
        // (pending task convert to complete task)
        if (tasksContx.state === "no_completed") {
          if (isCurrentCompleted === true) {
            updatedCurrentTasks = tasksContx.currentValue.toSpliced(
              targetCurrentIndex,
              1,
            );
            // tasksContx.setCurrent([...updatedCurrentTasks]);
          }
        }

        tasksContx.setCurrent([...updatedCurrentTasks]);

        // const numberCompleted = isCurrentCompleted?progressContx.numberCompleted+1:progressContx.numberCompleted-1;
        // const percentCompleted = Number( (numberCompleted*100/progressContx.total).toFixed(2));
        // // 22.5rem <==> w-90 in tailwind (suppose as w-100 for calculate)
        // const WIDTH_100 = 22.5;
        // const width = (percentCompleted*WIDTH_100)/100;
        // // update progress
        // progressContx.set({...progressContx , numberCompleted : numberCompleted , percentCompleted:percentCompleted , width : width  });

  };

  const handleTasks = (e) => {
    if (e.target.closest(".Task")) {
      const id = +e.target.closest(".Task").dataset.id;

      if (e.target.closest(".Delete")) {
        updateId(id);
        setOperation("delete");
        popUpState.set({ ...popUpState, state: true, type: "delete" });
      };

      if (e.target.closest(".Edit")) {
        updateId(id);
        updateTitle(id);
        updateComplete(id);

        setOperation("edit");
        popUpState.set({ ...popUpState, state: true, type: "edit" });
      };

      // case specific (make as completed tasks)
      if (e.target.closest(".Completed")) {
        console.log("Completed");
        updateId(id);
        updateTitle(id);
        updateComplete(id);
        toCompleted(id);
      };

    };

  };

  console.log(
    " ==============rerender task ========= \n ",
    tasksContx.currentValue,
  );

  return (
    <>
      <div
        className="relative  px-4  overflow-y-scroll flex flex-col gap-2 h-70 scrollbar-none cursor-pointer"
        onClick={(e) => {
          handleTasks(e);
        }}
      >
        {tasksContx.currentValue.map((task) => (
          <Task
            id={task.id}
            title={task.title}
            key={task.id}
            isCompleted={task.isComplete}
          />
        ))}
      </div>

      {popUpState.state && ALL_OPERATIONS.includes(popUpState.type) ? (
        <PopUp operation={operation} />
      ) : (
        <></>
      )}
    </>
  );
}
