
// import { useContext} from "react";
// import { tasksContext } from "../contexts/tasks.js";


// function getTasks(){
//     const tasks = useContext(tasksContext);
//     return tasks;
// }

export const getIndex =(tasks , id)=>{
     const index = tasks.findIndex(task => task.id === id);
     return index ;
};