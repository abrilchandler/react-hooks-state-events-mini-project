import React from "react";
import App from "./App.js";
import Task from "./Task.js";
 

function TaskList(props) {
  const { setTasks, tasks } = props
  console.log(tasks)

  return (
    <div className="tasks">
      <ul>
        {tasks.map((t) => <li key={t.text}><Task setTasks={setTasks} tasks={tasks} text={t.text} category={t.category}/></li>)}
      </ul>
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
