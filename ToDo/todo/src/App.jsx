import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [newtask, setnewtask] = useState("");

  const [tasks, settasks] = useState([]);

  function addtask() {
    if (newtask.trim() === "") {
      alert("Please enter a task");
    } else {
      settasks([...tasks, newtask]);
      setnewtask("");
    }
  }

  function deletetask(index) {
    var duplicateArray = [...tasks];
    duplicateArray.splice(index, 1);
    settasks(duplicateArray);
    alert(tasks[index] + "   Deleted Sucessfully");
  }

  const tasklist = tasks.map((object, index) => {
    return (
      <div className="smallapp">
        <div className="row justify-content-center">
          <h2 className="col-md-6 text-left">
            {index + 1}. {object}
          </h2>
          <button
            onClick={() => {
              deletetask(index);
            }}
            className="  col-md-2  btn btn-danger m-1"
          >
            DELETE
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="app">
      <h1>React ToDo App</h1>
      <div className="row justify-content-center">
        <input
          type="text"
          placeholder="Enter your task"
          className="from-control col-md-6 m-1"
          value={newtask}
          onChange={(event) => {
            setnewtask(event.target.value);
          }}
        />

        <button onClick={addtask} className="btn btn-success col-md-2 m-1">
          ADD
        </button>
      </div>
      {tasklist}
    </div>
  );
}

export default App;
