import React from "react";


function Task(props) {
  const { category, text, tasks, setTasks } = props

  function handleDelete() {
   
    const newTaskList = tasks.filter((t) => t.text != text)
    setTasks(newTaskList)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
