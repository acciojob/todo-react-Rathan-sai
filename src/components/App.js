import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [list, setLists] = useState([]);

  const addTaskToList = () => {
    console.log("hello i am inside addtoasktolist");
    const val = document.getElementById("task").value;
    if (!val) return;
    const element = {
      id: Date.now(),
      task: val,
    };
    setLists([...list, element]);
  };

  const deleteTask = (id) => {
    const updatedList = list.filter((list) => list.id !== id);
    setLists(updatedList);
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>
      <div className="todo-container">
        <input id="task" type="text" />
        <button onClick={addTaskToList}>Add Todo</button>
        <ul>
          {list.map((task) => (
            <li className="list" key={task.id}>
              {task.task}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
