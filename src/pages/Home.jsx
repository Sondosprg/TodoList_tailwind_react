import Card from "../components/Card.jsx";
import NavBar from "../components/NavBar.jsx";
import { tasks } from "../contexts/tasks.js";


export default function Home() {

    const DEFAULT_TASKS = [
        {id:1 , title : "task 01"}  , 
        {id:2 , title : "task 02"} ,
        {id:3 , title : "task 03"}
    ];
  return (
    <>
      <tasks.Provider value= {DEFAULT_TASKS}>
        <main>
          <Card />
        </main>

        <NavBar />
      </tasks.Provider>
    </>
  );
}
