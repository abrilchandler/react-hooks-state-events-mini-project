import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [currentCategory, setCurrentCategory] = useState("All")

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  function resetTasks() {
    setTasks(TASKS)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory} setTasks={setTasks} tasks={tasks} resetTasks={resetTasks} />
      <NewTaskForm categories={categories} tasks={tasks} setTasks={setTasks} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList listOfTasks={tasks} setTasks={setTasks} tasks={tasks} currentCategory={currentCategory} />    
    </div>
  );
}

export default App;
